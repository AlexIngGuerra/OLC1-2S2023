package principal;

import java.io.StringReader;
import java.util.HashMap;

/**
 *
 * @author Alexander
 */
public class Main {
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        analizadores("src/compi/", "Lexer.jflex", "Parser.cup");
        
        String entrada = """
                         MOSTRAR ( 2*7 + 3);
                         """;
        
        analizar(entrada);
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
            compi.Lexer lexer = new compi.Lexer(new StringReader(entrada)); 
            compi.Parser parser = new compi.Parser(lexer);
            parser.parse();
        } catch (Exception e) {
            System.out.println("Error fatal en compilación de entrada.");
            System.out.println(e);
        } 
    } 
    
}
