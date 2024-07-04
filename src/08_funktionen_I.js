
const prompt = require('prompt-sync')({sigint: true});

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

test();

function test() {
    console.log("Funktion test");
}

/***** Funktionen 02a *****/
// 2 Parametrisierung + Datenübergabe von INNEN

function ausgabeNamen2(firstName = "Noch nicht bekannt") {
    console.log("Hallo, " + firstName + "!");
}

ausgabeNamen2("Peter");

/***** Funktionen 02a *****/
// 3 Parametrisierung + Datenübergabe von INNEN

function ausgabeNamen3(firstName, familyName) {
    console.log("Hallo, " + firstName + " " + familyName + "!");
}

ausgabeNamen3("Peter", "Schmit");

ausgabeNamen3(prompt("Vorname? "), prompt("Name? "));

