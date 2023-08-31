# Weather App README

## Description
This Weather App is designed to provide users with current weather information, city management, temperature unit switching, and language selection. It utilizes the OpenWeatherMap API for weather data and various libraries for additional functionality.

## Acceptance Criteria

### Displaying Current Weather
- The app displays the current weather of the user's location by default if location access is granted.

### City Management
- Users can add a city to the list by autocomplete search and save it to application settings.

### Temperature Unit Switching
- Users can switch between Celsius and Fahrenheit for each city card separately. The selected unit should be saved as an application setting.

### Language Selection
- The app supports global language switching for all displayed cities. Available languages are English, Ukrainian, and Hebrew (RTL). Language settings should be saved as an application setting. For translation, the app uses the [i18next library](https://react.i18next.com).

### Displaying Weather Icons
- The app displays weather icons from the OpenWeatherMap service.

### Temperature and Date Graph
- Using the OpenWeatherMap API request `https://api.openweathermap.org/data/2.5/forecast?q={city_name}&appid={API_KEY}`, the app creates a graph displaying temperature and date dependencies. Any suitable library for plotting can be used.

### Layout
- The layout of the application must be designed according to the provided design specifications.
