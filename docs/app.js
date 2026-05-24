(function() {
  var currentTab = 'dashboard';
  var reviewQueue = [];
  var reviewIndex = 0;
  var currentCard = null;
  var countdownActive = false;
  var depth2Done = {};

  function $(id) { return document.getElementById(id); }

  function showToast(msg) {
    var t = $('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(function() { t.classList.remove('show'); }, 2000);
  }

  document.addEventListener('DOMContentLoaded', function() {
    Store.init();
    setupTabs();
    showTab('dashboard');
  });

  function setupTabs() {
    document.querySelectorAll('.tab-item').forEach(function(el) {
      el.addEventListener('click', function() {
        document.querySelectorAll('.tab-item').forEach(function(t) { t.classList.remove('active'); });
        this.classList.add('active');
        showTab(this.dataset.tab);
      });
    });
  }

  function showTab(tab) {
    currentTab = tab;
    ['dashboard', 'review', 'library'].forEach(function(t) {
      var el = $('tab-' + t);
      if (el) el.style.display = t === tab ? 'block' : 'none';
    });
    if (tab === 'dashboard') renderDashboard();
    if (tab === 'review') startReview();
    if (tab === 'library') renderLibrary();
  }

  /* ===== 仪表盘 ===== */
  function renderDashboard() {
    var allCards = Store.getCards();
    var stats = Store.getUserStats();
    var now = Date.now();
    var due = allCards.filter(function(c) { return c.srs.nextReview <= now || c.srs.repetitions === 0; });
    var mastered = allCards.filter(function(c) { return c.srs.interleavingReady; });
    var learning = allCards.filter(function(c) { return c.srs.repetitions > 0 && !c.srs.interleavingReady; });
    var newCards = allCards.filter(function(c) { return c.srs.repetitions === 0; });

    var byModule = {};
    allCards.forEach(function(c) {
      if (!byModule[c.module]) byModule[c.module] = { total: 0, due: 0, mastered: 0 };
      byModule[c.module].total++;
      if (due.indexOf(c) !== -1) byModule[c.module].due++;
      if (mastered.indexOf(c) !== -1) byModule[c.module].mastered++;
    });

    var moduleHtml = '';
    for (var mod in byModule) {
      var m = byModule[mod];
      var pct = m.total > 0 ? Math.round(m.mastered / m.total * 100) : 0;
      moduleHtml += '<div class="card" style="margin-bottom:8px">' +
        '<div style="display:flex;justify-content:space-between;align-items:center">' +
        '<div><div style="font-weight:600">' + mod + '</div>' +
        '<div style="font-size:12px;color:var(--text-secondary)">待复习' + m.due + ' | 已掌握' + m.mastered + '/' + m.total + '</div></div>' +
        '<div style="font-size:18px;font-weight:700;color:var(--primary)">' + pct + '%</div></div>' +
        '<div class="progress-bar"><div class="fill" style="width:' + pct + '%"></div></div></div>';
    }

    $('tab-dashboard').innerHTML =
      '<div class="stat-grid">' +
        '<div class="stat-card"><div class="num">' + stats.streak + '</div><div class="label">🔥 连续学习天数</div></div>' +
        '<div class="stat-card"><div class="num">' + due.length + '</div><div class="label">📖 今日待复习</div></div>' +
        '<div class="stat-card"><div class="num">' + mastered.length + '</div><div class="label">✅ 已掌握（解锁交错）</div></div>' +
        '<div class="stat-card"><div class="num">' + allCards.length + '</div><div class="label">📚 总卡片数</div></div>' +
      '</div>' +
      '<button class="btn btn-primary btn-block" onclick="document.querySelector(\'[data-tab=review]\').click()" style="margin-bottom:16px">🚀 开始今日复习 (' + due.length + '张待复习)</button>' +
      '<div class="card"><div class="card-title">📊 模块进度</div>' + moduleHtml + '</div>' +
      '<div class="card"><div class="card-title">⚙️ 设置</div>' +
        '<div class="setting-row"><div><div class="label">重置所有学习进度</div><div class="desc">清除SRS数据，保留卡片内容</div></div>' +
        '<button class="btn btn-sm btn-danger" onclick="confirmReset()">重置</button></div>' +
        '<div class="setting-row"><div><div class="label">导出数据</div><div class="desc">下载为JSON文件</div></div>' +
        '<button class="btn btn-sm btn-outline" onclick="doExport()">导出</button></div>' +
        '<div class="setting-row"><div><div class="label">导入数据</div><div class="desc">从JSON文件恢复</div></div>' +
        '<button class="btn btn-sm btn-outline" onclick="doImport()">导入</button></div>' +
      '</div>';

    window.confirmReset = function() {
      if (confirm('确定重置所有学习进度？此操作不可撤销！')) {
        Store.resetSRS();
        showToast('✅ 已重置所有进度');
        renderDashboard();
      }
    };
    window.doExport = function() {
      var data = Store.exportData();
      var blob = new Blob([data], {type: 'application/json'});
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'gaokao-cogengine-backup.json';
      a.click();
      showToast('✅ 导出成功');
    };
    window.doImport = function() {
      var input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json';
      input.onchange = function(e) {
        var file = e.target.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function(ev) {
          if (Store.importData(ev.target.result)) {
            showToast('✅ 导入成功');
            renderDashboard();
          } else {
            showToast('❌ 导入失败，文件格式错误');
          }
        };
        reader.readAsText(file);
      };
      input.click();
    };
  }

  /* ===== 复习 ===== */
  function startReview() {
    if (countdownActive) return;
    var allDue = Store.getDueCards();
    reviewQueue = Scheduler.getDueCardsSorted(allDue);
    reviewIndex = 0;
    depth2Done = {};

    if (reviewQueue.length === 0) {
      $('tab-review').innerHTML =
        '<div class="empty-state"><div class="icon">🎉</div><div class="text">所有卡片已完成复习！</div>' +
        '<div class="sub" style="font-size:13px;margin-top:6px">今天没有待复习内容，可以添加新卡片或复习其他模块</div></div>';
      return;
    }

    renderReviewCard();
  }

  function renderReviewCard() {
    if (reviewIndex >= reviewQueue.length) {
      $('tab-review').innerHTML =
        '<div class="empty-state"><div class="icon">🎉</div><div class="text">本轮复习完成！</div>' +
        '<div class="sub" style="font-size:13px;margin-top:6px">复习了 ' + reviewQueue.length + ' 张卡片</div>' +
        '<button class="btn btn-primary" onclick="' + "document.querySelector('[data-tab=dashboard]').click()" + '" style="margin-top:16px">返回仪表盘</button></div>';
      return;
    }

    currentCard = reviewQueue[reviewIndex];
    var card = currentCard;
    var cue = Scheduler.selectCue(card);
    if (cue.type === 'direct') cue.type = '直接';
    else if (cue.type === 'contextual') cue.type = '情境';
    else if (cue.type === 'reverse') cue.type = '逆向';
    else if (cue.type === 'compare') cue.type = '对比';

    var depthLabel = '锚定（深度1）';
    var depthBadge = 'badge-depth1';
    if (card.depth === 2) { depthLabel = '链接（深度2）'; depthBadge = 'badge-depth2'; }
    if (card.depth === 3) { depthLabel = '演练（深度3）'; depthBadge = 'badge-depth3'; }

    var html = '<div class="card">' +
      '<div class="review-header">' +
        '<span class="badge ' + depthBadge + '">' + depthLabel + '</span>' +
        '<span style="font-size:13px;color:var(--text-secondary)">' + (reviewIndex + 1) + '/' + reviewQueue.length + '</span>' +
      '</div>' +
      '<div class="review-header" style="margin-top:4px">' +
        '<span class="badge badge-cue-type">🏷️ ' + cue.type + '</span>' +
        '<span style="font-size:12px;color:var(--text-secondary)">' + card.module + '</span>' +
      '</div>' +
      '<div class="review-cue">' + cue.text + '</div>';

    if (card.depth === 3) {
      html += renderDepth3Content(card);
    } else if (card.depth === 2) {
      html += renderDepth2Content(card);
    } else {
      html += renderDepth1Content(card);
    }

    html += '</div>';
    $('tab-review').innerHTML = html;

    var input = document.getElementById('reviewInput');
    if (input) input.focus();
  }

  function renderDepth1Content(card) {
    return '<div class="review-input-area">' +
      '<textarea class="form-input review-input" id="reviewInput" rows="4" placeholder="写出你的答案..." style="min-height:80px"></textarea>' +
      '</div>' +
      '<button class="btn btn-primary btn-block" id="submitBtn" onclick="submitAnswer()">提交答案</button>' +
      '<div id="reviewFeedback"></div>';
  }

  function renderDepth2Content(card) {
    var chainHtml = '<div style="text-align:center;padding:12px;background:#1a1a2e;border-radius:8px;margin-bottom:12px;font-size:15px">';
    chainHtml += '<span style="color:var(--primary)">' + (card.sourceNode || '起点') + '</span>';
    chainHtml += ' <span style="color:var(--text-secondary)">──→</span> ';
    chainHtml += '<span style="color:var(--warning);font-weight:700">[ ? ]</span>';
    chainHtml += ' <span style="color:var(--text-secondary)">──→</span> ';
    chainHtml += '<span style="color:var(--success)">' + (card.targetNode || '终点') + '</span>';
    chainHtml += '</div>';

    return chainHtml +
      '<div style="font-size:13px;color:var(--text-secondary);margin-bottom:8px">填入桥梁节点（多个节点用逗号分隔）</div>' +
      '<div class="review-input-area">' +
      '<textarea class="form-input review-input" id="reviewInput" rows="3" placeholder="填入桥梁节点..." style="min-height:60px"></textarea>' +
      '</div>' +
      '<button class="btn btn-primary btn-block" id="submitBtn" onclick="submitDepth2()">提交</button>' +
      '<div id="reviewFeedback"></div>';
  }

  function renderDepth3Content(card) {
    var html = '<div id="stepArea">';
    if (card.keySteps && card.keySteps.length > 0) {
      html += renderStepQuestion(card.keySteps[0], 0);
    }
    html += '</div><div id="reviewFeedback"></div>';
    return html;
  }

  function renderStepQuestion(step, index) {
    var html = '<div class="step-question">' +
      '<div class="step-label">🔑 关键步骤 ' + (index + 1) + '</div>' +
      '<div class="step-text">' + step.step + '</div>' +
      '<div class="step-options">';
    for (var i = 0; i < step.options.length; i++) {
      html += '<div class="step-opt" data-optindex="' + i + '" onclick="selectStepOption(this, ' + index + ', ' + step.correctIndex + ')">' +
        String.fromCharCode(65 + i) + '. ' + step.options[i] + '</div>';
    }
    html += '</div></div>';
    return html;
  }

  window.selectStepOption = function(el, stepIndex, correctIndex) {
    if (countdownActive) return;
    var parent = el.closest('.step-question');
    if (!parent) return;
    parent.querySelectorAll('.step-opt').forEach(function(o) {
      o.classList.remove('selected');
    });
    el.classList.add('selected');

    var card = currentCard;
    if (!card) return;

    var optIndex = parseInt(el.dataset.optindex);
    if (optIndex === correctIndex) {
      el.classList.add('correct');
      showStepResult(card, true);
    } else {
      el.classList.remove('selected');
      el.classList.add('wrong');
      showStepResult(card, false);
    }
  };

  function showStepResult(card, passed) {
    var feedback = $('reviewFeedback');
    if (!feedback) return;

    if (passed) {
      var allStepsHtml = '';
      if (card.keySteps) {
        allStepsHtml = '<div style="margin-top:12px"><div style="font-weight:600;margin-bottom:6px;font-size:14px">📋 完整解题步骤</div>';
        card.keySteps.forEach(function(s, i) {
          allStepsHtml += '<div style="font-size:13px;padding:4px 0"><strong>步骤' + (i+1) + '：</strong>' + s.options[s.correctIndex] + '</div>';
        });
        allStepsHtml += '</div>';
      }

      var mistakesHtml = '';
      if (card.commonMistakes && card.commonMistakes.length > 0) {
        mistakesHtml = '<div style="margin-top:12px"><div style="font-weight:600;margin-bottom:6px;font-size:13px;color:var(--warning)">⚠️ 常见错误警示</div>';
        card.commonMistakes.forEach(function(m) {
          mistakesHtml += '<div class="mistake-item"><div class="mistake-label">❌ ' + m.mistake + '</div><div class="mistake-desc">' + m.explanation + '</div></div>';
        });
        mistakesHtml += '</div>';
      }

      var answerHtml = '<div style="margin-top:12px;padding:12px;background:#1a1a2e;border-radius:8px">' +
        '<div style="font-weight:600;margin-bottom:4px;font-size:13px">📖 参考答案</div>' +
        '<div style="font-size:14px;line-height:1.7;white-space:pre-wrap">' + card.back + '</div></div>';

      feedback.innerHTML =
        '<div class="review-feedback pass">' +
          '<div style="font-size:16px;font-weight:600;color:var(--success)">✅ 第一步正确！</div>' +
          allStepsHtml + mistakesHtml + answerHtml +
          '<div style="display:flex;gap:10px;margin-top:16px">' +
            '<button class="btn btn-success btn-sm" onclick="rateReview(\'pass\')" style="flex:1">✅ 做对了</button>' +
            '<button class="btn btn-outline btn-sm" onclick="rateReview(\'fail\')" style="flex:1">❌ 做错了</button>' +
          '</div></div>';
    } else {
      feedback.innerHTML =
        '<div class="review-feedback fail">' +
          '<div style="font-size:16px;font-weight:600;color:var(--danger)">❌ 第一步就错了！</div>' +
          '<div style="margin-top:8px;font-size:14px">正确选择是：' + card.keySteps[0].options[card.keySteps[0].correctIndex] + '</div>' +
          '<div class="mistake-item" style="margin-top:8px"><div class="mistake-desc">各选项辨析：只有选项' + String.fromCharCode(65 + card.keySteps[0].correctIndex) + '正确</div></div>' +
          '<button class="btn btn-danger btn-block" onclick="rateReview(\'fail\')" style="margin-top:16px">🔄 重新复习此卡片</button></div>';
    }
  }

  window.submitAnswer = function() {
    if (countdownActive) return;
    var input = document.getElementById('reviewInput');
    if (!input) return;
    var answer = input.value.trim();
    if (!answer) { showToast('请先输入答案'); return; }

    var card = currentCard;
    if (!card) return;
    var result = Scheduler.matchKeywords(answer, card.keywords, card.matchMode || 'contains');

    var feedback = $('reviewFeedback');
    if (!feedback) return;

    var kwHtml = '<div class="keyword-row">';
    result.matched.forEach(function(k) { kwHtml += '<span class="kw matched">✅ ' + k + '</span>'; });
    result.missed.forEach(function(k) { kwHtml += '<span class="kw missed">❌ ' + k + '</span>'; });
    kwHtml += '</div>';

    var mistakesHtml = '';
    if (!result.passed && card.commonMistakes && card.commonMistakes.length > 0) {
      mistakesHtml = '<div style="margin-top:12px"><div style="font-weight:600;margin-bottom:6px;font-size:13px;color:var(--warning)">⚠️ 常见错误警示</div>';
      card.commonMistakes.forEach(function(m) {
        mistakesHtml += '<div class="mistake-item"><div class="mistake-label">❌ ' + m.mistake + '</div><div class="mistake-desc">' + m.explanation + '</div></div>';
      });
      mistakesHtml += '</div>';
    }

    if (result.passed) {
      feedback.innerHTML =
        '<div class="review-feedback pass">' +
          '<div style="font-size:16px;font-weight:600;color:var(--success)">✅ 验证通过</div>' +
          '<div style="margin-top:8px;font-size:14px;line-height:1.7;white-space:pre-wrap">' + card.back + '</div>' +
          kwHtml +
          '<button class="btn btn-primary btn-block" onclick="rateReview(\'pass\')" style="margin-top:12px">➡️ 下一张</button></div>';
    } else {
      feedback.innerHTML =
        '<div class="review-feedback fail">' +
          '<div style="font-size:16px;font-weight:600;color:var(--danger)">❌ 验证未通过</div>' +
          '<div style="margin-top:8px;font-size:14px;line-height:1.7;white-space:pre-wrap"><strong>正确答案：</strong>' + card.back + '</div>' +
          kwHtml + mistakesHtml +
          '<div id="countdownArea"></div></div>';
      startFailCountdown(card);
    }
  };

  window.submitDepth2 = function() {
    if (countdownActive) return;
    var input = document.getElementById('reviewInput');
    if (!input) return;
    var answer = input.value.trim();
    if (!answer) { showToast('请先输入答案'); return; }

    var card = currentCard;
    if (!card || !card.bridgeNodes) return;

    var result = Scheduler.matchBridgeNodes(answer, card.bridgeNodes);
    var feedback = $('reviewFeedback');
    if (!feedback) return;

    var kwHtml = '<div class="keyword-row">';
    result.matched.forEach(function(k) { kwHtml += '<span class="kw matched">✅ ' + k + '</span>'; });
    result.missed.forEach(function(k) { kwHtml += '<span class="kw missed">❌ ' + k + '</span>'; });
    kwHtml += '</div>';

    if (result.passed) {
      feedback.innerHTML =
        '<div class="review-feedback pass">' +
          '<div style="font-size:16px;font-weight:600;color:var(--success)">✅ 桥梁节点匹配成功！</div>' +
          '<div style="margin-top:8px;font-size:14px;line-height:1.7;white-space:pre-wrap">' + card.back + '</div>' +
          kwHtml +
          '<button class="btn btn-primary btn-block" onclick="rateReview(\'pass\')" style="margin-top:12px">➡️ 下一张</button></div>';
    } else {
      var mistakesHtml = '';
      if (card.commonMistakes && card.commonMistakes.length > 0) {
        mistakesHtml = '<div style="margin-top:12px"><div style="font-weight:600;margin-bottom:6px;font-size:13px;color:var(--warning)">⚠️ 常见错误警示</div>';
        card.commonMistakes.forEach(function(m) {
          mistakesHtml += '<div class="mistake-item"><div class="mistake-label">❌ ' + m.mistake + '</div><div class="mistake-desc">' + m.explanation + '</div></div>';
        });
        mistakesHtml += '</div>';
      }
      feedback.innerHTML =
        '<div class="review-feedback fail">' +
          '<div style="font-size:16px;font-weight:600;color:var(--danger)">❌ 桥梁节点未完全匹配</div>' +
          '<div style="margin-top:8px;font-size:14px;line-height:1.7;white-space:pre-wrap"><strong>正确答案：</strong>' + card.back + '</div>' +
          kwHtml + mistakesHtml +
          '<div id="countdownArea"></div></div>';
      startFailCountdown(card);
    }
  };

  function startFailCountdown(card) {
    countdownActive = true;
    var area = $('countdownArea');
    if (!area) return;
    var remaining = 5;
    area.innerHTML = '<div class="countdown-overlay"><div style="font-size:14px;margin-bottom:8px">⏳ 请仔细查看正确答案和错误原因</div><div class="countdown-num">' + remaining + '</div><div style="font-size:13px;margin-top:4px">秒后可继续</div></div>';

    var interval = setInterval(function() {
      remaining--;
      var numEl = area.querySelector('.countdown-num');
      if (numEl) numEl.textContent = Math.max(0, remaining);
      if (remaining <= 0) {
        clearInterval(interval);
        area.innerHTML =
          '<div style="display:flex;gap:10px;margin-top:12px">' +
            '<button class="btn btn-success btn-sm" onclick="rateReview(\'pass\')" style="flex:1">✅ 我记住了</button>' +
            '<button class="btn btn-danger btn-sm" onclick="rateReview(\'fail\')" style="flex:1">❌ 没记住，1小时后再来</button>' +
          '</div>';
        countdownActive = false;
      }
    }, 1000);
  }

  window.rateReview = function(result) {
    if (countdownActive) return;
    var card = currentCard;
    if (!card) return;

    card.srs = Scheduler.calculateNextReview(card.srs, result);
    Store.saveCard(card);

    if (result === 'pass') {
      Store.saveReviewLog({ cardId: card.id, result: 'pass', timestamp: Date.now() });
    } else {
      Store.saveReviewLog({ cardId: card.id, result: 'fail', timestamp: Date.now() });
      if (card.depth !== 3) {
        card.srs.nextReview = Date.now() + 3600000;
        Store.saveCard(card);
      }
    }

    reviewIndex++;
    renderReviewCard();
  };

  /* ===== 知识库 ===== */
  function renderLibrary() {
    var allCards = Store.getCards();
    var modules = {};
    allCards.forEach(function(c) {
      if (!modules[c.module]) modules[c.module] = [];
      modules[c.module].push(c);
    });

    var moduleNames = Object.keys(modules);
    var html = '<div class="library-controls">' +
      '<select class="form-input" id="libSearchMode" style="flex:0.5;min-width:80px" onchange="renderLibrary()">' +
        '<option value="all">全部</option>' +
        '<option value="d1">深度1</option>' +
        '<option value="d2">深度2</option>' +
        '<option value="d3">深度3</option>' +
      '</select>' +
      '<input type="text" class="form-input" id="libSearchInput" placeholder="🔍 搜索卡片..." oninput="renderLibrary()">' +
    '</div>' +
    '<button class="btn btn-outline btn-sm" onclick="showAddCardForm()" style="margin-bottom:16px">➕ 添加新卡片</button>';

    var mode = document.getElementById('libSearchMode');
    var filterDepth = mode ? mode.value : 'all';
    var q = document.getElementById('libSearchInput');
    var query = q ? q.value.toLowerCase().trim() : '';

    moduleNames.sort().forEach(function(mod) {
      var cards = modules[mod];
      if (filterDepth !== 'all') {
        cards = cards.filter(function(c) { return c.depth === parseInt(filterDepth.charAt(1)); });
      }
      if (query) {
        cards = cards.filter(function(c) {
          return (c.back && c.back.toLowerCase().indexOf(query) !== -1) ||
                 (c.cues && c.cues.some(function(cue) { return cue.text.toLowerCase().indexOf(query) !== -1; })) ||
                 (c.id && c.id.toLowerCase().indexOf(query) !== -1);
        });
      }
      if (cards.length === 0) return;

      html += '<div class="library-module">' +
        '<div class="library-module-header" onclick="toggleModule(this)">' +
          '<span class="module-name">' + mod + '</span>' +
          '<span class="module-count">' + cards.length + '张</span>' +
        '</div>' +
        '<div class="library-cards" style="display:none">';

      cards.sort(function(a, b) { return a.depth - b.depth; }).forEach(function(c) {
        var cueText = c.cues && c.cues.length > 0 ? c.cues[0].text : c.id;
        var tagsHtml = '';
        if (c.tags && c.tags.length > 0) {
          tagsHtml = '<div class="ltags">' + c.tags.map(function(t) { return '<span class="ltag">' + t + '</span>'; }).join('') + '</div>';
        }
        var repInfo = '复习' + c.srs.totalReviews + '次 | ';
        repInfo += c.srs.interleavingReady ? '✅已解锁' : '🔒锁定';
        html += '<div class="library-card" onclick="showCardDetail(\'' + c.id + '\')">' +
          '<div class="lcue">深度' + c.depth + ' · ' + cueText.slice(0, 60) + (cueText.length > 60 ? '...' : '') + '</div>' +
          '<div class="lback">' + c.back.slice(0, 80) + (c.back.length > 80 ? '...' : '') + '</div>' +
          tagsHtml +
          '<div style="font-size:11px;color:var(--text-secondary);margin-top:4px">' + repInfo + '</div>' +
        '</div>';
      });

      html += '</div></div>';
    });

    if (moduleNames.length === 0) {
      html += '<div class="empty-state"><div class="icon">📚</div><div class="text">知识库为空</div></div>';
    }

    $('tab-library').innerHTML = html;
  }

  window.toggleModule = function(el) {
    var next = el.nextElementSibling;
    if (next) next.style.display = next.style.display === 'none' ? 'block' : 'none';
  };

  window.showCardDetail = function(id) {
    var card = Store.getCard(id);
    if (!card) return;

    var html = '<h3>📄 ' + (card.cues && card.cues.length > 0 ? card.cues[0].text.slice(0, 40) : card.id) + '</h3>' +
      '<div style="margin-bottom:12px">' +
        '<span class="badge badge-depth' + card.depth + '">深度' + card.depth + '</span> ' +
        '<span style="font-size:13px;color:var(--text-secondary)">' + card.module + '</span>' +
      '</div>' +
      '<div style="font-size:14px;line-height:1.7;white-space:pre-wrap;margin-bottom:12px;padding:12px;background:#1a1a2e;border-radius:8px">' +
        '<strong>答案：</strong>' + card.back +
      '</div>';

    if (card.cues && card.cues.length > 0) {
      html += '<div style="margin-bottom:12px"><strong>线索变体：</strong>';
      card.cues.forEach(function(cue, i) {
        html += '<div style="font-size:13px;padding:4px 0">' + (i+1) + '. [' + cue.type + '] ' + cue.text + '</div>';
      });
      html += '</div>';
    }

    if (card.commonMistakes && card.commonMistakes.length > 0) {
      html += '<div style="margin-bottom:12px"><strong>常见错误：</strong>';
      card.commonMistakes.forEach(function(m) {
        html += '<div class="mistake-item"><div class="mistake-label">❌ ' + m.mistake + '</div><div class="mistake-desc">' + m.explanation + '</div></div>';
      });
      html += '</div>';
    }

    html += '<div style="margin-bottom:12px;font-size:13px;color:var(--text-secondary)">' +
      '复习次数：' + card.srs.totalReviews + ' | 正确次数：' + card.srs.correctCount +
      ' | 间隔：' + card.srs.interval + '天 | 难度因子：' + card.srs.ease.toFixed(2) +
      (card.tags && card.tags.length > 0 ? ' | 标签：' + card.tags.join(', ') : '') +
    '</div>';

    html += '<div class="modal-actions" style="display:flex;gap:10px;margin-top:16px">' +
      '<button class="btn btn-sm btn-outline" onclick="closeModal()">关闭</button>' +
      '<button class="btn btn-sm btn-danger" onclick="deleteCardConfirm(\'' + card.id + '\')">🗑️ 删除</button>' +
    '</div>';

    var modal = $('modal');
    var modalBody = $('modalBody');
    if (modal && modalBody) {
      modalBody.innerHTML = html;
      modal.style.display = 'flex';
    }
  };

  window.closeModal = function() {
    var modal = $('modal');
    if (modal) modal.style.display = 'none';
  };

  window.deleteCardConfirm = function(id) {
    if (confirm('确定删除此卡片？')) {
      Store.deleteCard(id);
      closeModal();
      renderLibrary();
      showToast('✅ 卡片已删除');
    }
  };

  window.showAddCardForm = function() {
    var html = '<h3>➕ 添加新卡片</h3>' +
      '<div class="form-group"><label>所属模块</label>' +
        '<select class="form-input" id="addModule">' +
          '<option value="氧化还原与离子反应">氧化还原与离子反应</option>' +
          '<option value="化学反应原理">化学反应原理</option>' +
          '<option value="无机元素化合物">无机元素化合物</option>' +
          '<option value="有机化学">有机化学</option>' +
          '<option value="化学实验">化学实验</option>' +
          '<option value="物质结构与周期律">物质结构与周期律</option>' +
        '</select></div>' +
      '<div class="form-group"><label>深度</label>' +
        '<select class="form-input" id="addDepth"><option value="1">深度1（锚定）</option><option value="2">深度2（链接）</option><option value="3">深度3（演练）</option></select></div>' +
      '<div class="form-group"><label>答案</label><textarea class="form-textarea" id="addBack" rows="3"></textarea></div>' +
      '<div class="form-group"><label>线索变体（每行一条，格式：类型|内容，类型可选direct/contextual/reverse/compare）</label>' +
        '<textarea class="form-textarea" id="addCues" rows="3">direct|\ncontextual|</textarea></div>' +
      '<div class="form-group"><label>关键词（逗号分隔）</label><input type="text" class="form-input" id="addKeywords"></div>' +
      '<div class="form-group"><label>常见错误（每行一条，格式：错误描述|解释）</label><textarea class="form-textarea" id="addMistakes" rows="2"></textarea></div>' +
      '<div class="form-group"><label>标签（逗号分隔）</label><input type="text" class="form-input" id="addTags"></div>' +
      '<button class="btn btn-primary btn-block" onclick="saveNewCard()">✅ 保存</button>' +
      '<button class="btn btn-outline btn-block" onclick="closeModal()" style="margin-top:8px">取消</button>';

    var modal = $('modal');
    var modalBody = $('modalBody');
    if (modal && modalBody) {
      modalBody.innerHTML = html;
      modal.style.display = 'flex';
    }
  };

  window.saveNewCard = function() {
    var module = document.getElementById('addModule');
    var depth = document.getElementById('addDepth');
    var back = document.getElementById('addBack');
    var cuesText = document.getElementById('addCues');
    var keywordsText = document.getElementById('addKeywords');
    var mistakesText = document.getElementById('addMistakes');
    var tagsText = document.getElementById('addTags');

    if (!back || !back.value.trim()) { showToast('请输入答案'); return; }

    var allCards = Store.getCards();
    var newId = 'chem-custom-' + Date.now();

    var cues = [];
    if (cuesText && cuesText.value.trim()) {
      cuesText.value.trim().split('\n').forEach(function(line) {
        line = line.trim();
        if (!line) return;
        var parts = line.split('|');
        cues.push({ type: parts[0].trim() || 'direct', text: parts[1] ? parts[1].trim() : '' });
      });
    }

    var keywords = keywordsText && keywordsText.value.trim() ? keywordsText.value.trim().split(/[,，]/).map(function(s) { return s.trim(); }).filter(Boolean) : [];

    var commonMistakes = [];
    if (mistakesText && mistakesText.value.trim()) {
      mistakesText.value.trim().split('\n').forEach(function(line) {
        line = line.trim();
        if (!line) return;
        var parts = line.split('|');
        commonMistakes.push({ mistake: parts[0].trim(), explanation: parts[1] ? parts[1].trim() : '' });
      });
    }

    var tags = tagsText && tagsText.value.trim() ? tagsText.value.trim().split(/[,，]/).map(function(s) { return s.trim(); }).filter(Boolean) : [];

    var card = {
      id: newId,
      subject: 'chemistry',
      depth: parseInt(depth.value),
      module: module.value,
      cues: cues,
      back: back.value.trim(),
      keywords: keywords,
      matchMode: 'contains',
      commonMistakes: commonMistakes,
      tags: tags,
      srs: { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false }
    };

    if (parseInt(depth.value) >= 2) {
      card.sourceNode = null;
      card.targetNode = null;
      card.bridgeNodes = null;
      card.relationType = null;
    }
    if (parseInt(depth.value) >= 3) {
      card.question = null;
      card.solution = null;
      card.schema = null;
      card.keySteps = null;
    }

    Store.saveCard(card);
    closeModal();
    showToast('✅ 卡片已添加');
    if (currentTab === 'library') renderLibrary();
  };

  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  });

})();
