import axios from "axios";

export const fetchWeatherData = async (cityName) => {
   const apiKey = process.env.REACT_APP_API_KEY;
   const baseUrl = process.env.REACT_APP_BASE_URL;
   const url = `${baseUrl}forecast?q=${cityName}&appid=${apiKey}`
   try {
      const response = await axios.get(url);
      return response;
   } catch (error) {
      throw error;
   }
};