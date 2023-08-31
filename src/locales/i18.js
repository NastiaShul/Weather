import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./translation/en.json";
import uaTranslation from "./translation/ua.json";
import heTranslation from "./translation/he.json";

i18n
   .use(initReactI18next)
   .init({
      lng: "en",
      fallbackLng: "en",
      resources: {
         en: {
            translation: enTranslation,
         },
         ua: {
            translation: uaTranslation,
         },
         he: {
            translation: heTranslation,
         }
      },
   });

export default i18n;