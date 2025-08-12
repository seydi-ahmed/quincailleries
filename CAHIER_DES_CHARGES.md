# Cahier des Charges — Application de Gestion des Quincailleries

Le projet vise à développer une application permettant la gestion de plusieurs quincailleries et leurs produits. L’objectif est de fournir une interface simple pour ajouter, modifier, supprimer et consulter les quincailleries et leurs stocks.

---

## Périmètre fonctionnel
1. Gestion des quincailleries
- Ajouter une nouvelle quincaillerie avec un nom, adresse et éventuellement d’autres informations.
- Modifier les informations d’une quincaillerie existante.
- Supprimer une quincaillerie.
- Lister toutes les quincailleries disponibles.

2. Gestion des produits
- Ajouter un produit à une quincaillerie.
- Modifier les informations d’un produit (nom, prix, quantité).
- Supprimer un produit.
- Consulter la liste des produits d’une quincaillerie sélectionnée.
- Mettre à jour la quantité en stock d’un produit.

---

## Contraintes techniques
1. Backend
- Technologie: Spring Boot (Java)
- API REST pour exposer les fonctionnalités.
- Base de données embarquée (H2) pour le développement, possibilité d’adapter vers une base relationnelle externe.
- Gestion des erreurs et validation des données.
- CORS configuré pour autoriser les requêtes frontend.

2. Frontend
- Technologie: React
- Interface responsive simple.
- Communication via API REST avec le backend.
- Gestion des formulaires d’ajout/modification.
- Affichage clair des listes de quincailleries et produits.
- Notification des actions (succès, erreurs).

---

## Architecture
- Application en deux parties distinctes : backend (API) et frontend (client React).
- Communication via JSON sur HTTP.
- Serveur backend accessible sur localhost:8080.
- Frontend accessible sur localhost:3000.

---

## Tests
- Tests manuels via Postman (fortement recommandé) pour valider toutes les routes de l’API.
- Tests fonctionnels via interface React pour vérifier la prise en charge des fonctionnalités utilisateur.

---

## Livrables
- Code source complet backend + frontend.
- Documentation README pour installation, démarrage et utilisation.
- Fichier .gitignore adapté aux deux parties.
- Cahier des charges.