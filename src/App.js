/* eslint-disable no-unused-vars */
"use client";
import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./componenets/TopButtons";
import Inputs from "./componenets/Inputs";
import TimeAndLocation from "./componenets/TimeAndLocation";
import TemperatureAndDetails from "./componenets/TemperatureAndDetails";
import Forecast from "./componenets/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import TopTitle from "./componenets/TopTitle";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [query, setQuery] = useState({ q: "new delhi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : 'current location.'
      toast.info('Fetching weather for ' + message)
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(`Succefully fetched weather for ${data.name}, ${data.country}`)
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if(!weather) return 'from-cyan-600 to-blue-800'
    const threshold = units === 'metric' ? 25 : 60;
    if(weather.temp <= threshold) return 'from-cyan-600 to-blue-800'
    return 'from-yellow-600 to-orange-800'
  }

  return (
    <div className={`mx-auto md:max-w-screen-md app mt-4 py-5 px-32 bg-gradient-to-b h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopTitle />
      <TopButtons setQuery = {setQuery} />
      <Inputs setQuery = {setQuery} units = {units} setUnits = {setUnits}/>
      {weather && (
        <div>
          <TimeAndLocation weather = {weather}/>
          <TemperatureAndDetails weather = {weather}/>
          {/* <Forecast title="hourly forecast" items = {weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} /> */}
        </div>
      )}

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />

    </div>
  );
}

export default App;
