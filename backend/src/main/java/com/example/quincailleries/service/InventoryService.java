package com.example.quincailleries.service;

import com.example.quincailleries.model.Product;
import com.example.quincailleries.model.Quincailleries;
import com.example.quincailleries.model.StockTransaction;
import com.example.quincailleries.repository.ProductRepository;
import com.example.quincailleries.repository.QuincailleriesRepository;
import com.example.quincailleries.repository.StockTransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class InventoryService {

    private final QuincailleriesRepository quincailleriesRepository;
    private final ProductRepository productRepository;
    private final StockTransactionRepository stockTransactionRepository;

    // CRUD Quincailleries
    public List<Quincailleries> getAllQuincailleries() {
        return quincailleriesRepository.findAll();
    }

    public Optional<Quincailleries> getQuincailleriesById(Long id) {
        return quincailleriesRepository.findById(id);
    }

    public Quincailleries createQuincailleries(Quincailleries q) {
        return quincailleriesRepository.save(q);
    }

    public void deleteQuincailleries(Long id) {
        quincailleriesRepository.deleteById(id);
    }

    // CRUD Produits
    public List<Product> getProductsByQuincailleries(Long quincailleriesId) {
        return productRepository.findByQuincailleriesId(quincailleriesId);
    }

    public Optional<Product> getProductById(Long productId) {
        return productRepository.findById(productId);
    }

    public Product addProductToQuincailleries(Long quincailleriesId, Product product) {
        Quincailleries q = quincailleriesRepository.findById(quincailleriesId)
                .orElseThrow(() -> new RuntimeException("Quincailleries non trouvé"));
        product.setQuincailleries(q);
        return productRepository.save(product);
    }

    public void deleteProduct(Long productId) {
        productRepository.deleteById(productId);
    }

    // Gestion du stock et transactions
    public StockTransaction updateStock(Long productId, int quantiteChange) {
        Product produit = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Produit non trouvé"));

        int nouvelleQuantite = produit.getQuantite() + quantiteChange;
        if (nouvelleQuantite < 0) {
            throw new RuntimeException("Stock insuffisant");
        }
        produit.setQuantite(nouvelleQuantite);
        productRepository.save(produit);

        StockTransaction transaction = new StockTransaction();
        transaction.setProduct(produit);
        transaction.setQuantiteChange(quantiteChange);
        transaction.setDateTransaction(LocalDateTime.now());
        return stockTransactionRepository.save(transaction);
    }
}
