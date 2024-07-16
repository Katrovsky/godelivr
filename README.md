# Документация для курьеров / Courier Documentation

[English version below](#english)

## Русский

Этот репозиторий содержит документацию для курьеров, созданную с использованием VuePress. При коммите в ветку `main` происходит автоматический деплой на GitHub Pages (в ветку `gh-pages`).

### Требования

- Node.js (рекомендуется версия 18.16.0 или выше)
- Менеджер пакетов (npm, yarn или pnpm)

### Начало работы

1. Клонируйте репозиторий:
   ```
   git clone https://github.com/Katrovsky/katrovsky.github.io.git
   cd katrovsky.github.io
   ```

2. Установите зависимости:
   ```
   npm install
   ```

3. Запустите локальный сервер разработки:
   ```
   npm run docs:dev
   ```

4. Откройте браузер и перейдите по адресу `http://localhost:8080` для просмотра сайта.

### Структура проекта

```
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
└─ package.json
```

- `docs`: Директория с Markdown файлами документации
- `docs/.vuepress`: Конфигурация VuePress
- `docs/.vuepress/config.js`: Основной файл конфигурации

### Разработка

- Добавляйте новые страницы, создавая Markdown файлы в директории `docs`.
- Настройки темы и плагинов находятся в `docs/.vuepress/config.js`.

### Сборка и деплой

Для сборки проекта используйте команду:

```
npm run docs:build
```

Деплой происходит автоматически при пуше в ветку `main`. GitHub Actions собирает сайт и деплоит его в ветку `gh-pages`.

---

<a name="english"></a>
## English

This repository contains courier documentation created using VuePress. When commits are pushed to the `main` branch, the site is automatically deployed to GitHub Pages (in the `gh-pages` branch).

### Requirements

- Node.js (version 18.16.0 or higher recommended)
- Package manager (npm, yarn, or pnpm)

### Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/Katrovsky/katrovsky.github.io.git
   cd katrovsky.github.io
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the local development server:
   ```
   npm run docs:dev
   ```

4. Open your browser and go to `http://localhost:8080` to view the site.

### Project Structure

```
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
│  └─ README.md
└─ package.json
```

- `docs`: Directory containing documentation Markdown files
- `docs/.vuepress`: VuePress configuration
- `docs/.vuepress/config.js`: Main configuration file

### Development

- Add new pages by creating Markdown files in the `docs` directory.
- Theme and plugin settings can be found in `docs/.vuepress/config.js`.

### Build and Deployment

To build the project, use the command:

```
npm run docs:build
```

Deployment occurs automatically when pushing to the `main` branch. GitHub Actions builds the site and deploys it to the `gh-pages` branch.
