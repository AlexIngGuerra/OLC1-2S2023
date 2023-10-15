const Instruccion = require("../Instruccion");

class Mostrar extends Instruccion {

    constructor(expresion){
        super();
        this.expresion = expresion;
    }

    ejecutar(entorno){
        let expresion = this.expresion.ejecutar(entorno);
        console.log(expresion.valor);
    }
}

module.exports = Mostrar;