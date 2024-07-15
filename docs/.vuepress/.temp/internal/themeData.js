export const themeData = JSON.parse("{\"logo\":\"/images/logo.svg\",\"navbar\":[\"/\",\"/shopper\",\"/contacts\",\"/FAQ\",\"/about\"],\"repo\":\"Katrovsky/katrovsky.github.io\",\"repoLabel\":\"GitHub\",\"docsDir\":\"docs\",\"docsBranch\":\"main\",\"editLink\":true,\"editLinkText\":\"Редактировать эту страницу\",\"lastUpdated\":true,\"lastUpdatedText\":\"Последнее обновление\",\"contributors\":true,\"contributorsText\":\"Участники\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
