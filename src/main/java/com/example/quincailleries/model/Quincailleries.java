package com.example.quincailleries.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "quincailleries")
public class Quincailleries {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nom;

    private String adresse;

    @OneToMany(mappedBy = "quincailleries", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Product> produits;
}
