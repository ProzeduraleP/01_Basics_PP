

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

//module: addition a + b |  test:
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));
function add(a, b) {
	return a + b;
}

// module: subtraction a - b |  test:
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
// output(subtract(0,2));
function subtract(a,b) {
	return a - b;
}

// module: multiplication a * b |  test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function multiply(a,b) {
	return  a * b;
}

// module: division a / b |  test:
const ERROR_STR_DIV = "Teilen durch 0 ist nicht möglich!";
// output(divide(-4,2));
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(0,2));
// output(divide(3,0));
// output(divide(0,0));
function divide(a, b) {
	if(b != 0) { 
		return a / b;
	}else{
		return ERROR_STR_DIV;
	}

}

// module: calculator | tests:
const ERROR_STR_GEN = "Unbekannte Fehler";
agreement : "+","-","*",":","/"
output(calculator(3,2,"+"));
output(calculator(3,2,"-"));
output(calculator(3,2,"*"));
output(calculator(3,2,":"));
output(calculator(3,2,"/"));
output(calculator(3,0,"/"));
output(calculator(3,2,"#?!"));

function calculator(a, b, op) {
	switch (op) {
		case "+": // Addition
			return add(a, b);	
		case "-": // Subtraktion
			return subtract(a, b);
		case "*": // Multiplikation
			return multiply(a, b);
		case "/": // Division
		case ":": 
			return divide(a, b);

		default:
			return ERROR_STR_GEN; // Ausnahme
	}
}

// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}


