// Traccia 09 · Quanto manca alla pensione
// La consegna è nel README, alla voce "09 · Quanto manca alla pensione".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama? trovaEtaPensione e calcolaAnniAllaPensione
  Di quali dati ha bisogno? la prima funzione il tipo di lavoro, laseconda funzione l'anno di nascita
  l'anno corrente e il tipo di lavoro
  Deve restituire qualcosa? la prima funzione restituisce l'età della pensione,
  la seconda restituisce quanti anni mancano alla pensione.
  Di che tipo? Numero

  STEPS
  1 - Scrivo la prima funzione, con i valori ordinario e usurante
  2 - La prima funzione restituisce 67 annni chi fa un lavoro ordinario
  3 - Restituisce 62 chi fa un lavoro usurante
  4- la seconda funzione invece con i parametri anno di Nascita, anno corrente e tipo di lavoro restituisce quanti
  anni mancano alla pensione.
  
*/

// # Le funzioni

function trovaEtaPensione(tipoLavoro) {
  if (tipoLavoro === 'ordinario') {
    return 67;
  }
  if (tipoLavoro === 'usurante') {
    return 62;
  }
}

function calcolaAnniAllaPensione(annoNascita, annoCorrente, tipoLavoro) {
  const etaPersona = annoCorrente - annoNascita;
  const etaPensione = trovaEtaPensione(tipoLavoro);

  // adesso invece di fare un return mi calcolo gli anni mancanti in una const
  //così mettendolo in una variabile posso effettuare controllo con if prima di
  // fare return

  const anniMancanti = etaPensione - etaPersona;

  if (anniMancanti <= 0) {
    return 0;
  }

  return anniMancanti;
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(trovaEtaPensione('ordinario'));
console.log(trovaEtaPensione('usurante'));
console.log(calcolaAnniAllaPensione(2000, 2026, 'ordinario'));
console.log(calcolaAnniAllaPensione(2000, 2026, 'usurante'));
console.log(calcolaAnniAllaPensione(2000, 2027, 'ordinario'));
console.log(calcolaAnniAllaPensione(1960, 2026, 'ordinario'));
console.log(calcolaAnniAllaPensione(1964, 2026, 'usurante'));
console.log(calcolaAnniAllaPensione(1950, 2026, 'ordinario'));