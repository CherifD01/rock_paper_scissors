"use strict";

const jsdom = require("jsdom");
const {  JSDOM  } = jsdom;

const ps = require("prompt-sync")
const prompt = ps();

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

function getHumanChoice(){
let choice =  prompt("Please choose rock, paper, or scissors: ").toLowerCase();
    if (choice === "rock"){
        return "rock"
    } else if (choice === "paper"){
        return "paper"
    } else if (choice ==="scissors"){
        return "scissors"
    } else return "oops"


}

function playRound(computerChoice, humanChoice){
    //humanChoice.toLowerCase();
   if (computerChoice === humanChoice){
          console.log("It was a tie!")
    } else if (computerChoice === "rock" && humanChoice === "paper"){
          console.log("You win! Paper beats Rock");
          humanScore ++;
      } else if (computerChoice === "rock" && humanChoice === "scissors"){
          console.log("You lose! Rock beats Scissors");
          computerScore ++;
      } else if (computerChoice === "paper" && humanChoice === "rock"){
          console.log("You lose! Paper beats Rock");
          computerScore ++;
      } else if (computerChoice === "paper" && humanChoice === "scissors"){
          console.log("You win! Scissors beats Paper");
          humanScore ++;
      } else if (computerChoice === "scissors" && humanChoice === "paper"){
          console.log("You lose! Scisssors beats Paper");
          computerScore ++;
      } else if (computerChoice === "scissors" && humanChoice === "rock"){
          console.log("You win! Rock beats Scissors");
          humanScore ++;
      }
}

const startRound = document.querySelector("#startRound");

startRound.addEventListener("click", function() {
    playRound(getComputerChoice,getHumanChoice);
});


/*
function playGame(){
   
 for(let i = 0; i < 5; i++){

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
       playRound(computerSelection,humanSelection);    
     }    
     if (humanScore > computerScore){
        console.log("You won the game: " + humanScore + " - " + computerScore)
    } else if (computerScore > humanScore){
        console.log("You lost the game: " + computerScore + " - " + humanScore)
    } else if (computerScore === humanScore) {
        console.log("It was a tie: " + humanScore + " - " + computerScore)
    }
}

*/
let computerScore = 0;
let humanScore = 0;



//playGame();
