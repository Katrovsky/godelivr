export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/FAQ.html", { loader: () => import(/* webpackChunkName: "FAQ.html" */"/home/key/Documents/SITE_BUILDING/katrovsky.github.io/docs/.vuepress/.temp/pages/FAQ.html.js"), meta: {"title":"ЧаВо"} }],
  ["/about.html", { loader: () => import(/* webpackChunkName: "about.html" */"/home/key/Documents/SITE_BUILDING/katrovsky.github.io/docs/.vuepress/.temp/pages/about.html.js"), meta: {"title":"О сайте"} }],
  ["/contacts.html", { loader: () => import(/* webpackChunkName: "contacts.html" */"/home/key/Documents/SITE_BUILDING/katrovsky.github.io/docs/.vuepress/.temp/pages/contacts.html.js"), meta: {"title":"Контакты"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/home/key/Documents/SITE_BUILDING/katrovsky.github.io/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Быстрый старт"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/key/Documents/SITE_BUILDING/katrovsky.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Справочник курьера"} }],
  ["/shopper.html", { loader: () => import(/* webpackChunkName: "shopper.html" */"/home/key/Documents/SITE_BUILDING/katrovsky.github.io/docs/.vuepress/.temp/pages/shopper.html.js"), meta: {"title":"Shopper"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/key/Documents/SITE_BUILDING/katrovsky.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
