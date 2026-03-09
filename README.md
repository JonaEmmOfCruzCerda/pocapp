# poc-app

POC de aplicación web **fullstack** con frontend, backend y base de datos PostgreSQL orquestados con Docker Compose.

## Descripción

Este proyecto busca implementar un prototipo funcional que permita desarrollar y probar rápidamente una arquitectura web típica:

- Frontend (HTML/CSS/JS o framework) consumiendo API REST.
- Backend en Node.js/Express exponiendo endpoints.
- Base de datos PostgreSQL con scripts de inicialización.
- Orquestación de servicios mediante Docker Compose.

## Estructura del proyecto

```text
poc-app/
├── backend/           # Código fuente del backend (Node.js/Express)
├── frontend/          # Código fuente del frontend
├── db/                # Scripts SQL y migraciones de la base de datos
├── docker-compose.yml # Orquestación de servicios con Docker
├── .gitignore         # Archivos y carpetas a ignorar por Git
├── README.md          # Documentación del proyecto
└── docs/              # Documentos de arquitectura, notas y diagramas
