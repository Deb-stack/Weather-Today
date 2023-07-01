import React from "react";
import "./styles/WeatherCondition.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureLow } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
var startCase = require("lodash.startcase");

const today = moment().format("dddd, MMMM DD, YYYY");

const WeatherCondition = (props) => {
  return (
    <div className="weather-condition-wrapper">
      <div className="heading-wrapper">
        <span>
          <FontAwesomeIcon icon={faLocationDot} />
        </span>
        &nbsp;
        <span>
          {props.city}, {props.country}
        </span>
        <br />
        <span>{today}</span>
      </div>
      <div className="temp-wrapper">
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${props.weather_icon}@2x.png`}
            alt={props.weather_alt_icon}
          />
          <span>{startCase(props.weather_description)}</span>
        </div>
        <div className="show-temp">
          {props.temp}
          <sup>&deg;</sup>C
        </div>
      </div>
      <div className="temp-high-low">
        <div>
          High: {props.temp_max} &deg;C &nbsp;||&nbsp; Low: {props.temp_min}{" "}
          &deg;C
        </div>
      </div>
      <div className="weather-description-wrapper">
        <div className="weather-description-feel-like-wrapper">
          <div className="feels-like-heading">
            <span>Feels Like</span>
          </div>
          <div className="feel-like-description">
            <div>
              {props.feels_like}
              <sup>&deg;</sup>C
            </div>
            <div>
              <FontAwesomeIcon
                icon={faTemperatureLow}
                size="lg"
                style={{ marginBottom: "5px" }}
              />
              <br />
              <span>
                The temperature you <wbr />
                actually feel
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCondition;
