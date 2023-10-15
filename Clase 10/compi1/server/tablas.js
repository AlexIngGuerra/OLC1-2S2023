let tabla = {}

tabla["encabezados"] = ["Nombre", "Apellido"]
tabla["informacion"] = [["Walter", "Guerra"], ["Daniel", "Alfaro"] ]

console.log(tabla)

let info = tabla["informacion"];
let verificada = []

info.forEach(e =>{
    if(e[0] == 'Walter'){
        verificada.push(e)
    }
})

let consulta = {}
consulta["encabezados"] =  ["Nombre", "Apellido"]
consulta["informacion"] = verificada;

console.log(consulta)