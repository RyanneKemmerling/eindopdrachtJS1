"use strict";
document.write(`<h1>Scrabble punten berekenaar</h1>`);

function verstuur(){
  document.write(`<h1>Scrabble punten berekenaar</h1>`);

  let woord = prompt("Voor welk woord wilt u de score berekenen?", "JavaScript");
  let woordUppercase = woord.toUpperCase();

  if (woord == null){
    alert("U heeft geannuleerd.");
    window.location.href = "07-scrabble-punten-berekenaar.html";
  } else if (woord.length == 0){
    alert("Vul een woord in.");
    window.location.href = "07-scrabble-punten-berekenaar.html";
  } else {
    let alfabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let alfabetScore = [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10];
    let lengte = woord.length;
    let punten = 0;

    document.write(`<p>Het woord is: ${woord}</p>`);

    for (let i = 0; i < lengte; i++){
      document.write(`<p>${woordUppercase.charAt(i)} - ${alfabetScore[alfabet.indexOf(woordUppercase.charAt(i))]}</p>`);
      punten = parseInt(punten) + parseInt(alfabetScore[alfabet.indexOf(woordUppercase.charAt(i))]);
    }

    document.write(`<p>Totaal: ${punten} punten.</p>`);
  }
}
