Proyecto Next.js (SSR) – Guía de instalación

Este proyecto está desarrollado en Next.js con renderizado del lado del servidor (SSR) y se conecta a una API backend desarrollada en Laravel.

El entorno local utiliza pnpm como gestor de dependencias.

Instalación del proyecto

1. Instalar dependencias

pnpm install

2. Configuración del entorno

cp .env.example .env

Editar las siguientes variables según el entorno:

API_BASE_URL=
LARAVEL_API_URL=
LARAVEL_API_TOKEN=

Variables de entorno
Conexión con API Backend (Laravel)

El frontend se comunica con una API desarrollada en Laravel mediante token.

Descripción de variables:

API_BASE_URL
URL base utilizada por el frontend.

LARAVEL_API_URL
URL base del backend Laravel (ej: https://api.midominio.com).

LARAVEL_API_TOKEN
Token de autenticación para consumir la API Laravel.
