import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
   Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
   CategoryScale,
   LinearScale,
   PointElement,
   LineElement,
   Title,
   Tooltip,
   Legend,
   Filler
);

const WeatherChart = ({ days, temps, mainTemp }) => {

   const options = {
      scales: {
         x: {
            display: false,
         },
         y: {
            display: false,
            beginAtZero: true,
         }
      },
      plugins: {
         legend: {
            display: false
         },
      },
   };

   const gradientBackgroundCold = (context) => {
      const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 45);
      gradient.addColorStop(0, '#5B8CFF');
      gradient.addColorStop(0.5, '#abbeec');
      gradient.addColorStop(1, '#eeedfd');
      return gradient;
   };

   const gradientBackgroundWarm = (context) => {
      const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 45);
      gradient.addColorStop(0, '#ffa25b33');
      gradient.addColorStop(0.5, '#FFD6A1');
      gradient.addColorStop(1, '#FFF4F4');
      return gradient;
   };

   const determineBackgroundColor = mainTemp < 0 ?
      gradientBackgroundCold :
      gradientBackgroundWarm;

   const data = {
      labels: days,
      datasets: [{
         label: 'Temperature',
         data: temps,
         backgroundColor: determineBackgroundColor,
         borderWidth: "transparent",
         fill: true,
         tension: 0.4,
      }]
   };

   return (
      <div className="chart-container">
         <Line options={options}
            data={data}
            height={51} />
      </div>
   )
};

export default WeatherChart;