import "./styles/WeatherComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

function checkHumidity(humidity) {
  if (humidity <= 15) {
    return "Very Low";
  } else if (humidity > 15 && humidity < 30) {
    return "Low";
  } else if (humidity >= 30 && humidity <= 60) {
    return "Normal";
  } else {
    return "High";
  }
}

export default function WeatherComponent(props) {
  return (
    <div className="weather-component-wrapper">
      <div className="weather-component-heading">{props.heading_text}</div>
      <div className="weather-component-description">
        <div className="forcast-measurement">{props.measurement}%</div>
        <div>
          <FontAwesomeIcon icon={faDroplet} size="lg" className="icon" />
          <br />
          Humidity is <br /> {checkHumidity(props.measurement)}
        </div>
      </div>
    </div>
  );
}
