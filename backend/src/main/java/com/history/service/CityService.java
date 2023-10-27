package com.history.service;

import com.history.entity.City;
import com.history.repository.CityRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
@RequiredArgsConstructor
public class CityService {

    private final CityRepository cityRepository;

    public City add(City city) {
        return cityRepository.save(city);
    }

    public void remove(Integer cityId) {
        cityRepository.deleteById(cityId);
    }

    public Collection<City> getAll() {
        return cityRepository.findAll();
    }
}
