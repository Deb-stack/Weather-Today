import moment from "moment";
import "./styles/WeatherComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun as SunSet } from "@fortawesome/free-regular-svg-icons";
import { faSun as SunRise } from "@fortawesome/free-solid-svg-icons";

function handleTimeChange(sunriseorset) {
  return moment.unix(sunriseorset).format("h:mm A");
}

export default function SunriseAndSunset(props) {
  return (
    <div className="weather-component-wrapper">
      <div className="sunriseandsunset-heading">{props.heading_text}</div>
      <div className="sunsetandsunrise-description-wrapper">
        <div>
          <span>
            <FontAwesomeIcon icon={SunRise} size="xl" />
          </span>
          <span>Sunrise : {handleTimeChange(props.sunrise)}</span>
        </div>
        <div>
          <span>
            <FontAwesomeIcon icon={SunSet} size="xl" />
          </span>
          <span>Sunset : {handleTimeChange(props.sunset)}</span>
        </div>
      </div>
    </div>
  );
}
