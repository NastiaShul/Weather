import { I18nextProvider } from "react-i18next";
import i18n from "./locales/i18";

import Header from "./components/Header";
import Search from "./components/Search";
import WeatherList from "./components/WeatherList";

import "./app.scss";

export function App() {
   return (
      <I18nextProvider i18n={i18n}>
         <Header />
         <Search />
         <WeatherList />
      </I18nextProvider>
   );
}

export default App;