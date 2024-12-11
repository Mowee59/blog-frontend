
## Technologies Principales

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Description

Ce projet est une application de blog construite avec Next.js, React, TypeScript et Tailwind CSS, utilisant Strapi comme CMS headless. Il est configuré avec Docker et utilise GitHub Actions pour l'intégration et le déploiement continu.

## Fonctionnalités

- Frontend avec Next.js
- Intégration avec un backend Strapi
- Conteneurisation avec Docker
- Build automatisé et push vers le GitHub Container Registry, avec tests et versionning
- Optimisation des images et configuration des modèles distants
- Redirection des requêtes API vers Strapi
- Utilisation de l'ISR ( Incremental Static Generation ) pour une site poptimisé
- Integration avec le CDN de CLoudflare et revalidation du cache pour les pages mises à jour
- Suite de tests complète avec Jest et React Testing Library

## Prérequis

- Node.js
- Docker
- Compte GitHub

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/Mowee59/blog-frontend.git
   ```
2. Installez les dépendances :
   ```bash
   yarn install
   ```

## Variables d'environnement

Créez un fichier `.env` à la racine du projet et ajoutez les variables suivantes :

| Variable             | Description                                                                     |
| -------------------- | ------------------------------------------------------------------------------- |
| STRAPI_URL           | L'URL de votre backend Strapi (par exemple, https://strapi.example.com)         |
| WEBHOOK_SECRET       | Une clé secrète utilisée pour l'authentification des webhooks Strapi            |
| NEXT_PUBLIC_SITE_URL | L'URL publique de votre frontend Next.js (par exemple, https://www.example.com) |
| CLOUDFLARE_API_TOKEN | Token d'API Cloudflare pour la gestion du cache et des pages                    |
| CLOUDFARE_ZONE_ID    | L'identifiant de zone Cloudflare pour votre domaine                             |

## Démarrage de l'application

Pour démarrer le serveur de développement, exécutez :

```bash
yarn dev
```

## Licence

Ce projet est sous licence GNU General Public License v3.0. Consultez le fichier [LICENSE](LICENSE) pour plus de détails.
