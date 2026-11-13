/* =====================================================================
   MOTOR DEL CURSO E-LEARNING
   ---------------------------------------------------------------------
   Lee window.COURSE (js/content.js) y construye la aplicación:
   rutas por hash, navegación, progreso, cuestionarios, actividades,
   escenarios, caso integrador, calificación y almacenamiento local.
   JavaScript puro, sin dependencias.
   ===================================================================== */
(function () {
  'use strict';

  var C = window.COURSE;
  var STORAGE_KEY = 'curso-experiencias-seleccion-v1';
  var STATE_VERSION = 1;

  /* ------------------------------------------------------------------
     Utilidades
     ------------------------------------------------------------------ */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  /* Texto con **negrita** -> <strong> (el resto se escapa). */
  function md(s) {
    return esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }
  function pct(n) { return Math.round(n) + ' %'; }
  function avg(arr) {
    if (!arr.length) return 0;
    return arr.reduce(function (a, b) { return a + b; }, 0) / arr.length;
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function sameArray(a, b) {
    if (!a || !b || a.length !== b.length) return false;
    for (var i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
    return true;
  }
  function formatDate(ts) {
    if (!ts) return '';
    var d = new Date(ts);
    return d.toLocaleDateString('es-GT', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  function formatDateTime(ts) {
    if (!ts) return '';
    var d = new Date(ts);
    return d.toLocaleString('es-GT', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  }

  var ICONS = {
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7"/></svg>',
    lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
    lesson: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H4z"/><path d="M20 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8z"/></svg>',
    activity: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-2.8L7 19l1-6-4-4 5.5-.5z"/></svg>',
    case: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/></svg>',
    quiz: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 11l2 2 4-4"/><rect x="4" y="4" width="16" height="16" rx="2"/></svg>',
    integrator: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M3 12h18"/><circle cx="12" cy="12" r="8"/></svg>',
    survey: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h16M7 16V9M12 16V5M17 16v-4"/></svg>',
    results: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21h8M12 17v4M6 3h12v6a6 6 0 0 1-12 0z"/><path d="M6 5H3v2a3 3 0 0 0 3 3M18 5h3v2a3 3 0 0 1-3 3"/></svg>',
    home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>',
    target: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
    chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v11H8l-4 4z"/></svg>',
    chart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19h16M6 16l4-5 4 3 4-7"/></svg>',
    info: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
    arrowL: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>',
    arrowR: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>',
    up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 15l6-6 6 6"/></svg>',
    down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
    menu: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v5h-5"/></svg>',
    print: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 8V3h10v5M7 17H4v-6h16v6h-3"/><rect x="7" y="14" width="10" height="7"/></svg>',
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M7 10l5 5 5-5M4 21h16"/></svg>',
    flag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 21V4h12l-2 4 2 4H5"/></svg>'
  };
  function icon(name) { return '<span class="icon">' + (ICONS[name] || '') + '</span>'; }

  /* ------------------------------------------------------------------
     Estado y almacenamiento local
     ------------------------------------------------------------------ */
  function defaultState() {
    return {
      version: STATE_VERSION,
      startedAt: null,
      participant: '',
      completed: {},
      quiz: {},
      forms: {},
      classify: {},
      scenario: {},
      integrator: { step: 0 },
      survey: null
    };
  }
  var state = loadState();

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var s = JSON.parse(raw);
        if (s && s.version === STATE_VERSION) return s;
      }
    } catch (e) { /* almacenamiento no disponible */ }
    return defaultState();
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* ignorar */ }
  }

  /* ------------------------------------------------------------------
     Construcción de la estructura navegable
     ------------------------------------------------------------------ */
  var nodes = [];
  var nodeById = {};
  function addNode(n) { nodes.push(n); nodeById[n.id] = n; return n; }

  addNode({ id: 'inicio', kind: 'welcome', title: 'Bienvenida', trackable: false, icon: 'home' });
  addNode({ id: 'objetivos', kind: 'objectives', title: 'Objetivos de aprendizaje', trackable: true, icon: 'target' });
  addNode({ id: 'como-usar', kind: 'orientation', title: 'Cómo usar el curso', trackable: true, icon: 'info' });
  addNode({ id: 'diagnostico', kind: 'quiz', title: C.diagnostic.title, trackable: true, icon: 'quiz', quiz: C.diagnostic, graded: false });

  C.modules.forEach(function (m) {
    addNode({ id: m.id, kind: 'module', title: 'Módulo ' + m.day + ': ' + m.title, trackable: false, module: m });
    m.items.forEach(function (it) {
      var n = { id: m.id + '/' + it.id, kind: it.type, title: it.title, trackable: true, module: m, item: it, icon: it.type };
      if (it.type === 'quiz') { n.quiz = it; n.graded = true; }
      addNode(n);
    });
  });
  addNode({ id: 'integrador', kind: 'integrator', title: 'Caso integrador', trackable: true, icon: 'integrator' });
  addNode({ id: 'final', kind: 'quiz', title: C.finalExam.title, trackable: true, icon: 'quiz', quiz: C.finalExam, graded: true });
  addNode({ id: 'encuesta', kind: 'survey', title: C.survey.title, trackable: true, icon: 'survey' });
  addNode({ id: 'resultados', kind: 'results', title: 'Resultados y cierre', trackable: false, icon: 'results' });

  var trackableNodes = nodes.filter(function (n) { return n.trackable; });

  function isCompleted(id) { return !!state.completed[id]; }
  function markCompleted(id) {
    if (!state.completed[id]) {
      state.completed[id] = Date.now();
      if (!state.startedAt) state.startedAt = Date.now();
      save();
      renderSidebar();
      renderProgress();
    }
  }
  function unmarkCompleted(id) {
    if (state.completed[id]) { delete state.completed[id]; save(); renderSidebar(); renderProgress(); }
  }
  function moduleItemsCompleted(m, type) {
    return m.items.filter(function (it) { return !type || it.type === type; })
      .every(function (it) { return isCompleted(m.id + '/' + it.id); });
  }
  function allModulesCompleted() {
    return C.modules.every(function (m) { return moduleItemsCompleted(m); });
  }
  function lockReason(n) {
    if (n.kind === 'quiz' && n.module) {
      if (!moduleItemsCompleted(n.module, 'lesson')) return 'Complete las lecciones del módulo para habilitar el cuestionario.';
    }
    if (n.id === 'integrador' || n.id === 'final') {
      if (!allModulesCompleted()) return 'Complete los cuatro módulos (lecciones, actividades, casos y cuestionarios) para habilitar esta evaluación.';
    }
    if (n.id === 'encuesta') {
      if (!isCompleted('integrador') || !isCompleted('final')) return 'Complete el caso integrador y la evaluación final para habilitar la encuesta.';
    }
    return null;
  }
  function progressPercent() {
    var done = trackableNodes.filter(function (n) { return isCompleted(n.id); }).length;
    return Math.round((done / trackableNodes.length) * 100);
  }

  /* ------------------------------------------------------------------
     Calificación
     ------------------------------------------------------------------ */
  function quizScore(id) {
    var qs = state.quiz[id];
    return qs && typeof qs.score === 'number' ? qs.score : null;
  }
  function computeResults() {
    var moduleQuizIds = C.modules.map(function (m) {
      var q = m.items.filter(function (it) { return it.type === 'quiz'; })[0];
      return q ? m.id + '/' + q.id : null;
    }).filter(Boolean);
    var caseIds = [];
    var activityIds = [];
    C.modules.forEach(function (m) {
      m.items.forEach(function (it) {
        if (it.type === 'case') caseIds.push(m.id + '/' + it.id);
        if (it.type === 'activity') activityIds.push(m.id + '/' + it.id);
      });
    });

    var modScores = moduleQuizIds.map(function (id) { return quizScore(id); });
    var finalScore = quizScore('final');
    var modAvg = avg(modScores.map(function (s) { return s == null ? 0 : s; }));
    var quizzes = modAvg * C.grading.quizSplit.modules + (finalScore == null ? 0 : finalScore) * C.grading.quizSplit.final;

    var caseScores = caseIds.map(function (id) { return quizScore(id); });
    var cases = avg(caseScores.map(function (s) { return s == null ? 0 : s; }));

    var partDone = activityIds.filter(function (id) { return isCompleted(id); }).length;
    var participation = (partDone / activityIds.length) * 100;

    var integ = integratorScore();

    var byId = { quizzes: quizzes, cases: cases, participation: participation, integrator: integ == null ? 0 : integ };
    var total = 0;
    var components = C.grading.components.map(function (c) {
      var score = byId[c.id];
      var weighted = score * c.weight / 100;
      total += weighted;
      var pending;
      if (c.id === 'quizzes') pending = modScores.some(function (s) { return s == null; }) || finalScore == null;
      else if (c.id === 'cases') pending = caseScores.some(function (s) { return s == null; });
      else if (c.id === 'participation') pending = partDone < activityIds.length;
      else pending = integ == null;
      return { id: c.id, label: c.label, weight: c.weight, note: c.note, score: score, weighted: weighted, pending: pending };
    });
    var allDone = trackableNodes.every(function (n) { return isCompleted(n.id); });
    return {
      components: components,
      total: Math.round(total * 10) / 10,
      passScore: C.grading.passScore,
      approved: allDone && total >= C.grading.passScore,
      complete: allDone,
      diagnostic: quizScore('diagnostico'),
      finalExam: finalScore,
      moduleScores: modScores,
      participationDone: partDone,
      participationTotal: activityIds.length
    };
  }
  function integratorScore() {
    var scores = C.integrator.steps.map(function (s) { return quizScore('integrador/' + s.id); });
    if (scores.some(function (s) { return s == null; })) return null;
    return avg(scores);
  }

  /* ------------------------------------------------------------------
     Motor de cuestionarios
     ------------------------------------------------------------------ */
  function quizState(id, quiz) {
    if (!state.quiz[id]) {
      state.quiz[id] = { answers: {}, checked: {}, submitted: false, score: null, attempts: 0, order: {} };
    }
    var qs = state.quiz[id];
    /* Inicializar orden barajado para preguntas de tipo "order" */
    quiz.questions.forEach(function (q) {
      if (q.type === 'order' && !qs.order[q.id]) {
        var idx = q.items.map(function (_, i) { return i; });
        var sh = shuffle(idx);
        var tries = 0;
        while (sameArray(sh, idx) && tries < 10) { sh = shuffle(idx); tries++; }
        if (sameArray(sh, idx)) sh.reverse();
        qs.order[q.id] = sh;
      }
    });
    return qs;
  }
  function correctIndices(q) {
    var r = [];
    q.options.forEach(function (o, i) { if (o.correct) r.push(i); });
    return r;
  }
  function isAnswered(q, qs) {
    var a = qs.answers[q.id];
    if (q.type === 'multi') return Array.isArray(a) && a.length > 0;
    if (q.type === 'order') return true;
    return a !== undefined && a !== null;
  }
  function isCorrect(q, qs) {
    var a = qs.answers[q.id];
    if (q.type === 'single') return q.options[a] && q.options[a].correct === true;
    if (q.type === 'tf') return a === q.answer;
    if (q.type === 'multi') {
      if (!Array.isArray(a)) return false;
      return sameArray(a.slice().sort(), correctIndices(q).sort());
    }
    if (q.type === 'order') {
      var order = qs.order[q.id];
      return sameArray(order, q.items.map(function (_, i) { return i; }));
    }
    return false;
  }
  function allChecked(quiz, qs) {
    return quiz.questions.every(function (q) { return qs.checked[q.id]; });
  }
  function finalizeQuiz(nodeId, quiz, qs) {
    var correct = quiz.questions.filter(function (q) { return isCorrect(q, qs); }).length;
    qs.score = Math.round((correct / quiz.questions.length) * 100);
    qs.correct = correct;
    qs.submitted = true;
    qs.attempts = (qs.attempts || 0) + 1;
    qs.submittedAt = Date.now();
    save();
  }
  function resetQuiz(id, quiz) {
    var prev = state.quiz[id] || {};
    state.quiz[id] = { answers: {}, checked: {}, submitted: false, score: prev.score == null ? null : prev.score, attempts: prev.attempts || 0, order: {} };
    quizState(id, quiz);
    save();
  }

  function renderQuestion(q, qs, mode, index, quizId) {
    var checked = !!qs.checked[q.id];
    var a = qs.answers[q.id];
    var html = '<fieldset class="question' + (checked ? (isCorrect(q, qs) ? ' is-correct' : ' is-incorrect') : '') + '" data-qid="' + esc(q.id) + '">';
    html += '<legend><span class="q-num">' + (index + 1) + '</span> ' + md(q.text) + '</legend>';

    if (q.type === 'single' || q.type === 'tf') {
      var opts = q.type === 'tf' ? [{ text: 'Verdadero', value: true }, { text: 'Falso', value: false }] : q.options.map(function (o, i) { return { text: o.text, value: i }; });
      html += '<div class="options">';
      opts.forEach(function (o, i) {
        var val = q.type === 'tf' ? String(o.value) : String(i);
        var selected = q.type === 'tf' ? a === o.value : a === i;
        var cls = 'option';
        if (checked) {
          var isRight = q.type === 'tf' ? o.value === q.answer : q.options[i].correct;
          if (isRight) cls += ' option-correct';
          else if (selected) cls += ' option-wrong';
        }
        html += '<label class="' + cls + '"><input type="radio" name="' + esc(quizId + '-' + q.id) + '" value="' + val + '"' + (selected ? ' checked' : '') + (checked ? ' disabled' : '') + ' data-action="answer" data-type="' + q.type + '"> <span>' + md(o.text) + '</span></label>';
      });
      html += '</div>';
      if (checked) {
        var fb = q.type === 'tf' ? q.feedback : (q.options[a] ? q.options[a].feedback : '');
        html += feedbackBox(isCorrect(q, qs), fb);
      }
    } else if (q.type === 'multi') {
      html += '<p class="q-hint">Seleccione todas las opciones correctas.</p><div class="options">';
      q.options.forEach(function (o, i) {
        var selected = Array.isArray(a) && a.indexOf(i) >= 0;
        var cls = 'option';
        if (checked) {
          if (o.correct) cls += ' option-correct';
          else if (selected) cls += ' option-wrong';
        }
        html += '<label class="' + cls + '"><input type="checkbox" value="' + i + '"' + (selected ? ' checked' : '') + (checked ? ' disabled' : '') + ' data-action="answer" data-type="multi"> <span>' + md(o.text) + '</span></label>';
      });
      html += '</div>';
      if (!checked && mode === 'immediate') html += '<button type="button" class="btn btn-secondary btn-sm" data-action="check-question"' + (isAnswered(q, qs) ? '' : ' disabled') + '>Comprobar</button>';
      if (checked) html += feedbackBox(isCorrect(q, qs), q.feedback);
    } else if (q.type === 'order') {
      var order = qs.order[q.id];
      html += '<p class="q-hint">Use las flechas para ordenar los elementos de arriba hacia abajo.</p><ol class="order-list">';
      order.forEach(function (origIdx, pos) {
        var cls = 'order-item';
        if (checked) cls += origIdx === pos ? ' option-correct' : ' option-wrong';
        html += '<li class="' + cls + '"><span class="order-text">' + md(q.items[origIdx]) + '</span>';
        if (!checked) {
          html += '<span class="order-controls"><button type="button" class="btn-icon" data-action="order-up" data-pos="' + pos + '" aria-label="Subir"' + (pos === 0 ? ' disabled' : '') + '>' + icon('up') + '</button>';
          html += '<button type="button" class="btn-icon" data-action="order-down" data-pos="' + pos + '" aria-label="Bajar"' + (pos === order.length - 1 ? ' disabled' : '') + '>' + icon('down') + '</button></span>';
        }
        html += '</li>';
      });
      html += '</ol>';
      if (!checked && mode === 'immediate') html += '<button type="button" class="btn btn-secondary btn-sm" data-action="check-question">Comprobar</button>';
      if (checked) {
        html += feedbackBox(isCorrect(q, qs), q.feedback);
        if (!isCorrect(q, qs)) html += '<p class="q-hint">Orden correcto: ' + q.items.map(function (t) { return esc(t); }).join(' → ') + '.</p>';
      }
    }
    html += '</fieldset>';
    return html;
  }
  function feedbackBox(ok, text) {
    return '<div class="feedback ' + (ok ? 'feedback-ok' : 'feedback-bad') + '" role="status"><strong>' + (ok ? 'Correcto.' : 'Incorrecto.') + '</strong> ' + md(text || '') + '</div>';
  }
  function renderQuizBody(quizId, quiz, mode, opts) {
    opts = opts || {};
    var qs = quizState(quizId, quiz);
    var html = '<div class="quiz" data-quiz="' + esc(quizId) + '" data-mode="' + mode + '">';
    if (qs.submitted) {
      html += quizSummary(quiz, qs, opts);
    }
    quiz.questions.forEach(function (q, i) { html += renderQuestion(q, qs, mode, i, quizId); });
    if (!qs.submitted) {
      if (mode === 'deferred') {
        var ready = quiz.questions.every(function (q) { return isAnswered(q, qs); });
        html += '<div class="quiz-actions"><button type="button" class="btn btn-primary" data-action="submit-quiz"' + (ready ? '' : ' disabled') + '>Entregar</button>';
        if (!ready) html += '<span class="muted">Responda todas las preguntas para entregar.</span>';
        html += '</div>';
      }
    } else if (!opts.hideReset) {
      html += '<div class="quiz-actions"><button type="button" class="btn btn-secondary" data-action="reset-quiz">' + icon('refresh') + ' Reintentar</button></div>';
    }
    html += '</div>';
    return html;
  }
  function quizSummary(quiz, qs, opts) {
    var total = quiz.questions.length;
    var label = opts.graded === false ? 'Resultado diagnóstico' : 'Resultado';
    var html = '<div class="score-card' + (qs.score >= C.grading.passScore ? ' score-good' : (qs.score >= 60 ? ' score-mid' : ' score-low')) + '" role="status">';
    html += '<div class="score-big">' + qs.score + '<span>/100</span></div>';
    html += '<div class="score-text"><strong>' + label + ':</strong> ' + qs.correct + ' de ' + total + ' respuestas correctas.';
    if (qs.attempts > 1) html += ' <span class="muted">Intentos: ' + qs.attempts + '.</span>';
    if (opts.graded === false) html += '<br><span class="muted">Este resultado no pondera. Se comparará con la evaluación final.</span>';
    html += '</div></div>';
    return html;
  }

  /* Eventos de cuestionario */
  function handleQuizEvent(e, action, target) {
    var quizEl = target.closest('.quiz');
    if (!quizEl) return false;
    var quizId = quizEl.getAttribute('data-quiz');
    var mode = quizEl.getAttribute('data-mode');
    var quiz = findQuiz(quizId);
    if (!quiz) return false;
    var qs = quizState(quizId, quiz);
    var qEl = target.closest('.question');
    var q = qEl ? quiz.questions.filter(function (x) { return x.id === qEl.getAttribute('data-qid'); })[0] : null;

    if (action === 'answer' && q) {
      var type = target.getAttribute('data-type');
      if (type === 'single') qs.answers[q.id] = parseInt(target.value, 10);
      else if (type === 'tf') qs.answers[q.id] = target.value === 'true';
      else if (type === 'multi') {
        var sel = $all('input[type=checkbox]:checked', qEl).map(function (i) { return parseInt(i.value, 10); });
        qs.answers[q.id] = sel;
      }
      if (mode === 'immediate' && (type === 'single' || type === 'tf')) qs.checked[q.id] = true;
      save();
      afterQuizChange(quizId, quiz, qs, mode);
      return true;
    }
    if (action === 'check-question' && q) {
      if (!isAnswered(q, qs)) return true;
      qs.checked[q.id] = true;
      save();
      afterQuizChange(quizId, quiz, qs, mode);
      return true;
    }
    if ((action === 'order-up' || action === 'order-down') && q) {
      var pos = parseInt(target.getAttribute('data-pos'), 10);
      var order = qs.order[q.id];
      var np = action === 'order-up' ? pos - 1 : pos + 1;
      if (np < 0 || np >= order.length) return true;
      var t = order[pos]; order[pos] = order[np]; order[np] = t;
      save();
      rerenderCurrent();
      return true;
    }
    if (action === 'submit-quiz') {
      if (!quiz.questions.every(function (x) { return isAnswered(x, qs); })) return true;
      quiz.questions.forEach(function (x) { qs.checked[x.id] = true; });
      finalizeQuiz(quizId, quiz, qs);
      onQuizSubmitted(quizId);
      rerenderCurrent();
      return true;
    }
    if (action === 'reset-quiz') {
      resetQuiz(quizId, quiz);
      onQuizReset(quizId);
      rerenderCurrent();
      return true;
    }
    return false;
  }
  function afterQuizChange(quizId, quiz, qs, mode) {
    if (mode === 'immediate' && allChecked(quiz, qs) && !qs.submitted) {
      finalizeQuiz(quizId, quiz, qs);
      onQuizSubmitted(quizId);
    }
    rerenderCurrent();
  }
  /* Localiza la definición de un cuestionario por su id de nodo o compuesto */
  function findQuiz(quizId) {
    var n = nodeById[quizId];
    if (n && n.quiz) return n.quiz;
    if (n && n.kind === 'case') return { questions: n.item.questions };
    if (quizId.indexOf('integrador/') === 0) {
      var sid = quizId.split('/')[1];
      var step = C.integrator.steps.filter(function (s) { return s.id === sid; })[0];
      return step ? { questions: step.questions } : null;
    }
    return null;
  }
  function onQuizSubmitted(quizId) {
    var n = nodeById[quizId];
    if (n && n.kind === 'quiz') { markCompleted(quizId); toast('Cuestionario registrado: ' + state.quiz[quizId].score + '/100'); }
    if (n && n.kind === 'case') checkCaseCompletion(n);
    if (quizId.indexOf('integrador/') === 0) checkIntegratorCompletion();
  }
  function onQuizReset(quizId) {
    var n = nodeById[quizId];
    if (n && n.kind === 'case') unmarkCompleted(n.id);
    if (quizId.indexOf('integrador/') === 0) unmarkCompleted('integrador');
  }

  /* ------------------------------------------------------------------
     Plantillas de pantalla
     ------------------------------------------------------------------ */
  function pageHeader(eyebrow, title, meta) {
    var html = '<header class="page-header">';
    if (eyebrow) html += '<p class="eyebrow">' + esc(eyebrow) + '</p>';
    html += '<h1 id="page-title" tabindex="-1">' + esc(title) + '</h1>';
    if (meta) html += '<p class="page-meta">' + meta + '</p>';
    html += '</header>';
    return html;
  }
  function hypoBadge() {
    return '<span class="badge badge-hypo">Caso hipotético</span>';
  }

  function renderWelcome() {
    var m = C.meta, w = C.welcome;
    var started = Object.keys(state.completed).length > 0;
    var html = '<section class="hero">';
    html += '<p class="eyebrow eyebrow-light">' + esc(w.eyebrow) + '</p>';
    html += '<h1 id="page-title" tabindex="-1">' + esc(m.title) + '</h1>';
    html += '<p class="hero-sub">' + esc(w.headline) + '</p>';
    html += '<div class="chips">' +
      '<span class="chip">' + esc(m.company) + '</span>' +
      '<span class="chip">' + esc(m.department) + '</span>' +
      '<span class="chip">' + esc(m.duration) + '</span>' +
      '<span class="chip">' + esc(m.hours) + '</span></div>';
    html += '</section>';

    html += '<section class="section"><p class="lead">' + md(w.intro) + '</p>';
    html += '<div class="cards cards-3">';
    w.highlights.forEach(function (h) {
      html += '<article class="card"><div class="card-icon">' + icon(h.icon) + '</div><h3>' + esc(h.title) + '</h3><p>' + esc(h.text) + '</p></article>';
    });
    html += '</div></section>';

    html += '<section class="section panel"><h2>Comenzar</h2>';
    html += '<label class="field"><span>Nombre del participante <span class="muted">(opcional, aparecerá en la constancia)</span></span><input type="text" id="participant-name" maxlength="80" value="' + esc(state.participant) + '" placeholder="Nombre y apellido"></label>';
    html += '<div class="actions">';
    if (started) {
      html += '<a class="btn btn-primary" href="#/' + esc(nextPendingId()) + '" data-action="start">Continuar donde lo dejé ' + icon('arrowR') + '</a>';
      html += '<a class="btn btn-secondary" href="#/objetivos" data-action="start">Ver desde el inicio</a>';
    } else {
      html += '<a class="btn btn-primary" href="#/objetivos" data-action="start">Comenzar el curso ' + icon('arrowR') + '</a>';
    }
    html += '</div>';
    html += '<p class="muted small">Progreso actual: ' + progressPercent() + ' %.</p>';
    html += '</section>';

    html += '<section class="section"><div class="cards cards-3 cards-flat">' +
      '<div><p class="label">Institución</p><p>' + esc(m.university) + '<br>' + esc(m.faculty) + '</p></div>' +
      '<div><p class="label">Programa</p><p>' + esc(m.program) + '<br>Curso: ' + esc(m.academicCourse) + '</p></div>' +
      '<div><p class="label">Población objetivo</p><p>' + esc(m.audience) + '<br>' + esc(m.modality) + '</p></div></div></section>';
    html += '<p class="disclaimer">' + esc(m.disclaimer) + '</p>';
    return html;
  }
  function nextPendingId() {
    for (var i = 0; i < trackableNodes.length; i++) {
      if (!isCompleted(trackableNodes[i].id)) return trackableNodes[i].id;
    }
    return 'resultados';
  }

  function renderObjectives() {
    var o = C.objectives;
    var html = pageHeader('Propósito académico', 'Objetivos de aprendizaje');
    html += '<section class="section objective-general"><p class="label label-light">Objetivo general</p><p>' + esc(o.general) + '</p></section>';
    html += '<section class="section"><h2>Objetivos específicos</h2><ol class="objective-list">';
    o.specific.forEach(function (s) { html += '<li>' + esc(s) + '</li>'; });
    html += '</ol></section>';
    html += '<section class="section cards cards-2">' +
      '<article class="card card-accent"><h3>Objetivo de aprendizaje</h3><p>' + esc(o.learningOutcome) + '</p></article>' +
      '<article class="card card-accent"><h3>Resultado esperado</h3><p>' + esc(o.expectedResult) + '</p></article></section>';
    html += '<section class="section"><h2>Relación con la misión y la visión</h2><div class="cards cards-2">';
    html += '<article class="card"><h3>Con la misión</h3><ul class="check-list">' + o.mission.map(function (x) { return '<li>' + icon('check') + esc(x) + '</li>'; }).join('') + '</ul></article>';
    html += '<article class="card"><h3>Con la visión</h3><ul class="check-list">' + o.vision.map(function (x) { return '<li>' + icon('check') + esc(x) + '</li>'; }).join('') + '</ul></article>';
    html += '</div></section>';
    return html;
  }

  function renderOrientation() {
    var o = C.orientation;
    var html = pageHeader('Orientación', 'Cómo usar el curso');
    html += '<section class="section"><h2>Ruta de aprendizaje: cinco días hábiles</h2><ol class="route">';
    o.route.forEach(function (r, i) {
      var target = i < 4 ? '#/m' + (i + 1) : '#/integrador';
      html += '<li><a href="' + target + '"><span class="route-day">' + esc(r.day) + '</span><span class="route-title">' + esc(r.title) + '</span><span class="route-time">' + esc(r.time) + '</span></a></li>';
    });
    html += '</ol></section>';
    html += '<section class="section"><h2>Tipos de contenido</h2><ul class="type-list">';
    o.activityTypes.forEach(function (t) {
      html += '<li>' + icon(t.kind) + '<div><strong>' + esc(t.label) + '</strong><p>' + esc(t.text) + '</p></div></li>';
    });
    html += '</ul></section>';
    html += '<section class="section"><h2>Sistema de evaluación</h2><table class="table"><thead><tr><th>Componente</th><th>Ponderación</th><th>Cómo se calcula</th></tr></thead><tbody>';
    C.grading.components.forEach(function (c) {
      html += '<tr><td>' + esc(c.label) + '</td><td class="num">' + c.weight + ' %</td><td>' + esc(c.note) + '</td></tr>';
    });
    html += '<tr class="row-total"><td>Total</td><td class="num">100 %</td><td>Criterio de aprobación: ' + C.grading.passScore + ' puntos sobre 100.</td></tr></tbody></table></section>';
    html += '<section class="section"><h2>Reglas de navegación y progreso</h2><ul class="check-list">' + o.rules.map(function (r) { return '<li>' + icon('check') + esc(r) + '</li>'; }).join('') + '</ul></section>';
    html += '<section class="section callout callout-info"><div class="callout-title">' + icon('info') + 'Sobre los foros y canales del LMS</div><p>' + esc(o.lmsNote) + '</p></section>';
    return html;
  }

  function renderModule(n) {
    var m = n.module;
    var html = pageHeader('Día ' + m.day, 'Módulo ' + m.day + ': ' + m.title, esc(m.summary) + ' · Duración estimada: ' + esc(m.time));
    html += '<section class="section"><ol class="item-list">';
    m.items.forEach(function (it) {
      var id = m.id + '/' + it.id;
      var node = nodeById[id];
      var locked = lockReason(node);
      var done = isCompleted(id);
      html += '<li class="item-row' + (done ? ' is-done' : '') + (locked ? ' is-locked' : '') + '">';
      html += '<a href="#/' + esc(id) + '"' + (locked ? ' aria-disabled="true"' : '') + '>';
      html += '<span class="item-icon">' + icon(done ? 'check' : (locked ? 'lock' : it.type)) + '</span>';
      html += '<span class="item-body"><span class="item-kind">' + esc(kindLabel(it)) + '</span><span class="item-title">' + esc(it.title) + '</span>';
      if (locked) html += '<span class="item-note">' + esc(locked) + '</span>';
      html += '</span><span class="item-time">' + esc(it.time || '') + '</span></a></li>';
    });
    html += '</ol></section>';
    return html;
  }
  function kindLabel(it) {
    if (it.type === 'lesson') return 'Lección';
    if (it.type === 'quiz') return 'Cuestionario';
    if (it.type === 'case') return 'Caso práctico';
    if (it.type === 'activity') return 'Actividad · ' + (it.modality || '');
    return '';
  }

  function renderBlocks(blocks) {
    return blocks.map(function (b) {
      switch (b.type) {
        case 'p': return '<p>' + md(b.text) + '</p>';
        case 'h': return '<h2>' + esc(b.text) + '</h2>';
        case 'list': return '<ul class="bullets">' + b.items.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul>';
        case 'callout':
          var t = { key: 'Idea clave', example: 'Ejemplo', tip: 'Recomendación' };
          return '<aside class="callout callout-' + esc(b.variant) + '"><div class="callout-title">' + icon(b.variant === 'example' ? 'chat' : (b.variant === 'tip' ? 'flag' : 'target')) + esc(b.title || t[b.variant] || '') + '</div><p>' + md(b.text) + '</p></aside>';
        case 'cards':
          return '<div class="cards cards-' + Math.min(b.items.length, 3) + '">' + b.items.map(function (c) { return '<article class="card"><h3>' + esc(c.title) + '</h3><p>' + md(c.text) + '</p></article>'; }).join('') + '</div>';
        case 'table':
          return '<div class="table-wrap"><table class="table"><thead><tr>' + b.head.map(function (h) { return '<th>' + esc(h) + '</th>'; }).join('') + '</tr></thead><tbody>' +
            b.rows.map(function (r) { return '<tr>' + r.map(function (c, i) { return '<td' + (i === 0 ? ' class="td-strong"' : '') + '>' + md(c) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
        case 'compare':
          return '<div class="compare"><div class="compare-col compare-left"><h3>' + esc(b.left.title) + '</h3><ul>' + b.left.items.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul></div>' +
            '<div class="compare-col compare-right"><h3>' + esc(b.right.title) + '</h3><ul>' + b.right.items.map(function (x) { return '<li>' + md(x) + '</li>'; }).join('') + '</ul></div></div>';
        case 'steps':
          return '<ol class="steps">' + b.items.map(function (s) { return '<li><strong>' + esc(s.title) + '</strong><p>' + md(s.text) + '</p></li>'; }).join('') + '</ol>';
        case 'accordion':
          return '<div class="accordion">' + b.items.map(function (a) { return '<details><summary>' + esc(a.title) + '</summary><div class="accordion-body"><p>' + md(a.text) + '</p></div></details>'; }).join('') + '</div>';
        default: return '';
      }
    }).join('');
  }

  function renderLesson(n) {
    var it = n.item, m = n.module;
    var html = pageHeader('Módulo ' + m.day + ' · Lección', it.title, 'Tiempo estimado: ' + esc(it.time || ''));
    html += '<article class="lesson">' + renderBlocks(it.blocks) + '</article>';
    return html;
  }

  /* --- Actividades --- */
  function renderActivity(n) {
    var it = n.item, m = n.module;
    var html = pageHeader('Módulo ' + m.day + ' · Actividad · ' + (it.modality || ''), it.title, 'Tiempo estimado: ' + esc(it.time || '') + (it.hypothetical ? ' ' + hypoBadge() : ''));
    html += '<p class="lead">' + md(it.intro) + '</p>';
    if (it.kind === 'classify') html += renderClassify(n);
    else if (it.kind === 'form') html += renderForm(n);
    else if (it.kind === 'scenario') html += renderScenario(n);
    return html;
  }

  function renderClassify(n) {
    var it = n.item;
    var cs = state.classify[n.id] || (state.classify[n.id] = { assign: {}, checked: false });
    var html = '<div class="classify" data-classify="' + esc(n.id) + '">';
    var allAssigned = it.items.every(function (x) { return cs.assign[x.id]; });
    var allCorrect = allAssigned && it.items.every(function (x) { return cs.assign[x.id] === x.cat; });
    if (cs.checked) {
      var ok = it.items.filter(function (x) { return cs.assign[x.id] === x.cat; }).length;
      html += '<div class="score-card ' + (allCorrect ? 'score-good' : 'score-mid') + '" role="status"><div class="score-big">' + ok + '<span>/' + it.items.length + '</span></div><div class="score-text">' +
        (allCorrect ? '<strong>Actividad completada.</strong> Todos los enunciados están correctamente clasificados.' : '<strong>Revise los enunciados marcados.</strong> Corrija la clasificación y vuelva a comprobar.') + '</div></div>';
    }
    html += '<ul class="classify-list">';
    it.items.forEach(function (x) {
      var sel = cs.assign[x.id];
      var cls = 'classify-item';
      if (cs.checked && sel) cls += sel === x.cat ? ' is-correct' : ' is-incorrect';
      html += '<li class="' + cls + '"><p class="classify-text">' + esc(x.text) + '</p><div class="seg" role="group" aria-label="Clasificar enunciado">';
      it.categories.forEach(function (c) {
        html += '<button type="button" class="seg-btn' + (sel === c.id ? ' is-selected' : '') + '" data-action="classify" data-item="' + esc(x.id) + '" data-cat="' + esc(c.id) + '" aria-pressed="' + (sel === c.id ? 'true' : 'false') + '">' + esc(c.label) + '</button>';
      });
      html += '</div>';
      if (cs.checked && sel) html += '<div class="feedback ' + (sel === x.cat ? 'feedback-ok' : 'feedback-bad') + '">' + esc(x.feedback) + '</div>';
      html += '</li>';
    });
    html += '</ul>';
    html += '<div class="quiz-actions"><button type="button" class="btn btn-primary" data-action="classify-check"' + (allAssigned ? '' : ' disabled') + '>Comprobar</button>';
    html += '<button type="button" class="btn btn-secondary" data-action="classify-reset">' + icon('refresh') + ' Reiniciar</button>';
    if (!allAssigned) html += '<span class="muted">Clasifique todos los enunciados para comprobar.</span>';
    html += '</div></div>';
    return html;
  }

  function renderForm(n) {
    var it = n.item;
    var saved = state.forms[n.id] || { values: {}, savedAt: null };
    var html = '<form class="form" data-form="' + esc(n.id) + '" novalidate>';
    it.fields.forEach(function (f) {
      var v = saved.values[f.id] || '';
      html += '<label class="field"><span>' + esc(f.label) + '</span><textarea name="' + esc(f.id) + '" rows="' + (f.rows || 3) + '" data-min="' + f.min + '" data-action="field">' + esc(v) + '</textarea>' +
        '<span class="field-help" data-help="' + esc(f.id) + '">' + fieldHelp(v, f.min) + '</span></label>';
    });
    html += '<div class="quiz-actions"><button type="submit" class="btn btn-primary">Guardar respuestas</button>';
    html += '<button type="button" class="btn btn-secondary" data-action="form-clear">Borrar respuestas</button>';
    if (saved.savedAt) html += '<span class="muted">Guardado: ' + esc(formatDateTime(saved.savedAt)) + '</span>';
    html += '</div>';
    if (it.forumNote) html += '<p class="forum-note">' + icon('chat') + esc(it.forumNote) + '</p>';
    html += '</form>';
    return html;
  }
  function fieldHelp(v, min) {
    var len = (v || '').trim().length;
    if (!min) return '';
    return len >= min ? 'Listo (' + len + ' caracteres).' : 'Mínimo ' + min + ' caracteres (' + len + ').';
  }

  function renderScenario(n) {
    var it = n.item;
    var sc = state.scenario[n.id] || (state.scenario[n.id] = { index: 0, choices: [], current: null });
    var html = '<div class="scenario" data-scenario="' + esc(n.id) + '">';
    html += '<ol class="stepper" aria-label="Avance del escenario">';
    it.nodes.forEach(function (_, i) {
      var cls = i < sc.index ? 'is-done' : (i === sc.index ? 'is-current' : '');
      html += '<li class="' + cls + '"><span>' + (i + 1) + '</span></li>';
    });
    html += '</ol>';
    if (sc.index >= it.nodes.length) {
      var tally = { good: 0, mid: 0, bad: 0 };
      sc.choices.forEach(function (c) { tally[c.quality]++; });
      var points = tally.good * 2 + tally.mid;
      var max = it.nodes.length * 2;
      var ratio = points / max;
      var level = ratio >= 0.75 ? 'good' : (ratio >= 0.4 ? 'mid' : 'bad');
      html += '<div class="score-card ' + (level === 'good' ? 'score-good' : (level === 'mid' ? 'score-mid' : 'score-low')) + '" role="status"><div class="score-big">' + tally.good + '<span>/' + it.nodes.length + '</span></div><div class="score-text"><strong>Decisiones óptimas.</strong> ' + esc(it.endings[level]) + '</div></div>';
      html += '<h2>Resumen de sus decisiones</h2><ol class="decision-list">';
      sc.choices.forEach(function (c, i) {
        var node = it.nodes[i]; var opt = node.options[c.option];
        html += '<li class="decision decision-' + c.quality + '"><p class="decision-situation">' + esc(node.text) + '</p><p><strong>Su decisión:</strong> ' + esc(opt.text) + '</p><p class="decision-fb">' + esc(opt.feedback) + '</p></li>';
      });
      html += '</ol>';
      html += '<div class="quiz-actions"><button type="button" class="btn btn-secondary" data-action="scenario-reset">' + icon('refresh') + ' Repetir el escenario</button></div>';
    } else {
      var node = it.nodes[sc.index];
      html += '<div class="scenario-card"><p class="scenario-label">Situación ' + (sc.index + 1) + ' de ' + it.nodes.length + '</p><p class="scenario-text">' + esc(node.text) + '</p>';
      html += '<div class="scenario-options" role="group" aria-label="Opciones">';
      node.options.forEach(function (o, i) {
        var cls = 'scenario-option';
        if (sc.current != null) cls += i === sc.current ? ' is-chosen quality-' + o.quality : ' is-muted';
        html += '<button type="button" class="' + cls + '" data-action="scenario-choose" data-opt="' + i + '"' + (sc.current != null ? ' disabled' : '') + '>' + esc(o.text) + '</button>';
      });
      html += '</div>';
      if (sc.current != null) {
        var chosen = node.options[sc.current];
        var lbl = { good: 'Decisión acertada', mid: 'Decisión parcial', bad: 'Decisión desaconsejable' }[chosen.quality];
        html += '<div class="feedback feedback-' + chosen.quality + '" role="status"><strong>' + lbl + '.</strong> ' + esc(chosen.feedback) + '</div>';
        html += '<div class="quiz-actions"><button type="button" class="btn btn-primary" data-action="scenario-next">' + (sc.index === it.nodes.length - 1 ? 'Ver resumen' : 'Continuar') + ' ' + icon('arrowR') + '</button></div>';
      }
      html += '</div>';
    }
    html += '</div>';
    return html;
  }

  /* --- Casos prácticos --- */
  function renderCase(n) {
    var it = n.item, m = n.module;
    var html = pageHeader('Módulo ' + m.day + ' · Caso práctico', it.title, 'Tiempo estimado: ' + esc(it.time || '') + ' ' + hypoBadge());
    html += '<section class="section case-context"><h2>Situación</h2>' + it.context.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</section>';
    html += '<section class="section"><h2>Análisis</h2><p class="muted">Responda las preguntas. Recibirá retroalimentación inmediata. Las preguntas se califican y forman parte del componente de análisis de casos.</p>';
    html += renderQuizBody(n.id, { questions: it.questions }, 'immediate', { graded: true });
    html += '</section>';
    html += renderWritten(n.id, it.written, 'Propuesta escrita');
    html += caseStatus(n);
    return html;
  }
  function renderWritten(ownerId, w, heading) {
    var v = (state.forms[ownerId] && state.forms[ownerId].values && state.forms[ownerId].values[w.id]) || '';
    var html = '<section class="section"><h2>' + esc(heading) + '</h2>';
    html += '<label class="field"><span>' + esc(w.label) + '</span><textarea name="' + esc(w.id) + '" rows="' + (w.rows || 5) + '" data-min="' + w.min + '" data-action="written" data-owner="' + esc(ownerId) + '">' + esc(v) + '</textarea>' +
      '<span class="field-help" data-help="' + esc(w.id) + '">' + fieldHelp(v, w.min) + '</span></label>';
    html += '<p class="muted small">Se guarda automáticamente mientras escribe. Esta respuesta no se califica de forma automática; queda registrada para revisión del facilitador.</p></section>';
    return html;
  }
  function writtenOk(ownerId, w) {
    var v = (state.forms[ownerId] && state.forms[ownerId].values && state.forms[ownerId].values[w.id]) || '';
    return v.trim().length >= w.min;
  }
  function checkCaseCompletion(n) {
    var qs = state.quiz[n.id];
    if (qs && qs.submitted && writtenOk(n.id, n.item.written)) markCompleted(n.id);
    else unmarkCompleted(n.id);
  }
  function caseStatus(n) {
    var qs = state.quiz[n.id];
    var qOk = qs && qs.submitted;
    var wOk = writtenOk(n.id, n.item.written);
    var html = '<section class="section status-box' + (qOk && wOk ? ' status-done' : '') + '"><h2>Estado del caso</h2><ul class="check-list">';
    html += '<li class="' + (qOk ? 'ok' : '') + '">' + icon(qOk ? 'check' : 'info') + (qOk ? 'Preguntas respondidas: ' + qs.score + '/100.' : 'Preguntas pendientes.') + '</li>';
    html += '<li class="' + (wOk ? 'ok' : '') + '">' + icon(wOk ? 'check' : 'info') + (wOk ? 'Propuesta escrita registrada.' : 'Propuesta escrita pendiente (mínimo ' + n.item.written.min + ' caracteres).') + '</li>';
    html += '</ul>' + (qOk && wOk ? '<p class="muted">Caso completado. Puede continuar.</p>' : '') + '</section>';
    return html;
  }

  /* --- Cuestionarios de módulo, diagnóstico y final --- */
  function renderQuizPage(n) {
    var q = n.quiz;
    var eyebrow = n.module ? 'Módulo ' + n.module.day + ' · Cuestionario' : (n.id === 'final' ? 'Día 5 · Evaluación' : 'Inicio · Diagnóstico');
    var html = pageHeader(eyebrow, q.title, 'Tiempo estimado: ' + esc(q.time || '10 min') + ' · ' + q.questions.length + ' preguntas');
    html += '<p class="lead">' + md(q.intro || '') + '</p>';
    html += renderQuizBody(n.id, q, q.mode || 'immediate', { graded: n.graded !== false });
    if (n.id === 'final' && state.quiz.final && state.quiz.final.submitted && quizScore('diagnostico') != null) {
      html += prePostBox();
    }
    return html;
  }
  function prePostBox() {
    var pre = quizScore('diagnostico'), post = quizScore('final');
    var diff = post - pre;
    return '<section class="section panel"><h2>Comparación diagnóstica frente a final</h2><div class="prepost"><div><span class="label">Diagnóstica</span><span class="big">' + pre + '</span></div><div class="prepost-arrow">' + icon('arrowR') + '</div><div><span class="label">Final</span><span class="big">' + post + '</span></div><div><span class="label">Variación</span><span class="big ' + (diff >= 0 ? 'pos' : 'neg') + '">' + (diff > 0 ? '+' : '') + diff + '</span></div></div></section>';
  }

  /* --- Caso integrador --- */
  function renderIntegrator() {
    var I = C.integrator;
    var st = state.integrator;
    var html = pageHeader('Día 5 · Evaluación integradora · 40 %', I.title, 'Tiempo estimado: ' + esc(I.time) + ' ' + hypoBadge());
    html += '<p class="lead">' + md(I.intro) + '</p>';
    html += '<section class="section case-context"><h2>Situación</h2>' + I.context.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('') + '</section>';

    var stepsDone = I.steps.map(function (s) { return integratorStepDone(s); });
    html += '<ol class="stepper stepper-labels" aria-label="Pasos del caso">';
    I.steps.forEach(function (s, i) {
      var cls = stepsDone[i] ? 'is-done' : (i === st.step ? 'is-current' : '');
      var reachable = i <= st.step || stepsDone.slice(0, i).every(Boolean);
      html += '<li class="' + cls + '"><button type="button" data-action="integrator-goto" data-step="' + i + '"' + (reachable ? '' : ' disabled') + '><span>' + (i + 1) + '</span><small>' + esc(s.title.replace(/^Paso \d+: /, '')) + '</small></button></li>';
    });
    html += '</ol>';

    if (st.step >= I.steps.length) {
      var score = integratorScore();
      html += '<div class="score-card ' + (score >= C.grading.passScore ? 'score-good' : (score >= 60 ? 'score-mid' : 'score-low')) + '" role="status"><div class="score-big">' + Math.round(score) + '<span>/100</span></div><div class="score-text"><strong>Caso integrador completado.</strong> Puntaje de la parte estructurada. Sus respuestas escritas quedaron registradas para revisión del facilitador y pueden exportarse desde la pantalla de resultados.</div></div>';
      html += '<section class="section"><h2>Sus respuestas escritas</h2>';
      I.steps.forEach(function (s) {
        var v = (state.forms.integrador && state.forms.integrador.values[s.written.id]) || '';
        html += '<details class="answer-box"><summary>' + esc(s.title) + ' · ' + (quizScore('integrador/' + s.id)) + '/100 en preguntas</summary><p class="answer-label">' + esc(s.written.label) + '</p><p class="answer-text">' + esc(v) + '</p></details>';
      });
      html += '</section>';
      html += '<div class="quiz-actions"><button type="button" class="btn btn-secondary" data-action="integrator-reset">' + icon('refresh') + ' Reiniciar el caso integrador</button></div>';
    } else {
      var s = I.steps[st.step];
      var qid = 'integrador/' + s.id;
      html += '<section class="section"><h2>' + esc(s.title) + '</h2><p class="muted">' + esc(s.instructions) + '</p>';
      html += renderQuizBody(qid, { questions: s.questions }, 'immediate', { graded: true, hideReset: true });
      html += '</section>';
      html += renderWritten('integrador', s.written, 'Respuesta escrita');
      var done = integratorStepDone(s);
      html += '<div class="quiz-actions">';
      if (st.step > 0) html += '<button type="button" class="btn btn-secondary" data-action="integrator-goto" data-step="' + (st.step - 1) + '">' + icon('arrowL') + ' Paso anterior</button>';
      html += '<button type="button" class="btn btn-primary" data-action="integrator-next"' + (done ? '' : ' disabled') + '>' + (st.step === I.steps.length - 1 ? 'Finalizar el caso' : 'Paso siguiente') + ' ' + icon('arrowR') + '</button>';
      if (!done) html += '<span class="muted">Responda todas las preguntas y complete la respuesta escrita para avanzar.</span>';
      html += '</div>';
    }
    return html;
  }
  function integratorStepDone(s) {
    var qs = state.quiz['integrador/' + s.id];
    return !!(qs && qs.submitted) && writtenOk('integrador', s.written);
  }
  function checkIntegratorCompletion() {
    var all = C.integrator.steps.every(integratorStepDone);
    if (all && state.integrator.step >= C.integrator.steps.length) markCompleted('integrador');
  }

  /* --- Encuesta --- */
  function renderSurvey() {
    var S = C.survey;
    var html = pageHeader('Día 5 · Cierre', S.title);
    html += '<p class="lead">' + esc(S.intro) + '</p>';
    var sv = state.survey;
    if (sv) {
      html += '<div class="score-card score-good" role="status"><div class="score-big">' + icon('check') + '</div><div class="score-text"><strong>Encuesta enviada</strong> el ' + esc(formatDateTime(sv.at)) + '. Gracias por su retroalimentación.</div></div>';
    }
    html += '<form class="form survey" data-survey novalidate>';
    html += '<div class="table-wrap"><table class="table likert"><thead><tr><th>Aspecto</th>' + S.scale.map(function (s) { return '<th class="num">' + esc(s) + '</th>'; }).join('') + '</tr></thead><tbody>';
    S.items.forEach(function (it) {
      var v = sv ? sv.answers[it.id] : null;
      html += '<tr><th scope="row">' + esc(it.text) + '</th>';
      S.scale.forEach(function (s) {
        html += '<td class="num"><input type="radio" name="' + esc(it.id) + '" value="' + esc(s) + '" aria-label="' + esc(it.text + ': ' + s) + '"' + (String(v) === s ? ' checked' : '') + '></td>';
      });
      html += '</tr>';
    });
    html += '</tbody></table></div>';
    html += '<label class="field"><span>' + esc(S.comment.label) + '</span><textarea name="' + esc(S.comment.id) + '" rows="' + S.comment.rows + '">' + esc(sv ? sv.comment : '') + '</textarea></label>';
    html += '<div class="quiz-actions"><button type="submit" class="btn btn-primary">' + (sv ? 'Actualizar encuesta' : 'Enviar encuesta') + '</button><span class="muted" data-survey-msg></span></div>';
    html += '</form>';
    return html;
  }

  /* --- Resultados y cierre --- */
  function renderResults() {
    var r = computeResults();
    var html = pageHeader('Cierre del curso', 'Resultados y finalización');
    var statusCls = r.complete ? (r.approved ? 'score-good' : 'score-low') : 'score-mid';
    var statusTxt;
    if (!r.complete) statusTxt = '<strong>Curso en progreso.</strong> Progreso: ' + progressPercent() + ' %. El resultado es provisional: los componentes pendientes cuentan como cero hasta completarse.';
    else if (r.approved) statusTxt = '<strong>Curso aprobado.</strong> Alcanzó el criterio mínimo de ' + r.passScore + ' puntos.';
    else statusTxt = '<strong>Curso completado sin alcanzar el mínimo de ' + r.passScore + ' puntos.</strong> Puede repetir los cuestionarios, los casos y el caso integrador para mejorar su resultado.';
    html += '<div class="score-card ' + statusCls + '" role="status"><div class="score-big">' + r.total + '<span>/100</span></div><div class="score-text">' + statusTxt + '</div></div>';

    html += '<section class="section"><h2>Detalle por componente</h2><div class="table-wrap"><table class="table"><thead><tr><th>Componente</th><th class="num">Peso</th><th class="num">Puntaje</th><th class="num">Aporte</th><th>Estado</th></tr></thead><tbody>';
    r.components.forEach(function (c) {
      html += '<tr><td class="td-strong">' + esc(c.label) + '<br><span class="muted small">' + esc(c.note) + '</span></td><td class="num">' + c.weight + ' %</td><td class="num">' + Math.round(c.score) + '</td><td class="num">' + (Math.round(c.weighted * 10) / 10) + '</td><td>' + (c.pending ? '<span class="badge badge-pending">Pendiente</span>' : '<span class="badge badge-done">Completo</span>') + '</td></tr>';
    });
    html += '<tr class="row-total"><td>Total</td><td class="num">100 %</td><td></td><td class="num">' + r.total + '</td><td>' + (r.complete ? (r.approved ? 'Aprobado' : 'No aprobado') : 'Provisional') + '</td></tr></tbody></table></div></section>';

    if (r.diagnostic != null && r.finalExam != null) html += prePostBox();

    html += '<section class="section"><h2>Cuestionarios de módulo</h2><div class="cards cards-4">';
    C.modules.forEach(function (m, i) {
      var s = r.moduleScores[i];
      html += '<div class="card card-sm"><p class="label">Módulo ' + m.day + '</p><p class="big">' + (s == null ? '—' : s) + '</p><a href="#/' + m.id + '/' + m.items.filter(function (x) { return x.type === 'quiz'; })[0].id + '">' + (s == null ? 'Realizar' : 'Revisar') + '</a></div>';
    });
    html += '</div></section>';

    var plan = state.forms['m4/a2'];
    if (plan && plan.savedAt) {
      var planDef = nodeById['m4/a2'].item;
      html += '<section class="section panel"><h2>Mi plan de una mejora</h2><dl class="plan">';
      planDef.fields.forEach(function (f) { html += '<dt>' + esc(f.label) + '</dt><dd>' + esc(plan.values[f.id] || '') + '</dd>'; });
      html += '</dl></section>';
    }

    html += '<section class="section"><h2>Respuestas escritas registradas</h2><p class="muted">Reflexiones, investigación, casos prácticos y caso integrador. Pueden imprimirse o exportarse para su revisión por el facilitador.</p>';
    html += renderAllWritten();
    html += '</section>';

    html += '<section class="section"><h2>Resultados esperados del programa</h2><ul class="check-list">' + C.expectedResults.map(function (x) { return '<li>' + icon('check') + esc(x) + '</li>'; }).join('') + '</ul></section>';

    html += '<section class="section actions-grid">';
    html += '<button type="button" class="btn btn-primary" data-action="print"' + (r.complete ? '' : ' disabled') + '>' + icon('print') + ' Imprimir constancia y resumen</button>';
    html += '<button type="button" class="btn btn-secondary" data-action="export">' + icon('download') + ' Exportar respuestas (JSON)</button>';
    html += '<button type="button" class="btn btn-danger" data-action="reset-course">' + icon('refresh') + ' Reiniciar el curso</button>';
    html += '</section>';
    if (!r.complete) html += '<p class="muted small">La constancia se habilita al completar todos los elementos del curso.</p>';

    html += renderCertificate(r);
    return html;
  }
  function renderAllWritten() {
    var html = '<div class="answers">';
    var any = false;
    nodes.forEach(function (n) {
      if (n.kind === 'activity' && n.item.kind === 'form') {
        var f = state.forms[n.id];
        if (f && f.savedAt) {
          any = true;
          html += '<details class="answer-box"><summary>' + esc(n.title) + ' <span class="muted">(Módulo ' + n.module.day + ')</span></summary>';
          n.item.fields.forEach(function (fl) { html += '<p class="answer-label">' + esc(fl.label) + '</p><p class="answer-text">' + esc(f.values[fl.id] || '') + '</p>'; });
          html += '</details>';
        }
      }
      if (n.kind === 'case') {
        var c = state.forms[n.id];
        if (c && c.values && c.values[n.item.written.id]) {
          any = true;
          html += '<details class="answer-box"><summary>' + esc(n.title) + ' <span class="muted">(Módulo ' + n.module.day + ')</span></summary><p class="answer-label">' + esc(n.item.written.label) + '</p><p class="answer-text">' + esc(c.values[n.item.written.id]) + '</p></details>';
        }
      }
    });
    var ig = state.forms.integrador;
    if (ig && ig.values) {
      C.integrator.steps.forEach(function (s) {
        if (ig.values[s.written.id]) {
          any = true;
          html += '<details class="answer-box"><summary>Caso integrador · ' + esc(s.title) + '</summary><p class="answer-label">' + esc(s.written.label) + '</p><p class="answer-text">' + esc(ig.values[s.written.id]) + '</p></details>';
        }
      });
    }
    if (!any) html += '<p class="muted">Aún no hay respuestas escritas registradas.</p>';
    html += '</div>';
    return html;
  }
  function renderCertificate(r) {
    var m = C.meta;
    var html = '<section class="certificate" aria-hidden="true">';
    html += '<p class="cert-eyebrow">Constancia de finalización · Uso académico</p>';
    html += '<h2>' + esc(m.title) + '</h2>';
    html += '<p class="cert-text">Se hace constar que <strong>' + esc(state.participant || 'el/la participante') + '</strong> completó el curso virtual de cinco días hábiles dirigido a ' + esc(m.audience.toLowerCase()) + ', obteniendo una calificación de <strong>' + r.total + ' / 100</strong> (' + (r.approved ? 'aprobado' : 'no aprobado') + '; criterio mínimo ' + r.passScore + ').</p>';
    html += '<p class="cert-text">Fecha de emisión: ' + esc(formatDate(Date.now())) + '.</p>';
    html += '<p class="cert-foot">' + esc(m.university) + ' · ' + esc(m.program) + ' · Curso ' + esc(m.academicCourse) + '</p>';
    html += '<p class="cert-foot small">' + esc(m.disclaimer) + '</p>';
    html += '</section>';
    return html;
  }

  /* ------------------------------------------------------------------
     Navegación inferior
     ------------------------------------------------------------------ */
  function renderBottomNav(n) {
    var idx = nodes.indexOf(n);
    var prev = idx > 0 ? nodes[idx - 1] : null;
    var next = idx < nodes.length - 1 ? nodes[idx + 1] : null;
    if (n.kind === 'welcome' || n.kind === 'results') return '';
    var html = '<nav class="bottom-nav" aria-label="Navegación entre secciones">';
    html += prev ? '<a class="btn btn-ghost" href="#/' + esc(prev.id) + '">' + icon('arrowL') + ' ' + esc(prev.title) + '</a>' : '<span></span>';
    var completable = (n.kind === 'lesson' || n.kind === 'objectives' || n.kind === 'orientation');
    if (completable && !isCompleted(n.id)) {
      html += '<button type="button" class="btn btn-primary" data-action="complete-next" data-next="' + esc(next ? next.id : '') + '">Completar y continuar ' + icon('arrowR') + '</button>';
    } else if (next) {
      html += '<a class="btn btn-primary" href="#/' + esc(next.id) + '">' + esc(next.title) + ' ' + icon('arrowR') + '</a>';
    }
    html += '</nav>';
    return html;
  }

  /* ------------------------------------------------------------------
     Barra lateral y progreso
     ------------------------------------------------------------------ */
  function renderSidebar() {
    var el = $('#sidebar-nav');
    if (!el) return;
    var cur = currentId();
    var html = '<ul class="nav-list">';
    ['inicio', 'objetivos', 'como-usar', 'diagnostico'].forEach(function (id) { html += navItem(nodeById[id], cur); });
    html += '</ul>';
    C.modules.forEach(function (m) {
      var open = cur === m.id || cur.indexOf(m.id + '/') === 0;
      var done = m.items.filter(function (it) { return isCompleted(m.id + '/' + it.id); }).length;
      html += '<details class="nav-group"' + (open ? ' open' : '') + '><summary><span class="nav-group-day">Día ' + m.day + '</span><span class="nav-group-title">' + esc(m.title) + '</span><span class="nav-group-count">' + done + '/' + m.items.length + '</span></summary><ul class="nav-list">';
      html += navItem(nodeById[m.id], cur, 'Vista general del módulo');
      m.items.forEach(function (it) { html += navItem(nodeById[m.id + '/' + it.id], cur); });
      html += '</ul></details>';
    });
    var d5open = ['integrador', 'final', 'encuesta', 'resultados'].indexOf(cur) >= 0;
    html += '<details class="nav-group"' + (d5open ? ' open' : '') + '><summary><span class="nav-group-day">Día 5</span><span class="nav-group-title">Evaluación integradora</span><span class="nav-group-count">' + ['integrador', 'final', 'encuesta'].filter(isCompleted).length + '/3</span></summary><ul class="nav-list">';
    ['integrador', 'final', 'encuesta', 'resultados'].forEach(function (id) { html += navItem(nodeById[id], cur); });
    html += '</ul></details>';
    el.innerHTML = html;
  }
  function navItem(n, cur, label) {
    var locked = lockReason(n);
    var done = isCompleted(n.id);
    var cls = 'nav-item' + (cur === n.id ? ' is-current' : '') + (done ? ' is-done' : '') + (locked ? ' is-locked' : '');
    var ic = done ? 'check' : (locked ? 'lock' : (n.icon || 'lesson'));
    return '<li><a class="' + cls + '" href="#/' + esc(n.id) + '"' + (cur === n.id ? ' aria-current="page"' : '') + (locked ? ' title="' + esc(locked) + '"' : '') + '>' + icon(ic) + '<span>' + esc(label || n.title) + '</span></a></li>';
  }
  function renderProgress() {
    var p = progressPercent();
    var bar = $('#progress-bar');
    if (bar) { bar.style.width = p + '%'; bar.parentNode.setAttribute('aria-valuenow', p); }
    var lbl = $('#progress-label');
    if (lbl) lbl.textContent = p + ' %';
  }

  /* ------------------------------------------------------------------
     Enrutamiento y renderizado
     ------------------------------------------------------------------ */
  function currentId() {
    var h = location.hash.replace(/^#\/?/, '');
    return nodeById[h] ? h : 'inicio';
  }
  function navigate(id) { location.hash = '#/' + id; }

  function renderLocked(n, reason) {
    var html = pageHeader('Contenido bloqueado', n.title);
    html += '<div class="locked-box">' + icon('lock') + '<p>' + esc(reason) + '</p>';
    html += '<a class="btn btn-primary" href="#/' + esc(nextPendingId()) + '">Ir al siguiente elemento pendiente ' + icon('arrowR') + '</a></div>';
    return html;
  }
  function render() {
    var id = currentId();
    var n = nodeById[id];
    var main = $('#app');
    var reason = lockReason(n);
    var html;
    if (reason) html = renderLocked(n, reason);
    else {
      switch (n.kind) {
        case 'welcome': html = renderWelcome(); break;
        case 'objectives': html = renderObjectives(); break;
        case 'orientation': html = renderOrientation(); break;
        case 'module': html = renderModule(n); break;
        case 'lesson': html = renderLesson(n); break;
        case 'activity': html = renderActivity(n); break;
        case 'case': html = renderCase(n); break;
        case 'quiz': html = renderQuizPage(n); break;
        case 'integrator': html = renderIntegrator(); break;
        case 'survey': html = renderSurvey(); break;
        case 'results': html = renderResults(); break;
        default: html = '';
      }
    }
    main.innerHTML = '<div class="page page-' + n.kind + '">' + html + renderBottomNav(n) + '</div>';
    document.title = n.title + ' · ' + C.meta.shortTitle;
    renderSidebar();
    renderProgress();
    closeSidebar();
  }
  /* Re-render sin perder el foco ni la posición de scroll */
  function rerenderCurrent() {
    var active = document.activeElement;
    var focusSel = null;
    if (active && active.name && active.closest('#app')) focusSel = '[name="' + active.name + '"]';
    var y = window.scrollY;
    render();
    window.scrollTo(0, y);
    if (focusSel) { var el = $(focusSel); if (el) el.focus(); }
  }
  function onRoute() {
    render();
    window.scrollTo(0, 0);
    var t = $('#page-title');
    if (t) t.focus({ preventScroll: true });
  }

  /* ------------------------------------------------------------------
     Eventos globales
     ------------------------------------------------------------------ */
  function toast(msg) {
    var t = $('#toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.add('is-visible');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function () { t.classList.remove('is-visible'); }, 2600);
  }
  function openSidebar() { document.body.classList.add('sidebar-open'); $('#menu-toggle').setAttribute('aria-expanded', 'true'); }
  function closeSidebar() { document.body.classList.remove('sidebar-open'); var b = $('#menu-toggle'); if (b) b.setAttribute('aria-expanded', 'false'); }

  var debounceTimers = {};
  function debounce(key, fn, ms) { clearTimeout(debounceTimers[key]); debounceTimers[key] = setTimeout(fn, ms); }

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-action]');
    if (!t) return;
    var action = t.getAttribute('data-action');
    if (t.tagName === 'INPUT') return; /* los inputs se manejan en change */
    if (action === 'toggle-menu') { document.body.classList.contains('sidebar-open') ? closeSidebar() : openSidebar(); return; }
    if (action === 'close-menu') { closeSidebar(); return; }
    if (action === 'start') {
      var nm = $('#participant-name');
      if (nm) { state.participant = nm.value.trim(); }
      if (!state.startedAt) state.startedAt = Date.now();
      save();
      return; /* el enlace navega */
    }
    if (action === 'complete-next') {
      markCompleted(currentId());
      var next = t.getAttribute('data-next');
      if (next) navigate(next); else render();
      return;
    }
    if (handleQuizEvent(e, action, t)) return;

    /* Clasificación */
    var clEl = t.closest('.classify');
    if (clEl) {
      var cid = clEl.getAttribute('data-classify');
      var cs = state.classify[cid];
      var def = nodeById[cid].item;
      if (action === 'classify') {
        cs.assign[t.getAttribute('data-item')] = t.getAttribute('data-cat');
        if (cs.checked) cs.checked = false;
        save(); rerenderCurrent(); return;
      }
      if (action === 'classify-check') {
        cs.checked = true;
        var allCorrect = def.items.every(function (x) { return cs.assign[x.id] === x.cat; });
        save();
        if (allCorrect) { markCompleted(cid); toast('Actividad completada'); }
        rerenderCurrent(); return;
      }
      if (action === 'classify-reset') {
        state.classify[cid] = { assign: {}, checked: false };
        save(); rerenderCurrent(); return;
      }
    }
    /* Formularios */
    if (action === 'form-clear') {
      var fEl = t.closest('.form');
      var fid = fEl.getAttribute('data-form');
      if (!confirm('¿Borrar las respuestas de esta actividad?')) return;
      delete state.forms[fid];
      unmarkCompleted(fid);
      save(); rerenderCurrent(); return;
    }
    /* Escenarios */
    var scEl = t.closest('.scenario');
    if (scEl) {
      var sid = scEl.getAttribute('data-scenario');
      var sc = state.scenario[sid];
      var sdef = nodeById[sid].item;
      if (action === 'scenario-choose') {
        var oi = parseInt(t.getAttribute('data-opt'), 10);
        sc.current = oi;
        save(); rerenderCurrent(); return;
      }
      if (action === 'scenario-next') {
        if (sc.current == null) return;
        var opt = sdef.nodes[sc.index].options[sc.current];
        sc.choices.push({ node: sc.index, option: sc.current, quality: opt.quality });
        sc.index++; sc.current = null;
        save();
        if (sc.index >= sdef.nodes.length) { markCompleted(sid); toast('Escenario completado'); }
        rerenderCurrent(); return;
      }
      if (action === 'scenario-reset') {
        state.scenario[sid] = { index: 0, choices: [], current: null };
        save(); rerenderCurrent(); return;
      }
    }
    /* Caso integrador */
    if (action === 'integrator-goto') {
      state.integrator.step = parseInt(t.getAttribute('data-step'), 10);
      save(); render(); window.scrollTo(0, 0); return;
    }
    if (action === 'integrator-next') {
      var s = C.integrator.steps[state.integrator.step];
      if (!integratorStepDone(s)) return;
      state.integrator.step++;
      save();
      checkIntegratorCompletion();
      if (isCompleted('integrador')) toast('Caso integrador completado');
      render(); window.scrollTo(0, 0); return;
    }
    if (action === 'integrator-reset') {
      if (!confirm('¿Reiniciar el caso integrador? Se borrarán las respuestas de los cuatro pasos.')) return;
      C.integrator.steps.forEach(function (st) { delete state.quiz['integrador/' + st.id]; });
      delete state.forms.integrador;
      state.integrator = { step: 0 };
      unmarkCompleted('integrador');
      save(); render(); return;
    }
    /* Resultados */
    if (action === 'print') { window.print(); return; }
    if (action === 'export') { exportJSON(); return; }
    if (action === 'reset-course') {
      if (!confirm('¿Reiniciar el curso completo? Se borrará todo el progreso y las respuestas guardadas en este navegador.')) return;
      state = defaultState(); save();
      navigate('inicio'); render(); toast('Curso reiniciado'); return;
    }
  });

  document.addEventListener('change', function (e) {
    var t = e.target;
    if (t.getAttribute && t.getAttribute('data-action') === 'answer') { handleQuizEvent(e, 'answer', t); }
  });

  document.addEventListener('input', function (e) {
    var t = e.target;
    var action = t.getAttribute && t.getAttribute('data-action');
    if (action === 'field') {
      var help = $('[data-help="' + t.name + '"]', t.closest('.form'));
      if (help) help.textContent = fieldHelp(t.value, parseInt(t.getAttribute('data-min'), 10));
    }
    if (action === 'written') {
      var owner = t.getAttribute('data-owner');
      var help2 = $('[data-help="' + t.name + '"]');
      if (help2) help2.textContent = fieldHelp(t.value, parseInt(t.getAttribute('data-min'), 10));
      if (!state.forms[owner]) state.forms[owner] = { values: {}, savedAt: null };
      state.forms[owner].values[t.name] = t.value;
      state.forms[owner].savedAt = Date.now();
      debounce('written-' + owner, function () {
        save();
        var n = nodeById[owner];
        if (n && n.kind === 'case') { checkCaseCompletion(n); refreshCaseStatus(n); }
        if (owner === 'integrador') refreshIntegratorNext();
      }, 300);
    }
    if (t.id === 'participant-name') {
      state.participant = t.value.trim();
      debounce('participant', save, 300);
    }
  });
  function refreshCaseStatus(n) {
    var box = $('.status-box');
    if (!box) return;
    var tmp = document.createElement('div');
    tmp.innerHTML = caseStatus(n);
    box.replaceWith(tmp.firstChild);
  }
  function refreshIntegratorNext() {
    var btn = $('[data-action="integrator-next"]');
    if (!btn) return;
    var s = C.integrator.steps[state.integrator.step];
    if (!s) return;
    var done = integratorStepDone(s);
    btn.disabled = !done;
    var msg = btn.parentNode.querySelector('.muted');
    if (msg) msg.style.display = done ? 'none' : '';
  }

  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (f.matches('.form[data-form]')) {
      e.preventDefault();
      var fid = f.getAttribute('data-form');
      var def = nodeById[fid].item;
      var values = {};
      var ok = true, firstBad = null;
      def.fields.forEach(function (fl) {
        var ta = f.querySelector('[name="' + fl.id + '"]');
        values[fl.id] = ta.value;
        var valid = ta.value.trim().length >= fl.min;
        ta.classList.toggle('is-invalid', !valid);
        if (!valid) { ok = false; if (!firstBad) firstBad = ta; }
      });
      if (!ok) { toast('Complete todos los campos con la extensión mínima indicada.'); firstBad.focus(); return; }
      state.forms[fid] = { values: values, savedAt: Date.now() };
      save();
      markCompleted(fid);
      toast('Respuestas guardadas');
      rerenderCurrent();
      return;
    }
    if (f.matches('.survey')) {
      e.preventDefault();
      var answers = {}, complete = true;
      C.survey.items.forEach(function (it) {
        var sel = f.querySelector('input[name="' + it.id + '"]:checked');
        if (sel) answers[it.id] = parseInt(sel.value, 10); else complete = false;
      });
      if (!complete) { var m = f.querySelector('[data-survey-msg]'); if (m) m.textContent = 'Califique todos los aspectos antes de enviar.'; return; }
      state.survey = { answers: answers, comment: f.querySelector('[name="' + C.survey.comment.id + '"]').value, at: Date.now() };
      save();
      markCompleted('encuesta');
      toast('Encuesta enviada');
      rerenderCurrent();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.body.classList.contains('sidebar-open')) closeSidebar();
  });

  function exportJSON() {
    var r = computeResults();
    var data = {
      curso: C.meta.title,
      participante: state.participant || null,
      exportadoEl: new Date().toISOString(),
      resultados: r,
      progreso: progressPercent(),
      completados: state.completed,
      cuestionarios: state.quiz,
      respuestasEscritas: state.forms,
      escenarios: state.scenario,
      clasificacion: state.classify,
      encuesta: state.survey
    };
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'resultados-curso-atraccion-seleccion.json';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    toast('Archivo exportado');
  }

  /* ------------------------------------------------------------------
     Inicio
     ------------------------------------------------------------------ */
  function init() {
    var brand = $('#brand-title');
    if (brand) brand.textContent = C.meta.shortTitle;
    var yr = $('#year');
    if (yr) yr.textContent = new Date().getFullYear();
    var disc = $('#footer-disclaimer');
    if (disc) disc.textContent = C.meta.disclaimer;
    window.addEventListener('hashchange', onRoute);
    if (!location.hash) location.hash = '#/inicio';
    render();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
