# MÉMOIRE DE FIN D'ÉTUDES

---

# TITRE : Conception et Réalisation d'une Plateforme Web Multi-Quincailleries Centralisée avec Spring Boot et Angular : Contribution à la Digitalisation du Commerce de Détail.

---

# REMERCIEMENTS
Je tiens à exprimer ma profonde gratitude à toutes les personnes qui ont contribué de près ou de loin à la réalisation de ce projet et à l'aboutissement de mes études.

Mes remerciements s'adressent, en premier lieu, à Dieu, pour la force, le courage et la persévérance qu’il m’a accordés tout au long de ce parcours.

J’adresse ma sincère reconnaissance à mon encadrant académique, [Nom de l'Encadrant], pour son soutien constant, sa disponibilité, ses conseils pertinents et son expertise qui ont été d’une aide précieuse pour surmonter les défis techniques et structurer ce mémoire. Son encadrement a été déterminant dans la réussite de ce projet.

Je remercie l'ensemble du corps professoral du département de Génie Logiciel d'ESSA pour la qualité de l’enseignement dispensé, qui a forgé mes compétences et m'a permis d'atteindre le niveau d'expertise requis pour mener à bien ce travail.

Enfin, une pensée spéciale à mes parents, ma famille et mes amis, pour leur amour inconditionnel, leurs encouragements incessants et leur soutien moral qui ont été mon pilier durant ces années d'études.

À tous ceux qui m’ont soutenu, trouvez dans ce travail le témoignage de ma profonde gratitude et de mon respect.

---

# RÉSUMÉ / ABSTRACT

## Résumé (Français)

Le secteur du commerce de détail, notamment celui des quincailleries, fait face à une nécessité croissante de digitalisation pour optimiser sa gestion et étendre sa visibilité. Ce mémoire présente la conception et la réalisation d'une plateforme web robuste et évolutive, nommée Sama Quincaillerie, visant à centraliser la gestion des stocks, des produits et des informations pour un réseau de quincailleries indépendantes.
Le projet répond à la problématique de la gestion éparpillée et du manque de visibilité en offrant aux propriétaires un outil de type Software as a Service (SaaS) pour gérer leurs magasins (CRUD), leurs produits (CRUD) et assurer une vitrine publique consultable par les clients. L'architecture adoptée est de type Client-Serveur, basée sur une API RESTful développée avec Spring Boot 3.5.5 (Backend) pour garantir la performance et la sécurité (via Spring Security et JWT), et une interface utilisateur construite avec Angular 20 (Frontend) pour une expérience utilisateur moderne et responsive. La base de données PostgreSQL assure la persistance et l'intégrité des données structurées autour des entités users, hardware_stores et products. Ce travail démontre l'application concrète des principes du Génie Logiciel, de l'analyse des besoins à la validation par les tests, aboutissant à une solution opérationnelle, sécurisée et modulaire.
Mots-clés : Gestion Commerciale, Spring Boot, Angular, API REST, JWT, Quincaillerie, Génie Logiciel, PostgreSQL.

## Abstract (Anglais)

The retail sector, particularly the hardware store domain, is increasingly required to digitalize to optimize management and enhance visibility. This thesis presents the design and implementation of a robust and scalable web platform, named Sama Quincaillerie, aimed at centralizing inventory, product, and information management for a network of independent hardware stores.
The project addresses the challenge of scattered management and lack of visibility by offering owners a Software as a Service (SaaS) tool to manage their stores (CRUD), their products (CRUD), and to provide a public showcase accessible to customers. The adopted architecture is Client-Server, based on a RESTful API developed with Spring Boot 3.5.5 (Backend) to ensure performance and security (via Spring Security and JWT), and a user interface built with Angular 20 (Frontend) for a modern and responsive user experience. The PostgreSQL database ensures data persistence and integrity, structured around the users, hardware_stores, and products entities. This work demonstrates the practical application of Software Engineering principles, from requirements analysis to validation through testing, resulting in an operational, secure, and modular solution.
Keywords: Commercial Management, Spring Boot, Angular, REST API, JWT, Hardware Store, Software Engineering, PostgreSQL.

---

# SOMMAIRE / TABLE DES MATIÈRES

(Le Sommaire sera généré automatiquement et finalisé une fois que le contenu intégral des chapitres aura été rédigé. Pour l'instant, il reprend le plan détaillé fourni.)

---

# LISTE DES FIGURES ET TABLEAUX

(À compléter au fur et à mesure de la rédaction, en s'assurant que toutes les illustrations (Diagrammes UML, Schémas d'Architecture, Captures d'écran, Tableaux de comparaison) sont numérotées et légendées.)

---

# LISTE DES ABRÉVIATIONS

Abréviation	Signification
API	        Application Programming Interface
CRUD	    Create, Read, Update, Delete
CORS	    Cross-Origin Resource Sharing
CSRF	    Cross-Site Request Forgery
DAO	        Data Access Object
DTO	        Data Transfer Object
HTTP	    HyperText Transfer Protocol
IDE	        Integrated Development Environment
JPA	        Java Persistence API
JWT	        JSON Web Token
MCD	        Modèle Conceptuel de Données
MVC	        Model-View-Controller
ORB	        Object-Relational Mapping
REST    	REpresentational State Transfer
SaaS    	Software as a Service
SGBD	    Système de Gestion de Base de Données
UML 	    Unified Modeling Language
UC  	    Cas d'Utilisation
UI      	User Interface
UX	        User Experience

---

# INTRODUCTION GÉNÉRALE

## Contexte général

L'ère numérique a fondamentalement transformé le paysage du commerce, poussant l'ensemble des secteurs d'activité, y compris celui des quincailleries, vers une nécessaire digitalisation. Traditionnellement gérée de manière manuelle ou avec des solutions logicielles isolées, la quincaillerie, qu'elle soit une entité unique ou un membre d'un petit réseau, souffre souvent d'une gestion inefficace des stocks, d'un manque de visibilité de son offre et de difficultés dans la centralisation des données.
La concurrence accrue, les attentes des clients en matière d'information en temps réel et la complexité croissante des inventaires exigent des outils de gestion modernes, performants et accessibles. Pour les propriétaires de plusieurs quincailleries ou pour ceux qui souhaitent une gestion optimisée de leur magasin, une solution logicielle centralisée et multi-utilisateurs représente un avantage concurrentiel majeur.
C'est dans ce contexte que s'inscrit notre projet : le développement d'une plateforme web centralisée, conçue pour répondre aux défis spécifiques de la gestion des quincailleries, en alliant la robustesse d'une architecture backend d'entreprise à la flexibilité d'une interface utilisateur moderne.