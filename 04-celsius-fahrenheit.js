"use strict";

let graden;
let uitkomst;
let geenFouten = true;

let controle = function(graden){
  if (graden.length == 0){
    document.write("Vul in a.u.b.");
    geenFouten = false;
  } else if (graden = null){
    document.write("U heeft geannuleerd.");
    geenFouten = false;
  } else if (graden.search(/^[0-9]+$/) == 0){
    return true;
  }
}

function verstuurCF(){
  graden = prompt ("Hoeveel graden wilt u omzetten?", "20");
  graden = controle(graden);

  if (controle = true){
    uitkomst = (graden*9)/5+32;
    alert(`${graden}°C is ${uitkomst}°F`);
  }
}

function verstuurFC(){
  graden = prompt ("Hoeveel graden wilt u omzetten?", "20");
  graden = controle(graden);

  if (controle = true){
    uitkomst = (graden-32)*5)/9;
    alert(`${graden}°F is ${uitkomst}°C`);
  }
}
