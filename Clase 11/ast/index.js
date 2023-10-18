const Entorno = require('./interprete/tablasimbolos/Entorno');
const contador = require("./interprete/arbol/contador")

console.clear()
console.log()
const parser = require("./analizador/Parser.js");
let entradaParser = `
    3 + 5
`


let instrucciones = parser.parse(entradaParser)
let cadena = "graph {\nordering=\"out\"\n"
instrucciones.forEach(element => {
    cadena = cadena + element.getAst().cadena;
    console.log()
});
cadena = cadena +"\n}"

// <ruta_bin>/dot -Tsvg <ruta_archivo> -o <ruta_generada>


let dot = "C:/Librerias/Graphviz/bin/dot"
let entrada = "./interprete/arbol/grafo.dot"
let salida = "./interprete/arbol/ast.svg"

const { exec } = require("child_process");
const fs = require('fs');

function generarAST(){
    let comando = `${dot} -Tsvg ${entrada} -o ${salida}`
    exec(comando, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error al ejecutar el comando: ${error.message}`);
          return;
        }
        console.log(`El archivo ${salida} se ha generado correctamente.`);
      });
}

function escribirArchivoDot(data){
    fs.mkdirSync('./interprete/arbol',{recursive:true});//Creamos la carpeta
    fs.appendFile(entrada, data, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Archivo creado")
        }
    });
}

escribirArchivoDot(cadena)
generarAST();

