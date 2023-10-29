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
@CrossOrigin(origins = "http://localhost:3000")
public class ArtController {

    private final ArtService artService;

    @GetMapping("/getAll")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Collection<Art>> getAll() {
        return ResponseEntity.ok(artService.getAll());
    }

    @PostMapping("/add")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<ArtWithImageResponseDTO> addArt(@RequestBody ArtWithImageSaveDTO art) throws IOException {
        ArtWithImageResponseDTO addedArt = artService.add(art);
        return ResponseEntity.ok(addedArt);
    }

    @GetMapping("/getAllWithImage")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Collection<ArtWithImageResponseDTO>> getAllWithImage() {
        return ResponseEntity.ok(artService.getAllArtsWithImage());
    }

}
