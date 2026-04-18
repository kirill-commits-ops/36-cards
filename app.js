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
      appSubtitle: "Чтобы стать ближе. Один телефон, два сердца.",
      start: "Начать",
      continue: "Продолжить",
      restart: "Начать сначала",
      langLabel: "Язык",
      setOfText: (n, total) => `Вопрос ${n} из ${total}`,
      setBadge: (id) => `Часть ${id}`,
      finalTitle: "Четыре минуты",
      finalBody:
        "Теперь смотрите друг другу в глаза четыре минуты. Молча. Без телефона.",
      finalStart: "Запустить таймер",
      finalDone: "Готово",
      finalAgain: "Пройти заново",
      hint: "Свайп влево — следующий вопрос. Свайп вправо — назад.",
      resumeQuestion: "Продолжить с вопроса",
      cancel: "Отмена",
      setIntroNext: "К первому вопросу",
    },
    en: {
      appTitle: "36 Cards",
      appSubtitle: "To grow closer. One phone, two hearts.",
      start: "Start",
      continue: "Continue",
      restart: "Start over",
      langLabel: "Language",
      setOfText: (n, total) => `Question ${n} of ${total}`,
      setBadge: (id) => `Set ${id}`,
      finalTitle: "Four minutes",
      finalBody:
        "Now look into each other’s eyes for four minutes. In silence. No phone.",
      finalStart: "Start timer",
      finalDone: "Done",
      finalAgain: "Start again",
      hint: "Swipe left for next. Swipe right to go back.",
      resumeQuestion: "Resume from question",
      cancel: "Cancel",
      setIntroNext: "To first question",
    },
  };

  // ---------- State ----------
  const STORAGE_KEY = "dating-cards-v1";
  const TOTAL = 36;

  const defaultState = () => ({
    lang: detectLang(),
    index: 0, // 0..36 (36 = final)
  });

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
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }

  let state = loadState();

  // ---------- Telegram integration ----------
  // The SDK script loads on any page, so window.Telegram.WebApp always
  // exists. `platform === "unknown"` means we're in a regular browser, not
  // inside the Telegram client — in that case TG methods are silent no-ops
  // and we should fall through to web fallbacks (Vibration API, iOS hack).
  const rawTg = window.Telegram?.WebApp;
  const inTelegram = !!rawTg && rawTg.platform && rawTg.platform !== "unknown";
  const tg = inTelegram ? rawTg : null;
  if (tg) {
    try {
      tg.ready();
      tg.expand();
      if (typeof tg.disableVerticalSwipes === "function") tg.disableVerticalSwipes();
      tg.setHeaderColor("#1a0f12");
      tg.setBackgroundColor("#1a0f12");
    } catch {}
  }

  // iOS Safari has no Web Vibration API. Trick: a hidden <label> wrapping
  // an <input type="checkbox" switch> plays a system haptic on click in
  // iOS 17.4+ Safari (no-op on older iOS / non-Safari).
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
    // 1) Telegram in-app haptics
    const hf = tg?.HapticFeedback;
    if (hf) {
      try {
        if (kind === "select") hf.selectionChanged();
        else if (kind === "success") hf.notificationOccurred("success");
        else hf.impactOccurred(kind || "light");
        return;
      } catch {}
    }
    // 2) Web Vibration API (Android Chrome, some Telegram WebViews)
    if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
      try {
        const ms = kind === "success" ? [10, 40, 10] : kind === "select" ? 5 : 12;
        navigator.vibrate(ms);
        return;
      } catch {}
    }
    // 3) iOS Safari 17.4+ haptic via hidden switch input
    try {
      ensureIosHapticEl().click();
    } catch {}
  }

  function setBackButton(handler) {
    const bb = tg?.BackButton;
    if (!bb) return;
    try {
      bb.offClick(currentBack);
      currentBack = handler || null;
      if (handler) {
        bb.onClick(handler);
        bb.show();
      } else {
        bb.hide();
      }
    } catch {}
  }
  let currentBack = null;

  // ---------- Render ----------
  const root = document.getElementById("app");

  function t() {
    return COPY[state.lang];
  }

  function questions() {
    return state.lang === "ru" ? QUESTIONS_RU : QUESTIONS_EN;
  }

  function setOfIndex(i) {
    if (i < 12) return 0;
    if (i < 24) return 1;
    return 2;
  }

  function isSetStart(i) {
    return i === 0 || i === 12 || i === 24;
  }

  function render() {
    setBackButton(null);

    if (state.index >= TOTAL) {
      renderFinal();
      return;
    }

    if (state.index === 0 && !sessionStartedThisOpen) {
      renderHome();
      return;
    }

    if (isSetStart(state.index)) {
      renderSetIntro(setOfIndex(state.index));
      return;
    }

    renderCard(state.index);
  }

  // True after user has tapped "Start" or "Continue" this app open.
  // Lets us know whether to show the home screen or jump straight in.
  let sessionStartedThisOpen = false;
  // Tracks set intros we've already shown this session, so going back from
  // card #1 doesn't re-trigger the intro for Set I.
  const introsShown = new Set();

  function renderHome() {
    const c = t();
    const hasProgress = state.index > 0 && state.index < TOTAL;
    root.innerHTML = `
      <section class="screen home">
        <header class="home-head">
          <div class="lang-switch" role="group" aria-label="${escapeHtml(c.langLabel)}">
            <button data-lang="ru" class="lang-btn ${state.lang === "ru" ? "is-active" : ""}">RU</button>
            <button data-lang="en" class="lang-btn ${state.lang === "en" ? "is-active" : ""}">EN</button>
          </div>
        </header>
        <div class="home-body">
          <div class="brand">
            <div class="brand-mark">36</div>
            <h1 class="brand-title">${escapeHtml(c.appTitle)}</h1>
            <p class="brand-sub">${escapeHtml(c.appSubtitle)}</p>
          </div>
          <div class="home-actions">
            ${
              hasProgress
                ? `<button class="btn btn-primary" data-action="continue">${escapeHtml(c.continue)} · ${state.index + 1}/${TOTAL}</button>
                   <button class="btn btn-ghost" data-action="restart">${escapeHtml(c.restart)}</button>`
                : `<button class="btn btn-primary" data-action="start">${escapeHtml(c.start)}</button>`
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
    const c = t();
    const set = SETS[setIndex];
    const title = state.lang === "ru" ? set.titleRu : set.titleEn;
    const sub = state.lang === "ru" ? set.subRu : set.subEn;

    root.innerHTML = `
      <section class="screen set-intro">
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
    const c = t();
    const set = SETS[setOfIndex(i)];
    const setLabel = c.setBadge(set.id);
    const progress = ((i + 1) / TOTAL) * 100;

    root.innerHTML = `
      <section class="screen card-screen">
        <header class="topbar">
          <div class="topbar-meta">
            <span class="set-badge">${escapeHtml(setLabel)}</span>
            <span class="topbar-counter">${escapeHtml(c.setOfText(i + 1, TOTAL))}</span>
          </div>
          <div class="progress"><div class="progress-fill" style="width:${progress}%"></div></div>
        </header>

        <div class="card-stack" id="cardStack">
          ${renderCardEl(i, "current")}
          ${i + 1 < TOTAL ? renderCardEl(i + 1, "next") : ""}
        </div>

        <footer class="footbar">
          <button class="icon-btn" data-action="prev" aria-label="back">←</button>
          <button class="icon-btn icon-btn-home" data-action="home" aria-label="home">⌂</button>
          <button class="icon-btn" data-action="next" aria-label="next">→</button>
        </footer>
      </section>
    `;

    const stack = root.querySelector("#cardStack");
    const current = stack.querySelector(".card.is-current");
    attachSwipe(current);

    root.querySelector('[data-action="next"]').addEventListener("click", () => goNext("button"));
    root.querySelector('[data-action="prev"]').addEventListener("click", () => goPrev("button"));
    root.querySelector('[data-action="home"]').addEventListener("click", () => {
      sessionStartedThisOpen = false;
      saveState();
      haptic("light");
      renderHome();
    });

    setBackButton(() => goPrev("back"));
  }

  function renderCardEl(i, kind) {
    const set = SETS[setOfIndex(i)];
    const text = questions()[i];
    return `
      <article class="card is-${kind}" data-index="${i}">
        <div class="card-corner card-corner-tl">${escapeHtml(set.id)}</div>
        <div class="card-corner card-corner-br">${i + 1}</div>
        <div class="card-body">
          <p class="card-text">${escapeHtml(text)}</p>
        </div>
      </article>
    `;
  }

  function attachSwipe(el) {
    if (!el) return;
    let startX = 0;
    let startY = 0;
    let dx = 0;
    let dy = 0;
    let dragging = false;
    let pointerId = null;
    const threshold = 90;
    const lockAxisAt = 8;
    let axisLocked = null; // null | "x" | "y"

    const onDown = (ev) => {
      if (ev.pointerType === "mouse" && ev.button !== 0) return;
      pointerId = ev.pointerId;
      dragging = true;
      axisLocked = null;
      startX = ev.clientX;
      startY = ev.clientY;
      dx = 0;
      dy = 0;
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
        const rot = dx / 25;
        el.style.transform = `translateX(${dx}px) rotate(${rot}deg)`;
        el.style.opacity = String(1 - Math.min(Math.abs(dx) / 400, 0.4));
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
        }, 220);
      } else {
        el.style.transform = "";
        el.style.opacity = "";
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
    const offscreen = dir < 0 ? "-120vw" : "120vw";
    el.style.transition = "transform .25s ease-out, opacity .25s ease-out";
    el.style.transform = `translateX(${offscreen}) rotate(${dir * 18}deg)`;
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

  // ---------- Final timer ----------
  const FINAL_SECONDS = 4 * 60;
  let timerInterval = null;
  let timerEndsAt = 0;
  let timerRunning = false;

  function renderFinal() {
    const c = t();
    root.innerHTML = `
      <section class="screen final">
        <div class="final-inner">
          <div class="final-glow"></div>
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
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    timerRunning = false;
  }

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  // ---------- Util ----------
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Keyboard support (desktop browser preview)
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "ArrowRight") goNext("key");
    else if (ev.key === "ArrowLeft") goPrev("key");
  });

  // Initial render
  if (state.index === 0 || state.index >= TOTAL) {
    renderHome();
  } else {
    renderHome(); // show resume choice
  }
})();
