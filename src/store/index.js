import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeCity } from "./slices/formSlice";
import { citiesReducer, addCity, removeCity } from "./slices/citiesSlice";

const store = configureStore({
   reducer: {
      form: formReducer,
      cities: citiesReducer,
   }
});

export { store, changeCity, addCity, removeCity };

