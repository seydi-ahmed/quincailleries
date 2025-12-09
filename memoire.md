### **REMERCIEMENTS**

Je tiens à exprimer ma profonde gratitude à toutes les personnes qui ont contribué de près ou de loin à la réalisation de ce projet et à l’aboutissement de mes études. 
Mes remerciements s’adressent, en premier lieu, à Dieu, pour la force, le courage et la persévérance qu’il m’a accordés tout au long de ce parcours. 
J’adresse ma sincère reconnaissance à mon encadrant académique, Mr Boa Diauph YOGANGUINA, pour son soutien constant, sa disponibilité, ses conseils pertinents et son expertise qui ont été d’une aide précieuse pour surmonter les défis techniques et structurer ce mémoire. Son encadrement a été déterminant dans la réussite de ce projet. 
Je remercie l’ensemble du corps professoral du département de Génie Logiciel de l’École Supérieure des Sciences Appliquées pour la qualité de l’enseignement dispensé, qui a forgé mes compétences et m’a permis d’atteindre le niveau d’expertise requis pour mener à bien ce travail. 
Enfin, une pensée spéciale à mes parents, ma famille et mes amis, pour leur amour inconditionnel, leurs encouragements incessants et leur soutien moral qui ont été mon pilier durant ces années d’études. 
À tous ceux qui m’ont soutenu, trouvez dans ce travail le témoignage de ma profonde gratitude et de mon respect. 

---

### **RÉSUMÉ (français)**
Le secteur du commerce de détail, notamment celui des quincailleries, fait face à une nécessité croissante de digitalisation pour optimiser sa gestion et étendre sa visibilité. Ce mémoire présente la conception et la réalisation d’une plateforme web robuste et évolutive, nommée Sama_Quincaillerie, visant à centraliser la gestion des stocks, des produits et des informations pour un réseau de quincailleries indépendantes. 
Le projet répond à la problématique de la gestion éparpillée et du manque de visibilité en offrant aux propriétaires un outil de type Software as a Service (SaaS) pour gérer leurs magasins (CRUD), leurs produits (CRUD) et assurer une vitrine publique consultable par les clients. L’architecture adoptée est de type Client-Serveur, basée sur une API RESTful développée avec Spring Boot 3.5.5 (Backend) pour garantir la performance et la sécurité (via Spring Security et JWT), et une interface utilisateur construite avec Angular 20 (Frontend) pour une expérience utilisateur moderne et responsive. La base de données PostgreSQL assure la persistance et l’intégrité des données structurées autour des entités users, hardware_stores et products. Ce travail démontre l’application concrète des principes du Génie Logiciel, de l’analyse des besoins à la validation par les tests, aboutissant à une solution opérationnelle, sécurisée et modulaire. 
Mots-clés : Gestion Commerciale, Spring Boot, Angular, API REST, JWT, Quincaillerie, Génie Logiciel, PostgreSQL. 

---

### **ABSTRACT (anglais)**
The retail sector, particularly the hardware store domain, is increasingly required to digitalize to optimize management and enhance visibility. This thesis presents the design and implementation of a robust and scalable web platform, named [Nom de votre application], aimed at centralizing inventory, product, and information management for a network of independent hardware stores. 
The project addresses the challenge of scattered management and lack of visibility by offering owners a Software as a Service (SaaS) tool to manage their stores (CRUD), their products (CRUD), and to provide a public showcase accessible to customers. The adopted architecture is Client-Server, based on a RESTful API developed with Spring Boot 3.5.5 (Backend) to ensure performance and security (via Spring Security and JWT), and a user interface built with Angular 20 (Frontend) for a modern and responsive user experience. The PostgreSQL database ensures data persistence and integrity, structured around the users, hardware_stores, and products entities. This work demonstrates the practical application of Software Engineering principles, from requirements analysis to validation through testing, resulting in an operational, secure, and modular solution. 
Keywords: Commercial Management, Spring Boot, Angular, REST API, JWT, Hardware Store, Software Engineering, PostgreSQL.

