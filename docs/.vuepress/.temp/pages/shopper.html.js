import comp from "/home/key/Documents/SITE_BUILDING/katrovsky.github.io/docs/.vuepress/.temp/pages/shopper.html.vue"
const data = JSON.parse("{\"path\":\"/shopper.html\",\"title\":\"Shopper\",\"lang\":\"ru-RU\",\"frontmatter\":{\"title\":\"Shopper\"},\"headers\":[],\"git\":{\"updatedTime\":1721082350000,\"contributors\":[{\"name\":\"Katrovsky\",\"email\":\"katrovskykirill@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"shopper.md\"}")
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
