package com.example.quincailleries.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "stock_transactions")
public class StockTransaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int quantiteChange;

    private LocalDateTime dateTransaction;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product produit;
}
