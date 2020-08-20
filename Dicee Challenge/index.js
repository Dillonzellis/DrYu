var leftDiceImg = document.querySelector("#leftDice");
var rightDiceImg = document.querySelector("#rightDice");
var heading = document.querySelector("h1");

var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

if (randomNumber1 === 1) {
  leftDiceImg.src = "images/dice1.png";
} else if (randomNumber1 === 2) {
  leftDiceImg.src = "images/dice2.png";
} else if (randomNumber1 === 3) {
  leftDiceImg.src = "images/dice3.png";
} else if (randomNumber1 === 4) {
  leftDiceImg.src = "images/dice4.png";
} else if (randomNumber1 === 5) {
  leftDiceImg.src = "images/dice5.png";
} else if (randomNumber1 === 6) {
  leftDiceImg.src = "images/dice6.png";
}

if (randomNumber2 === 1) {
  rightDiceImg.src = "images/dice1.png";
} else if (randomNumber2 === 2) {
  rightDiceImg.src = "images/dice2.png";
} else if (randomNumber2 === 3) {
  rightDiceImg.src = "images/dice3.png";
} else if (randomNumber2 === 4) {
  rightDiceImg.src = "images/dice4.png";
} else if (randomNumber2 === 5) {
  rightDiceImg.src = "images/dice5.png";
} else if (randomNumber2 === 6) {
  rightDiceImg.src = "images/dice6.png";
}

if (randomNumber1 === randomNumber2) {
  heading.innerText = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  heading.innerText = "Player 1 Wins!";
} else {
  heading.innerText = "Player 2 Wins!";
}
