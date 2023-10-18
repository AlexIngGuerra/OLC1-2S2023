const Simbolo = require("./Simbolo");
const Funcion = require("./Funcion");

class Entorno {
    constructor(nombre, anterior){
        this.tablasimbolos = {};
        this.tablafunciones = {};
        this.anterior = anterior;
        this.nombre = nombre;
    }

    agregarSimbolo(nombre, valor){
        let simbolo = new Simbolo(nombre, valor)
        this.tablasimbolos[nombre] = simbolo;
    }

    obtenerSimbolo(nombre){
        let entorno = this;
        let valor = entorno.tablasimbolos[nombre];

        while (valor == undefined && entorno.anterior != null){
            entorno = entorno.anterior;
            valor = entorno.tablasimbolos[nombre];
        }

        return valor;
    }

    agregarFuncion(nombre, parametros, instrucciones){
        let simbolo = new Funcion(nombre, parametros, instrucciones)
        this.tablafunciones[nombre] = simbolo;
    }

    obtenerFuncion(nombre){
        let entorno = this;
        let valor = entorno.tablafunciones[nombre];

        while (valor == undefined && entorno.anterior != null){
            entorno = entorno.anterior;
            valor = entorno.tablafunciones[nombre];
        }

        return valor;
    }
}

module.exports = Entorno;