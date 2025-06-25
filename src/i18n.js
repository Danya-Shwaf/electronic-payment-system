import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locals/en/translation.json";
import translationAR from "./locals/ar/translation.json";

const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR },
};

i18n
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
