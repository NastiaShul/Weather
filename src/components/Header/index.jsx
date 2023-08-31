import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { GrLanguage } from "react-icons/gr";

import { useLanguage } from "../../hooks/useLanguage";

import "./header.scss";

const Header = () => {
   const [selectedLanguage, setSelectedLanguage] = useState("en");
   const { i18n } = useTranslation();
   const { setLanguage } = useLanguage();

   const handleLanguageChange = (e) => {
      const newSelectedLanguage = e.target.value;
      setLanguage(newSelectedLanguage);
      setSelectedLanguage(newSelectedLanguage);
   };

   useEffect(() => {
      const storedLanguage = localStorage.getItem("selectedLanguage");
      if (storedLanguage) {
         i18n.changeLanguage(storedLanguage);
         setSelectedLanguage(storedLanguage);
      }
   }, [i18n]);

   return (
      <header className="header">
         <GrLanguage className="header__icon" />
         <select
            onChange={handleLanguageChange}
            className="header__select"
            value={selectedLanguage}>
            <option value="en">EN</option>
            <option value="ua">UA</option>
            <option value="he">HE</option>
         </select>
      </header>
   );
};

export default Header;