// Traccia 03 · Lo scritto vale doppio
// La consegna è nel README, alla voce "03 · Lo scritto vale doppio".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? calcolaMediaPonderata
  Di quali dati ha bisogno? voto scritto e voto orale
  Deve restituire qualcosa? la media
  Di che tipo? numero con decimale

  STEPS
  1 - devo calcolare la media ponderata di 3 voti
  2 - ricevo dal professore due voti, scritto e orale
  3 - caclcolo la media (scritto+scritto+orale)/3
  4- per stamparla con un decimale metto.ToFixed

*/

// # La funzione
function calcolaMediaPonderata(votoScritto, votoOrale) {
  return (votoScritto + votoScritto + votoOrale) / 3
}

//AGGIUNTA EXTRA PERSONALE const votoScritto = parseInt(prompt('Scrivi voto scritto'));
// AGGIUNTA EXTRA PERSONALE const votoOrale = parseInt(prompt('Scrivi voto orale'));

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(`Media:${calcolaMediaPonderata(6, 9).toFixed(1)}`);
console.log(calcolaMediaPonderata(9, 6).toFixed(1));
console.log(calcolaMediaPonderata(8, 6).toFixed(1));
console.log(calcolaMediaPonderata(5, 8).toFixed(1));
console.log(calcolaMediaPonderata(10, 10).toFixed(1));
// ESERCIZIO PERSONALE EXTRA console.log(`La tua media è: ${calcolaMediaPonderata(votoScritto, votoOrale).toFixed(1)}`);