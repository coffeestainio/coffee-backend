# Componente base de servidor Node HTTP

Este componente es una base para iniciar proyectos Node.js usando express con todas las ventajas de ES7.


## Pre-requisitos

- Es necesario utilizar la versión de Node.js v7+ (preferiblemente 8).
- Instalar [Yarn](https://yarnpkg.com/lang/en/docs/install/)
- Instalar e iniciar MongoDB (para desarrollo local).

## Proceso de Build

```
# instalar dependencias
yarn

# Iniciar el servidor (http://127.0.0.1:3080)
npm start

# Se puede utilizar nodemon para recargar los cambios automaticamente
npm install -g nodemon
nodemon --exec npm start

# correr pruebas
npm test
```

## Correr

`npm start`


## Estructura

```
|- /config    - Archivos de Configuración.
|- /scripts   - Scripts que pueden ser ejecutados desde linea de comando
|- /src
  |- /http      - Servidor HTTP
  |- /lib       - elpers (e.g. Mongo DB connector)
  |- index.js   - Archivo principal de aplicación
- /tests        - Pruebas escritas con [ava](https://github.com/avajs/ava)
```

La aplicación utiliza ES7 Clases, se puede observar como ejemplo la clase del servidor `HTTP` (HTTP server - `src/http`). **Es importante utilizar este mismo enfoque a travez de la aplicación**