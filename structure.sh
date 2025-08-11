#!/bin/bash

# Création des dossiers
mkdir -p src/main/java/com/example/quincailleries/model
mkdir -p src/main/java/com/example/quincailleries/repository
mkdir -p src/main/java/com/example/quincailleries/service
mkdir -p src/main/java/com/example/quincailleries/controller
mkdir -p src/main/resources/static

# Modèles
touch src/main/java/com/example/quincailleries/model/quincailleries.java
touch src/main/java/com/example/quincailleries/model/Product.java
touch src/main/java/com/example/quincailleries/model/StockTransaction.java

# Repositories
touch src/main/java/com/example/quincailleries/repository/quincailleriesRepository.java
touch src/main/java/com/example/quincailleries/repository/ProductRepository.java
touch src/main/java/com/example/quincailleries/repository/StockTransactionRepository.java

# Services
touch src/main/java/com/example/quincailleries/service/InventoryService.java

# Controllers
touch src/main/java/com/example/quincailleries/controller/StoreController.java
touch src/main/java/com/example/quincailleries/controller/ProductController.java
touch src/main/java/com/example/quincailleries/controller/StockController.java

# Ressources
touch src/main/resources/application.properties
touch src/main/resources/static/index.html

echo "✅ Arborescence et fichiers créés dans le dossier"
