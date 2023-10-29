package com.history.entity;

import com.history.entity.enums.ArtType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Table
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Art {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private ArtType artType;

    @Column(unique = true)
    private String artName;

    @Column
    private String image;

    @ManyToOne
    private City city;

    @OneToMany(mappedBy = "art")
    private Set<Rate> rates;
}
