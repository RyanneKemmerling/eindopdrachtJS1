"use strict";

let geboortejaar;
let oud;
let koffie;
let leeftijd;
let tijd;
let aantal;
let fout = true;

function tonen(geboortejaar, oud, koffie) {
  let d = new Date();
  leeftijd = d.getFullYear() - geboortejaar;
  tijd = oud - leeftijd;
  aantal = tijd * koffie * 365;
  document.write(`Je bent nu ${leeftijd}. Tegen ${koffie} koppen koffie per dag zal je ${aantal} koppen koffie drinken als je ${oud} jaar oud zou worden.`);
}

function berekenHoeveelheid() {
  geboortejaar = prompt("Wat is uw geboortejaar?", "1991");
  oud = prompt("Hoe oud denkt u te worden?", "91");
  koffie = prompt("Hoeveel tassen koffie drinkt u per dag?", "2");

  if (geboortejaar == null || oud == null || koffie == null){
    document.write("U heeft geannuleerd.");
  } else if (geboortejaar.length == 0 || oud.length == 0 || koffie.length == 0){
    document.write("U heeft niets ingegeven.");
  } else if (isNaN(geboortejaar) || isNaN(oud) || isNaN(koffie)){
    document.write("Gebruik enkel cijfers.");
  } else {
    tonen(geboortejaar, oud, koffie);
  }
}
