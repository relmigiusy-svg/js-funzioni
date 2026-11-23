// Traccia 06 · La durata del film
// La consegna è nel README, alla voce "06 · La durata del film".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? formattaDurata
  Di quali dati ha bisogno? minuti totali
  Deve restituire qualcosa? durata in ore e minuti
  Di che tipo? Stringa

  STEPS
  1 - Ricevuto i minuti totali
  2 - con la funzione restituisco la durata in ore e minuti
  3 - calcolo i minuti dividendoli per 60 con resto
  4 - se 1 ora scrivo 1 ora
  5 - gli atri if richiesti
  6 - verifico

*/

// # La funzione
function formattaDurata(minutiTotali) {
  const ore = Math.floor(minutiTotali / 60);
  const minuti = minutiTotali % 60;
  if (minuti === 0) {
    if (ore === 1) {
      return `${ore} ora`;
    }
    else { return `${ore} ore` }
  }

  else if (ore === 0) {
    return `${minuti} minuti`;
  }
  else if (ore === 1) {
    return `1 ora e ${minuti} minuti`;
  }
  else {
    return `${ore} ore e ${minuti} minuti`;
  }
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(formattaDurata(148));
console.log(formattaDurata(95));
console.log(formattaDurata(120));
console.log(formattaDurata(60));
console.log(formattaDurata(45));
console.log(formattaDurata(0));
