package com.history.controller;


import com.history.entity.City;
import com.history.service.ArtService;
import com.history.service.CityService;
import com.history.service.security.auth.AuthenticationResponse;
import com.history.service.security.auth.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/city")
public class CityController {

    private final CityService cityService;

    @GetMapping("/")
    public ResponseEntity<Collection<City>> getAll() {
        return ResponseEntity.ok(cityService.getAll());
    }

    @PostMapping("/")
    public ResponseEntity<City> addCity(@RequestBody City city) {
        City addedCity = cityService.add(city);
        return ResponseEntity.ok(addedCity);
    }

}

