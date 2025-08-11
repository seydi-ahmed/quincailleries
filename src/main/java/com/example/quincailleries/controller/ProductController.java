package com.example.quincailleries.controller;

import com.example.quincailleries.model.Product;
import com.example.quincailleries.service.InventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/quincailleries/{quincailleriesId}/products")
@RequiredArgsConstructor
public class ProductController {

    private final InventoryService inventoryService;

    @GetMapping
    public List<Product> getProducts(@PathVariable Long quincailleriesId) {
        return inventoryService.getProductsByQuincailleries(quincailleriesId);
    }

    @PostMapping
    public Product addProduct(@PathVariable Long quincailleriesId,
                              @Valid @RequestBody Product product) {
        return inventoryService.addProductToQuincailleries(quincailleriesId, product);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<Product> getProductById(@PathVariable Long quincailleriesId,
                                                  @PathVariable Long productId) {
        return inventoryService.getProductById(productId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long quincailleriesId,
                                              @PathVariable Long productId) {
        inventoryService.deleteProduct(productId);
        return ResponseEntity.noContent().build();
    }
}
