package func;

// src/func/Funcion.java


import java.util.HashMap;
import java.util.LinkedList;

public class Funcion {
    public static HashMap variables = new HashMap();//Tabla de Simbolos para variables
    public static int contador = 0; //Contador de tabulaciones
    public static LinkedList<String> traduccion = new LinkedList<>();//Lista de traduccion 
    
    // Agregar Tabulaciones
    public static LinkedList<String>  tabulaciones(LinkedList<String> lista){
        String tabs = "";
        for (int i = 0; i < contador; i++) {
            tabs = "\t"+tabs;
        }
        
        for (int i = 0; i < lista.size(); i++) {
            lista.set(i, tabs+lista.get(i));
        }
        
        return lista;
    }

    
}
