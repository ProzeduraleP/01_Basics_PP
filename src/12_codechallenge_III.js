/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}

/*** Funktion mit Array als Parameter */
// mögliche Tests:
const prompt = require('prompt-sync')({sigint: true});

function isOpNotValid(arr) {

    let i = 1;
    let val = prompt("Punktation für \"" + arr.join(" ") + "\" wurde nicht automatisch erkannt! bitte Manuel eingeben: ");

    while (val != "." && val && "?" && val != "!" && val != "") {

        if (i < 3) {
            i++;
            val = prompt(i + ". Versuch: ");
        } else {
            val = "Kein Richtige eingabe! Bitte versuchen Sie es noch einmal!";
            return val;
        }

    }
    return arr.join(" ") + val;
    
}

output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));

output(getSentence(["Ich","weiß","nicht","wie","soll","ich"],"F"));

function getSentence(arr,op) {
   switch (op) {
    case "S":
        return arr.join(" ") + ".";
    case "Q":
        return arr.join(" ") + "?";   
    case "E":
        return arr.join(" ") + "!";

    default:
        return isOpNotValid(arr);
   }
}

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputData) {
    console.log(outputData);
}