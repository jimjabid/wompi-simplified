# Integración de Wompi con React y Node.js

Este proyecto es una integración sencilla de la pasarela de pagos **Wompi** en una aplicación web desarrollada con **React** (usando Vite) en el frontend y **Node.js** en el backend. El objetivo es demostrar cómo implementar pagos en línea utilizando Wompi de manera fácil y eficiente.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
  - [Clonar el Repositorio](#clonar-el-repositorio)
  - [Configuración del Backend](#configuración-del-backend)
  - [Configuración del Frontend](#configuración-del-frontend)
- [Variables de Entorno](#variables-de-entorno)
- [Ejecutar la Aplicación](#ejecutar-la-aplicación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Dependencias](#dependencias)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Notas Importantes](#notas-importantes)
- [Recursos Adicionales](#recursos-adicionales)

## Características

- Procesamiento de pagos en línea utilizando Wompi.
- Generación de firma de integridad para transacciones seguras.
- Consulta del estado de transacciones.
- Interfaz de usuario simple y amigable usando Bootstrap.
- Configuración rápida utilizando Vite para el frontend.

## Tecnologías Utilizadas

- **Frontend**: React, Vite, React Router DOM, Bootstrap.
- **Backend**: Node.js, Express, Axios.
- **Otros**: Dotenv para manejar variables de entorno, Crypto para generación de firmas.

## Requisitos Previos

- Node.js instalado en tu máquina.
- Cuenta en Wompi para obtener las llaves públicas y privadas.
- NPM o Yarn como gestor de paquetes.

## Instalación

### Clonar el Repositorio

```bash
git clone https://github.com/jimjabid/wompi-simplified.git
cd wompi-integration
```

### Configuración del Backend

1. En el directorio raiz wompi-simplified instala las dependencias del backend:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en el directorio `wompi-simplified` con las siguientes variables:

   ```env
   WOMPI_INTEGRITY_SECRET=tu_integrity_secret
   WOMPI_PRIVATE_KEY=tu_private_key
   ```

   **Nota**: Reemplaza `tu_integrity_secret` y `tu_private_key` con las credenciales proporcionadas por Wompi.

### Configuración del Frontend

1. Navega al directorio del frontend:

   ```bash
   cd ../frontend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en el directorio `frontend` con la siguiente variable:

   ```env
   VITE_WOMPI_PUBLIC_KEY=tu_public_key
   ```

   **Nota**: Reemplaza `tu_public_key` con tu llave pública de Wompi.

## Variables de Entorno

Asegúrate de configurar las siguientes variables de entorno:

- **Backend (`wompi-simplified/.env`):**

  ```env
  WOMPI_INTEGRITY_SECRET=tu_integrity_secret
  WOMPI_PRIVATE_KEY=tu_private_key
  ```

- **Frontend (`frontend/.env`):**

  ```env
  VITE_WOMPI_PUBLIC_KEY=tu_public_key
  ```

## Ejecutar la Aplicación

### Iniciar el Backend

Desde el directorio `wompi-simplified`, ejecuta alguno de los siguientes comandos:

Este es para correr el servidor y el frontend a la vez usando concurrently
```bash
npm run dev
```

Esto iniciará el servidor en `http://localhost:5000` y el frontend en `http://localhost:5173`.

## Estructura del Proyecto

```
wompi-integration/
├── backend/
│   ├── controllers/
│   │   └── paymentController.js
│   ├── routes/
│   │   └── paymentRoutes.js
│   ├── server.js
│   
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PaymentResult.jsx
│   │   │   ├── PaymentScreen.jsx
│   │   │   └── WompiButton.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
|
└── package.json
|
└── README.md
```

## Dependencias

### Backend

```json
"dependencies": {
    "axios": "^1.7.7",
    "concurrently": "^9.0.1",
    "cors": "^2.8.5",
    "crypto": "^1.0.1",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "nodemon": "^3.1.7"
```

### Frontend

```json
  "dependencies": {
    "axios": "^1.7.7",
    "bootstrap": "^5.3.3",
    "react": "^18.3.1",
    "react-bootstrap": "^2.10.5",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.27.0"
  },
```

## Notas Importantes

- **Vite**: Este proyecto utiliza Vite para un desarrollo más rápido y sencillo en el frontend.
- **Seguridad**: Asegúrate de no exponer tus llaves privadas ni secretos de integridad en repositorios públicos o en el código del frontend.
- **Ambiente de Pruebas**: Utiliza las llaves de sandbox proporcionadas por Wompi para pruebas y desarrollo.
- **CORS**: El backend está configurado para permitir solicitudes desde el frontend. Si cambias el puerto o la configuración, asegúrate de actualizar las reglas de CORS.
- **Integridad de Datos**: La generación de la firma de integridad es crucial para asegurar que los datos no han sido manipulados.

## Recursos Adicionales

- [Documentación Oficial de Wompi](https://docs.wompi.co/en/docs/colombia/inicio-rapido/)
- [React Documentation](https://es.reactjs.org/docs/getting-started.html)
- [Express Documentation](https://expressjs.com/es/)

---

¡Disfruta integrando Wompi en tu aplicación y no dudes en contribuir o hacer preguntas si tienes dudas!
