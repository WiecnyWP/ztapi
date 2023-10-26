package com.history.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.*;

import java.io.Serializable;

@Table
@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Rate {

    @EmbeddedId
    private CompositeKey id;

    @ManyToOne
    @MapsId("usersId")
    @JoinColumn(name = "users_id")
    private User user;

    @ManyToOne
    @MapsId("artId")
    @JoinColumn(name = "art_id")
    private Art art;

    @Column
    @Min(1)
    @Max(5)
    private Integer rate;

    @Data
    @NoArgsConstructor
    @Embeddable
    @EqualsAndHashCode
    public static class CompositeKey implements Serializable {

        @Column(name = "users_id")
        private Integer usersId;

        @Column(name = "art_id")
        private Integer artId;
    }
}

