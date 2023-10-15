import { useEffect, useState } from "react";
import axios from 'axios';

export function Home({titulo, mostrar}){

    let [contador, setContador] = useState(0)
    const [data, setData] = useState([]);
    const [entrada, setEntrada] = useState("")

    function actualizarLista(){
        axios.get("http://localhost:4000/get-data")
            .then((response) =>{
                setData(response.data.lista)
            })
    }


    function agregarNum(){
        const valor = contador;
        axios.post("http://localhost:4000/add-data", 
        {
            valor: valor
        }
        ).then(
            (response) =>{
                console.log(response.data)
                setContador(contador+1)
                actualizarLista();
            }
        )
        console.log(contador)
    }

    function printEntrada(){
        console.log(entrada)
    }


    if (!mostrar){
        return (
            <>
                <h1>Estoy Oculto</h1>
            </>
        )
    }else{
        return(
            <>
                <h1>{titulo}</h1>
                <h2>Numeros</h2>
                <button onClick={actualizarLista}>Mostrar</button>
                <button onClick={printEntrada}>Print entrada</button>
                <button onClick={agregarNum}>Agregar Numero</button>
                    {data.map(element =>{
                        return(
                            <button>Boton {element}</button>
                        );
                    })}
                <br></br>
                <textarea cols={20} rows={30} onChange={(e)=>{setEntrada(e.target.value)}}></textarea>
            </>
        )
    }

}