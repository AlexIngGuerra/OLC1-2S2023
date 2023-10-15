const app = require('./app.js');

const PORT = 4000;
app.listen(PORT);
console.clear();
console.log( `Server en: http://localhost:${PORT}` );

/*
const Entorno = require('./interprete/tablasimbolos/Entorno');
console.clear()
const parser = require("./analizador/Parser.js");
let entrada = `
    let a = 10+5;   
    mostrar(5);
    mostrar(a+3);
    mostrar(a);
`
let instrucciones = parser.parse(entrada)
let entorno = new Entorno("global", null)
instrucciones.forEach(instruccion => {
    instruccion.ejecutar(entorno);
});*/

//console.log(entorno.tablasimbolos)

/*
const Entorno = require('./interprete/tablasimbolos/Entorno');
const Mostrar = require('./interprete/instrucciones/Mostrar')
const Dato = require('./interprete/expresiones/Dato')

let entorno = new Entorno("global", null)
let lista_instrucciones = [new Mostrar(new Dato("1", "INT")), new Mostrar(new Dato("2", "INT"))];


// CREAR FUNCION
entorno.agregarFuncion("print12", [], lista_instrucciones);
console.log(entorno.tablafunciones)

// CREAR FUNCION
let lista_instrucciones2 = [new Mostrar(new Dato("3", "INT")), new Mostrar(new Dato("4", "INT"))];
entorno.agregarFuncion("print34", [], lista_instrucciones2);

// LLAMAR FUNCION
let funcion = entorno.obtenerFuncion("print34");
let entornF = new Entorno("funcion", entorno)
funcion.instrucciones.forEach(instruccion => {
    instruccion.ejecutar(entornF);
});*/