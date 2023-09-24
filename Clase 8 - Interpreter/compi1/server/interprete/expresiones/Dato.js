const Instruccion = require('../Instruccion.js')

class Dato extends Instruccion{
    constructor(valor, tipo){
        super();
        this.valor = valor;
        this.tipo = tipo;
    }

    interpretar(entorno){
        switch(this.tipo){
            case 'INT':
                return new Number(this.valor);
            case 'DOUBLE':
                return new Number(this.valor);
        }
    }

    getArbol(){

    }
}

module.exports = Dato;