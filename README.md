API de Gestion de Bibliothèque

Description

Cette API permet de gérer une bibliothèque de livres avec les fonctionnalités suivantes :

Ajouter, afficher, modifier et supprimer des livres 

Ajouter, afficher, modifier et supprimer des auteurs 

Système d'authentification pour protéger certaines routes 

Technologies utilisées

Node.js pour le serveur

Express.js pour gérer les routes

MongoDB et Mongoose pour la base de données

JWT pour l'authentification

Postman pour tester l'API

Routes disponibles

Livres

Créer un livre → POST /books

Voir tous les livres → GET /books

Voir un livre → GET /books/:id

Modifier un livre → PUT /books/:id

Supprimer un livre → DELETE /books/:id


Auteurs

Créer un auteur → POST /authors

Voir tous les auteurs → GET /authors

Voir un auteur → GET /authors/:id

Modifier un auteur → PUT /authors/:id

Supprimer un auteur → DELETE /authors/:id


Authentification

Créer un compte → POST /register

Se connecter → POST /login