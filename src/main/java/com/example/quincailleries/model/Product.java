package com.example.quincailleries.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;

    private int quantite;

    private double prix;

    @ManyToOne
    @JoinColumn(name = "quincailleries_id")
    private Quincailleries quincailleries;
}
