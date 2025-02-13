// my DOM calls variables //
var againButton = document.querySelector(".again")
var checkButton = document.querySelector(".check")
var checkUserNumberValue = document.querySelector(".guess").value
var paragraphOfComparison = document.querySelector(".message")
var bodyTagOnDOM = document.body
var scoreChange = document.querySelector(".score")
var highScore = document.querySelector(".highscore")

// My starting variables //
var setNumberToGuess = Math.floor((Math.random() * 20) + 1) 
var score = 20
var highScoreSet = 0

// My Event listeners //

// Again button on click event reset the score
againButton.addEventListener('click', resetAll) 
function resetAll() {
    score = 20
    document.querySelector(".score").innerHTML = "20";
    setNumberToGuess = Math.floor((Math.random() * 20) + 1) 
    checkUserNumberValue = "";
    paragraphOfComparison.innerHTML = "Start guessing ..."
    bodyTagOnDOM.style.backgroundColor = "black"
    
}
// Check button check the number to guess
checkButton.addEventListener("click", checkTheScore)

function checkTheScore () {
    console.log(setNumberToGuess);
    console.log(document.querySelector(".guess").value)
    actualScore = scoreChange.innerHTML = --score
    if (setNumberToGuess  ==  document.querySelector(".guess").value) {
        bodyTagOnDOM.style.backgroundColor = "green"
        paragraphOfComparison.innerHTML = "👏👏👏 Bravooo, You Win !!!"
         if ( actualScore > highScoreSet ) {
                 highScore.innerHTML = actualScore
             }
                 highScoreSet = actualScore
    } else {
        if (setNumberToGuess < document.querySelector(".guess").value) {
            paragraphOfComparison.innerHTML = "Too high"
        } else  {
            paragraphOfComparison.innerHTML = "Too low"
        }
    }
}