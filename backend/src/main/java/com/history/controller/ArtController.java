package com.history.controller;

import com.history.entity.Art;
import com.history.entity.dto.ArtWithImageResponseDTO;
import com.history.entity.dto.ArtWithImageSaveDTO;
import com.history.service.ArtService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Collection;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/art")
public class ArtController {

    private final ArtService artService;

    @GetMapping("/")
    public ResponseEntity<Collection<Art>> getAll() {
        return ResponseEntity.ok(artService.getAll());
    }

    @PostMapping("/")
    public ResponseEntity<ArtWithImageResponseDTO> addArt(@RequestBody ArtWithImageSaveDTO art) throws IOException {
        ArtWithImageResponseDTO addedArt = artService.add(art);
        return ResponseEntity.ok(addedArt);
    }

    @GetMapping("/WithImage")
    public ResponseEntity<Collection<ArtWithImageResponseDTO>> getAllWithImage() {
        return ResponseEntity.ok(artService.getAllArtsWithImage());
    }

}