---

### **SOMMAIRE / TABLE DES MATIÈRES**
--> GÉNÉRE MOI CECI AUTOMATIQUEMENT

---

### **LISTE DES FIGURES ET TABLEAUX**
--> DIS MOI LESQUELS METTRE

---

### **LISTE DES ABRÉVIATIONS**
--> GÉNÉRE MOI CECI AUTOMATIQUEMENT

---

### **INTRODUCTION GÉNÉRALE** (3-4 pages)
1. **Contexte général**
   - Importance de la digitalisation des commerces
   - Problématique de gestion dans les quincailleries

2. **Problématique**
   - Difficultés de gestion manuelle
   - Besoins des propriétaires et clients

3. **Objectifs du projet**
   - Objectif principal
   - Objectifs spécifiques

4. **Méthodologie adoptée**
   - Approche de développement
   - Outils et technologies

5. **Structure du mémoire**

---

### **CHAPITRE 1 : ÉTAT DE L'ART** (12-15 pages)

#### **1.1 Concepts fondamentaux**
- Systèmes de gestion commerciale
- Applications web modernes
- Architecture client-serveur

#### **1.2 Technologies utilisées**

**1.2.1 Backend**
- Spring Boot : présentation, avantages
- Spring Security et JWT
- Spring Data JPA
- PostgreSQL

**1.2.2 Frontend**
- Angular : architecture, composants
- TypeScript
- Programmation réactive (RxJS)

**1.2.3 Concepts architecturaux**
- Architecture MVC/REST
- Microservices vs Monolithe
- Sécurité des applications web

#### **1.3 Étude comparative**
- Tableau comparatif des solutions existantes
- Analyse des applications similaires
- Justification des choix technologiques

#### **1.4 Méthodologies de développement**
- Cycle de vie logiciel
- Méthode agile (si applicable)
- Gestion de projet

---

### **CHAPITRE 2 : ANALYSE ET CONCEPTION** (15-20 pages)

#### **2.1 Analyse des besoins**

**2.1.1 Besoins fonctionnels**
- Gestion des utilisateurs
- Gestion des quincailleries
- Gestion des produits
- Fonctionnalités publiques

**2.1.2 Besoins non fonctionnels**
- Performance
- Sécurité
- Ergonomie
- Compatibilité

#### **2.2 Acteurs du système**
- Propriétaire de quincaillerie
- Client/Visiteur
- Administrateur (si applicable)

#### **2.3 Modélisation UML**

**2.3.1 Diagrammes de cas d'utilisation**
- Cas d'utilisation globaux
- Cas d'utilisation par acteur
- Descriptions détaillées des UC principaux

**2.3.2 Diagrammes de séquence**
- Authentification
- Création d'un magasin
- Ajout d'un produit
- Consultation publique

**2.3.3 Diagrammes de classes**
- Modèle conceptuel de données
- Relations entre entités

**2.3.4 Diagrammes d'activité** (optionnel)
- Processus métier principaux

#### **2.4 Conception de la base de données**
- Modèle Entité-Association
- Schéma relationnel
- Dictionnaire de données
- Contraintes d'intégrité

#### **2.5 Architecture de l'application**
- Architecture globale (schéma 3-tiers)
- Architecture backend (couches)
- Architecture frontend (modules)
- Flux de données

#### **2.6 Conception des interfaces**
- Maquettes (wireframes)
- Charte graphique
- Navigation

---

### **CHAPITRE 3 : RÉALISATION** (15-20 pages)

#### **3.1 Environnement de développement**
- Outils de développement (IDE)
- Outils de gestion de versions (Git)
- Environnement de test

#### **3.2 Implémentation du Backend**

**3.2.1 Configuration du projet Spring Boot**
- Structure du projet
- Dépendances Maven/Gradle
- Configuration application.properties

