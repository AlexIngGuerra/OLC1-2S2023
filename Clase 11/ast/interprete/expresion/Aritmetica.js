const Instruccion = require("../Instruccion");
const contador = require("../arbol/contador")

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

    getAst(){
        let nodo = {
            padre: -1,
            cadena: ""
        }

        let izq = this.izq.getAst();
        let der = this.der.getAst();
        
        let op = contador.get();
        let padre = contador.get();

        nodo.padre = padre;
        nodo.cadena =
            izq.cadena+
            der.cadena+
            `${op}[label="${this.op}"]\n`+
            `${padre}[label="expresion"]\n`+
            `${padre}--${izq.padre}\n`+
            `${padre}--${op}\n`+
            `${padre}--${der.padre}\n`
            ;

        return nodo;
    }
}

module.exports = Aritmetica;