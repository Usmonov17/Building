import { createI18n } from "vue-i18n";
import uz from "./locales/uz.json";
import ru from "./locales/ru.json";
import en from "./locales/eng.json";

const savedLocale = localStorage.getItem("locale") || "uz";

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: "eng",
  messages: {
    uz,
    ru,
    en,
  },
});

export default i18n;
