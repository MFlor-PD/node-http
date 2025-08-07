# Ejercicio servidor HTTP con plantilla HTML

## Objetivo del Ejercicio:

Crear un servidor HTTP en Node.js que responda con un documento HTML que contiene información específica de una página web. La información debe provenir de un objeto almacenado en otro módulo.

## Pasos a seguir

1. Crear un Módulo de Datos:

Crear un archivo separado, por ejemplo, `data.js`, que exporte un objeto con información relevante para una página web. Este objeto podría incluir propiedades como title, subtitle y description. Puedes añadir las que quieras y los valores puedes inventártelos.

2. Crear un Servidor HTTP:

Crear un archivo llamado `server.js` (o similar) que utilice el módulo http para crear un servidor HTTP.

3. Importar el Módulo de Datos:

Importar el módulo de datos `data.js` en el archivo del servidor para acceder al objeto con la información de la página web.

4. Configurar la Respuesta del Servidor:

Configurar el servidor para responder con un documento HTML. Puedes utilizar el método `res.end()` para escribir dentro tu HTML (con su !DOCTYPE, H1, H2... lo que creas que es necesario)con la datos de `data.js`

5. Iniciar el Servidor: node servidor.js

Ejecutar el servidor y asegurarse de que responde correctamente con un documento HTML que incorpora la información de la página web.