/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.  
*/

/* SCRIVI QUI LA TUA RISPOSTA */



/* function trovailpiugrande(a,b){
  var  a;
  var b;
  
    if(a>b){
      console.log("a è il numero maggiore" , +a);
    }
    else{
      console.log("b è il numero maggiore" , +b);
    }

}
console.log (trovailpiugrande (5,10)); */


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*  let a=5;

    if(a!=5){
      console.log("not equal")
    }
   else{
     console.log("equal")
   } */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  /* function divisibleby5 (a){
     if(a%5==0){
      console.log("divisibile per 5")
     }
     else{
      console.log("non divisibile per 5 ")
     }
   }

   console.log(divisibleby5(10)); */




/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 /*function numeri(a,b){
  if(a==8 || b==8 || a+b==8 || a-b==8){
    console.log("condizione verificata")
  }else{
    console.log("condizione non verificata")
  }
 }
  console.log(numeri(0,4)); */


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  /*let totalShoppingCart = 80;

  if(totalShoppingCart>50){
    console.log("spedizione gratis")
  }
  else{
    console.log("costo fisso uguale a 10 euro");
  } */

   /*function totalShoppingCart(a){
    if(a>50){
      console.log("spedizione gratis")
    }
    else{
      console.log("costo fisso uguale a 10 euro");
   }  } 
   console.log(totalShoppingCart(40)); */


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*function blackfriday(a) {

  const b = a * 0.2;
  if (a > 50) {
      console.log("spedizione gratis e sconto");
      
  } else {
    console.log("solo sconto");

     
  }
}
console.log(blackfriday(25));
console.log(blackfriday(100)); */


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 /* let numeri = [ 3,2,1 ] ;
  numeri.sort((a, b) => a - b );
  console.log(numeri); */
 
  
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 /*function numero(a){
  if(a%1==0){
   console.log("vero");
 }else{
  console.log("falso");
 }   } 
 
 console.log(numero(10)) */

 /* oppure 
 
 let a=10;
  let b="pluto";
  console.log(typeof a);
  console.log(typeof b); */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 /* function numero(a){
    if(a%2==0){
      console.log("pari")
    }else{
      console.log("dispari")
    }
  }
  console.log(numero(7)); */


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let val = 6
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 
 /* let numero=10;
  if(numero<5){
    console.log("Tiny");
  }
  else if(numero<10){
    console.log("Small");
  }
  else if(numero<15){
    console.log("Medium");
  }
  else if(numero<20){
    console.log("Large");
  }
  else if(numero>=20){
    console.log("Huge");
  } */


/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let isMale=true;
let gender= isMale? "male":"female";
console.log("il genere è:" +gender); */

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 /* let numero=0;
  while(numero<6){
    numero++;
    console.log(numero);
  } */
  

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* let numero =0;
 var i;
   for(i==0; numero<10; i++){
    numero++;
    console.log(numero);
   } */

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 
/*  let numero=0;
  var i;
  for(i==0; numero <10 ; i++){
    numero++;
    if(numero==3){
      
    }
   else if(numero==8){

    }
    else{
      console.log(numero);
    }
    

  }*/



/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 /*let numero=0;
 var i=0;

 for(i==0; numero<15;i++){

  numero++;
  if(numero%2==0){
    console.log("il numero è pari:" +numero);
  }
  else{
    console.log("il numero è dispari:" +numero);
  }

 } */

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

 /* let numero =0;
  var i;

  for(i==0;numero<100;i++){
    numero++;
    
    if(numero%3==0 && numero%5==0){
      
      console.log("FizzBuzz"); 
    }
    else if (numero%3==0){
      console.log("fizz");
    }
      else if(numero%5==0){
        console.log("buzz");
        
      }
      else{
        console.log(numero)
      }}
      
  */

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* var day=4;

switch(day){

  case 1:
  console.log("Lunedi");
  break;
  case 2:
  console.log("Martedi");
  break;
  case 3:
  console.log("Mercoledi");
  break;
  case 4:
  console.log("Giovedi");
  break;
  case 5:
  console.log("Venerdi");
  break;
  case 6:
  console.log("Sabato");
  break;
  case 7:
  console.log("Domenica");
  break;

} */
