# REMERCIEMENTS
Je tiens à exprimer ma profonde gratitude à toutes les personnes qui ont contribué de près ou de loin à la réalisation de ce projet et à l'aboutissement de mes études.
Mes remerciements s'adressent, en premier lieu, à Dieu, pour la force, le courage et la persévérance qu’il m’a accordés tout au long de ce parcours.
J’adresse ma sincère reconnaissance à mon encadrant académique, Mr Boa Diauph YOGANGUINA, pour son soutien constant, sa disponibilité, ses conseils pertinents et son expertise qui ont été d’une aide précieuse pour surmonter les défis techniques et structurer ce mémoire. Son encadrement a été déterminant dans la réussite de ce projet.
Je remercie l'ensemble du corps professoral du département de Génie Logiciel de l'École Supérieure des Sciences Appliquées pour la qualité de l’enseignement dispensé, qui a forgé mes compétences et m'a permis d'atteindre le niveau d'expertise requis pour mener à bien ce travail.
Enfin, une pensée spéciale à mes parents, ma famille et mes amis, pour leur amour inconditionnel, leurs encouragements incessants et leur soutien moral qui ont été mon pilier durant ces années d'études.
À tous ceux qui m’ont soutenu, trouvez dans ce travail le témoignage de ma profonde gratitude et de mon respect.


# Résumé (Français)
Le secteur du commerce de détail, notamment celui des quincailleries, fait face à une nécessité croissante de digitalisation pour optimiser sa gestion et étendre sa visibilité. Ce mémoire présente la conception et la réalisation d'une plateforme web robuste et évolutive, nommée **SenQuincaillerie**, visant à centraliser la gestion des stocks, des produits et des informations pour un réseau de quincailleries indépendantes.
Le projet répond à la problématique de la gestion éparpillée et du manque de visibilité en offrant aux propriétaires un outil de type _Software as a Service (SaaS)_ pour gérer leurs magasins (CRUD), leurs produits (CRUD) et assurer une vitrine publique consultable par les clients. L'architecture adoptée est de type Client-Serveur, basée sur une API RESTful développée avec **Spring Boot 3.5.5** (Backend) pour garantir la performance et la sécurité (via **Spring Security** et **JWT**), et une interface utilisateur construite avec **Angular 20** (Frontend) pour une expérience utilisateur moderne et _responsive_. La base de données **PostgreSQL** assure la persistance et l'intégrité des données structurées autour des entités `users`, `hardware_stores` et `products`. Ce travail démontre l'application concrète des principes du Génie Logiciel, de l'analyse des besoins à la validation par les tests, aboutissant à une solution opérationnelle, sécurisée et modulaire.
**Mots-clés :** Gestion Commerciale, Spring Boot, Angular, API REST, JWT, Quincaillerie, Génie Logiciel, PostgreSQL.


# Abstract (Anglais)
The retail sector, particularly the hardware store domain, is increasingly required to digitalize to optimize management and enhance visibility. This thesis presents the design and implementation of a robust and scalable web platform, named **SenQuincaillerie**, aimed at centralizing inventory, product, and information management for a network of independent hardware stores.
The project addresses the challenge of scattered management and lack of visibility by offering owners a _Software as a Service (SaaS)_ tool to manage their stores (CRUD), their products (CRUD), and to provide a public showcase accessible to customers. The adopted architecture is Client-Server, based on a RESTful API developed with **Spring Boot 3.5.5** (Backend) to ensure performance and security (via **Spring Security** and **JWT**), and a user interface built with **Angular 20** (Frontend) for a modern and responsive user experience. The **PostgreSQL** database ensures data persistence and integrity, structured around the `users`, `hardware_stores`, and `products` entities. This work demonstrates the practical application of Software Engineering principles, from requirements analysis to validation through testing, resulting in an operational, secure, and modular solution.
**Keywords:** Commercial Management, Spring Boot, Angular, REST API, JWT, Hardware Store, Software Engineering, PostgreSQL.


# SOMMAIRE / TABLE DES MATIÈRES
GÉNÉRÉ AUTOMATIQUEMENT À LA FIN


