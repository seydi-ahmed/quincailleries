package com.example.quincailleries.model;

import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "quincailleries")
public class Quincailleries {

    @Id
    @GeneratedValue(strategy = GenerationType.INDENTITY)
    private Long id;

    private String nom;

    private String adresse;

    @OneToMany(mappedBy = "quincailleries", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Product> produits;

}