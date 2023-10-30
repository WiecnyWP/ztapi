package com.history.service;

import com.history.entity.Art;
import com.history.entity.dto.ArtWithImageResponseDTO;
import com.history.entity.dto.ArtWithImageSaveDTO;
import com.history.repository.ArtRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.StreamUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.util.Collection;
import java.util.LinkedList;
import java.util.Objects;

@Service
@RequiredArgsConstructor
@Slf4j
public class ArtService {

    private final ArtRepository artRepository;
    private final String uploadDirectory = "uploads/arts/";
    private final RateService rateService;

    public ArtWithImageResponseDTO add(ArtWithImageSaveDTO artDto) throws IOException {
        if (artDto.getImage() == null) {
            throw new IllegalArgumentException("Image was not given");
        }

        Art art = Art.builder()
                .artName(artDto.getArtName())
                .artType(artDto.getArtType())
                .city(artDto.getCity())
                .build();
//        Art savedArt = artRepository.save(art);

        byte[] imageBytes = artDto.getImage();
        String fileName = artDto.getArtName();
        String filePath = uploadDirectory + fileName + "." + artDto.getFileExtension();

        File existingFile = new File(filePath);
        if (existingFile.exists()) {
            existingFile.delete();
        }

        try (OutputStream stream = new FileOutputStream(filePath)) {
            stream.write(imageBytes);
        }

        art.setImage(filePath);
        Art savedArt = artRepository.save(art);

        return ArtWithImageResponseDTO.builder()
                .artName(savedArt.getArtName())
                .artType(savedArt.getArtType())
                .city(savedArt.getCity())
                .image(imageBytes)
                .averageRating(rateService.getAverageRateForArt(savedArt))
                .build();
    }

    public Collection<Art> getAll() {
        return artRepository.findAll();
    }

    public Collection<ArtWithImageResponseDTO> getAllArtsWithImage() {
        Collection<Art> arts = artRepository.findAll();
        Collection<ArtWithImageResponseDTO> dtos = new LinkedList<>();
        for (Art art : arts) {
            ArtWithImageResponseDTO dto = convertToDTO(art);

            File artFile = new File(art.getImage());

            if (artFile.exists()) {
                try {
                    dto.setImage(StreamUtils.copyToByteArray(new FileInputStream(artFile)));
                } catch (IOException e) {
                    log.error("Exception while searching for image: Art id={}", art.getId());
                    e.printStackTrace();
                }
            } else {
                log.error("Image for art id={} not found", art.getId());
            }
            dto.setAverageRating(rateService.getAverageRateForArt(art));
            dtos.add(dto);
        }
        return dtos;
    }

    private ArtWithImageResponseDTO convertToDTO(Art art) {
        return ArtWithImageResponseDTO.builder()
                .id(art.getId())
                .artName(art.getArtName())
                .artType(art.getArtType())
                .city(art.getCity())
                .build();
    }

}
