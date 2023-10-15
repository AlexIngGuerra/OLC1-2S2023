const Instruccion = require("../Instruccion");

class Aritmetica extends Instruccion{
    constructor(izq, op, der){
        super();
        this.izq = izq;
        this.der = der;
        this.op = op;
        this.valor = null;
    }

    ejecutar(entorno){
        let izq = this.izq.ejecutar(entorno);
        let der = this.der.ejecutar(entorno);

        switch(this.op){
            case '+':
                this.valor = Number(izq.valor) + Number(der.valor);
                return this
            case '*':
                this.valor = Number(izq.valor) * Number(der.valor);
                return this
        }
        
        return this
    }
}

module.exports = Aritmetica;