# LISTE DES FIGURES
Figure 1.1 – Architecture client-serveur classique
Figure 1.2 – Cycle de vie d’une requête dans Spring Boot
Figure 2.1 – Diagramme de cas d’utilisation global du système
Figure 2.2 – Diagramme de cas d’utilisation – Acteur Propriétaire
Figure 2.3 – Diagramme de séquence – Processus d’authentification
Figure 2.4 – Diagramme de séquence – Création d’une quincaillerie
Figure 2.5 – Diagramme de séquence – Ajout d’un produit
Figure 2.6 – Diagramme de séquence – Consultation publique d’un produit
Figure 2.7 – Diagramme de classes complet du domaine
Figure 2.8 – Diagramme d’activité – Ajout d’un produit
Figure 2.9 – Modèle Entité-Association (MEA)
Figure 2.10 – Architecture globale 3-tiers de Sama_Quincaillerie
Figure 2.11 – Wireframe – Page d’accueil publique
Figure 2.12 – Wireframe – Dashboard propriétaire
Figure 3.1 – Structure du projet backend Spring Boot
Figure 3.2 – Flux complet d’authentification JWT
Figure 3.3 – Structure modulaire du projet Angular
Figure 5.1 – Page de connexion et inscription
Figure 5.2 – Dashboard du propriétaire après connexion
Figure 5.3 – Formulaire de création d’une quincaillerie
Figure 5.4 – Gestion des produits d’un magasin
Figure 5.5 – Vitrine publique – Vue liste
Figure 5.6 – Vitrine publique – Vue détaillée d’un produit
Figure 5.7 – Version responsive sur smartphone

# LISTE DES TABLEAUX
Tableau 1.1 – Comparaison des principaux frameworks backend (2025)
Tableau 1.2 – Comparaison des solutions existantes de gestion commerciale
Tableau 2.1 – Besoins fonctionnels détaillés
Tableau 2.2 – Besoins non fonctionnels
Tableau 2.3 – Dictionnaire de données – Entité User
Tableau 2.4 – Dictionnaire de données – Entité HardwareStore
Tableau 2.5 – Dictionnaire de données – Entité Product
Tableau 4.1 – Exemples de tests unitaires backend (JUnit 5 + Mockito)
Tableau 4.2 – Couverture de code obtenue
Tableau 4.3 – Scénarios de tests fonctionnels principaux
Tableau 4.4 – Résultats des tests de performance (JMeter – 200 utilisateurs)
Tableau 5.1 – Tableau de conformité : Cahier des charges vs Réalisé


# LISTE DES ABRÉVIATIONS
| Abréviation | Signification                         |
| :---------- | :------------------------------------ |
| **API**     | Application Programming Interface     |
| **CRUD**    | Create, Read, Update, Delete          |
| **CORS**    | Cross-Origin Resource Sharing         |
| **CSRF**    | Cross-Site Request Forgery            |
| **DAO**     | Data Access Object                    |
| **DTO**     | Data Transfer Object                  |
| **HTTP**    | HyperText Transfer Protocol           |
| **IDE**     | Integrated Development Environment    |
| **JPA**     | Java Persistence API                  |
| **JWT**     | JSON Web Token                        |
| **MCD**     | Modèle Conceptuel de Données          |
| **MVC**     | Model-View-Controller                 |
| **ORB**     | Object-Relational Mapping             |
| **REST**    | REpresentational State Transfer       |
| **SaaS**    | Software as a Service                 |
| **SGBD**    | Système de Gestion de Base de Données |
| **UML**     | Unified Modeling Language             |
| **UC**      | Cas d'Utilisation                     |
| **UI**      | User Interface                        |
| **UX**      | User Experience                       |


