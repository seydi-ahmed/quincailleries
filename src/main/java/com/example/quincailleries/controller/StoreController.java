package com.example.quincailleries.controller;

import com.example.quincailleries.model.Quincailleries;
import com.example.quincailleries.repository.QuincailleriesRepository;
import com.example.quincailleries.service.InventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/quincailleries")
@RequiredArgsConstructor
public class StoreController {

    private final InventoryService inventoryService;
    private final QuincailleriesRepository repository;

    @GetMapping
    public List<Quincailleries> getAll() {
        return inventoryService.getAllQuincailleries();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Quincailleries> getById(@PathVariable Long id) {
        return inventoryService.getQuincailleriesById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Quincailleries create(@Valid @RequestBody Quincailleries quincailleries) {
        return inventoryService.createQuincailleries(quincailleries);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        inventoryService.deleteQuincailleries(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Quincailleries> updateQuincaillerie(@PathVariable Long id,
            @RequestBody Quincailleries quincaillerie) {
        return repository.findById(id)
                .map(existing -> {
                    existing.setNom(quincaillerie.getNom());
                    existing.setAdresse(quincaillerie.getAdresse());
                    return ResponseEntity.ok(repository.save(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

}
