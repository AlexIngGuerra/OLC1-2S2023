// ------------  Paquete e importaciones ------------
package compi; 

import java_cup.runtime.*;

%%	
//-------> Directivas (No tocar)

%public 
%class Lexer
%cup
%char
%column
%line
%unicode
%ignorecase

%{ 
%} 

// ------> Expresiones Regulares 

entero = [0-9]+
comentario = []

%%
// ------------  Reglas Lexicas -------------------
"("         {return new Symbol(sym.PARENTESIS_A, yycolumn, yyline, yytext());}
")"         {return new Symbol(sym.PARENTESIS_C, yycolumn, yyline, yytext());}
";"         {return new Symbol(sym.PUNTOYCOMA, yycolumn, yyline, yytext());}

"*"         {return new Symbol(sym.POR, yycolumn, yyline, yytext());}
"+"         {return new Symbol(sym.MAS, yycolumn, yyline, yytext());}

"mostrar"   {return new Symbol(sym.R_MOSTRAR, yycolumn, yyline, yytext());}

{entero}  { return new Symbol(sym.ENTERO, yycolumn, yyline, yytext()); }





comentario {}

//------> Ingorados 
[ \t\r\n\f]     {/* Espacios en blanco se ignoran */}

//------> Errores Léxicos 
.           	{ System.out.println("Error Lexico: " + yytext() + " | Fila:" + yyline + " | Columna: " + yycolumn); }


