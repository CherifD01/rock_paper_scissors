"use strict";

//const jsdom = require("jsdom");
//const {  JSDOM  } = jsdom;

//const ps = require("prompt-sync")
//const prompt = ps();

function getComputerChoice(){
  const compChoice =  Math.floor(Math.random() * 3) 
     if (compChoice === 0) {
            return "rock"
     }
        else if (compChoice === 1){
            return "paper"
        }
        else if (compChoice === 2){
            return "scissors"
        }
        else return "oops"     
}

function roundIntro(){
    console.log("What do you want to select?");
    
}
//Plays a round of rock paper scissors 

function playRound(choice){
    const computerChoice = getComputerChoice();
    console.log("You chose: " + choice);
    console.log("Computer Chose: " + computerChoice);

    if (choice === computerChoice) {
        console.log("It was a tie!");
        gameScore.textContent = humanScore + " - " + computerScore;
    } else if (choice === "rock" && computerChoice === "scissors"){  
        humanScore++;
        console.log("You win!");
        gameScore.textContent = humanScore + " - " + computerScore;
    } else if (choice === "paper" && computerChoice === "rock"){  
        humanScore++;
        console.log("You win!");
        gameScore.textContent = humanScore + " - " + computerScore;
    } else if (choice === "scissors" && computerChoice === "paper"){  
        humanScore++;
        console.log("You win!");
        gameScore.textContent = humanScore + " - " + computerScore;
    } else {
        computerScore++;
        console.log("You lose! ");
        gameScore.textContent = humanScore + " - " + computerScore;
        
    }
   if (humanScore === 5){
        humanScore = humanScore - humanScore;
        computerScore = computerScore - computerScore;
        gameResult.textContent = "You won the game!";
        rockSelection.disabled = true;
        paperSelection.disabled = true;
        scissorsSelection.disabled = true;
    }
    if (computerScore === 5){
        humanScore = humanScore - humanScore;
        computerScore = computerScore - computerScore;
        gameResult.textContent = "You lost the game!";
        rockSelection.disabled = true;
        paperSelection.disabled = true;
        scissorsSelection.disabled = true;
    }
    
}


//Where the connection to the html is
const startRound = document.querySelector("#startRound");
const rockSelection = document.querySelector("#Rock");
const paperSelection = document.querySelector("#Paper");
const scissorsSelection = document.querySelector("#Scissors"); 
const gameScore = document.querySelector("#score");
const gameResult = document.querySelector("#result")

let computerScore = 0;
let humanScore = 0;

gameScore.textContent = humanScore + " - " + computerScore;

//Starts the round
startRound.addEventListener("click", () => {
    humanScore = humanScore - humanScore;
    computerScore = computerScore - computerScore;
    gameScore.textContent = humanScore + " - " + computerScore;
    gameResult.textContent = " ";
    rockSelection.disabled = false;
    paperSelection.disabled = false;
    scissorsSelection.disabled = false;
});

//Where the selection for the user is
rockSelection.addEventListener("click", () => playRound("rock"));
paperSelection.addEventListener("click", () =>  playRound("paper"));
scissorsSelection.addEventListener("click", () => playRound("scissors"));
