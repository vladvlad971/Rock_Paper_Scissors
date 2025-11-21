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
let humanInput = "";

function getHumanChoice(humanInput) {
    humanInput = prompt("choose between ROCK, PAPER or SCISSORS");
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
      return ++humanScore, `You win, ${humanChoice} takes over ${computerChoice}!
      ${humanScore} ; ${computerScore}`  ;
  } else if ((humanChoice === choiceString[1]) && (computerChoice === choiceString[0])){
      return ++humanScore,`You win, ${humanChoice} takes over ${computerChoice}!
      ${humanScore} ; ${computerScore}`  ;
  } else if ((humanChoice === choiceString[2]) && (computerChoice === choiceString[1])){
      return ++humanScore,`You win, ${humanChoice} takes over ${computerChoice}!
      ${humanScore} ; ${computerScore}`  ;
  } else if (humanChoice === computerChoice) {
    return `Equality, ${humanChoice} match ${computerChoice}! 
    ${humanScore} ; ${computerScore}`;
  } else {
    return ++computerScore,`You lose, ${humanChoice} lose the round versus ${computerChoice}! 
    ${humanScore} ; ${computerScore}`;
  }
}

  
function playGame(){
for (let i = 0; i < 4; i++){
   console.log((playRound(getHumanChoice(humanInput),getComputerChoice(choiceString))));
  }   
}
function theFinalResult(humanScore,computerScore){
  if (humanScore > computerScore) {
 return "You win the game with " + humanScore + " points!";
 } else if (humanScore === computerScore) {
 return "It's a tie!";
} else {
  return "You lose the game :(";
}
}
(playGame(humanScore,computerScore))
console.log(theFinalResult(humanScore,computerScore));

/*
1.You need new values for human and computer choice for each round right? Is that what your code is doing?
2.You need to update scores right? Is your code updating the scores? What's the correct way to update a variable?
2.Is your for loop to play the game 5 times correct? What's the correct way to increment a variable? (Same issues as number 2)
3.Finally, is the code actually playing the game? Are the functions being run?
*/
