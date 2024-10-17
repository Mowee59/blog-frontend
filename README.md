# Blog Frontend

### Core Technologies
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Backend
![Strapi](https://img.shields.io/badge/Strapi-2F2E8B?style=for-the-badge&logo=strapi&logoColor=white)

### Development Tools
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2020.0.0-brightgreen)](https://nodejs.org/)
[![Yarn Version](https://img.shields.io/badge/yarn-%3E%3D%201.22.0-blue)](https://yarnpkg.com/)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

### Libraries & Frameworks
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)

### Testing
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?style=for-the-badge&logo=testing-library&logoColor=white)

### Project Status
![Dependency Status](https://img.shields.io/librariesio/github/Mowee59/blog-frontend?style=for-the-badge)
![Build Status](https://img.shields.io/github/actions/workflow/status/Mowee59/blog-frontend/ci.yml?branch=main&style=for-the-badge)

This is a blog application built with Next.js, React, TypeScript, and Tailwind CSS, using Strapi as a headless CMS.

## Description

This project is a Next.js application with a Docker setup and GitHub Actions workflow for continuous integration and deployment. It integrates with a Strapi backend for content management and includes a comprehensive test suite.

## Features

- Next.js frontend
- Strapi backend integration
- Docker containerization
- Automated build and push to GitHub Container Registry
- Image optimization and remote patterns configuration
- API request forwarding to Strapi
- CORS configuration for revalidation endpoint
- Comprehensive test suite using Jest and React Testing Library

## Getting Started

### Prerequisites

- Node.js
- Docker
- GitHub account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```

### Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

| Variable | Description |
|----------|-------------|
| PORT | The port number on which the Next.js application will run (e.g., 3000) |
| STRAPI_URL | The URL of your Strapi backend (e.g., https://strapi.example.com) |
| WEBHOOK_SECRET | A secret key used for webhook authentication |
| NEXT_PUBLIC_SITE_URL | The public URL of your Next.js frontend (e.g., https://www.example.com) |
| MEASUREMENT_ID | Your Google Analytics measurement ID (e.g., G-XXXXXXXXXX) |

### Running the Application

To start the development server, run:

## License

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for details.

### License Headers

All source files in this project should include the following license header:
