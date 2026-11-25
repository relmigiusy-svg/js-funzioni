// Traccia 08 · Dal nome al numero del giorno
// La consegna è nel README, alla voce "08 · Dal nome al numero del giorno".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaNumeroGiorno
  Di quali dati ha bisogno? nome del giorno, con la maiuscola e l'accento
  Deve restituire qualcosa? il numero del giorno della settimana da 1 a 7
  Di che tipo? numero

  STEPS
  1 - Imposto la funzione con numeroGiorno
  2 - Imposto array e ciclo for cioè appena trova quel nome si ferma
  3 - restituisce cosi numero giorno
*/

// # La funzione
function trovaNumeroGiorno(nomeGiorno) {
  const giornoSettimana = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica']
  // ho impostato array, uso ciclo for per far girare il controllo

  for (let i = 0; i < giornoSettimana.length; i++) {
    if (giornoSettimana[i] === nomeGiorno) {
      return i + 1;
    }
  }
  return 0;
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(trovaNumeroGiorno('Lunedì'));
console.log(trovaNumeroGiorno('Mercoledì'));
console.log(trovaNumeroGiorno('Domenica'));
console.log(trovaNumeroGiorno('Lunedi'));
console.log(trovaNumeroGiorno('lunedì'));
console.log(trovaNumeroGiorno('Pippo'));