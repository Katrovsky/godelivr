import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import path from 'path'

export default defineUserConfig({
  lang: 'ru-RU',

  title: 'Go, Delivery',
  description: 'Руководство курьеров (в разработке)',

  theme: defaultTheme({
    logo: '/images/logo.svg', // Логотип для светлой темы
    logoDark: '/images/dark-logo.svg', // Логотип для тёмной темы

    navbar: ['/', '/shopper', '/contacts', '/FAQ', '/about'],

    // Настройки для редактирования на GitHub
    repo: 'Katrovsky/katrovsky.github.io',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    docsBranch: 'main',
    editLink: true,
    editLinkText: 'Редактировать эту страницу',
    lastUpdated: true,
    lastUpdatedText: 'Последнее обновление',

    // Дополнительные настройки темы
    contributors: true,
    contributorsText: 'Участники',

    // Плавный скроллинг
    smoothScroll: true,

    // Добавляем локализацию
    locales: {
      '/': {
        selectLanguageName: 'Русский',
        notFound: [
          "Упс! Кажется, эта страница уехала на другой адрес.",
          "404 - Страница не найдена. Может, она отправилась на обед?",
          "Здесь пусто, как в холодильнике перед зарплатой.",
          "Ой! Эта страница потерялась где-то между складом и пунктом выдачи.",
          "404 - Доставка не удалась. Адрес страницы не существует.",
          "Кажется, вы свернули не туда. Давайте вернемся на главную?",
          "Эта страница исчезла быстрее, чем горячая пицца в офисе.",
          "Ищете что-то конкретное? Мы тоже, но эту страницу найти не можем.",
          "Извините, но этот заказ отменен. Страница не доступна.",
          "404 - Страница временно недоступна. Возможно, она на карантине?",
          "Вы попали в цифровой тупик. Разворачивайтесь!",
          "Эта страница сейчас недоступна. Может, она на перерыве?",
          "Ошибка 404: Страница съехала с указанного адреса.",
          "Похоже, вы пытаетесь доставить запрос на несуществующий адрес.",
          "Страница потерялась в пути. Наши курьеры уже ищут её!"
        ],
        backToHome: 'Вернуться на главную',
        openInNewWindow: 'Открыть в новом окне',
        toggleColorMode: 'Переключить цветовую схему',
        toggleSidebar: 'Переключить боковую панель'
      }
    },
  }),

  bundler: viteBundler(),

  // Настройки для кастомного домена
  base: '/',

  // Дополнительные метаданные для SEO
  head: [
    ['link', { rel: 'icon', href: '/images/icon.svg' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  // Добавляем использование пользовательских стилей SCSS
  alias: {
    '@theme/styles/index.scss': path.resolve(__dirname, './styles/index.scss'),
  },
})