/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

const prompt = require('prompt-sync')({sigint: true});

const kDurst = true;
let kDrink;
const kName = prompt("Geben Sie Ihre Name ein! ");
const kAlter = parseInt(prompt("Geben Sie Ihre Alter ein! "));

switch (kDurst) {
    case (kAlter >= 0 && kAlter <= 5):
        kDrink = "Milch";
        break;
    case (kAlter >= 6 && kAlter <= 12):
        kDrink = "Milch, Saft";
        break;
    case (kAlter >= 13 && kAlter <= 17):
        kDrink = "Milch, Saft, Cola";
        break;
    case (kAlter > 17):
        kDrink = "Milch, Saft, Cola, Wein";
        break;

    default: kDrink = "Milch, Saft, Cola, Wein";
    break;
}

console.log("Hey " + kName + "!" + " Ihr Getränke Auswahl: " + kDrink);

