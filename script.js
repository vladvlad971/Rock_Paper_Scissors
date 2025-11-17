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

const choiceString = ["ROCK","PAPER","SCISSORS"] ;

//output computer choice.
function getComputerChoice(choiceString){
   let selectString = Math.floor(Math.random()*3);
   return choiceString[selectString];
}
console.log(getComputerChoice(choiceString))

let humanInput =prompt("choose between ROCK, PAPER or SCISSORS");
humanInput = humanInput.toUpperCase();

//output human choice.
function getHumanChoice(humanInput) {
   return humanInput;
}
console.log(getHumanChoice(humanInput))

//play a single round.
function playRound(computerChoice,humanChoice) {

   
  if ((computerChoice === choiceString[0]) && (humanChoice === choiceString[2])) {
      return true ;
  } else if ((computerChoice === choiceString[1]) && (humanChoice === choiceString[0])){
      return true;
  } else if ((computerChoice === choiceString[2]) && (humanChoice === choiceString[1])){
      return true;
  } 
}
let computerChoice = getComputerChoice(choiceString);
let humanChoice = getHumanChoice(humanInput)
console.log(playRound(computerChoice,humanChoice));

//récupérer les output humain et machine, les convertir en numérique, comparer les forces et faiblesse, retourner le gagnant