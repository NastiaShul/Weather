import { useSelector, shallowEqual } from "react-redux";
import WeatherCard from "../WeatherCard";

import "./weatherList.scss";

const WeatherList = () => {
   const { cities } = useSelector((state) => {
      return {
         cities: state.cities.data
      }
   }, shallowEqual);

   const renderedCities = cities.map(city => {
      return (
         <WeatherCard key={city.id} city={city} />
      )
   });

   return (
      <div className="card-list">
         {renderedCities}
      </div>
   )
};

export default WeatherList;

