// Hola, Bienvenido al archivo de Prueba

/*
	Vamos a poner a Prueba si aceptan comentarios
	en varias Lineas
*/

void main (){
	// Test de numeros
	int simpleEntero = 10;
	int enteros = simpleEntero + 2 - 2 * 2 / 2;
	double decimales = 2.0 - 3.4;
	decimales = 65.7 * decimales; // Asignacion 
	
	// Probemos los Print
	Console.Write("String"); 
	Console.Write(True || False && True && ! False); // True or False and True and not False
	Console.Write(2<3 && 2.5>=7 || 3 != 5 || enteros == 7);
	
	// Probando el if
	if (b > a){
		Console.Write("Primer if");
	}else if(a == b){
		Console.Write("else if");
	}else{
		if (true){
			Console.Write("if del else");
		}
	}
	
	int precio; // Esto debería ser precio = None
	switch(valor){
		case 1:
			precio = 55;
			Console.Write("con if");
			if(true){
				precio = 61;
			}
			break;
		case 2:
			Console.Write("solo print");
			precio = 25;
		default:
			Console.Write("Default");
	}

	
	while(a < 10){
		Console.Write("el valor de a es: " + a);
		for (int x=1; x<10; x++){
			if (x == 5){
				Console.Write("Mitad");
			}
		}
		
		int a = 1;
		do {
			Console.Write("el valor de a es: " + a);
		} while(a < 5);
	}
	
	void DefinirGlobales(){
		string titulo1 = "Notas";
		double reprobado = ${NewValor, "archivo.json", "val1"};
	}
	
	void GraFicaPie(){
        string titulo = ${NewValor, "archivo.json", "titulo"};
        string [] Ejex= {"compi1", "compi2"};
        double [] Valores= {107.0, 200.0 };
    }
	
	void GraFicaBarras(){
		string Titulo = titulo1;
        string [] Ejex = { ${NewValor, "archivo.json", "ejex1"} , ${NewValor, "archivo.json", "ejex2"}};
        double [] Valores= { reprobado, ${NewValor, "archivo.json", "val2"}};
        string TituloX= "Eje X";
        string TituloY= "Eje Y";
	}


}