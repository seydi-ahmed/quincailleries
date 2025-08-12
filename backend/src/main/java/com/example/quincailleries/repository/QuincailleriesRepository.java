package com.example.quincailleries.repository;

import com.example.quincailleries.model.Quincailleries;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuincailleriesRepository extends JpaRepository<Quincailleries, Long> {
}
