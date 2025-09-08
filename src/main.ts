import { createApp } from "vue";
import "./style.css";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import "./assets/main.css";

import ru from "./locales/ru.json";
import en from "./locales/en.json";
import ua from "./locales/ua.json";

// Создаём i18n-инстанс
const i18n = createI18n({
  legacy: false, // чтобы использовать Composition API
  locale: "ru", // язык по умолчанию
  fallbackLocale: "en", // запасной язык
  messages: {
    ru,
    en,
    ua,
  },
});

const app = createApp(App);
app.use(i18n);
app.mount("#app");
