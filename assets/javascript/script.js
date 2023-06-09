// Codes are from stackoverflow and amended

const $selectBtn = document.querySelectorAll("[data-selector]");
const $displayUserScore = document.querySelector("#user-score");
const $displayComputerScore = document.querySelector("#computer-score");
const $showScore = document.querySelector("h5");
const $theWinnerIs = document.querySelector('#result-winner');
const $refreshBtnContainer = document.querySelector('#refresh-button-container');
const $emojs = ["💎", "🧻", "✂️"];

// Score variables
const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;

// Choices
$selectBtn.forEach(function(button){
button.addEventListener("click", function() {
let computerOption = computerRandom(); // Store the random computer play on var
const userOption = button.dataset.selector; // userOption is equal to data-selector attribute

// Calls on functions, plays the game and shows final winner.
playGame(userOption, computerOption);
theWinner();
        
// Add function with results
function playGame(userOption, computerOption) {
if (userOption === "rock") {
if (computerOption === "scissors") {
userScore++;
$displayUserScore.innerHTML = userScore;
$showScore.innerHTML = "The machine chooses "+"<span class=\"emoj\">" + $emojs[2] + "</span>" + ", You Winn!";
 } else if (computerOption === "paper") {
computerScore++;
$displayComputerScore.innerHTML = computerScore;
$showScore.innerHTML = "The machine chooses "+"<span class=\"emoj\">" + $emojs[1] + "</span>" + ", You Lose!";
} else if (userOption === computerOption) {
$showScore.innerHTML = "Draw!";
}
}
 if (userOption === "paper") {
 if (computerOption === "rock") {
 userScore++;
 $displayUserScore.innerHTML = userScore;
 $showScore.innerHTML = "The machine chooses "+"<span class=\"emoj\">" + $emojs[0] + "</span>" + ", You Winn!";
 } else if (computerOption === "scissors") {
 computerScore++;
 $displayComputerScore.innerHTML = computerScore;
 $showScore.innerHTML = "The machine chooses "+"<span class=\"emoj\">" + $emojs[2] + "</span>" + ", You Lose!";
 } else if (userOption === computerOption) {
 $showScore.innerHTML = "Draw!";
 }
 }
 if (userOption === "scissors") {
 if (computerOption === "paper") {
 userScore++;
 $displayUserScore.innerHTML = userScore;
 $showScore.innerHTML = "The machine chooses "+"<span class=\"emoj\">" + $emojs[1] + "</span>" + ", You Winn!";
 } else if (computerOption === "rock") {
 computerScore++;
 $displayComputerScore.innerHTML = computerScore;
 $showScore.innerHTML = "The machine chooses "+"<span class=\"emoj\">" + $emojs[0] + "</span>" + ", You Lose!";
 } else if (userOption === computerOption) {
 $showScore.innerHTML = "Draw!";
 }
 }
}

// Add text function to proclaim a winner
function theWinner() {
if (userScore === 5) {
$theWinnerIs.innerHTML = "You!";
} else if (computerScore === 5) {
$theWinnerIs.innerHTML = "The machine!";
}
}

if (userScore === 5 || computerScore === 5) {
const $refreshBtn = document.createElement('button');
$refreshBtn.appendChild(document.createTextNode("Play again!"));
$refreshBtn.className = "refresh-btn";
$refreshBtnContainer.appendChild($refreshBtn);
            
for (var i = 0, len = $selectBtn.length; i<len; i++){
$selectBtn[i].disabled = true; }  //disable more selections
          
$refreshBtn.addEventListener('click', () => {
userScore = 0;
computerScore = 0;
$displayUserScore.innerHTML = userScore;
$displayComputerScore.innerHTML = computerScore;
$showScore.innerHTML = "";
$theWinnerIs.innerHTML = "";
$refreshBtnContainer.innerHTML= "";
for (var i = 0, len = $selectBtn.length; i<len; i++){
$selectBtn[i].disabled = false;}  //enable
});  
}
});
});

// Random computer choice
function computerRandom () {
const randomNumber = Math.floor(Math.random() * choices.length);
return choices[randomNumber];
}

        
        
        


