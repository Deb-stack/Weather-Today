package com.weathertoday.controller;

import com.weathertoday.payload.WeatherRequest;
import com.weathertoday.payload.ForecastApiResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "https://localhost:3000")
public class WeatherController {

    private final String apiKey;
    private final WebClient webClient;

    public WeatherController(@Value("${openweather.api.key}") String apiKey, WebClient webClient) {
        this.apiKey = apiKey;
        this.webClient = webClient;
    }

    // url: http://localhost:8080/weather?units=metric
    @PostMapping(value = "/weather", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Mono<ResponseEntity<ForecastApiResponse>> getWeather(
            @RequestBody WeatherRequest weatherRequest,
            @RequestParam("units") String unit) {

        if (weatherRequest.getLat() != null && weatherRequest.getLon() != null) {
            // Directly call the weather API using provided latitude and longitude
            return webClient.get()
                    .uri("http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={apiKey}&units={units}",
                            weatherRequest.getLat(), weatherRequest.getLon(), apiKey, unit)
                    .retrieve()
                    .bodyToMono(ForecastApiResponse.class)
                    .map(forecastResponse -> ResponseEntity.ok().body(forecastResponse))
                    .onErrorReturn(ResponseEntity.status(HttpStatus.NOT_FOUND).build());

        } else if (weatherRequest.getCity() != null) {
            return webClient.get()
                    .uri("api.openweathermap.org/data/2.5/forecast?q={city}&appid={API key}&units={units}",
                            weatherRequest.getCity(), apiKey, unit)
                    .retrieve()
                    .bodyToMono(ForecastApiResponse.class)
                    .map(forecastResponse -> ResponseEntity.ok().body(forecastResponse))
                    .onErrorReturn(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
        } else {
            return Mono.just(new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR));
        }
    }
}