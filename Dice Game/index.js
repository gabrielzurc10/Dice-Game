

var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");
var h1 = document.querySelector("h1");

function rollDice() {
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);
  var randomDiceImage1 = "images/dice" + randomNumber1 + ".svg";
  var randomDiceImage2 = "images/dice" + randomNumber2 + ".svg";

  dice1.setAttribute("src", randomDiceImage1);
  dice2.setAttribute("src", randomDiceImage2);

  if (randomDiceImage1 > randomDiceImage2) {
  h1.innerHTML = "Player 1 wins!";
  } else if (randomDiceImage1 < randomDiceImage2) {
  h1.innerHTML = "Player 2 wins!";
  } else {
  h1.innerHTML = "Draw!";
  }
}
