package principal;

// src/principal/Main.java

import java.io.StringReader;

public class Main {


    public static void main(String[] args) {
        analizadores("src/statpy/", "Lexer.jflex", "Parser.cup");
        
        String entrada = """
                         MOSTRAR ( 2*7+3 );
                         MOSTRAR ( 5*5+100*3 );
                         """;
        
        
        
        analizar(entrada); System.out.println(statpy.Parser.resultado);
    }
    
    public static void analizadores(String ruta, String jflexFile, String cupFile){
        try {
            String opcionesJflex[] =  {ruta+jflexFile,"-d",ruta};
            jflex.Main.generate(opcionesJflex);

            String opcionesCup[] =  {"-destdir", ruta,"-parser","Parser",ruta+cupFile};
            java_cup.Main.main(opcionesCup);
            
        } catch (Exception e) {
            System.out.println("No se ha podido generar los analizadores");
            System.out.println(e);
        }
    }
    
       // Realizar Analisis
    public static void analizar (String entrada){
        try {
            statpy.Lexer lexer = new statpy.Lexer(new StringReader(entrada)); 
            statpy.Parser parser = new statpy.Parser(lexer);
            parser.parse();
        } catch (Exception e) {
            System.out.println("Error fatal en compilación de entrada.");
            System.out.println(e);
        } 
    } 
    
}
