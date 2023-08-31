import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useTranslation } from "react-i18next";
import { nanoid } from "@reduxjs/toolkit";

import { changeCity, addCity } from "../../store";
import { getCityNameFromLocation } from "../../api/getCityNameFromLocation";
import { useLanguage } from "../../hooks/useLanguage";

import "./search.scss";

const Search = () => {
   const dispatch = useDispatch();
   const { t } = useTranslation();
   useLanguage();

   const { name } = useSelector((state) => {
      return {
         name: state.form.name
      };
   }, shallowEqual);

   useEffect(() => {
      if ("geolocation" in navigator) {
         navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            try {
               const locationCity = await getCityNameFromLocation(latitude, longitude);
               const newCity = { name: locationCity, id: nanoid() }
               dispatch(addCity(newCity));
            } catch (error) {
               console.error(error.message);
            }
         });
      } else {
         console.log("Geolocation is not supported in this browser.");
      }
   }, []);

   const handleCityChange = (e) => {
      const value = e.target.value;
      dispatch(changeCity(value));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const newCity = { name, id: nanoid() };
      dispatch(addCity(newCity));
      dispatch(changeCity(""));
   }

   return (
      <form onSubmit={handleSubmit}>
         <input
            placeholder={t("placeholder")}
            value={name}
            onChange={handleCityChange}
         />
         <button>{t("add")}</button>
      </form>
   )
};

export default Search;