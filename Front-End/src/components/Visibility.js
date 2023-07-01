import "./styles/WeatherComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function checkVisibility(visibility) {
  if (visibility >= 10) {
    return "Perfectly Clear";
  } else if (visibility < 10 && visibility >= 5) {
    return "Good";
  } else if (visibility < 5 && visibility >= 1) {
    return "Reduced";
  } else {
    return "Poor";
  }
}

export default function Visibility(props) {
  let visibilityInKms = props.measurement / 1000;

  return (
    <div className="weather-component-wrapper">
      <div className="weather-component-heading">{props.heading_text}</div>
      <div className="weather-component-description">
        <div className="forcast-measurement">{visibilityInKms}Km</div>
        <div>
          <FontAwesomeIcon icon={faEye} size="lg" className="icon" />
          <br />
          Visibilty is
          <br /> {checkVisibility(visibilityInKms)}
        </div>
      </div>
    </div>
  );
}
