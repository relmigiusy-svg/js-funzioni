// Traccia 04 · Dal voto al giudizio
// La consegna è nel README, alla voce "04 · Dal voto al giudizio".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaGiudizio
  Di quali dati ha bisogno? del voto
  Deve restituire qualcosa? si i giudizo
  Di che tipo? Stringa

  STEPS
  1 - Imposto la funzione di trovaGiudizio con votoRicevuto
  2 - se il voto è minore di 1 o maggiore di 10 restituisce voto non valido e si ferma
  3 - se il voto è valido continua e continuo con gli altri giudizi del Readme
  4 - stampo in console?
*/

// # La funzione
function trovaGiudizio(votoRicevuto) {
  if (votoRicevuto < 1 || votoRicevuto > 10) {
    return 'Voto non valido'
  }
  else if (votoRicevuto < 5) {
    return 'Gravemente insufficiente'
  }

  else if (votoRicevuto < 6) {
    return 'Insufficiente'
  }

  else if (votoRicevuto < 7) {
    return 'Sufficiente'
  }

  else if (votoRicevuto < 8) {
    return 'Buono'

  }
  else return 'Ottimo'
}
function calcolaMediaPonderata(votoScritto, votoOrale) {
  return (votoScritto + votoScritto + votoOrale) / 3
}
// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(trovaGiudizio(3));
console.log(trovaGiudizio(5));
console.log(trovaGiudizio(5.5));
console.log(trovaGiudizio(6));
console.log(trovaGiudizio(7.5));
console.log(trovaGiudizio(8));
console.log(trovaGiudizio(10));
console.log(trovaGiudizio(0));
console.log(trovaGiudizio(11));
console.log(trovaGiudizio(calcolaMediaPonderata(6, 9)));