# INTRODUCTION GÉNÉRALE
## Contexte général
L'ère numérique a fondamentalement transformé le paysage du commerce, poussant l'ensemble des secteurs d'activité, y compris celui des quincailleries, vers une nécessaire digitalisation. Traditionnellement gérée de manière manuelle ou avec des solutions logicielles isolées, la quincaillerie, qu'elle soit une entité unique ou un membre d'un petit réseau, souffre souvent d'une gestion inefficace des stocks, d'un manque de visibilité de son offre et de difficultés dans la centralisation des données.
La concurrence accrue, les attentes des clients en matière d'information en temps réel et la complexité croissante des inventaires exigent des outils de gestion modernes, performants et accessibles. Pour les propriétaires de plusieurs quincailleries ou pour ceux qui souhaitent une gestion optimisée de leur magasin, une solution logicielle centralisée et multi-utilisateurs représente un avantage concurrentiel majeur.
C'est dans ce contexte que s'inscrit notre projet : le développement d'une plateforme web centralisée, conçue pour répondre aux défis spécifiques de la gestion des quincailleries, en alliant la robustesse d'une architecture backend d'entreprise à la flexibilité d'une interface utilisateur moderne.

## Problématique
La gestion actuelle des quincailleries, surtout lorsqu'un propriétaire gère plusieurs points de vente ou souhaite offrir une vitrine en ligne, se heurte à plusieurs obstacles majeurs :
1. Gestion Manuelle et Dispersion de l'Information : La tenue des registres et des inventaires sur papier ou via des tableurs conduit à des erreurs fréquentes, des pertes de temps considérables et une difficulté à obtenir une vue d'ensemble et en temps réel de l'état des stocks.
2. Manque d'Outil Centralisé : Il existe peu de solutions _Software as a Service (SaaS)_ sur le marché qui permettent à un utilisateur (propriétaire) de gérer facilement et en toute autonomie plusieurs entités indépendantes (_multi-quincailleries_) tout en assurant une séparation et une sécurité des données.
3. Problèmes de Visibilité : Les quincailleries n'ont souvent pas d'outil simple pour afficher publiquement leur liste de produits et leurs coordonnées, limitant ainsi leur capacité à attirer une clientèle locale à l'ère du numérique.
4. Défis de Sécurité et de Performance : Les solutions existantes sont parfois obsolètes, peu sécurisées (faible authentification, absence de chiffrement) et manquent de performance face à un volume croissant de données et d'utilisateurs.
Face à ces constats, la problématique centrale de ce projet peut être formulée ainsi :
Comment concevoir et réaliser une plateforme web moderne et sécurisée permettant aux propriétaires de quincailleries d'administrer de manière centralisée et efficace la gestion de leurs multiples magasins (stocks, produits) et d'offrir une interface publique dynamique pour la consultation de leur catalogue par les clients ?

## Objectifs du projet
Le présent projet de fin d'études a pour but de répondre à la problématique soulevée par la conception et la réalisation de la plateforme **SenQuincailleries**.

### Objectif Principal
Développer une application web complète et performante, basée sur l'architecture Microservices/Client-Serveur avec Spring Boot et Angular, pour la gestion multi-sites des quincailleries.

### Objectifs Spécifiques
1.  Analyse et Conception : Effectuer une analyse approfondie des besoins (fonctionnels et non fonctionnels) du domaine et réaliser une modélisation complète du système via le langage UML.
2.  Sécurité et Authentification : Mettre en place un système d'authentification robuste basé sur **JWT (JSON Web Token)** et **Spring Security**, assurant la protection des données et la gestion sécurisée des accès.
3.  Gestion des Entités : Implémenter les fonctionnalités **CRUD** complètes pour la gestion des utilisateurs, des quincailleries et des produits par leurs propriétaires respectifs.
4.  Interface Utilisateur : Développer une interface utilisateur conviviale et _responsive_ avec **Angular 20**, offrant à la fois un tableau de bord d'administration riche et une vitrine publique accessible aux visiteurs.
5.  Validation : Tester et valider la solution pour garantir la conformité au cahier des charges en termes de fonctionnalité, de performance et de sécurité.


