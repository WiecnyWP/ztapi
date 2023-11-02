package com.history.controller;

import com.history.entity.City;
import com.history.entity.Rate;
import com.history.entity.dto.RateDTO;
import com.history.service.CityService;
import com.history.service.RateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/rate")
public class RateController {

    private final RateService rateService;


    @PostMapping("/")
    public ResponseEntity<Rate> addCity(@RequestBody RateDTO rateDTO) {
        Rate rate = rateService.add(rateDTO);
        return ResponseEntity.ok(rate);
    }

}