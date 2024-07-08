
/* Die Satzbau-Maschine | Arrays */

/**
 *   THEORIE
 * 
 */

/*** 02. Theorie: Array */

//let arr; 
//arr = new Array(); //Konstruktor
//arr []; //Literal //schreibweise
// arr = [2,11,7,8,10]; // arr = Container - [2,11,7,8,10] Elemente


// output(arr);
// output(arr.length); // Anzahl der Elemente
// //output(arr[]); // Index 0 (1. Pos. im Array)
// output(arr[arr.length - 1]); // letze Pos. / allgemein


/********* Überlegungen - Transponierung **********/

/*
1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung
*/

/* Zu "Fuß" - DRY !!! */
// let a = 0; // Anfangswert
// output("inhalt von a: " + a);
// a = a + 1; // a = 0 + 1
// output("inhalt von a: " + a);
// a = a + 1; // a = 1 + 1
// output("inhalt von a: " + a);
// a = a + 1; // a = 2 + 1
// output("inhalt von a: " + a);

/* Besser: mit FOR-Schleife */

// let a = 0; // Anfangswert
// for (let i = 0; i < 10; i++) {
//    a += 1; // a = a + 1
//    output("inhalt von a: " + a);
// }

// let str = ""; // Anfangswert
// for (let i = 0; i < 10; i++) {
//    str += "Test" + " "; // a = a + 1
//    output(str);
// }






/**
 *   PRAXIS
 * 
 */


/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
// // output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
// function getSentence(word1,word2,word3,word4) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str =   word1 + GAP +
//                 word2 + GAP +
//                 word3 + GAP +
//                 word4 + GAP +
//                 PUNCT;

//     return str;
// }


/*** 01a. Funktionalität mit Array 1 */
// Kritik | Überlegung
// word1,word2, .... wordN :: Semantische Struktur
// arr[0],arr[1] ... arr[n-1] :: Numerische Struktur (0,1,2,3 ... n)
// --> Transformation semantisches Problem --> numerisches Problem
// output(getSentenceArr1(["Ich","bin","die","coole","Maxine","Mützerich"]));
// function getSentenceArr1(arr) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str = "";

//     for (let i = 0; i < arr.length; i++) {

//         if(i < arr.length-1){
//             str += arr[i] + GAP;
//         }else{
//             str += arr[i] + PUNCT;
//         }
        
//     }
//     return str;
// }

// output(getSentenceArr2(["Ich","bin","die","coole","Maxine","Mützerich"]));
// function getSentenceArr2(arr) {
//     const GAP = " ";
//     const PUNCT = ".";
//     let str = "";

//     for (let i = 0; i < arr.length; i++) {
//         if(i < arr.length-1){
//             str += arr[i] + GAP;
//         }else{
//             str += arr[i] + PUNCT;
//         }  
//     }
//     return str;
// }

output(getSentenceArr3(["Ich","bin","die","coole","Maxine","Mützerich"]));
function getSentenceArr3(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str = "";

    // for (let i = 0; i < arr.length; i++) {
    //     str += arr[i] + GAP;
    // }
    // return str.trim() + PUNCT;

    return arr.join(GAP) + PUNCT;
    
}


// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}


