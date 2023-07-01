package com.weathertoday.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter

@Getter
public class WeatherRequest {
    private String city;
    private Double lon;
    private Double lat;
}
