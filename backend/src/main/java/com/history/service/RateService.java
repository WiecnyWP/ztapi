package com.history.service;


import com.history.entity.Art;
import com.history.entity.Rate;

import com.history.entity.User;
import com.history.entity.dto.RateDTO;
import com.history.repository.ArtRepository;
import com.history.repository.RateRepository;
import com.history.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
@RequiredArgsConstructor
public class RateService {

    private final ArtRepository artRepository;
    private final RateRepository rateRepository;
    private final UserRepository userRepository;

    public Rate add(RateDTO rateDTO) {
        Rate rate = new Rate();
        Rate.CompositeKey key = new Rate.CompositeKey();
        key.setUsersId(rateDTO.getUserId());
        key.setArtId(rateDTO.getArtId());
        rate.setId(key);
        rate.setRate(rateDTO.getRate());
        Art art = artRepository.findById(rateDTO.getArtId()).orElseThrow();
        User user = userRepository.findById(rateDTO.getUserId()).orElseThrow();
        rate.setArt(art);
        rate.setUser(user);
        return rateRepository.save(rate);
    }

    public Collection<Rate> getAll() {
        return rateRepository.findAll();
    }

    public double getAverageRateForArt(Art art) {
        Collection<Rate> ratesForArt = getAll().stream()
                .filter(rate -> rate.getId().getArtId().equals(art.getId()))
                .toList();

        double sum = 0;
        for (Rate rate : ratesForArt) {
            sum += rate.getRate();
        }
        if (!ratesForArt.isEmpty()) {
            return sum / ratesForArt.size();
        }
        return sum;
    }

}