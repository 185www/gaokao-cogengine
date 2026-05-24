window.Scheduler = (function() {

  function calculateNextReview(srs, result) {
    var s = Object.assign({}, srs);
    if (result === "fail") {
      s.repetitions = 0;
      s.interval = 1;
      s.ease = Math.max(1.3, s.ease - 0.2);
      s.interleavingReady = false;
    } else {
      s.repetitions += 1;
      if (s.repetitions === 1) s.interval = 1;
      else if (s.repetitions === 2) { s.interval = 3; s.interleavingReady = true; }
      else s.interval = Math.round(s.interval * s.ease);
      s.ease = Math.min(3.0, s.ease + 0.05);
    }
    s.nextReview = Date.now() + s.interval * 86400000;
    s.lastReview = Date.now();
    s.totalReviews += 1;
    if (result === "pass") s.correctCount += 1;
    return s;
  }

  function getDueCardsSorted(cards) {
    var now = Date.now();
    var due = cards.filter(function(c) { return c.srs.nextReview <= now; });
    var locked = due.filter(function(c) { return !c.srs.interleavingReady; });
    var unlocked = due.filter(function(c) { return c.srs.interleavingReady; });
    locked.sort(function(a, b) {
      var mc = a.module.localeCompare(b.module);
      return mc !== 0 ? mc : (a.srs.nextReview - b.srs.nextReview);
    });
    shuffle(unlocked);
    return locked.concat(unlocked);
  }

  function selectCue(card) {
    if (!card.cues || card.cues.length === 0) return { type: "direct", text: card.front || "" };
    return card.cues[Math.floor(Math.random() * card.cues.length)];
  }

  function matchKeywords(userAnswer, keywords, matchMode) {
    var processed = userAnswer.trim().toLowerCase().replace(/\s+/g, '');
    var matched = [];
    var missed = [];
    for (var i = 0; i < keywords.length; i++) {
      if (processed.indexOf(keywords[i].toLowerCase().replace(/\s+/g, '')) !== -1) {
        matched.push(keywords[i]);
      } else {
        missed.push(keywords[i]);
      }
    }
    var required = Math.ceil(keywords.length * 2 / 3);
    return { passed: matched.length >= required, matched: matched, missed: missed };
  }

  function matchBridgeNodes(userAnswer, bridgeNodes) {
    var processed = userAnswer.trim().toLowerCase().replace(/\s+/g, '');
    var matched = [];
    var missed = [];
    for (var i = 0; i < bridgeNodes.length; i++) {
      if (processed.indexOf(bridgeNodes[i].toLowerCase().replace(/\s+/g, '')) !== -1) {
        matched.push(bridgeNodes[i]);
      } else {
        missed.push(bridgeNodes[i]);
      }
    }
    return { passed: matched.length === bridgeNodes.length, matched: matched, missed: missed };
  }

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
    }
    return arr;
  }

  return {
    calculateNextReview: calculateNextReview,
    getDueCardsSorted: getDueCardsSorted,
    selectCue: selectCue,
    matchKeywords: matchKeywords,
    matchBridgeNodes: matchBridgeNodes,
    shuffle: shuffle
  };
})();
