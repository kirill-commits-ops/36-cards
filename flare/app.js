(() => {
  "use strict";

  const SETS = [
    { id: "I", titleRu: "Часть I", titleEn: "Set I", subRu: "Лёгкое начало", subEn: "Warming up" },
    { id: "II", titleRu: "Часть II", titleEn: "Set II", subRu: "Глубже", subEn: "Going deeper" },
    { id: "III", titleRu: "Часть III", titleEn: "Set III", subRu: "Близость", subEn: "Closeness" },
  ];

  const QUESTIONS_EN = [
    "Given the choice of anyone in the world, whom would you want as a dinner guest?",
    "Would you like to be famous? In what way?",
    "Before making a telephone call, do you ever rehearse what you are going to say? Why?",
    "What would constitute a “perfect” day for you?",
    "When did you last sing to yourself? To someone else?",
    "If you were able to live to the age of 90 and retain either the mind or body of a 30-year-old for the last 60 years of your life, which would you want?",
    "Do you have a secret hunch about how you will die?",
    "Name three things you and your partner appear to have in common.",
    "For what in your life do you feel most grateful?",
    "If you could change anything about the way you were raised, what would it be?",
    "Take four minutes and tell your partner your life story in as much detail as possible.",
    "If you could wake up tomorrow having gained any one quality or ability, what would it be?",

    "If a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know?",
    "Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?",
    "What is the greatest accomplishment of your life?",
    "What do you value most in a friendship?",
    "What is your most treasured memory?",
    "What is your most terrible memory?",
    "If you knew that in one year you would die suddenly, would you change anything about the way you are now living? Why?",
    "What does friendship mean to you?",
    "What roles do love and affection play in your life?",
    "Alternate sharing something you consider a positive characteristic of your partner. Share a total of five items.",
    "How close and warm is your family? Do you feel your childhood was happier than most other people’s?",
    "How do you feel about your relationship with your mother?",

    "Make three true “we” statements each. For instance, “We are both in this room feeling…”",
    "Complete this sentence: “I wish I had someone with whom I could share…”",
    "If you were going to become a close friend with your partner, please share what would be important for him or her to know.",
    "Tell your partner what you like about them; be very honest this time, saying things that you might not say to someone you’ve just met.",
    "Share with your partner an embarrassing moment in your life.",
    "When did you last cry in front of another person? By yourself?",
    "Tell your partner something that you like about them already.",
    "What, if anything, is too serious to be joked about?",
    "If you were to die this evening with no opportunity to communicate with anyone, what would you most regret not having told someone? Why haven’t you told them yet?",
    "Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be? Why?",
    "Of all the people in your family, whose death would you find most disturbing? Why?",
    "Share a personal problem and ask your partner’s advice on how he or she might handle it. Also, ask your partner to reflect back to you how you seem to be feeling about the problem you have chosen.",
  ];

  const QUESTIONS_RU = [
    "Если бы ты мог пригласить на ужин любого человека в мире — кого бы ты выбрал?",
    "Хотел бы ты быть знаменитым? В каком смысле?",
    "Перед телефонным звонком ты иногда репетируешь, что скажешь? Почему?",
    "Каким был бы для тебя «идеальный» день?",
    "Когда ты в последний раз пел сам себе? А кому-то другому?",
    "Если бы ты мог дожить до 90 лет и сохранить либо разум, либо тело 30-летнего на последние 60 лет жизни — что бы ты выбрал?",
    "У тебя есть тайное предчувствие о том, как ты умрёшь?",
    "Назови три вещи, которые, как тебе кажется, у тебя и у партнёра общие.",
    "За что в своей жизни ты больше всего благодарен(-на)?",
    "Если бы ты мог изменить что-то одно в том, как тебя воспитывали, что бы это было?",
    "Возьми четыре минуты и расскажи партнёру свою жизнь как можно подробнее.",
    "Если бы завтра ты проснулся, получив одно качество или одну способность — что бы это было?",

    "Если бы хрустальный шар мог сказать тебе правду о тебе самом, твоей жизни, будущем или о чём угодно ещё — что бы ты захотел узнать?",
    "Есть ли что-то, о чём ты давно мечтаешь? Почему ты до сих пор этого не сделал?",
    "Какое самое большое достижение в твоей жизни?",
    "Что ты больше всего ценишь в дружбе?",
    "Какое твоё самое дорогое воспоминание?",
    "А самое тяжёлое воспоминание?",
    "Если бы ты знал, что через год внезапно умрёшь, изменил бы ты что-нибудь в том, как живёшь сейчас? Почему?",
    "Что для тебя значит дружба?",
    "Какую роль в твоей жизни играют любовь и нежность?",
    "По очереди называйте по одной положительной черте партнёра. Всего пять штук.",
    "Насколько близка и тепла твоя семья? Ты считаешь, что твоё детство было счастливее, чем у большинства людей?",
    "Что ты чувствуешь по отношению к своей маме?",

    "Сделайте по три истинных утверждения, начинающихся с «мы». Например: «Мы оба сейчас в этой комнате чувствуем…»",
    "Закончи фразу: «Я бы хотел иметь рядом человека, с которым мог бы разделить…»",
    "Если бы ты собирался стать близким другом своему партнёру — что важно ему или ей о тебе знать?",
    "Скажи партнёру, что тебе в нём или ней нравится. Будь по-настоящему честен — то, что не сказал бы случайному знакомому.",
    "Поделись с партнёром неловким моментом из своей жизни.",
    "Когда ты в последний раз плакал при другом человеке? А наедине с собой?",
    "Скажи партнёру что-то, что тебе уже сейчас в нём или ней нравится.",
    "Что, по-твоему, слишком серьёзно, чтобы об этом шутить?",
    "Если бы ты сегодня вечером умер, не успев ни с кем поговорить, о чём бы ты больше всего жалел, что не сказал? Почему ты ещё не сказал?",
    "Твой дом со всем имуществом загорается. Спасая близких и питомцев, ты успеваешь забрать одну последнюю вещь. Какую? Почему?",
    "Чья смерть в твоей семье была бы для тебя самой тяжёлой? Почему?",
    "Поделись личной проблемой и спроси, как партнёр поступил бы на твоём месте. А ещё попроси его описать, как, по его мнению, ты сам относишься к этой проблеме.",
  ];

  const COPY = {
    ru: {
      appTitle: "36 вопросов",
      appSubtitle: "чтобы стать ближе",
      start: "Начать",
      continue: "Продолжить",
      restart: "Начать сначала",
      langLabel: "Язык",
      setBadge: (id) => `Часть ${id}`,
      finalTitle: "Четыре минуты",
      finalBody: "Теперь смотрите друг другу в глаза. Молча. Без телефона.",
      finalStart: "Запустить таймер",
      finalDone: "Готово",
      finalAgain: "Пройти заново",
      hint: "свайп · передай телефон · слушай",
      setIntroNext: "Начать",
      scriptOf: (total) => `из ${total === 36 ? "тридцати шести" : total}`,
      scriptYourTurn: "твоя очередь",
      scriptPass: "передай телефон",
      tickerPass: "◦ ПЕРЕДАЙ · ГОВОРИ · СЛУШАЙ ◦",
      swipeLabel: "СВАЙП →",
      themeAuto: "⏾ авто",
      themeRose: "роза",
      themeMoss: "мох",
      themePlum: "слива",
    },
    en: {
      appTitle: "36 cards",
      appSubtitle: "to grow closer",
      start: "Start",
      continue: "Continue",
      restart: "Start over",
      langLabel: "Language",
      setBadge: (id) => `Set ${id}`,
      finalTitle: "Four minutes",
      finalBody: "Now look into each other's eyes. In silence. No phone.",
      finalStart: "Start timer",
      finalDone: "Done",
      finalAgain: "Start again",
      hint: "swipe · pass the phone · listen",
      setIntroNext: "Begin",
      scriptOf: (total) => `of ${total === 36 ? "thirty-six" : total}`,
      scriptYourTurn: "your turn",
      scriptPass: "pass the phone",
      tickerPass: "◦ PASS · SPEAK · LISTEN ◦",
      swipeLabel: "SWIPE →",
      themeAuto: "⏾ auto",
      themeRose: "rose",
      themeMoss: "moss",
      themePlum: "plum",
    },
  };

  // ───────── State ─────────
  const STORAGE_KEY = "dating-cards-v1";
  const THEME_KEY = "36q-theme";
  const TOTAL = 36;

  const defaultState = () => ({ lang: detectLang(), index: 0 });

  function detectLang() {
    const tg = window.Telegram?.WebApp;
    const tgLang = tg?.initDataUnsafe?.user?.language_code;
    const navLang = (navigator.language || "en").slice(0, 2);
    const lang = (tgLang || navLang || "en").toLowerCase();
    return lang === "ru" ? "ru" : "en";
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return defaultState();
      const parsed = JSON.parse(raw);
      return {
        lang: parsed.lang === "ru" || parsed.lang === "en" ? parsed.lang : detectLang(),
        index: clampIndex(parsed.index),
      };
    } catch {
      return defaultState();
    }
  }
  function clampIndex(n) {
    if (typeof n !== "number" || !Number.isFinite(n)) return 0;
    return Math.max(0, Math.min(TOTAL, Math.floor(n)));
  }
  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
  }

  let state = loadState();

  // ───────── Theme (Auto / Rose / Moss / Plum) ─────────
  // Per-set rotating bg only applies in "rose" (default) mode.
  const SET_ROTATING_BG = ["#FF4D6D", "#6B3FA0", "#0B8F7A"];
  const THEMES = {
    rose: {
      cycle: true,
      card: "#FFF6E9",
      ink: "#14060C",
      inkDim: "rgba(20, 6, 12, 0.72)",
      accent: "#FFD23F",
      accent2: "#FFF6E9",
      line: "rgba(20, 6, 12, 0.15)",
    },
    moss: {
      cycle: false,
      bg: "#0B8F7A",
      card: "#FFF6E9",
      ink: "#0A1410",
      inkDim: "rgba(10, 20, 16, 0.72)",
      accent: "#FFD23F",
      accent2: "#FFF6E9",
      line: "rgba(10, 20, 16, 0.15)",
    },
    plum: {
      cycle: false,
      bg: "#1D1025",
      card: "#FFE9BE",
      ink: "#14060C",
      inkDim: "rgba(20, 6, 12, 0.72)",
      accent: "#FF4D6D",
      accent2: "#FFE9BE",
      line: "rgba(20, 6, 12, 0.15)",
    },
  };

  let appTheme = localStorage.getItem(THEME_KEY) || "auto";
  const prefersDarkMq = window.matchMedia?.("(prefers-color-scheme: dark)");
  let prefersDark = !!prefersDarkMq?.matches;
  prefersDarkMq?.addEventListener?.("change", (e) => {
    prefersDark = e.matches;
    if (appTheme === "auto") applyTheme();
  });

  function resolveTheme() {
    if (appTheme === "auto") return prefersDark ? "plum" : "rose";
    return appTheme;
  }
  function applyTheme(forIndex) {
    const key = resolveTheme();
    const th = THEMES[key];
    const idx = typeof forIndex === "number" ? forIndex : state.index;
    const bg = th.cycle ? SET_ROTATING_BG[setOfIndex(Math.min(idx, TOTAL - 1))] : th.bg;
    const r = document.documentElement;
    r.style.setProperty("--bg", bg);
    r.style.setProperty("--card", th.card);
    r.style.setProperty("--ink", th.ink);
    r.style.setProperty("--ink-dim", th.inkDim);
    r.style.setProperty("--accent", th.accent);
    r.style.setProperty("--accent2", th.accent2);
    r.style.setProperty("--line", th.line);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", bg);
    if (tg) {
      try { tg.setHeaderColor(bg); tg.setBackgroundColor(bg); } catch {}
    }
  }
  function setTheme(next) {
    appTheme = next;
    try { localStorage.setItem(THEME_KEY, next); } catch {}
    applyTheme();
    // Refresh active screen so theme-dependent labels/dots update.
    render();
  }

  // ───────── Telegram integration ─────────
  const rawTg = window.Telegram?.WebApp;
  const inTelegram = !!rawTg && rawTg.platform && rawTg.platform !== "unknown";
  const tg = inTelegram ? rawTg : null;
  if (tg) {
    try {
      tg.ready();
      tg.expand();
      if (typeof tg.disableVerticalSwipes === "function") tg.disableVerticalSwipes();
    } catch {}
  }

  let iosHapticEl = null;
  function ensureIosHapticEl() {
    if (iosHapticEl) return iosHapticEl;
    const label = document.createElement("label");
    label.setAttribute("aria-hidden", "true");
    label.style.cssText = "position:absolute;width:0;height:0;overflow:hidden;opacity:0;pointer-events:none;";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.setAttribute("switch", "");
    input.tabIndex = -1;
    label.appendChild(input);
    document.body.appendChild(label);
    iosHapticEl = label;
    return label;
  }
  function haptic(kind) {
    const hf = tg?.HapticFeedback;
    if (hf) {
      try {
        if (kind === "select") hf.selectionChanged();
        else if (kind === "success") hf.notificationOccurred("success");
        else hf.impactOccurred(kind || "light");
        return;
      } catch {}
    }
    if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
      try {
        const ms = kind === "success" ? [10, 40, 10] : kind === "select" ? 5 : 12;
        navigator.vibrate(ms);
        return;
      } catch {}
    }
    try { ensureIosHapticEl().click(); } catch {}
  }

  function setBackButton(handler) {
    const bb = tg?.BackButton;
    if (!bb) return;
    try {
      bb.offClick(currentBack);
      currentBack = handler || null;
      if (handler) { bb.onClick(handler); bb.show(); }
      else { bb.hide(); }
    } catch {}
  }
  let currentBack = null;

  // ───────── Render ─────────
  const root = document.getElementById("app");
  const t = () => COPY[state.lang];
  const questions = () => state.lang === "ru" ? QUESTIONS_RU : QUESTIONS_EN;
  function setOfIndex(i) { return i < 12 ? 0 : i < 24 ? 1 : 2; }
  function isSetStart(i) { return i === 0 || i === 12 || i === 24; }

  let sessionStartedThisOpen = false;
  const introsShown = new Set();

  function render() {
    setBackButton(null);
    if (state.index >= TOTAL) { renderFinal(); return; }
    if (state.index === 0 && !sessionStartedThisOpen) { renderHome(); return; }
    if (isSetStart(state.index) && !introsShown.has(setOfIndex(state.index))) {
      renderSetIntro(setOfIndex(state.index));
      return;
    }
    renderCard(state.index);
  }

  function renderHome() {
    applyTheme(0);
    const c = t();
    const hasProgress = state.index > 0 && state.index < TOTAL;
    root.innerHTML = `
      <section class="screen home">
        <div class="home-bg-numeral" aria-hidden="true">36</div>
        <header class="home-head">
          <div class="lang-switch" role="group" aria-label="${escapeHtml(c.langLabel)}">
            <button data-lang="ru" class="lang-btn ${state.lang === "ru" ? "is-active" : ""}">RU</button>
            <button data-lang="en" class="lang-btn ${state.lang === "en" ? "is-active" : ""}">EN</button>
          </div>
        </header>
        <div class="home-body">
          <div class="brand">
            <div class="brand-mark">36<span class="brand-mark-suffix">questions</span></div>
            <h1 class="brand-title">${escapeHtml(c.appTitle)}</h1>
            <p class="brand-sub">${escapeHtml(c.appSubtitle)}</p>
          </div>
          <div class="home-actions">
            ${
              hasProgress
                ? `<button class="btn btn-primary" data-action="continue">${escapeHtml(c.continue)} · ${state.index + 1}/${TOTAL}</button>
                   <button class="btn btn-ghost" data-action="restart">${escapeHtml(c.restart)}</button>`
                : `<button class="btn btn-primary" data-action="start">${escapeHtml(c.start)} →</button>`
            }
          </div>
          <p class="home-hint">${escapeHtml(c.hint)}</p>
        </div>
      </section>
    `;

    root.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        if (lang !== "ru" && lang !== "en") return;
        state.lang = lang;
        saveState();
        haptic("select");
        renderHome();
      });
    });

    root.querySelector('[data-action="start"]')?.addEventListener("click", () => {
      state.index = 0;
      introsShown.clear();
      saveState();
      sessionStartedThisOpen = true;
      haptic("light");
      render();
    });
    root.querySelector('[data-action="continue"]')?.addEventListener("click", () => {
      sessionStartedThisOpen = true;
      haptic("light");
      render();
    });
    root.querySelector('[data-action="restart"]')?.addEventListener("click", () => {
      state.index = 0;
      introsShown.clear();
      saveState();
      sessionStartedThisOpen = true;
      haptic("light");
      render();
    });
  }

  function renderSetIntro(setIndex) {
    applyTheme(setIndex * 12);
    const c = t();
    const set = SETS[setIndex];
    const title = state.lang === "ru" ? set.titleRu : set.titleEn;
    const sub = state.lang === "ru" ? set.subRu : set.subEn;

    root.innerHTML = `
      <section class="screen set-intro">
        <div class="set-intro-numeral" aria-hidden="true">${escapeHtml(set.id)}</div>
        <div class="set-intro-inner">
          <div class="set-roman">${escapeHtml(set.id)}</div>
          <h2 class="set-title">${escapeHtml(title)}</h2>
          <p class="set-sub">${escapeHtml(sub)}</p>
          <button class="btn btn-primary set-cta" data-action="enter-set">${escapeHtml(c.setIntroNext)} →</button>
        </div>
      </section>
    `;
    introsShown.add(setIndex);

    root.querySelector('[data-action="enter-set"]').addEventListener("click", () => {
      haptic("light");
      renderCard(state.index);
    });

    setBackButton(() => {
      if (state.index === 0) {
        sessionStartedThisOpen = false;
        renderHome();
      } else {
        state.index = Math.max(0, state.index - 1);
        saveState();
        renderCard(state.index);
      }
    });
  }

  function renderCard(i) {
    applyTheme(i);
    const c = t();
    const set = SETS[setOfIndex(i)];
    const sub = state.lang === "ru" ? set.subRu : set.subEn;

    root.innerHTML = `
      <section class="screen card-screen">
        <div class="card-bg-numeral" aria-hidden="true">${escapeHtml(set.id)}</div>

        <header class="topbar">
          <div class="topbar-set">${escapeHtml(set.id)}/${escapeHtml(sub.toUpperCase())}</div>
          <div class="progress-dots" id="progressDots">${renderDots(i)}</div>
        </header>

        <div class="counter-row">
          <span class="counter-num">${String(i + 1).padStart(2, "0")}</span>
          <span class="counter-sub">${escapeHtml(c.scriptOf(TOTAL))}</span>
        </div>

        <div class="card-stack" id="cardStack">
          ${i - 1 >= 0 ? renderCardEl(i - 1, "prev") : ""}
          ${i + 1 < TOTAL ? renderCardEl(i + 1, "next") : ""}
          ${renderCardEl(i, "current")}
        </div>

        <footer class="footbar">
          <div class="ticker">${escapeHtml(c.tickerPass)}</div>
          <div class="nav-row">
            <button class="icon-btn" data-action="prev" aria-label="back">←</button>
            <button class="icon-btn icon-btn-home" data-action="home" aria-label="home">⌂</button>
            <button class="icon-btn" data-action="next" aria-label="next">→</button>
          </div>
          ${renderThemePicker()}
        </footer>
      </section>
    `;

    const stack = root.querySelector("#cardStack");
    const current = stack.querySelector(".card.is-current");
    attachSwipe(current, stack);

    root.querySelector('[data-action="next"]').addEventListener("click", () => goNext("button"));
    root.querySelector('[data-action="prev"]').addEventListener("click", () => goPrev("button"));
    root.querySelector('[data-action="home"]').addEventListener("click", () => {
      sessionStartedThisOpen = false;
      saveState();
      haptic("light");
      renderHome();
    });
    bindThemePicker();

    setBackButton(() => goPrev("back"));
  }

  function renderCardEl(i, kind) {
    const c = t();
    const set = SETS[setOfIndex(i)];
    const sub = state.lang === "ru" ? set.subRu : set.subEn;
    const text = questions()[i];
    const len = text.length > 120 ? "long" : text.length > 80 ? "medium" : "short";
    const scriptTag = kind === "current" ? c.scriptYourTurn : sub.toLowerCase();
    return `
      <article class="card is-${kind}" data-index="${i}">
        <div class="card-head">
          <div class="q-badge">Q.${String(i + 1).padStart(2, "0")}</div>
          <div class="q-script-tag">${escapeHtml(sub.toLowerCase())}</div>
        </div>
        <div class="card-body">
          <p class="card-text" data-len="${len}">${escapeHtml(text)}</p>
        </div>
        <div class="card-foot">
          <span>${escapeHtml(c.swipeLabel)}</span>
          <span class="card-foot-script">↷ ${escapeHtml(scriptTag)}</span>
        </div>
      </article>
    `;
  }

  function renderDots(current) {
    let html = "";
    for (let i = 0; i < TOTAL; i++) {
      const cls = i === current ? "dot current" : i < current ? "dot done" : "dot";
      html += `<div class="${cls}"></div>`;
    }
    return html;
  }

  function renderThemePicker() {
    const c = t();
    const options = [
      { k: "auto", label: c.themeAuto },
      { k: "rose", label: c.themeRose },
      { k: "moss", label: c.themeMoss },
      { k: "plum", label: c.themePlum },
    ];
    return `
      <div class="theme-picker" role="group" aria-label="theme">
        ${options.map(o => `<button class="theme-btn ${appTheme === o.k ? "is-active" : ""}" data-theme="${o.k}">${escapeHtml(o.label)}</button>`).join("")}
      </div>
    `;
  }

  function bindThemePicker() {
    root.querySelectorAll(".theme-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const k = btn.dataset.theme;
        if (!k) return;
        haptic("select");
        setTheme(k);
      });
    });
  }

  function attachSwipe(el, stack) {
    if (!el) return;
    let startX = 0, startY = 0, dx = 0, dy = 0;
    let dragging = false, pointerId = null;
    const threshold = 90;
    const lockAxisAt = 8;
    let axisLocked = null;
    let peekDir = 0;

    const onDown = (ev) => {
      if (ev.pointerType === "mouse" && ev.button !== 0) return;
      pointerId = ev.pointerId;
      dragging = true;
      axisLocked = null;
      startX = ev.clientX;
      startY = ev.clientY;
      dx = 0; dy = 0;
      try { el.setPointerCapture?.(pointerId); } catch {}
      el.classList.add("is-dragging");
    };
    const onMove = (ev) => {
      if (!dragging || ev.pointerId !== pointerId) return;
      dx = ev.clientX - startX;
      dy = ev.clientY - startY;
      if (!axisLocked && (Math.abs(dx) > lockAxisAt || Math.abs(dy) > lockAxisAt)) {
        axisLocked = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      }
      if (axisLocked === "x") {
        ev.preventDefault?.();
        const rot = dx / 12;
        const scale = 1 - Math.abs(dx) / 1200;
        el.style.transform = `rotateZ(${rot}deg) translateX(${dx * 0.7}px) scale(${scale})`;
        el.style.opacity = String(1 - Math.min(Math.abs(dx) / 500, 0.3));
        const dir = dx < 0 ? -1 : dx > 0 ? 1 : 0;
        if (dir !== peekDir && stack) {
          peekDir = dir;
          stack.classList.toggle("peek-next", dir < 0);
          stack.classList.toggle("peek-prev", dir > 0);
        }
      }
    };
    const finish = (ev) => {
      if (!dragging) return;
      dragging = false;
      try { el.releasePointerCapture?.(pointerId); } catch {}
      el.classList.remove("is-dragging");
      const passed = Math.abs(dx) > threshold && axisLocked === "x";
      if (passed) {
        const dir = dx < 0 ? -1 : 1;
        flyOut(el, dir);
        setTimeout(() => {
          if (dir < 0) goNext("swipe");
          else goPrev("swipe");
        }, 280);
      } else {
        el.style.transform = "";
        el.style.opacity = "";
        if (stack) {
          stack.classList.remove("peek-prev", "peek-next");
          peekDir = 0;
        }
      }
      pointerId = null;
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", finish);
    el.addEventListener("pointercancel", finish);
    el.addEventListener("touchmove", (ev) => {
      if (axisLocked === "x") ev.preventDefault();
    }, { passive: false });
  }

  function flyOut(el, dir) {
    el.style.transition = "transform 0.4s ease-in, opacity 0.4s ease";
    el.style.transform = `rotateZ(${dir * 35}deg) translate(${dir * 130}vw, -40vh) scale(0.7)`;
    el.style.opacity = "0";
  }

  function goNext(_source) {
    if (state.index >= TOTAL) return;
    state.index += 1;
    saveState();
    haptic("light");
    requestAnimationFrame(() => render());
  }

  function goPrev(_source) {
    if (state.index <= 0) {
      sessionStartedThisOpen = false;
      renderHome();
      return;
    }
    state.index -= 1;
    saveState();
    haptic("light");
    if (isSetStart(state.index) && !introsShown.has(setOfIndex(state.index))) {
      renderSetIntro(setOfIndex(state.index));
    } else {
      renderCard(state.index);
    }
  }

  // ───────── Final timer ─────────
  const FINAL_SECONDS = 4 * 60;
  let timerInterval = null;
  let timerEndsAt = 0;
  let timerRunning = false;

  function renderFinal() {
    applyTheme(TOTAL - 1);
    const c = t();
    root.innerHTML = `
      <section class="screen final">
        <div class="final-bg-numeral" aria-hidden="true">04:00</div>
        <div class="final-inner">
          <h2 class="final-title">${escapeHtml(c.finalTitle)}</h2>
          <p class="final-body">${escapeHtml(c.finalBody)}</p>
          <div class="timer" id="timer">04:00</div>
          <div class="final-actions">
            <button class="btn btn-primary" id="timerStart">${escapeHtml(c.finalStart)}</button>
            <button class="btn btn-ghost" id="timerAgain">${escapeHtml(c.finalAgain)}</button>
          </div>
        </div>
      </section>
    `;

    const display = root.querySelector("#timer");
    const startBtn = root.querySelector("#timerStart");
    const againBtn = root.querySelector("#timerAgain");

    const reset = () => {
      stopTimer();
      display.textContent = formatTime(FINAL_SECONDS);
      startBtn.textContent = c.finalStart;
      startBtn.classList.remove("is-running");
    };
    reset();

    startBtn.addEventListener("click", () => {
      if (timerRunning) {
        stopTimer();
        startBtn.textContent = c.finalStart;
        startBtn.classList.remove("is-running");
        return;
      }
      timerEndsAt = Date.now() + FINAL_SECONDS * 1000;
      timerRunning = true;
      startBtn.textContent = c.finalDone;
      startBtn.classList.add("is-running");
      tick();
      timerInterval = setInterval(tick, 250);
      haptic("success");

      function tick() {
        const remaining = Math.max(0, Math.round((timerEndsAt - Date.now()) / 1000));
        display.textContent = formatTime(remaining);
        if (remaining <= 0) {
          stopTimer();
          startBtn.textContent = c.finalStart;
          startBtn.classList.remove("is-running");
          haptic("success");
        }
      }
    });

    againBtn.addEventListener("click", () => {
      stopTimer();
      state.index = 0;
      introsShown.clear();
      sessionStartedThisOpen = false;
      saveState();
      haptic("light");
      renderHome();
    });

    setBackButton(() => {
      stopTimer();
      state.index = TOTAL - 1;
      saveState();
      renderCard(state.index);
    });
  }

  function stopTimer() {
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
    timerRunning = false;
  }
  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  // ───────── Util ─────────
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  document.addEventListener("keydown", (ev) => {
    if (ev.key === "ArrowRight") goNext("key");
    else if (ev.key === "ArrowLeft") goPrev("key");
  });

  applyTheme();
  renderHome();
})();
