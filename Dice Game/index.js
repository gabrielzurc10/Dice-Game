

var dice1 = $(".img1");
var dice2 = $(".img2");
var h1 = $("h1");

$("button").click( function () {
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);
  var randomDiceImage1 = "images/dice" + randomNumber1 + ".svg";
  var randomDiceImage2 = "images/dice" + randomNumber2 + ".svg";

  var sound = new Audio("sounds/dice.mp3");

  $(".animation").fadeOut(function() {
    dice1.attr("src", randomDiceImage1);
    dice2.attr("src", randomDiceImage2);

    if (randomDiceImage1 > randomDiceImage2) {
    h1.html("Player 1 wins!");
    } else if (randomDiceImage1 < randomDiceImage2) {
    h1.html("Player 2 wins!");
    } else {
    h1.html("Draw");
    }

    sound.play();
  });

  $(".animation").fadeIn();

});