## Méthodologie adoptée
Pour garantir la qualité, la traçabilité et l'atteinte des objectifs dans un délai contraint, une approche de développement itérative, inspirée de la **méthode Agile**, a été adoptée. Bien que le projet soit mené individuellement, les principes d'itération, de livraison de fonctionnalités régulières et d'adaptation continue ont guidé le processus.
Les phases clés du cycle de développement ont inclus :
1.  Planification et Analyse : Définition du périmètre, recueil et analyse des besoins (Chapitre 2).
2.  Conception : Modélisation UML, conception de la base de données (Chapitre 2).
3.  Réalisation : Développement du Backend (Spring Boot), du Frontend (Angular) et intégration (Chapitre 3).
4.  Tests et Validation : Tests unitaires, d'intégration et fonctionnels (Chapitre 4).
Les technologies choisies, **Spring Boot** pour le backend et **Angular** pour le frontend, s'inscrivent dans une démarche de modernité et de performance, justifiées en détail au Chapitre 1.


## Structure du mémoire
Ce mémoire est organisé en cinq chapitres principaux qui détaillent le processus complet de développement du projet :
- **Chapitre I : État de l'Art et Fondements Technologiques** : Ce chapitre expose les concepts fondamentaux du domaine, justifie les choix technologiques (Spring Boot, Angular, JWT) et positionne notre solution par rapport à l'existant.
- **Chapitre II : Analyse et Conception** : Ce chapitre est dédié à la formalisation des besoins fonctionnels et non fonctionnels, suivie de la modélisation détaillée du système à l'aide des diagrammes UML (Cas d'Utilisation, Séquence, Classes) et de la conception de la base de données.
- **Chapitre III : Réalisation** : Ce chapitre décrit l'environnement de développement et les étapes d'implémentation du Backend (API RESTful avec Spring Boot) et du Frontend (Interface Utilisateur avec Angular), en insistant sur les aspects de sécurité et d'architecture.
- **Chapitre IV : Tests et Validation** : Ce chapitre présente la stratégie de test adoptée, les scénarios d'exécution et les résultats obtenus, permettant de valider la conformité du produit au cahier des charges.
- **Chapitre V : Démonstration et Résultats** : Ce chapitre présente l'application en fonctionnement via des captures d'écran commentées et dresse le bilan du projet, en soulignant les objectifs atteints et les difficultés surmontées.
Enfin, une **Conclusion Générale** synthétise le travail réalisé, évalue les apports du projet et propose des perspectives d'évolution futures.


************************
************************
************************

# CHAPITRE I : ÉTAT DE L'ART ET FONDEMENTS TECHNOLOGIQUES
Ce chapitre a pour objectif de contextualiser le projet dans le domaine du Génie Logiciel et de justifier les choix techniques majeurs. Il présente les concepts fondamentaux de la gestion commerciale moderne et détaille les technologies spécifiques (Spring Boot, Angular, JWT, PostgreSQL) qui constituent les piliers de notre plateforme.

## Concepts fondamentaux
### Systèmes de gestion commerciale
Un Système de Gestion Commerciale (SGC) est un ensemble de logiciels et de procédures visant à automatiser les opérations de commerce, allant de la gestion des stocks à la facturation, en passant par le suivi des clients. Dans le contexte d'une quincaillerie, un SGC doit particulièrement exceller dans la gestion d'un inventaire hétérogène et volumineux.
Les fonctions clés d'un SGC moderne comprennent :
- Gestion des Stocks : Suivi en temps réel des quantités disponibles.
- Gestion des Achats/Ventes : Traitement des commandes et génération de factures.
- Catalogue Produits : Organisation structurée et affichage des articles.
Notre application s'inscrit dans cette lignée en proposant un SGC orienté **multi-entités** (plusieurs quincailleries gérées par un même propriétaire) et **web-centré** (accessibilité via navigateur et vitrine en ligne).

### Applications web modernes
Les applications web modernes se distinguent des applications traditionnelles par leur architecture dynamique et leur utilisation intensive des technologies **Client-Serveur** basées sur des **API RESTful**.
- Monopage (SPA - Single Page Application) : L'approche SPA, adoptée par notre Frontend Angular, charge l'ensemble des ressources de la page une seule fois, puis gère les interactions en mettant à jour dynamiquement le contenu via des appels API asynchrones. Cela améliore l'expérience utilisateur et la rapidité perçue.
- API RESTful : L'Application Programming Interface (API) basée sur l'architecture **REST (REpresentational State Transfer)** utilise les verbes HTTP (GET, POST, PUT, DELETE) pour manipuler les ressources. Elle permet une séparation claire des préoccupations entre le Backend (logique métier et données) et le Frontend (présentation).

