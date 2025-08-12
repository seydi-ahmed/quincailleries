package com.example.quincailleries.controller;

import com.example.quincailleries.model.Product;
import com.example.quincailleries.model.StockTransaction;
import com.example.quincailleries.repository.ProductRepository;
import com.example.quincailleries.repository.StockTransactionRepository;
import com.example.quincailleries.service.InventoryService;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/quincailleries/{quincaillerieId}/products/{productId}/stock")
@RequiredArgsConstructor
public class StockController {

    private final ProductRepository productRepository;
    private final StockTransactionRepository stockTransactionRepository;

    @PostMapping("/update")
    public ResponseEntity<Product> updateStock(
            @PathVariable Long quincaillerieId,
            @PathVariable Long productId,
            @RequestParam int quantiteChange) {

        return productRepository.findById(productId)
                .map(product -> {
                    product.setQuantite(product.getQuantite() + quantiteChange);

                    StockTransaction transaction = new StockTransaction();
                    transaction.setProduct(product);
                    transaction.setQuantiteChange(quantiteChange);
                    transaction.setDateTransaction(LocalDateTime.now());

                    stockTransactionRepository.save(transaction);
                    return ResponseEntity.ok(productRepository.save(product));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/transactions")
    public ResponseEntity<List<StockTransaction>> getStockTransactions(
            @PathVariable Long quincaillerieId,
            @PathVariable Long productId) {

        return ResponseEntity.ok(stockTransactionRepository.findByProductId(productId));
    }

    @PutMapping
    public ResponseEntity<Product> updateProduct(
            @PathVariable Long quincaillerieId,
            @PathVariable Long productId,
            @RequestBody Product productDetails) {

        return productRepository.findById(productId)
                .map(product -> {
                    product.setNom(productDetails.getNom());
                    product.setPrix(productDetails.getPrix());
                    product.setQuantite(productDetails.getQuantite());
                    return ResponseEntity.ok(productRepository.save(product));
                })
                .orElse(ResponseEntity.notFound().build());
    }

}
