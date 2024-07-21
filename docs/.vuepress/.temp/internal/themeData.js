export const themeData = JSON.parse("{\"logo\":\"/images/logo.svg\",\"logoDark\":\"/images/dark-logo.svg\",\"navbar\":[\"/\",\"/shopper\",\"/contacts\",\"/FAQ\",\"/about\"],\"repo\":\"Katrovsky/katrovsky.github.io\",\"repoLabel\":\"GitHub\",\"docsDir\":\"docs\",\"docsBranch\":\"main\",\"editLink\":true,\"editLinkText\":\"Редактировать эту страницу\",\"lastUpdated\":true,\"lastUpdatedText\":\"Последнее обновление\",\"contributors\":true,\"contributorsText\":\"Участники\",\"smoothScroll\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"Русский\",\"notFound\":[\"Упс! Кажется, эта страница уехала на другой адрес.\",\"404 - Страница не найдена. Может, она отправилась на обед?\",\"Здесь пусто, как в холодильнике перед зарплатой.\",\"Ой! Эта страница потерялась где-то между складом и пунктом выдачи.\",\"404 - Доставка не удалась. Адрес страницы не существует.\",\"Кажется, вы свернули не туда. Давайте вернемся на главную?\",\"Эта страница исчезла быстрее, чем горячая пицца в офисе.\",\"Ищете что-то конкретное? Мы тоже, но эту страницу найти не можем.\",\"Извините, но этот заказ отменен. Страница не доступна.\",\"404 - Страница временно недоступна. Возможно, она на карантине?\",\"Вы попали в цифровой тупик. Разворачивайтесь!\",\"Эта страница сейчас недоступна. Может, она на перерыве?\",\"Ошибка 404: Страница съехала с указанного адреса.\",\"Похоже, вы пытаетесь доставить запрос на несуществующий адрес.\",\"Страница потерялась в пути. Наши курьеры уже ищут её!\"],\"backToHome\":\"Вернуться на главную\",\"openInNewWindow\":\"Открыть в новом окне\",\"toggleColorMode\":\"Переключить цветовую схему\",\"toggleSidebar\":\"Переключить боковую панель\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
