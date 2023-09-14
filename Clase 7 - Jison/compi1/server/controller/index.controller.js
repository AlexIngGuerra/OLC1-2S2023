const parser = require("../analizador/Parser.js")


const index = (req, res) =>{
    res.status(200).json({message: 'Bienvenido a mi api'});
}

const analizar = (req, res) => {
    const {entrada} = req.body;
    let resultado = parser.parse(entrada);
    
    res.status(200).json({
        message: 'Analisis Realizado', 
        entrada: entrada, 
        resultado: resultado
    });
}


module.exports = {
    index,
    analizar
}