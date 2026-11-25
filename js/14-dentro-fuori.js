// Traccia 14 · Dentro o fuori
// La consegna è nel README, alla voce "14 · Dentro o fuori".

// # Parte 1: il programma è già scritto e funziona. Non cambiarlo.
const nomeNegozio = 'Alimentari da Pinco';

const calcolaTotaleSpesa = (prezziCarrello) => {
  let totaleSpesa = 0;
  for (let i = 0; i < prezziCarrello.length; i++) {
    totaleSpesa = totaleSpesa + prezziCarrello[i];
  }
  return totaleSpesa;
};

const totaleCarrello = calcolaTotaleSpesa([2.5, 1.2, 4]);

if (totaleCarrello > 5) {
  const messaggioCassa = 'Borsa in omaggio';
}

// Prima di decommentarle, scrivi accanto a ogni riga cosa ti aspetti: un valore (quale?) o un errore (quale?).
// Poi decommentale UNA alla volta: dopo un errore il programma si ferma.
console.log(nomeNegozio);       // A: mi aspetto...Alimentari da Pinco
console.log(totaleCarrello);    // B: mi aspetto...risultato dal calcolaTotaleSpesa
//console.log(totaleSpesa);       // C: mi aspetto...niente, variabile interna alla funzione
//console.log(prezziCarrello);    // D: mi aspetto...niente undefined
//console.log(i);                 // E: mi aspetto...niente
// console.log(messaggioCassa);    // F: mi aspetto...niente


// # Parte 2: questa funzione ha un guasto. Trovalo e correggilo.
const calcolaTotaleSettimana = (speseGiornaliere) => {
  let totaleSettimana = 0;
  for (let i = 0; i < speseGiornaliere.length; i++) {
    //let totaleSettimana = 0;
    totaleSettimana = totaleSettimana + speseGiornaliere[i];
  }

  return totaleSettimana;

}


// Le prove della parte 2 (decommentale quando hai finito la parte 1)
console.log(calcolaTotaleSettimana([12, 8.5, 20]));
console.log(calcolaTotaleSettimana([5]));
console.log(calcolaTotaleSettimana([]));
