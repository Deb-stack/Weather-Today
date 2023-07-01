import moment from "moment";
import Grid from "@mui/material/Grid";
import "./styles/Forcast.css";
var startCase = require("lodash.startcase");

export default function Forcast(props) {
  const forcastDay = moment.unix(props.dt).format("ddd");
  return (
    <div className="forcast-wrapper">
      <Grid container>
        <Grid item xs={12}>
          {forcastDay}
        </Grid>
        <Grid item xs={12}>
          <div>
            <img
              src={`https://openweathermap.org/img/wn/${props.forcast_icon}.png`}
              alt={props.forcast_main}
            />
          </div>
          <span>{startCase(props.forcast_descriptions)}</span>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <div>
                <span>Temp: {props.forcast_temp} &deg;C</span>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
