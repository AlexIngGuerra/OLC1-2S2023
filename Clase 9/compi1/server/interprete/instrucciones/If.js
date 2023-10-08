const Instruccion = require("../Instruccion");
const Entorno = require('../tablasimbolos/Entorno');

class If extends Instruccion{
    constructor(condicion, instrucciones, instrucciones_else){
        super();
        this.condicion = condicion;
        this.instrucciones = instrucciones;
        this.instrucciones_else = instrucciones_else;
    }

    ejecutar(entorno){
        let entornoif = new Entorno("entorno if", entorno);
        let condicion = this.condicion.ejecutar(entornoif);

        if (condicion.valor){
            this.lista_instrucciones.forEach(instruccion => {
                instruccion.ejecutar(entornoif);
            });
        }else{
            this.instrucciones_else.forEach(instruccion => {
                instruccion.ejecutar(entornoif);
            });
        }

    }
}