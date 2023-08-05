// ------------  Paquetes e importaciones ------------
package analizador; 

import java_cup.runtime.*;

%%	
//-------> Directivas (No tocar)

%public 
%class Lexer
%cup
%char
%line
%column
%unicode
%ignorecase


%init{ 
    yyline = 1;
    yycolumn =1;
%init} 

// ------> Expresiones Regulares 

entero = [0-9]+


%%

// ------------  Reglas Lexicas -------------------

"("        { return new Symbol(sym.PARENTESIS_A, yycolumn, yyline, yytext()); }
")"        { return new Symbol(sym.PARENTESIS_C, yycolumn, yyline, yytext()); }
"mostrar"    { return new Symbol(sym.PRINT, yycolumn, yyline, yytext()); } 

{entero}  { return new Symbol(sym.ENTERO, yycolumn, yyline, yytext()); }




//------> Ingorados 
[ \t\r\n\f]     {/* Espacios en blanco se ignoran */}

//------> Errores Léxicos 
.           	{ System.out.println("Error Lexico: " + yytext()); }


