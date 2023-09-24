const parser = require("../analizador/Parser.js")


const index = (req, res) =>{
    res.status(200).json({message: 'Bienvenido a mi api'});
}

const analizar = (req, res) => {
    const {entrada} = req.body;
    const resultado = parser.parse(entrada);
    resultado.forEach(element => {
        element.interpretar();
    });

    res.status(200).json({
        message: 'Analisis Realizado', 
        entrada: entrada
    });
}


module.exports = {
    index,
    analizar
}