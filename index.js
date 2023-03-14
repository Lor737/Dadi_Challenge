var diceOne = document.getElementsByClassName('img1')[0];

//diceOne[0].getAttribute("src"); /* getAttribute("src") prende solo il src */
//console.log(diceOne = diceOne[0].getAttribute("src"));
var diceTwo = document.getElementsByClassName('img2')[0];
//se io ho più class con stesso nome, ad esempio "img2", avrò un'array di 2 elementi, 0 e 1.
//se io ho solo una class, ad esempio "img2", avrò un'array di 1 element0, di indice 0.
//se io voglio sapere quanto è grande l'array, allora bisogna scrivere: document.getElementsByClassName('img2').length
var numero1 = Math.floor(Math.random() * 6)+1; //floor arrotonda per difetto //cell arrotonda per eccesso
var numero2 = Math.floor(Math.random() * 6)+1;

diceOne.src = "images/dice" + numero1 + ".png";
diceTwo.src = "images/dice" + numero2 + ".png";

var heading = document.getElementsByTagName("h1")[0];
console.log(heading);
heading.style.fontSize = "20px";
if (numero1>numero2)
{
  heading.innerText = "Vince giocatore 1";
  //console.log("Ha vinto il giocatore 1");
}
if (numero2>numero1)
{
  heading.innerText = "Vince giocatore 2";
  //console.log("Ha vinto il giocatore 2");
}
if (numero1 == numero2)
{
  heading.innerText = "Pareggio";
  //console.log("Pareggio");
}
//console.log(diceOne);
//console.log(diceTwo);
