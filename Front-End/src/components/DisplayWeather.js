/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import WeatherCondition from "./WeatherCondition";
import Forcast from "./Forcast";
import Humidity from "./Humidity";
import WindSpeed from "./WindSpeed";
import Visibility from "./Visibility";
import SunriseAndSunset from "./SunriseAndSunset";
import ShowError from "./ShowError";
import "./styles/DisplayWeather.css";

export default function DisplayWeather({ weather, error }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (weather || error) {
      setLoading(false);
    }
  }, [weather, error]);

  if (loading) {
    return (
      <>
        <div className="loading">
          <FontAwesomeIcon
            icon={faLocationArrow}
            bounce
            style={{
              fontSize: "200px",
              color: "#0567b3",
            }}
          />
          <h4>Get Weather of Your Location</h4>
        </div>
      </>
    );
  }

  if (error) {
    return <ShowError error={error} />;
  }

  if (!weather) {
    return null;
  }

  const { city, list } = weather;
  return (
    <div className="weather-wrapper">
      <Grid container spacing={2}>
        {/* Weather Forcast */}
        <Grid item sm={4} xl={4}>
          <WeatherCondition
            city={city.name}
            country={city.country}
            weather_icon={list[0].weather[0].icon}
            weather_alt_icon={list[0].weather[0].main}
            weather_description={list[0].weather[0].description}
            temp={list[0].main.temp}
            temp_max={list[0].main.temp_max}
            temp_min={list[0].main.temp_min}
            atm_pressure_grnd={list[0].main.grnd_level}
            atm_pressure_sea={list[0].main.sea_level}
            feels_like={list[0].main.feels_like}
          />
        </Grid>
        {/* Weather Forcast */}
        <Grid item sm={8} xl={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <div
                style={{
                  margin: "1rem 0.2rem 0",
                  width: "100%",
                  display: "flex",
                  flexFlow: "row",
                  justifyContent: "space-around",
                  alignContent: "center",
                }}
              >
                <div>
                  <Forcast
                    dt={list[4].dt}
                    forcast_icon={list[4].weather[0].icon}
                    forcast_alt_icon={list[4].weather[0].main}
                    forcast_descriptions={list[4].weather[0].description}
                    forcast_temp={list[4].main.temp}
                  />
                </div>
                <div>
                  <Forcast
                    dt={list[13].dt}
                    forcast_icon={list[13].weather[0].icon}
                    forcast_alt_icon={list[13].weather[0].main}
                    forcast_descriptions={list[13].weather[0].description}
                    forcast_temp={list[13].main.temp}
                  />
                </div>
                <div>
                  <Forcast
                    dt={list[21].dt}
                    forcast_icon={list[21].weather[0].icon}
                    forcast_alt_icon={list[21].weather[0].main}
                    forcast_descriptions={list[21].weather[0].description}
                    forcast_temp={list[21].main.temp}
                  />
                </div>
                <div>
                  <Forcast
                    dt={list[29].dt}
                    forcast_icon={list[29].weather[0].icon}
                    forcast_alt_icon={list[29].weather[0].main}
                    forcast_descriptions={list[29].weather[0].description}
                    forcast_temp={list[29].main.temp}
                  />
                </div>
                <div>
                  <Forcast
                    dt={list[37].dt}
                    forcast_icon={list[37].weather[0].icon}
                    forcast_alt_icon={list[37].weather[0].main}
                    forcast_descriptions={list[37].weather[0].description}
                    forcast_temp={list[37].main.temp}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  textAlign: "left",
                  fontSize: "20px",
                  fontWeight: "bolder",
                  color: "white",
                  margin: "0 0 10px 20px",
                }}
              >
                Today's Highlights
              </div>
              <div className="weather-highlights-wrapper">
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Humidity
                      heading_text="Humidity"
                      measurement={list[0].main.humidity}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <WindSpeed
                      heading_text="Wind Speed"
                      measurement={list[0].wind.speed}
                      wind_dir={list[0].wind.deg}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Visibility
                      heading_text="Visibility"
                      measurement={list[0].visibility}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <SunriseAndSunset
                      heading_text="Sunrise & Sunset"
                      sunrise={city.sunrise}
                      sunset={city.sunset}
                    />
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
