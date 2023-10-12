package com.history.repository;

import com.history.entity.Art;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArtRepository extends JpaRepository<Art, Integer> {
}
