

function comparar(valor1, op, valor2){
    if (op == '='){
        return valor1 == valor2;
    }
    else if (op == ">="){
        return valor1 >= valor2;
    }
}

let datos = ['nombre', 'hola', 'adios']
let resultado = []

datos.forEach(element => {
    if(comparar(element, ">=", 'hola')){
        resultado.push(element);
    }
});

console.log(resultado)