### Architecture client-serveur
L'architecture choisie est l'architecture **3-Tiers**, une variante du modèle Client-Serveur, qui sépare l'application en trois couches logiques :
1. Couche Présentation (Client) : Le Frontend Angular, responsable de l'interface utilisateur et des interactions.
2. Couche Métier (Serveur) : Le Backend Spring Boot, qui contient la logique métier, effectue les calculs et applique les règles.
3. Couche Données (Base de données) : Le SGBD PostgreSQL, qui assure la persistance des données.
Cette séparation garantit la **modularité**, la **scalabilité** (chaque couche peut être mise à l'échelle indépendamment) et la **maintenabilité** du système.



## Technologies utilisées
Le choix de la stack technique, souvent appelée _J-Stack_ ou _Full-Stack Spring/Angular_, est stratégique pour un projet d'entreprise, offrant une combinaison de robustesse, de maturité et de performance.

### Backend : Spring Boot
#### Spring Boot : Présentation et Avantages
1. Spring Boot est un framework basé sur l'écosystème Spring qui vise à simplifier la création d'applications Java autonomes et prêtes à l'emploi.
2. Avantages clés pour le projet :
- Convention plutôt que Configuration : Réduction drastique du _boilerplate code_ (code récurrent et standard) et de la complexité de configuration.
- Microservices Ready : Facilitation du développement d'applications modulaires et de services RESTful.
- Serveur Embarqué : Incorpore un serveur d'applications (Tomcat par défaut), permettant de déployer l'application sous forme de fichier JAR exécutable.
- Écosystème Riche : Accès immédiat à des modules éprouvés pour la sécurité (Spring Security) et la persistance (Spring Data JPA).

#### Spring Security et JWT
La sécurité est primordiale pour une plateforme multi-utilisateurs. **Spring Security** est le standard de facto pour la sécurisation des applications Java.
- **Rôle :** Gérer l'authentification (Qui êtes-vous ?) et l'autorisation (Que pouvez-vous faire ?).
- **JWT (JSON Web Token) :** Contrairement à un système de session traditionnel, le JWT est une approche _stateless_ (sans état) idéale pour les API REST. Une fois l'utilisateur authentifié, le serveur lui fournit un jeton signé qui contient les informations d'identité et de rôle. Ce jeton est inclus dans chaque requête subséquente, permettant au serveur de vérifier l'identité sans devoir consulter la base de données à chaque fois. Cela améliore la performance et la scalabilité.

#### Spring Data JPA
- Spring Data JPA (Java Persistence API) simplifie l'implémentation de la couche d'accès aux données.
- Rôle : Fournit une abstraction sur le modèle de persistance et facilite l'implémentation du **Repository Pattern**.
- Hibernate : JPA est souvent mis en œuvre par un _ORM_ (Object-Relational Mapping) comme Hibernate, qui mappe les objets Java (Entités) aux tables de la base de données. Il permet d'effectuer des opérations CRUD sans écrire de SQL, améliorant la productivité.

#### PostgreSQL
- PostgreSQL est un Système de Gestion de Base de Données Relationnelle Objet (SGBDRO) reconnu pour sa robustesse, sa conformité aux standards SQL, et ses fonctionnalités avancées.
- Justification du choix : Supporte l'intégrité transactionnelle, offre une grande fiabilité pour les données critiques (inventaire, transactions) et gère efficacement les relations complexes inhérentes à un modèle multi-entités.

### Frontend : Angular 20
#### Angular : Architecture et Composants
- Angular (développé par Google) est un framework JavaScript/TypeScript pour la construction d'applications web complexes et à grande échelle.
- Architecture Modulaire : Le projet est organisé en modules, facilitant la séparation des fonctionnalités (ex: `AuthModule`, `StoreModule`, `PublicModule`).
- Composants : L'interface utilisateur est construite avec des composants, chacun gérant une partie spécifique de l'interface (vue, logique de données). Ce paradigme favorise la réutilisation du code.

#### TypeScript
- TypeScript est un sur-ensemble de JavaScript qui ajoute le typage statique.
- Avantages : La vérification des types dès la compilation permet de détecter une grande partie des erreurs avant l'exécution, améliorant la maintenabilité et la qualité du code, ce qui est crucial pour un projet de Génie Logiciel.

#### Programmation Réactive (RxJS)
Angular utilise la librairie **RxJS (Reactive Extensions for JavaScript)** pour la gestion des flux de données asynchrones (appels API, événements utilisateur). L'utilisation d'Observables et d'Opérateurs simplifie la gestion des données asynchrones, notamment dans les _Services_ Angular qui communiquent avec l'API Spring Boot.



## Étude comparative
### Analyse des applications similaires
Les solutions de gestion commerciale existantes peuvent être classées en trois catégories :

| Catégorie                  | Exemples (Génériques)                         | Limites par Rapport au Projet                                                                                      |
| :------------------------- | :-------------------------------------------- | :----------------------------------------------------------------------------------------------------------------- |
| **Logiciels Locaux**       | Sage, Quickbooks (versions de base)           | Non web, pas de vitrine publique, gestion multi-site complexe ou coûteuse.                                         |
| **E-commerce Généraliste** | Shopify, WooCommerce                          | Non spécifiques au métier de la quincaillerie, modèle de données rigide, gestion des stocks souvent moins précise. |
| **SaaS de Niche**          | Logiciels de gestion d'inventaire spécialisés | Souvent très chers, peu flexibles dans les fonctionnalités et parfois fermés sur les APIs.                         |

### Justification des choix technologiques
Le tableau ci-dessous synthétise la justification de notre **Stack Full-Stack Spring/Angular** :
| Composant       | Technologie Choisie   | Justification                                                                                                                        |
| :-------------- | :-------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| **Backend**     | Spring Boot           | Robustesse, performance, standard de l'industrie pour les applications Java d'entreprise, richesse de l'écosystème (Security, Data). |
| **Frontend**    | Angular               | Cadre structuré pour les SPAs complexes, utilisation de TypeScript pour la qualité du code, fort soutien communautaire (Google).     |
| **Sécurité**    | Spring Security + JWT | Modèle de sécurité _stateless_ performant et scalable, idéal pour les API REST.                                                      |
| **Persistance** | PostgreSQL            | SGBD fiable, conforme aux standards, capable de gérer des données relationnelles complexes et volumineuses.                          |
| **Langage**     | Java / TypeScript     | Langages typés, modernes, offrant des outils performants pour le développement et la maintenance.                                    |



## Méthodologies de développement
### Cycle de vie logiciel
Le cycle de vie logiciel de ce projet suit un modèle **itératif et incrémental**. Chaque grande fonctionnalité (ex: gestion des utilisateurs, gestion des magasins, vitrine publique) a été traitée comme une itération complète : analyse, conception, implémentation, et test. Cette approche permet une détection précoce des erreurs et une meilleure gestion des imprévus.

### Méthode agile (Scrum-inspirée)
Bien que le projet soit individuel, les principes de la méthode **Scrum** ont été appliqués pour la gestion du temps et des priorités :
- **Backlog des fonctionnalités :** Le cahier des charges détaillé (Fourni) a servi de _Product Backlog_.
- **Sprints :** Le travail a été découpé en mini-sprints (ex: un sprint pour le _setup_ et l'authentification, un autre pour les CRUD).
- **Développement et Test :** Les tests ont été intégrés directement après chaque phase d'implémentation (approche Test-Driven Development simplifiée).
Cette discipline a permis de maintenir une qualité de code constante et de respecter les délais impartis pour la réalisation du projet.


********************
********************
********************


# CHAPITRE II : ANALYSE ET CONCEPTION
Ce chapitre est consacré à l'analyse approfondie des besoins de l'application et à la modélisation du système selon les standards du Génie Logiciel, en utilisant le langage de modélisation unifié (UML) pour poser les bases de la réalisation.