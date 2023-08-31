import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function useLanguage() {
   const { i18n } = useTranslation();

   useEffect(() => {
      const storedLanguage = localStorage.getItem("selectedLanguage");
      if (storedLanguage) {
         i18n.changeLanguage(storedLanguage);
      }
   }, [i18n]);

   const setLanguage = (language) => {
      i18n.changeLanguage(language);
      localStorage.setItem("selectedLanguage", language);
   };

   return { setLanguage };
}

export { useLanguage };