package com.history.service;

import com.history.entity.Art;
import com.history.repository.ArtRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
@RequiredArgsConstructor
public class ArtService {

    private final ArtRepository artRepository;

    public void add(Art art) {
        artRepository.save(art);
    }

    public Collection<Art> getAll() {
        return artRepository.findAll();
    }

}
