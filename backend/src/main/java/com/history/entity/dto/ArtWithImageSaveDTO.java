package com.history.entity.dto;

import com.history.entity.City;
import com.history.entity.enums.ArtType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@AllArgsConstructor
@Data
@Builder
@NoArgsConstructor
public class ArtWithImageSaveDTO {

    private ArtType artType;
    private String artName;
    private City city;
    private byte[] image;
    private String fileExtension;
}
