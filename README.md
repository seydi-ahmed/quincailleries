# Gestion de quincailleries

---

## Cahier des charges
1) Objectif: créer une plateforme en ligne pour gérer plusieurs quincailleries en temps réel (gestion produits, stock, mouvements, vues temps réel des changements de stock).

2) Fonctionnalités minimales (MVP):
- Multi-quincaillerie (création / lecture / mise à jour / suppression).
- Gestion des produits (référence, nom, catégorie, prix).
- Gestion du stock par quincaillerie (quantité).
- Enregistrement des mouvements de stock (entrée, sortie, vente, correction) avec horodatage et opérateur.
- Interface temps réel pour visualiser les changements de stock (push server → clients).
- API REST sécurisée (authentification basique ou token pour MVP).
- Stock minimal/alerte (optionnel).
- Logs et audit des transactions.

3) Contraintes non-fonctionnelles:
- Doit être déployable en conteneur (Docker).
- Réactivité temps réel pour le dashboard (latence <1s idéal).
- Persistance via base relationnelle (H2 pour dev, PostgreSQL en prod).
- Tests unitaires & d’intégration (coverage raisonnable).
- CI/CD pipeline (Maven, GitHub Actions ou GitLab CI).
- Monitoring / metrics basiques (actuator, Prometheus exposition optionnelle).

---

## Choix techniques proposés
1) Backend
- Java 17+, Spring Boot (Spring Web, Spring Data JPA, Spring Security si besoin).
- Persistence: H2 (dev), PostgreSQL (prod).
- Real-time: SSE (Server-Sent Events) pour simplicité (uni-directionnel), ou WebSocket/STOMP si bidirectionnel nécessaire.
- Build: Maven.
- Container: Dockerfile.

2) Frontend
- Minimal : plain HTML + vanilla JS (fetch + EventSource) — facile à tester.
- Option: React pour un client plus riche.

3) Tests
- JUnit 5, Mockito, Spring Boot Test.

4) Déploiement
- Docker Compose (DB + app), ou Kubernetes pour production.

---

## Architecture
1) Entités principales:
- Quincaillerie (id, nom, adresse, contact)
- Product (id, sku, name, description, price)
- Stock stock implicite : quantité par (quincaillerie, product) — peut être un attribut ou déduit des StockTransaction.
- StockTransaction (id, quincaillerie_id, product_id, delta, type, timestamp, operator, note)

2) Relation:
- Quincaillerie 1 - N StockTransaction
- Product 1 - N StockTransaction

---

## API
- GET /api/stores — liste quincailleries
- POST /api/stores — créer quincaillerie
- GET /api/stores/{id}/products — produits et stocks pour la quincaillerie
- POST /api/products — créer produit
- POST /api/stores/{id}/stock/adjust — ajuster stock (payload : productId, delta, type, operator)
- GET /api/stock/{storeId}/product/{productId}/quantity — quantité actuelle
- GET /api/events/stock-updates — SSE stream en temps réel des changements de stock

---

## Sécurité (MVP)
- Auth basique ou JWT (selon besoin). Pour l’exercice, on peut laisser ouvert ou ajouter une simple authentification Basic.

---

## Plan de réalisation (étapes / backlog)
- Initialisation du projet (Spring Initializr) — dependencies: Web, JPA, H2, DevTools, Validation.
- Modèles JPA + Repository.
- Service métier (transactions atomiques, validation).
- Contrôleurs REST + endpoints CRUD.
- Implémentation SSE pour push des événements.
- Frontend HTML/JS minimal.
- Tests unitaires pour services, integration tests pour controllers.
- Dockerfile + docker-compose pour local.
- CI pipeline basique.
- Documentation (README, Postman collection).

---

## Auteur
- Nom: Mouhamed DIOUF
- GitHub: https://github.com/seydi-ahmed
- Email: diouf.mouhamed3@ugb.edu.sn
- Numéro: +221776221681
- LinkedIn: www.linkedin.com/in/mouhamed-diouf-435207174
