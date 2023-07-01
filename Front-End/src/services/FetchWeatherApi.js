import axios from "axios";

function fetchWeather(payload, onSuccess, onFailure) {
  axios
    .post("http://localhost:8080/weather?units=metric", {
      city: payload.city,
      lon: payload.lon,
      lat: payload.lat,
    })
    .then(function (response) {
      const savedData = response.data;
      onSuccess(savedData);
    })
    .catch(function (error) {
      console.log(error.response);
      if (error.response && error.response.status === 404) {
        onFailure(`City not found!`);
      } else {
        onFailure(`Internal Server Error\nPlease contact the Administrator`);
        console.log(error.response);
      }
    });
}
export default fetchWeather;
