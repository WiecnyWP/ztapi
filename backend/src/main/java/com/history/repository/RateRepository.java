package com.history.repository;

import com.history.entity.Rate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RateRepository extends JpaRepository<Rate, Rate.CompositeKey> {
}
