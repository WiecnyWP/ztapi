package com.history.entity;

import com.history.commons.ArtType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Art {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

    @Column
    private ArtType artType;

    @Column(unique = true)
    private String artName;

    @Column
    private String city;

    @Column
    private byte[] image;
}
