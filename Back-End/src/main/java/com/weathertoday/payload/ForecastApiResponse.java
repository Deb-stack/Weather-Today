package com.weathertoday.payload;

import lombok.Data;

import java.util.List;

@Data
public class ForecastApiResponse {
    private List<WeatherData> list;
    private City city;

    @Data
    public static class WeatherData {
        private long dt;
        private MainData main;
        private List<Weather> weather;
        private Wind wind;
        private int visibility;
        private String dt_txt;

        @Data
        public static class MainData {
            private double temp;
            private double feels_like;
            private double temp_min;
            private double temp_max;
            private int pressure;
            private int humidity;
        }

        @Data
        public static class Weather {
            private int id;
            private String main;
            private String description;
            private String icon;
        }

        @Data
        public static class Wind {
            private double speed;
            private int deg;
        }
    }

    @Data
    public static class City {
        private int id;
        private String name;
        private String country;
        private int population;
        private int timezone;
        private long sunrise;
        private long sunset;
    }
}

