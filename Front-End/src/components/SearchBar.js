/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./styles/SearchBar.css";
import fetchWeather from "../services/FetchWeatherApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchCity({ onWeatherUpdate, onError }) {
  const [city, setCity] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    fetchWeather(
      { city },
      (data) => onWeatherUpdate(data),
      (error) => onError(error)
    );
  };

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="search-bar-wrapper">
      <form className="search-box" onSubmit={handleSubmit}>
        <button className="msg-btn" type="submit">
          Weather Outside?
        </button>
        <input
          type="text"
          class="search-input"
          placeholder="Enter a city name..."
          onChange={handleInputChange}
          autoComplete="off"
          required
        />
        <button className="search-btn" type="submit">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            flip="horizontal"
            size="xl"
            style={{ color: "#d00606" }}
          />
        </button>
      </form>
    </div>
  );
}
