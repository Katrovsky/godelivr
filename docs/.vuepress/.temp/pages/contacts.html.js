import comp from "/home/key/Documents/SITE_BUILDING/katrovsky.github.io/docs/.vuepress/.temp/pages/contacts.html.vue"
const data = JSON.parse("{\"path\":\"/contacts.html\",\"title\":\"Контакты\",\"lang\":\"ru-RU\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Горячая линия\",\"slug\":\"горячая-линия\",\"link\":\"#горячая-линия\",\"children\":[]},{\"level\":2,\"title\":\"Сайты\",\"slug\":\"саиты\",\"link\":\"#саиты\",\"children\":[]}],\"git\":{\"updatedTime\":1721067533000,\"contributors\":[{\"name\":\"Katrovsky\",\"email\":\"katrovskykirill@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"contacts.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
