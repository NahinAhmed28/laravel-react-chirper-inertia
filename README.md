# Laravel React Chirper Inertia

Laravel React Chirper Inertia is a Laravel + React + Inertia style application for a Chirper/social-post workflow.

## Features

- Laravel backend with React UI
- Chirper-style post/message workflow
- Inertia-style full-stack page integration
- Authentication and database-backed records when enabled

## Modules

- Chirp module: posts/messages and timeline behavior
- Auth module: users and protected actions
- React view module: components and pages
- Laravel backend module: routes, controllers, and models
- Data module: migrations and persistence

## System Architecture

The project follows a Laravel full-stack architecture with React/Inertia-style UI rendering. Laravel handles routes, controllers, models, and persistence. React components render interactive pages. Inertia-style page responses bridge backend routes and front-end components.

## Getting Started

```bash
git clone https://github.com/NahinAhmed28/laravel-react-chirper-inertia.git
cd laravel-react-chirper-inertia
composer install
cp .env.example .env
php artisan key:generate
npm install
npm run dev
php artisan serve
```
