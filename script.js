/*
- Write the logic to get the computer choice.
CREATE function getComputerChoice;
DISPLAY rock, paper or scissors randomly;
TEST whit console.log;
- Write the logic to get the human choice.  
CREATE function getHumanChoice
GET the input of the human player (prompt);
RETURN the input whit console.log;
- Write the logic to play a single round.
CREATE function playRound
SET humanChoice and computerChoice variable while be used to parameter;
SET the output of variables to case-insensitive such .toUpperCase;
WRITE the code that check the win condition (if/else);
DISPLAY the string value representing the round winner;
- Write the logic to play the entire game.
CREATE function playGame;
MOVE playRound function in playGame func;
CALL the function 5 times; alert
*/

let choiceString = ["ROCK","PAPER","SCISSORS"] ;

//output computer choice.
function getComputerChoice(choiceString){
   let selectString = Math.floor(Math.random()*3);
   return choiceString[selectString] ;
}

//output human choice.
let humanInput = prompt("choose between ROCK, PAPER or SCISSORS");


function getHumanChoice(humanInput) {
    humanInput = humanInput.toUpperCase();
    return humanInput ;
}

//Score variable
let humanScore = 0;
let computerScore = 0;
//play a single round.
let humanChoice = getHumanChoice(humanInput);
let computerChoice = getComputerChoice(choiceString);

function playRound(humanChoice,computerChoice) {
    if ((humanChoice === choiceString[0]) && (computerChoice === choiceString[2])) {
      return `You win, ${humanChoice} takes over ${computerChoice}!`;
  } else if ((humanChoice === choiceString[1]) && (computerChoice === choiceString[0])){
      return `You win, ${humanChoice} takes over ${computerChoice}!`
  } else if ((humanChoice === choiceString[2]) && (computerChoice === choiceString[1])){
      return `You win, ${humanChoice} takes over ${computerChoice}!`
  } else if (humanChoice === computerChoice) {
    return `Equality, ${humanChoice} match ${computerChoice}!`
  } else {
    return `You lose, ${humanChoice} lose the round versus ${computerChoice}!`  
  }
}


console.log(playRound(humanChoice,computerChoice))