
const prompt = require('prompt-sync')({sigint: true});

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

test();

function test() {
    console.log("Funktion test");
}

/***** Funktionen 2 *****/
// 2 Parametrisierung + Datenübergabe von INNEN

function ausgabeNamen2(firstName = "Noch nicht bekannt") {
    console.log("Hallo, " + firstName + "!");
}

ausgabeNamen2("Peter");

/***** Funktionen 3 *****/
// 3 Parametrisierung + Datenübergabe von INNEN

function ausgabeNamen3(firstName, familyName) {
    console.log("Hallo, " + firstName + " " + familyName + "!");
}

ausgabeNamen3("Peter", "Schmit");

ausgabeNamen3(prompt("Vorname? "), prompt("Name? "));

/***** Funktionen 4 *****/
// 4a Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenSRP("Max","Mütze");

ausgabeNamenSRP("Max","Mütze");

function ausgabeNamenSRP(firstName, familyName) {

     // 1. Funktionalität: string composing
    const GAP = " ";
    let outputStr = "Hallo, " + firstName + GAP + familyName + "!"; 
    
    // 2. Funktionalität: string output
    console.log(outputStr);
}


/***** Funktionen 4b *****/

 // 1. Funktionalität: string composing


// 2. Funktionalität: string output
output(getString("Peter", "schmit"));

function getString(firstName, familyName) {

   const GAP = " ";
   let outputStr = "Hallo, " + firstName + GAP + familyName + "!"; 
   return outputStr;
   console.log("hi"); // wird nicht ausgeführt nach RETURN wird funktion abgebrochen
}

function output(outputData) {
    console.log(outputData);
}

