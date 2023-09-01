import { GrFormClose } from "react-icons/gr";

const MainInfoInCard = ({ handleCardRemove, cityName, country, icon, weatherText, date }) => {
   return (
      <>
         <div
            onClick={handleCardRemove}
            className="card__close">
            <GrFormClose />
         </div>
         <div className="card__header header-card">
            <h2 className="header-card__title">{cityName}, {country}</h2>
            <div className="header-card__weather show-weather">
               {icon && (
                  <img src={`https://openweathermap.org/img/w/${icon}.png`} alt="weather icon" />
               )}
               <span className="show-weather__text">{weatherText}</span>
            </div>
         </div>
         <div className="card__date date">
            <p>{date}</p>
         </div>
      </>
   )
};

export default MainInfoInCard;