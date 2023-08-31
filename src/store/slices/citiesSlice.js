import { createSlice } from "@reduxjs/toolkit";

function saveCitiesToLocalStorage(cities) {
   localStorage.setItem("cities", JSON.stringify(cities));
}

function loadCitiesFromLocalStorage() {
   const cities = localStorage.getItem("cities");
   return cities ? JSON.parse(cities) : [];
}

const citiesSlise = createSlice({
   name: "cities",
   initialState: {
      isLoading: false,
      data: loadCitiesFromLocalStorage(),
      error: null
   },

   reducers: {
      addCity(state, action) {
         const { id, name } = action.payload;
         const isCityAlreadyAdded = state.data.some(city => city.name === name);
         if (!isCityAlreadyAdded) {
            state.data.push({id, name});
            saveCitiesToLocalStorage(state.data);
         }
      },
      removeCity(state, action) {
         const updated = state.data.filter((city) => {
            return city.id !== action.payload;
         });
         state.data = updated;
         saveCitiesToLocalStorage(state.data);
      }
   },

});

export const citiesReducer = citiesSlise.reducer;
export const { addCity, removeCity } = citiesSlise.actions;