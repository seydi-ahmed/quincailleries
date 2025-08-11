package com.example.quincailleries.controller;

import com.example.quincailleries.model.Quincailleries;
import com.example.quincailleries.service.InventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/quincailleries")
@RequiredArgsConstructor
public class StoreController {

    private final InventoryService inventoryService;

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
}
