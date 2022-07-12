
// alert("Hi, lets play!!");

var randomNumber1 = Math.floor(Math.random() * 3 + 1);
var randomNumber2 = Math.floor(Math.random() * 3 + 1);


document.querySelector(".sign1").setAttribute("src", "images/sign" + randomNumber1 + ".png");
document.querySelector(".sign2").setAttribute("src", "images/sign" + randomNumber2 + ".png");

// document.querySelector("h1").innerHTML = "Player 1 Wins!!";
// document.querySelector("h1").innerHTML = "Player 2 Wins!!";

if (randomNumber1 == 3 && randomNumber2 == 1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!!";
}

else if (randomNumber2 == 3 && randomNumber1 == 1) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!!";
}

else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!!";
}

else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!!";
}

else {
  document.querySelector("h1").innerHTML = "Draw!!";
}
