### Comandos Jison

Para instalar y generar archivo javascript de Jison.
```
npm install jison
npx jison <ruta_archivo_jison> o- <ruta_archivo_generado>
```

### Instalacion Librerias para Api:

Librerías necesarias para realizar una api.
```
npm install cors 
npm install express 
npm install morgan
npm install nodemon -D
```

Scripts para el package.json
```js
"dev": "nodemon index.js",
"generar": "jison  .\\analizador\\gramatica.jison -o .\\analizador\\parser.js"
```