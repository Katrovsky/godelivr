import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import path from 'path'

export default defineUserConfig({
  lang: 'ru-RU',

  title: 'Go, Delivery',
  description: 'Руководство курьеров (в разработке)',

  theme: defaultTheme({
    logo: '/images/logo.svg', // Логотип (светлая тема)
    logoDark: '/images/dark-logo.svg', // Логотип (тёмная тема)

    navbar: ['/', '/shopper', '/contacts', '/FAQ', '/about'],

    // GitHub настройки
    repo: 'Katrovsky/katrovsky.github.io',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    docsBranch: 'main',
    editLink: true,
    editLinkText: 'Редактировать эту страницу',
    lastUpdated: true,
    lastUpdatedText: 'Последнее обновление',

    // Дополнительные настройки
    contributors: true,
    contributorsText: 'Участники',

    smoothScroll: true,

    // Локализация
    locales: {
      '/': {
        selectLanguageName: 'Русский',
        notFound: [
          "Упс! Кажется, эта страница уехала на другой адрес.",
          "Страница не найдена. Может, она отправилась на обед?",
          "Здесь пусто, как в холодильнике перед зарплатой.",
          "Ой! Эта страница потерялась где-то между складом и пунктом выдачи.",
          "Доставка не удалась. Адрес страницы не существует.",
          "Кажется, вы свернули не туда. Давайте вернемся на главную?",
          "Страница где-то заблудилась. Мы её уже ищем.",
          "Ищете что-то конкретное? Мы тоже, но эту страницу найти не можем.",
          "Извините, но этот заказ отменен. Страница не доступна.",
          "Вы попали в цифровой тупик. Разворачивайтесь!",
          "Эта страница сейчас недоступна. Может, она на перерыве?",
          "Страница съехала с указанного адреса.",
          "Похоже, вы пытаетесь доставить запрос на несуществующий адрес.",
          "Страница потерялась в пути. Наши курьеры уже ищут её!",
          "Страница застряла в пробке. Пожалуйста, подождите... или закажите что-нибудь еще.",
          "Страница не найдена. Возможно, она отправилась на поиски приключений?",
          "Ой! Кажется, наш виртуальный курьер доставил вас не по адресу.",
          "Страница застряла в лифте. Мы уже вызвали техников!",
          "Эта страница ушла на обед и забыла вернуться. Мы уже звоним ей.",
          "Извините, но эта страница сейчас занята доставкой других страниц.",
          "Страница уехала на своем самокате. Мы уже отправили за ней другого курьера.",
          "Страница исчезла, как деньги в конце месяца. Но не беда, у нас много других идей!",
        ],
        backToHome: 'Вернуться на главную',
        openInNewWindow: 'Открыть в новом окне',
        toggleColorMode: 'Переключить цветовую схему',
        toggleSidebar: 'Переключить боковую панель'
      }
    }
  }),

  bundler: viteBundler(),

  // Настройка для кастомного домена
  base: '/',

  // SEO метаданные
  head: [
    ['link', { rel: 'icon', href: '/images/icon.svg' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  // Пользовательские стили
  alias: {
    '@theme/styles/index.scss': path.resolve(__dirname, './styles/index.scss')
  }
})