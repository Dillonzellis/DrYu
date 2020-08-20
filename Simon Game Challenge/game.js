var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

$(document).keydown(function () {
  
  
  nextSequence();
});

$(".btn").click(function (e) {
  var userChosenColor = e.target.id;
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length);
});

function nextSequence() {
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColor);
  level++;
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");

  setTimeout(function () {
    $("." + currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {


    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
      console.log('sucess')
    } else {
      console.log('fail')
    }
}
