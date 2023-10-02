/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* i principali datatype in JavaScript sono:
-stringhe: sequenze di caratteri delimitate da singoli o doppi apici.
-numeri: valore numerico indicato senza distinzione fra interi e decimali. i numeri decimali verranno espressi con il punto.
-booleani: tipo di dato i cui soli due possibili valori sono rappresentati da true e false, quindi vero o falso.
-null: è una parola chiave per indicare l'assenza intenzionale (voluta) di un oggetto.
-undefined: proprietà che indica che una variabile non è stata definita, non ha un valore assegnato.*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Alessia";
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1 = 12;
let numero2 = 20;
console.log(numero1 + numero2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
let name = "Palmieri";
console.log(name);
// se andiamo a visualizzare nella console la riassegnazione del nuovo valore 'Palmieri' vedremo che quest'azione non sarà possibile in quanto la variabile const non può essere riassegnata (già presente alla riga 25), quindi il suo valore resterà costante.
// Uncaught SyntaxError: Identifier 'name' has already been declared (at D1.js:47:5)//

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let numero3 = 4;
console.log(numero3 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log(name1 === name2); //false
console.log(name1 !== name2); //true
name2 = name1;
console.log(name1 === name2); //true
