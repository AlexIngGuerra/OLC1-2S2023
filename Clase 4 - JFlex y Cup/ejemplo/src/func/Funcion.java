package func;

// src/func/Funcion.java


import java.util.HashMap;
import javax.swing.JOptionPane;

public class Funcion {
    public static HashMap variables = new HashMap();
    public static int contador = 0;
    
    public static void mostrar(String expresion){
        JOptionPane.showMessageDialog(null, expresion);
    }
    
}
