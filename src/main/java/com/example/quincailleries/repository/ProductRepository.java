package com.example.quincailleries.repository;

import com.example.quincailleries.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByQuincailleriesId(Long quincailleriesId);
}
