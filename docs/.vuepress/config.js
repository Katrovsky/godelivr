import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'ru-RU',

  title: 'Go, Delivery',
  description: 'Руководство курьеров (в разработке)',

  theme: defaultTheme({
    logo: '',

    navbar: ['/', '/contacts', '/about'],
  }),

  bundler: viteBundler(),
})
