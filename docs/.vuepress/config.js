import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import path from 'path'

export default defineUserConfig({
  lang: 'ru-RU',

  title: 'Go, Delivery',
  description: 'Руководство курьеров (в разработке)',

  theme: defaultTheme({
    logo: '/images/logo.svg',

    navbar: ['/', '/shopper', '/contacts', '/FAQ', '/about'],

    // Настройки для редактирования на GitHub
    repo: 'Katrovsky/katrovsky.github.io', // Ссылка на репозиторий
    repoLabel: 'GitHub', // Текст ссылки на репозиторий
    docsDir: 'docs', // Директория с документацией в репозитории
    docsBranch: 'main', // Ветка репозитория
    editLink: true, // Включить ссылку на редактирование
    editLinkText: 'Редактировать эту страницу', // Текст ссылки на редактирование
    lastUpdated: true, // Показывать время последнего обновления
    lastUpdatedText: 'Последнее обновление', // Текст для времени последнего обновления

    // Дополнительные настройки темы
    contributors: true, // Показывать список участников
    contributorsText: 'Участники', // Текст для списка участников

    // Плавный скроллинг
    smoothScroll: true,
  }),

  bundler: viteBundler(),

  // Настройки для кастомного домена
  base: '/', // Базовый путь для сайта (для кастомного домена используем корневой путь)

  // Дополнительные метаданные для SEO
  head: [
    ['link', { rel: 'icon', href: '/images/icon.svg' }], // Favicon
    ['meta', { name: 'theme-color', content: '#3eaf7c' }], // Цвет темы для мобильных браузеров
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  // Добавляем использование пользовательских стилей SCSS
  alias: {
    '@theme/styles/index.scss': path.resolve(__dirname, './styles/index.scss'),
  },
})
