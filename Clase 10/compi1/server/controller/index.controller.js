const parser = require("../analizador/Parser.js")
let data = []

const index = (req, res) =>{
    res.status(200).json({message: 'Bienvenido a mi api'});
}

const addData = (req, res) =>{
    let {valor} = req.body;
    data.push(valor)
    res.status(200).json({message: 'Data ingresada'});
}

const getData = (req, res) => {
    res.status(200).json({message: 'Data obtenida', lista: data});
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
    analizar,
    getData,
    addData
}