// ################### ANALIZADOR LEXICO #######################
%lex
%options case-insensitive 

// ---------> Expresiones Regulares
entero  [0-9]+;


%%
// -----> Reglas Lexicas
'('          {return 'PARIZQ'}
')'          {return 'PARDER'}
';'          {return 'PYC'}
'mostrar'    {return 'MOSTRAR'}


{entero}                 { return 'ENTERO'; } 

// -----> Espacios en Blanco
[ \s\r\n\t]             {/* Espacios se ignoran */}

// -----> FIN DE CADENA Y ERRORES
<<EOF>>               return 'EOF';
.  { console.error('Error léxico: \"' + yytext + '\", linea: ' + yylloc.first_line + ', columna: ' + yylloc.first_column);  }


/lex
// ################## ANALIZADOR SINTACTICO ######################
%{
    const Dato = require('../interprete/expresiones/Dato.js');
    const Mostrar = require('../interprete/instrucciones/Mostrar.js');
%}


// -------> Precedencia

//%left 'MAS' 'MENOS'


// -------> Simbolo Inicial
%start inicio


%% // ------> Gramatica

inicio
	: lista_instrucciones EOF {$$ = $1; return $$;}
;

lista_instrucciones
    : lista_instrucciones instruccion  {$$ = $1; $$.push($2);}
    | instruccion  {$$ = []; $$.push($1)}
;

instruccion
	: MOSTRAR PARIZQ expresion PARDER PYC   {$$ = new Mostrar($3); }
	| error PYC	{console.error('Error sintáctico: ' + yytext + ',  linea: ' + this._$.first_line + ', columna: ' + this._$.first_column);}
;

expresion
    : ENTERO	{$$ = new Dato($1, 'INT');}
;