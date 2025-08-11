package com.example.quincailleries.repository;

import com.example.quincailleries.model.StockTransaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StockTransactionRepository extends JpaRepository<StockTransaction, Long> {
    List<StockTransaction> findByProduitId(Long produitId);
}
