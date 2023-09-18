import { useTranslation } from "react-i18next";

const AdditionalInfoInCard = ({ getTemperature, temp, temperatureUnit, setTemperatureUnit, tempFeelsLike, wind, humidity, pressure }) => {
   const { t } = useTranslation();

   const handleCelsiusClick = () => {
      setTemperatureUnit("C");
   };

   const handleFahrenheitClick = () => {
      setTemperatureUnit("F");
   };

   return (
      <div className="card__info info">
         <div className="info__degrees degrees">
            <div className="degrees">
               <div className="degrees__current current">
                  <div className="current__value">
                     {getTemperature(temp) >= 0 ?
                        `+${getTemperature(temp)}` :
                        `${getTemperature(temp)}`}
                  </div>
                  <div className="current__unit unit">
                     <span
                        onClick={handleCelsiusClick}
                        className={
                           temperatureUnit !== "C" ?
                              "unit__unactive" :
                              undefined}>
                        °C
                     </span>
                     <span className="unit__delimiter">|</span>
                     <span
                        onClick={handleFahrenheitClick}
                        className={
                           temperatureUnit !== "F" ?
                              "unit__unactive" :
                              undefined}>
                        °F
                     </span>
                  </div>
               </div>
               <div className="degrees__feels feels">
                  <h4 className="feels__info">{t("feels")}:
                     <span>{
                        getTemperature(tempFeelsLike) >= 0 ?
                           `+${getTemperature(tempFeelsLike)}` :
                           `-${getTemperature(tempFeelsLike)}`}
                     </span>
                  </h4>
               </div>
            </div>
         </div>
         <div className="info__general general">
            <div className={
               getTemperature(temp) < 0 ?
                  "general__item item cold" :
                  "general__item item warm"}>
               <p>{t("wind")}: <span>{wind} m/s</span></p>
               <p>{t("humidity")}: <span>{humidity}%</span></p>
               <p>{t("pressure")}: <span>{pressure}Pa</span></p>
            </div>
         </div>
      </div>
   )
};

export default AdditionalInfoInCard;