**3.2.2 Couche Modèle (Entities)**
- Entité User
- Entité HardwareStore
- Entité Product
- Annotations JPA

**3.2.3 Couche Repository**
- Interfaces Repository
- Requêtes personnalisées

**3.2.4 Couche Service**
- Logique métier
- Gestion des transactions

**3.2.5 Couche Controller**
- Endpoints REST
- Gestion des requêtes HTTP
- Validation des données

**3.2.6 Sécurité**
- Configuration Spring Security
- Implémentation JWT
- Filtres d'authentification
- Gestion des rôles

**3.2.7 Gestion des exceptions**
- Exception Handler global
- Messages d'erreur personnalisés

#### **3.3 Implémentation du Frontend**

**3.3.1 Structure du projet Angular**
- Architecture modulaire
- Organisation des dossiers

**3.3.2 Composants principaux**
- Composant d'authentification
- Composant dashboard
- Composant gestion magasins
- Composant gestion produits
- Composants publics

**3.3.3 Services**
- Service d'authentification
- Service API (HTTP)
- Service de gestion d'état

**3.3.4 Routing et Guards**
- Configuration des routes
- Protection des routes
- Navigation

**3.3.5 Intercepteurs HTTP**
- Injection du token JWT
- Gestion des erreurs

**3.3.6 Interfaces utilisateur**
- Design responsive
- Formulaires réactifs
- Validation côté client

#### **3.4 Intégration Frontend-Backend**
- Configuration CORS
- Communication API
- Gestion des erreurs

---

### **CHAPITRE 4 : TESTS ET VALIDATION** (8-10 pages)

#### **4.1 Stratégie de test**
- Types de tests appliqués
- Outils de test

#### **4.2 Tests unitaires**
- Tests backend (JUnit)
- Tests frontend (Jasmine/Karma)
- Couverture de code

#### **4.3 Tests d'intégration**
- Tests des APIs
- Tests de la base de données

#### **4.4 Tests fonctionnels**
- Scénarios de test
- Résultats des tests

#### **4.5 Tests de sécurité**
- Tests d'authentification
- Tests des autorisations
- Vulnérabilités identifiées et corrigées

#### **4.6 Tests de performance**
- Temps de réponse
- Charge supportée

#### **4.7 Tests d'acceptation**
- Validation par les utilisateurs
- Retours et ajustements

---

### **CHAPITRE 5 : DÉMONSTRATION ET RÉSULTATS** (5-7 pages)

#### **5.1 Présentation de l'application**
- Captures d'écran commentées
- Parcours utilisateur

#### **5.2 Fonctionnalités implémentées**
- Tableau récapitulatif
- Comparaison cahier des charges vs réalisé

#### **5.3 Analyse des résultats**
- Objectifs atteints
- Difficultés rencontrées
- Solutions apportées

#### **5.4 Avantages de la solution**
- Pour les propriétaires
- Pour les clients
- Pour le commerce

---

### **CONCLUSION GÉNÉRALE** (2-3 pages)

1. **Synthèse du travail réalisé**
2. **Objectifs atteints**
3. **Apports personnels et professionnels**
4. **Limites de la solution**
5. **Perspectives et améliorations futures**
   - Fonctionnalités additionnelles (paiement en ligne, système de commande, statistiques avancées)
   - Optimisations techniques
   - Extension mobile

---

### **BIBLIOGRAPHIE / WEBOGRAPHIE**

### **ANNEXES**
- Annexe A : Code source important
- Annexe B : Guide d'installation
- Annexe C : Manuel utilisateur
- Annexe D : Cahier des charges détaillé
- Annexe E : Captures d'écran supplémentaires

---

## 💡 Conseils et Suggestions

### **Pour la Rédaction**

1. **Méthodologie**
   - Rédigez par étapes : ne cherchez pas la perfection du premier coup
   - Commencez par les chapitres techniques (2 et 3) où vous avez toute l'information
   - Rédigez l'introduction et la conclusion en dernier

