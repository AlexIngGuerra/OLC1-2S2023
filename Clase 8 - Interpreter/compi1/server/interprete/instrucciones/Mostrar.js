const Instruccion = require('../Instruccion.js')

class Mostrar extends Instruccion{
    constructor(expresion){
        super();
        this.expresion = expresion;
    }

    interpretar(entorno){
        let valor = this.expresion.interpretar(null);
        console.log(valor.toString());
        return this;
    }

    getArbol(){

    }
}

module.exports = Mostrar;