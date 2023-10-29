package com.history.entity.dto;

import com.history.entity.City;
import com.history.entity.enums.ArtType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@Builder
@NoArgsConstructor
public class ArtWithImageResponseDTO {

    private Integer id;
    private ArtType artType;
    private String artName;
    private City city;
    private double averageRating;
    private byte[] image;
}
