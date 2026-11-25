// Traccia 12 · Una riga sola
// La consegna è nel README, alla voce "12 · Una riga sola".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? abbiamo quattro funzioni calcolaPrezzoConIva calcolaAreaRettangolo
  verificaNumeroPari  convertiCelsiusInFahrenheit
  Di quali dati ha bisogno? prezzo netto, base e altezza, numero, gradi Celsius
  Deve restituire qualcosa? prezzo con Iva al 22%, area, true e false, gradi fahrenheit
  Di che tipo?

  STEPS
  1 -
  2 -
  3 -
*/

// # Le arrow function, con il return implicito: una riga ciascuna

const calcolaPrezzoConIva = (prezzoNetto) => prezzoNetto + ((prezzoNetto / 100) * 22)
const calcolaAreaRettangolo = (base, altezza) => base * altezza;
const verificaNumeroPari = (numero) => numero % 2 === 0;
const convertiCelsiusInFahrenheit = (gradiCelsius) => ((gradiCelsius * 9) / 5) + 32;
// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(calcolaPrezzoConIva(10));
console.log(calcolaPrezzoConIva(100));
console.log(calcolaPrezzoConIva(0));
console.log(calcolaAreaRettangolo(4, 5));
console.log(calcolaAreaRettangolo(2.5, 2));
console.log(verificaNumeroPari(4));
console.log(verificaNumeroPari(7));
console.log(verificaNumeroPari(0));
console.log(convertiCelsiusInFahrenheit(0))
console.log(convertiCelsiusInFahrenheit(100))
console.log(convertiCelsiusInFahrenheit(20))
console.log(convertiCelsiusInFahrenheit(-40))