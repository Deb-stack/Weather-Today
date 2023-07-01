/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import fetchWeather from "./FetchWeatherApi";
import { getCurrentPosition, getErrorMessage } from "./GeolocationApi";
import DisplayWeather from "../components/DisplayWeather";

export default function GetWeather() {
  const [weather, setWeather] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getCurrentPosition()
      .then((position) => {
        let { latitude: lat, longitude: lon } = position;
        fetchWeather(
          { lat, lon },
          (data) => setWeather(data),
          (error) => setError(error)
        );
      })
      .catch((error) => {
        const errorMessage = getErrorMessage(error);
        console.error("Error:", errorMessage);
        setError(errorMessage);
      });
  }, []);

  const handleWeatherUpdate = (data) => {
    setWeather(data);
    setError("");
  };

  const handleError = (error) => {
    setError(error);
    setWeather("");
  };

  return (
    <>
      <SearchBar onWeatherUpdate={handleWeatherUpdate} onError={handleError} />
      <DisplayWeather weather={weather} error={error} />
    </>
  );
}
