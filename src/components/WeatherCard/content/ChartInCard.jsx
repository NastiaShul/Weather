import { useEffect, useState } from "react";
import { formatDate } from "../../../utils/formatDateTime";

import WeatherChart from "./WeatherChart";

const ChartInCard = ({ weatherData, temperatureUnit, getTemperature, mainTemp }) => {
   const [chartDegrees, setChartDegrees] = useState([]);
   const [chartDates, setChartDates] = useState([]);

   useEffect(() => {
      if (weatherData) {
         const { list } = weatherData;
         const dailyTemperatures = {};
         list.forEach((item) => {
            const { dt_txt, main } = item;
            const date = formatDate(dt_txt);

            if (!dailyTemperatures[date]) {
               dailyTemperatures[date] = {
                  temps: [],
               };
            }
            dailyTemperatures[date].temps.push(getTemperature(main.temp));
         });

         const chartDegreesData = [];
         const chartDatesData = [];

         for (let date in dailyTemperatures) {
            const temps = dailyTemperatures[date].temps;
            const avarageTemps = Math.round(temps.reduce((partial_sum, a) => partial_sum + +a, 0) / temps.length);

            chartDatesData.push(date);
            chartDegreesData.push(avarageTemps);
         };

         setChartDates(chartDatesData);
         setChartDegrees(chartDegreesData)
      }
   }, [weatherData, temperatureUnit]);

   return (
      <div className="card__chart chart">
         <div className="chart__degrees">
            {chartDegrees.map((degree, index) => (
               <span key={index}>{degree}</span>
            ))}
         </div>
         <WeatherChart
            days={chartDates}
            temps={chartDegrees}
            mainTemp={mainTemp} />
         <div className="chart__dates">
            {chartDates.map((date, index) => (
               <span key={index}>{date}</span>
            ))}
         </div>
      </div>
   )
};

export default ChartInCard;