window.Store = (function() {
  var STORAGE_KEY = 'gaokao_cogengine_cards';
  var STATS_KEY = 'gaokao_cogengine_stats';
  var REVIEW_LOG_KEY = 'gaokao_cogengine_review_log';

  function init() {
    var data = loadData();
    if (!data || data.length === 0) {
      saveData(CHEMISTRY_DATA || []);
    }
    var stats = loadStats();
    if (!stats) {
      saveStats({ totalReviews: 0, streak: 0, lastReviewDate: null, totalCorrect: 0 });
    }
  }

  function loadData() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch(e) { return null; }
  }

  function saveData(cards) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
    } catch(e) {}
  }

  function loadStats() {
    try {
      var raw = localStorage.getItem(STATS_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch(e) { return null; }
  }

  function saveStats(stats) {
    try {
      localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    } catch(e) {}
  }

  function getCards(filters) {
    var cards = loadData() || [];
    if (!filters) return cards;
    if (filters.module) cards = cards.filter(function(c) { return c.module === filters.module; });
    if (filters.depth) cards = cards.filter(function(c) { return c.depth === filters.depth; });
    if (filters.search) {
      var q = filters.search.toLowerCase();
      cards = cards.filter(function(c) {
        return (c.back && c.back.toLowerCase().indexOf(q) !== -1) ||
               (c.cues && c.cues.some(function(cue) { return cue.text.toLowerCase().indexOf(q) !== -1; })) ||
               (c.tags && c.tags.some(function(t) { return t.toLowerCase().indexOf(q) !== -1; }));
      });
    }
    return cards;
  }

  function getCard(id) {
    var cards = loadData() || [];
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].id === id) return cards[i];
    }
    return null;
  }

  function saveCard(card) {
    var cards = loadData() || [];
    for (var i = 0; i < cards.length; i++) {
      if (cards[i].id === card.id) {
        cards[i] = card;
        saveData(cards);
        return true;
      }
    }
    cards.push(card);
    saveData(cards);
    return true;
  }

  function deleteCard(id) {
    var cards = loadData() || [];
    var filtered = cards.filter(function(c) { return c.id !== id; });
    if (filtered.length === cards.length) return false;
    saveData(filtered);
    return true;
  }

  function getDueCards() {
    var cards = loadData() || [];
    var now = Date.now();
    var due = cards.filter(function(c) { return c.srs.nextReview <= now; });
    var newCards = cards.filter(function(c) { return c.srs.repetitions === 0; });
    return due.concat(newCards);
  }

  function saveReviewLog(entry) {
    var logs = [];
    try {
      var raw = localStorage.getItem(REVIEW_LOG_KEY);
      if (raw) logs = JSON.parse(raw);
    } catch(e) {}
    logs.push(entry);
    try {
      localStorage.setItem(REVIEW_LOG_KEY, JSON.stringify(logs));
    } catch(e) {}
    var stats = loadStats() || { totalReviews: 0, streak: 0, lastReviewDate: null, totalCorrect: 0 };
    stats.totalReviews += 1;
    if (entry.result === 'pass') stats.totalCorrect += 1;
    var today = new Date().toDateString();
    if (stats.lastReviewDate !== today) {
      stats.streak += 1;
      stats.lastReviewDate = today;
    }
    saveStats(stats);
  }

  function getUserStats() {
    return loadStats() || { totalReviews: 0, streak: 0, lastReviewDate: null, totalCorrect: 0 };
  }

  function updateUserStats(updates) {
    var stats = loadStats() || {};
    for (var key in updates) {
      if (updates.hasOwnProperty(key)) stats[key] = updates[key];
    }
    saveStats(stats);
  }

  function exportData() {
    return localStorage.getItem(STORAGE_KEY) || '[]';
  }

  function importData(json) {
    try {
      var data = JSON.parse(json);
      if (!Array.isArray(data)) return false;
      saveData(data);
      return true;
    } catch(e) { return false; }
  }

  function resetSRS() {
    var cards = loadData() || [];
    for (var i = 0; i < cards.length; i++) {
      cards[i].srs = { ease: 2.5, interval: 0, repetitions: 0, nextReview: 0, lastReview: null, totalReviews: 0, correctCount: 0, interleavingReady: false };
    }
    saveData(cards);
    saveStats({ totalReviews: 0, streak: 0, lastReviewDate: null, totalCorrect: 0 });
  }

  return {
    init: init,
    getCards: getCards,
    getCard: getCard,
    saveCard: saveCard,
    deleteCard: deleteCard,
    getDueCards: getDueCards,
    saveReviewLog: saveReviewLog,
    getUserStats: getUserStats,
    updateUserStats: updateUserStats,
    exportData: exportData,
    importData: importData,
    resetSRS: resetSRS
  };
})();
