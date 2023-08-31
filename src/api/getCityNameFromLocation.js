import axios from "axios";

export const getCityNameFromLocation = async (latitude, longitude) => {
   const apiKey = process.env.REACT_APP_API_KEY;
   const baseUrl = process.env.REACT_APP_BASE_URL;
   const url = `${baseUrl}weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

   try {
      const response = await axios.get(url);
      if (response.status === 200) {
         const data = response.data;
         return data.name;
      } else {
         throw new Error(`Error fetching city name: ${response.statusText}`);
      }
   } catch (error) {
      throw new Error(`Error fetching city name: ${error.message}`);
   }
};