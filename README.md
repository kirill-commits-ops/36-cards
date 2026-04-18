# 36 Cards

Карточки с 36 вопросами «to fall in love» для свидания. Один телефон, передаёте друг другу. Свайп влево — следующий вопрос, вправо — назад. После 36-го вопроса — 4-минутный таймер «смотрите друг другу в глаза».

Работает в двух режимах:
- **PWA** — открывается в Safari/Chrome на iPhone/Android, можно «Добавить на главный экран».
- **Telegram Mini App** — открывается прямо из бота.

Никакого бэкенда, прогресс хранится в `localStorage`.

---

## Локальная проверка

```bash
cd DatingCards
python3 -m http.server 8000
```

Открой `http://localhost:8000` в браузере. Чтобы проверить с телефона в той же Wi-Fi сети — узнай IP мака (`ipconfig getifaddr en0`) и открой `http://<IP>:8000` в Safari на iPhone.

> Telegram-фичи (haptic feedback, BackButton) работают только внутри Telegram, в браузере просто молча игнорируются.

---

## Деплой на GitHub Pages

1. Создай новый публичный репозиторий, например `dating-cards`.
2. Залей содержимое папки `DatingCards/` в корень репо:
   ```bash
   cd DatingCards
   git init
   git add .
   git commit -m "Initial 36 cards app"
   git branch -M main
   git remote add origin git@github.com:<твой-username>/dating-cards.git
   git push -u origin main
   ```
3. На GitHub: **Settings → Pages → Source: Deploy from a branch → main / root → Save**.
4. Через ~1 минуту получишь URL вида `https://<username>.github.io/dating-cards/`.

Открой этот URL в Safari на iPhone → **Поделиться → Добавить на главный экран**. Иконка появится среди приложений, открывается на полный экран без браузерных панелей.

---

## Подключение к Telegram

1. В Telegram открой [@BotFather](https://t.me/BotFather), команда `/newbot`. Введи имя и username (должен заканчиваться на `bot`). Получишь токен — он не понадобится для Mini App, но сохрани.
2. В чате с BotFather: `/newapp` → выбери созданного бота.
3. Заполни:
   - **Title:** `36 Cards`
   - **Description:** `36 questions to grow closer.`
   - **Photo:** загрузи `icon-512.png` (640×360 тоже подойдёт — BotFather попросит)
   - **GIF/Demo:** пропусти (`/empty`)
   - **Web App URL:** твой URL с GitHub Pages, например `https://<username>.github.io/dating-cards/`
   - **Short name:** `cards` (латиница, будет в URL: `t.me/<bot>/cards`)
4. Готово. Откройте бота, нажмите **Start**, появится кнопка для запуска Mini App.

### Кнопка меню (опционально, чтобы открывать в один тап)

В BotFather: `/mybots` → бот → **Bot Settings → Menu Button → Configure menu button** → введи текст (`Открыть карточки`) и ту же ссылку Mini App.

---

## Файлы

| Файл | Что внутри |
|---|---|
| `index.html` | Точка входа, подключает Telegram WebApp SDK и PWA-манифест. |
| `app.js` | Вся логика: вопросы (RU+EN), стейт-машина, свайпы, таймер, сохранение в localStorage. |
| `styles.css` | Тёмная винно-кремовая палитра, серифный шрифт Cormorant Garamond. |
| `manifest.webmanifest` | PWA-манифест для «Добавить на главный экран». |
| `icon.svg` / `icon-192.png` / `icon-512.png` | Иконки. SVG можно отредактировать; PNG генерятся через `qlmanage -t -s 512 -o . icon.svg`. |

---

## Кастомизация

- **Поменять вопросы:** массивы `QUESTIONS_RU` и `QUESTIONS_EN` в начале `app.js`. Порядок и количество должны совпадать.
- **Поменять цвета:** CSS-переменные в `:root` в `styles.css`.
- **Поменять длительность финального таймера:** константа `FINAL_SECONDS` в `app.js`.
- **Сбросить прогресс на телефоне:** на главном экране нажми «Начать сначала», либо очисти данные сайта в настройках Safari.
