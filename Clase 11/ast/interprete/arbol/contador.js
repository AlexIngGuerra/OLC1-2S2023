var contador = 0;

const get = () =>{
    contador = contador + 1;
    return contador;
}

module.exports = {get};