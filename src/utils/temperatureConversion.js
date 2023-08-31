export const kelvinToCelsius = (temperatureKelvin) => {
   return (temperatureKelvin - 273.15).toFixed(0);
};

export const kelvinToFahrenheit = (temperatureKelvin) => {
   return ((temperatureKelvin - 273.15) * 9 / 5 + 32).toFixed(0);
};