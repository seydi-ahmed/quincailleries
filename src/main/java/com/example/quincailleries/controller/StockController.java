package com.example.quincailleries.controller;

import com.example.quincailleries.model.StockTransaction;
import com.example.quincailleries.service.InventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products/{productId}/stock")
@RequiredArgsConstructor
public class StockController {

    private final InventoryService inventoryService;

    @PostMapping("/update")
    public ResponseEntity<StockTransaction> updateStock(@PathVariable Long productId,
                                                        @RequestParam int quantiteChange) {
        try {
            StockTransaction transaction = inventoryService.updateStock(productId, quantiteChange);
            return ResponseEntity.ok(transaction);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
