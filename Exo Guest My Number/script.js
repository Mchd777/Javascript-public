// my DOM calls variables //
var againButton = document.querySelector(".again");
var checkButton = document.querySelector(".check");
var checkUserNumberValue = document.querySelector(".guess").value;
var inputOfScore = document.querySelector(".guess")
var paragraphOfComparison = document.querySelector(".message");
var bodyTagOnDOM = document.body;
var scoreChange = document.querySelector(".score");
var highScore = document.querySelector(".highscore");
var numberAfterGuess = document.querySelector(".number")

// My starting variables //
var setNumberToGuess = Math.floor(Math.random() * 20 + 1);
var score = 20;
var highScoreSet = 0;

// My audios variables
var audioInput = new Audio('audios/sound-input.wav')
var audioWin = new Audio('audios/crowd-applause.wav')
var audioCheckWrong = new Audio('audios/wrong-answer-buzzer.wav')
var audioLooseSound = new Audio('audios/loose-sound.wav')
var audioLooserVoice = new Audio('audios/looser.wav')
// My Event listeners //

// Again button on click event reset the score
againButton.addEventListener("click", resetAll);

function resetAll() {
  score = 20;
  document.querySelector(".score").innerHTML = "20";
  setNumberToGuess = Math.floor(Math.random() * 20 + 1);
  paragraphOfComparison.innerHTML = "Start guessing ...";
  bodyTagOnDOM.style.backgroundColor = "black";
  numberAfterGuess.innerHTML = "?"
  inputOfScore.value = ""
}

inputOfScore.addEventListener("change", playSoundInputChange)
function playSoundInputChange() {
   
    audioInput.play()
}

// Check button check the number to guess
checkButton.addEventListener("click", checkTheScore);

function checkTheScore() {
  console.log(setNumberToGuess);
  console.log(document.querySelector(".guess").value);
  actualScore = scoreChange.innerHTML = --score;
  score = actualScore;

  if (score < 1) {
    bodyTagOnDOM.style.backgroundColor = "red";
    paragraphOfComparison.innerHTML =
      "Uh, you loose the game 😥. Please click on Again to restart!";
      audioLooseSound.play()
      audioLooseSound.onended = function() {
        audioLooserVoice.play();
    }
      return;
  } if (setNumberToGuess == document.querySelector(".guess").value) {
    numberAfterGuess.innerHTML = setNumberToGuess
    bodyTagOnDOM.style.backgroundColor = "green";
    paragraphOfComparison.innerHTML = "👏👏👏 Bravooo, You Win !!!";
    audioWin.play()
    if (actualScore > highScoreSet) {
      highScore.innerHTML = actualScore;
    }
    highScoreSet = actualScore;
  } else {
    if (setNumberToGuess < document.querySelector(".guess").value) {
      paragraphOfComparison.innerHTML = "Too high";
      audioCheckWrong.play()
    } else {
      paragraphOfComparison.innerHTML = "Too low";
      audioCheckWrong.play()
    }
  }
}
