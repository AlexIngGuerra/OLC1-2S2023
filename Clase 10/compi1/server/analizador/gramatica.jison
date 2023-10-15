// ################### ANALIZADOR LEXICO #######################
%lex
%options case-insensitive 

// ---------> Expresiones Regulares
entero  [0-9]+;
id      [a-zA-Z][a-zA-Z]*;


%%
// -----> Reglas Lexicas
'('          {return 'PARIZQ'}
')'          {return 'PARDER'}
';'          {return 'PYC'}
'+'          {return 'MAS'}
'*'          {return 'POR'}
'='          {return 'IGUAL'}

'mostrar'    {return 'MOSTRAR'}
'let'        {return 'LET'}


{entero}                 { return 'ENTERO'; } 
{id}                     { return 'ID'; }

// -----> Espacios en Blanco
[ \s\r\n\t]             {/* Espacios se ignoran */}

// -----> FIN DE CADENA Y ERRORES
<<EOF>>               return 'EOF';
.  { console.error('Error léxico: \"' + yytext + '\", linea: ' + yylloc.first_line + ', columna: ' + yylloc.first_column);  }


/lex
// ################## ANALIZADOR SINTACTICO ######################
%{
    const Dato = require("../interprete/expresiones/Dato.js");
    const Mostrar = require('../interprete/instrucciones/Mostrar.js');
    const Aritmetica = require('../interprete/expresiones/Aritmetica.js')
    const Asignar  = require('../interprete/instrucciones/Asignar')
    const Id = require('../interprete/expresiones/Id')
%}

// -------> Precedencia

%left 'MAS'
%left 'POR'


// -------> Simbolo Inicial
%start inicio


%% // ------> Gramatica

inicio
	: lista_instrucciones EOF {$$ = $1; return $$;}
;

lista_instrucciones
    : lista_instrucciones instruccion  { $$= $1; $$.push($2); }
    | instruccion  {$$ = []; $$.push($1); }
;

instruccion
	: MOSTRAR PARIZQ expresion PARDER PYC   { $$ = new Mostrar($3); }
    | LET ID IGUAL expresion PYC {$$ = new Asignar($2, $4);}
	| error 	{console.error('Error sintáctico: ' + yytext + ',  linea: ' + this._$.first_line + ', columna: ' + this._$.first_column);}
;

expresion
    : expresion MAS expresion  {$$ = new Aritmetica($1, '+', $3)}
    | expresion POR expresion  {$$ = new Aritmetica($1, '*', $3)}
    | ENTERO	{$$ = new Dato($1, 'INT');}
    | ID        {$$ = new Id($1);}
;