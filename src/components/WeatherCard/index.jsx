import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { fetchWeatherData } from "../../api/weatherApi";
import { removeCity } from "../../store";
import { formatDateTime } from "../../utils/formatDateTime";
import { kelvinToCelsius, kelvinToFahrenheit } from "../../utils/temperatureConversion";

import MainInfoInCard from "./content/MainInfoInCard";
import ChartInCard from "./content/ChartInCard";
import AdditionalInfoInCard from "./content/AdditionalInfoInCard";

import "./weatherCard.scss";

const WeatherCard = ({ city }) => {
   const [weatherData, setWeatherData] = useState(undefined);
   const [temperatureUnit, setTemperatureUnit] = useState("C");

   const dispatch = useDispatch();
   const { i18n } = useTranslation();

   const currentLanguage = i18n.language;

   useEffect(() => {
      fetchWeatherData(city.name)
         .then((response) => {
            setWeatherData(response.data);
         })
         .catch(() => {
            dispatch(removeCity(city.id));
         });
   }, [city]);

   const handleCardRemove = () => {
      dispatch(removeCity(city.id));
   };

   const getTemperature = (temp) => {
      if (temperatureUnit === "C") {
         return kelvinToCelsius(temp);
      } else if (temperatureUnit === "F") {
         return kelvinToFahrenheit(temp);
      }
   };

   let cityName,
      country,
      weatherText,
      icon,
      date,
      temp,
      tempFeelsLike,
      humidity,
      pressure,
      wind;

   if (weatherData) {
      const { city, list } = weatherData;
      if (city) {
         cityName = city.name;
         country = city.country;
      }

      if (list && list[0]) {
         const { weather, dt_txt, main, wind: { speed } } = list[0];

         weatherText = weather[0].main;
         icon = weather[0].icon;
         date = formatDateTime(dt_txt, currentLanguage);
         temp = main.temp;
         tempFeelsLike = main.feels_like;
         humidity = main.humidity;
         pressure = main.pressure;
         wind = speed;
      }
   };

   const mainTemp = getTemperature(temp);

   return (
      <section className="main">
         <div className="container">
            <div className="card-list">
               <article className={
                  mainTemp < 0 ?
                     "card card-cold" :
                     "card card-warm"}>
                  <div className="card__container container">
                     <MainInfoInCard
                        handleCardRemove={handleCardRemove}
                        cityName={cityName}
                        country={country}
                        icon={icon}
                        weatherText={weatherText}
                        date={date} />
                     <ChartInCard
                        mainTemp={mainTemp}
                        weatherData={weatherData}
                        temperatureUnit={temperatureUnit}
                        getTemperature={getTemperature} />
                     <AdditionalInfoInCard
                        getTemperature={getTemperature}
                        temp={temp}
                        temperatureUnit={temperatureUnit}
                        setTemperatureUnit={setTemperatureUnit}
                        tempFeelsLike={tempFeelsLike}
                        wind={wind}
                        humidity={humidity}
                        pressure={pressure}
                     />
                  </div>
               </article>
            </div>
         </div>
      </section>
   );
};

export default WeatherCard;