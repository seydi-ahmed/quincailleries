package com.example.quincailleries.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Data
public class StockTransaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime dateTransaction;
    private int quantiteChange;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
}
