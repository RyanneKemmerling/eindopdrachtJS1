"use strict";

let graden;
let uitkomst;
let controle = false;

controle = function(){
  if (graden == null){
    return "U heeft geannuleerd.";
  } else if (graden.length == 0){
    return "Vul in a.u.b.";
  } else if (!graden.search(/^[0-9]+$/) == 0){
    return "Dit is geen cijfer.";
  } else {
    return true;
  }
}

function verstuurC(){
  graden = prompt ("Hoeveel graden wilt u omzetten?", "20");
  controle(graden);

  if (controle() == true){
    uitkomst = (graden*9)/5+32;
    alert(`${graden}°C is ${uitkomst}°F`);
  } else {
    alert(controle());
  }
}

function verstuurF(){
  graden = prompt ("Hoeveel graden wilt u omzetten?", "20");
  controle(graden);

  if (controle() == true){
    uitkomst = ((graden-32)*5)/9;
    alert(`${graden}°F is ${uitkomst}°C`);
  } else {
    alert(controle());
  }
}
