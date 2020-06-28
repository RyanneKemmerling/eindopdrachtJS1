"use strict";

let zinTxt;
let woordTxt;
let vervangingTxt;
let nieuweZin;

function vervangWoord(zinTxt, woordTxt, vervangingTxt){
  if (zinTxt.search(/(woordTxt)/) >= 0){
    let locatie = zinTxt.indexOf(woordTxt);
    let lengte = woordTxt.length;
    document.getElementById("nieuweZin").value = `${zinTxt.substr(0, locatie)}${vervangingTxt}${zinTxt.substr(locatie+lengte)}`;
  } else {
    document.getElementById("nieuweZin").value = "Woord is niet gevonden.";
  }
}

function verstuur(){
  zinTxt = document.getElementById("zin").value;
  woordTxt = document.getElementById("woord").value;
  vervangingTxt = document.getElementById("vervanging").value;

  if (zinTxt.length == 0 || woordTxt.length == 0 || vervangingTxt.length == 0){
    alert ('Vul alle velden in.');
  } else {
    vervangWoord(zinTxt, woordTxt, vervangingTxt);
  }
}
