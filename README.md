# Demo Ecommerce

Demo de aplicación ecommerce completa construida como monorepo.

## Tecnologías

Este proyecto utiliza las siguientes tecnologías:

### Backend
- **MedusaJS 2.10.2** - Framework de ecommerce headless
- **PostgreSQL** - Base de datos
- **Redis** - Cache y gestión de workflows
- **TypeScript** - Lenguaje de programación
- **MinIO** - Almacenamiento de archivos en la nube
- **MeiliSearch** - Motor de búsqueda de productos
- **Stripe** - Procesamiento de pagos
- **Resend** - Servicio de notificaciones por email

### Frontend (Storefront)
- **Next.js 14** - Framework de React con App Router
- **React 18** - Biblioteca de UI
- **TypeScript** - Lenguaje de programación
- **Tailwind CSS** - Framework de estilos
- **Medusa UI** - Componentes de interfaz

## Características

- Catálogo completo de productos
- Carrito de compras
- Checkout con Stripe y PayPal
- Cuentas de usuario
- Búsqueda de productos con MeiliSearch
- Panel de administración
- Almacenamiento de archivos con MinIO
- Notificaciones por email

## Requisitos

### Backend
- Node.js 22.x
- PostgreSQL (base de datos)
- Redis (opcional, tiene fallback simulado)
- MinIO (opcional, tiene fallback a almacenamiento local)
- MeiliSearch (opcional)

### Storefront
- Node.js
- Backend corriendo en puerto 9000

## Instalación

### 1. Configurar el Backend

```bash
cd backend/
pnpm install
# o
npm install
```

Renombrar `.env.template` a `.env` y configurar las variables de entorno necesarias.

Inicializar la base de datos:
```bash
pnpm ib
# o
npm run ib
```

Iniciar el backend en modo desarrollo:
```bash
pnpm dev
# o
npm run dev
```

El backend estará disponible en `http://localhost:9000` y el panel de administración en `http://localhost:9000/app`

### 2. Configurar el Storefront

```bash
cd storefront/
pnpm install
# o
npm install
```

Renombrar `.env.local.template` a `.env.local` y configurar las variables de entorno.

Iniciar el storefront en modo desarrollo:
```bash
pnpm dev
# o
npm run dev
```

El storefront estará disponible en `http://localhost:8000`

## Comandos Disponibles

### Backend
- `npm run ib` o `pnpm ib` - Inicializar la base de datos con migraciones y datos de prueba
- `npm run dev` o `pnpm dev` - Iniciar en modo desarrollo
- `npm run build` o `pnpm build` - Compilar el proyecto
- `npm run start` o `pnpm start` - Iniciar en modo producción

### Storefront
- `npm run dev` o `pnpm dev` - Iniciar en modo desarrollo
- `npm run build` o `pnpm build` - Compilar el proyecto
- `npm run start` o `pnpm start` - Iniciar en modo producción