2. **Style et Forme**
   - Utilisez un style impersonnel ("on", "nous" plutôt que "je")
   - Numérotez toutes les figures et tableaux avec des légendes claires
   - Citez vos sources systématiquement
   - Relisez plusieurs fois pour corriger les fautes

3. **Mise en page**
   - Police : Times New Roman 12pt pour le texte, 14pt pour les titres
   - Interligne : 1.5
   - Marges : 2.5cm de chaque côté
   - Pagination : numérotation continue

### **Pour les Diagrammes UML**

- Utilisez des outils comme **PlantUML**, **StarUML**, **Lucidchart** ou **Draw.io**
- Créez au minimum :
  - 3-4 diagrammes de cas d'utilisation
  - 5-6 diagrammes de séquence (scénarios principaux)
  - 1 diagramme de classes complet
  - 2-3 diagrammes d'activité

### **Pour les Captures d'Écran**

- Prenez des captures haute qualité
- Annotez-les pour expliquer les éléments importants
- Créez un parcours utilisateur complet avec des captures séquentielles
- Montrez les messages d'erreur et leur gestion

### **Pour l'Analyse et la Conception**

1. **Besoins fonctionnels** : listez TOUS les cas d'usage, même les plus simples
2. **Modèle de données** : justifiez chaque relation, chaque attribut
3. **Architecture** : créez des schémas clairs montrant les flux de données

### **Pour la Partie Réalisation**

1. **Incluez des extraits de code significatifs** avec explications
   - Configuration Spring Security
   - Implémentation JWT
   - Exemple de Controller avec annotations
   - Exemple de Service
   - Exemple de Repository avec requête personnalisée
   - Configuration CORS
   - Composants Angular clés
   - Services et Intercepteurs

2. **Expliquez vos choix techniques**
   - Pourquoi JWT plutôt que sessions ?
   - Pourquoi PostgreSQL ?
   - Pourquoi Angular plutôt que React/Vue ?

### **Pour les Tests**

- Créez des **tableaux de tests** avec :
  - ID du test
  - Scénario
  - Données d'entrée
  - Résultat attendu
  - Résultat obtenu
  - Statut (✓/✗)

### **Éléments à Valoriser**

1. **Sécurité** : JWT, BCrypt, protection des routes, CORS
2. **Architecture** : séparation des couches, modularité
3. **Bonnes pratiques** : Repository pattern, Services, DTOs
4. **Scalabilité** : architecture permettant l'évolution
5. **UX/UI** : interface responsive, ergonomie

### **Perspectives d'Amélioration à Mentionner**

- Application mobile (iOS/Android)
- Système de commande en ligne
- Paiement intégré (Stripe, PayPal)
- Gestion des stocks avec alertes
- Statistiques et tableaux de bord avancés
- Système de notation/avis clients
- Multi-langue
- Système de notifications (email, push)
- Export de données (PDF, Excel)
- Gestion des employés et permissions
- API publique pour partenaires

### **Checklist Finale**

✅ Toutes les pages sont numérotées  
✅ Toutes les figures/tableaux sont numérotées et référencées  
✅ La bibliographie est complète et normalisée  
✅ Les abréviations sont définies  
✅ Le sommaire est à jour  
✅ Orthographe et grammaire vérifiées  
✅ Les diagrammes sont clairs et professionnels  
✅ Le code source est bien indenté et commenté  
✅ Les captures d'écran sont de bonne qualité  

**************************
**************************
**************************

## PowerPoint

- Page de titre
- Plan de la présentation
- Introduction (problématique, objectifs)
- Analyse et conception (2-3 slides avec diagrammes UML)
- Architecture technique (1-2 slides)
- Fonctionnalités principales (3-4 slides avec démos/captures)
- Résultats et tests
- Démonstration live (optionnel)
- Conclusion et perspectives
- Questions
