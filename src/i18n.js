import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";


i18n
  .use(HttpBackend) // Load translations via HTTP
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Passes i18n to react-i18next
  .init({
    fallbackLng: "en", 
    debug: true, // set false in production
    ns: ["common", "home", "about"], 
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"], 
    },
    defaultNS: "common",
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", 
    },

  });

export default i18n;
