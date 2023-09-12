// ################### ANALIZADOR LEXICO #######################
%lex
%options case-insensitive 

// ---------> Expresiones Regulares
entero  [0-9]+;


%%
// -----> Reglas Lexicas

{entero}                 { return 'ENTERO'; } 

// -----> Espacios en Blanco
[ \s\r\n\t]             {/* Espacios se ignoran */}

// -----> FIN DE CADENA Y ERRORES
<<EOF>>               return 'EOF';
.  { console.error('Error léxico: \"' + yytext + '\", linea: ' + yylloc.first_line + ', columna: ' + yylloc.first_column);  }


/lex
// ################## ANALIZADOR SINTACTICO ######################
// -------> Precedencia

//%left 'MAS' 'MENOS'

// -------> Simbolo Inicial
%start inicio


%% // ------> Gramatica

inicio
	: instruccion EOF {$$=$1; return $$;}
;

instruccion
	: ENTERO	{$$ = $1;}
	| error 	{console.error('Error sintáctico: ' + yytext + ',  linea: ' + this._$.first_line + ', columna: ' + this._$.first_column);}
;