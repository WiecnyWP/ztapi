package com.history.controller;

import com.history.entity.Art;
import com.history.service.ArtService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
