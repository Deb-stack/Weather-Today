import "./styles/WeatherComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";

function degToCompass(num) {
  var val = Math.floor(num / 22.5 + 0.5);
  var arr = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return arr[val % 8];
}

export default function WindSpeed(props) {
  return (
    <div className="weather-component-wrapper">
      <div className="weather-component-heading">{props.heading_text}</div>
      <div className="weather-component-description">
        <div className="forcast-measurement">{props.measurement}m/s</div>
        <div>
          <FontAwesomeIcon icon={faWind} size="lg" className="icon" />
          <br />
          Blowing from <br />
          {degToCompass(props.wind_dir)} direction.
        </div>
      </div>
    </div>
  );
}
