console.log("Rock Paper Scissors!");

/*

When the user inputs "rock", "paper", or "scissors"
Get the computer's choice of "rock", "paper", or "scissors"
Compare the user's choice against the computer's choice
Display whether the user won or lost the round
After 5 rounds, show the user's and computer's final score and the winner
*/

function computerPlayArray() {
  console.log("computerPlay");
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);

  return choices[randomChoice];
}

function computerPlay() {
  let numberOfChoices = 3;
  const randomChoice = Math.floor(Math.random() * numberOfChoices);

  if (randomChoice === 0) {
    return "rock";
  } else if (randomChoice === 1) {
    return "paper";
  } else if (randomChoice === 2) {
    return "scissors";
  }
}

console.log(computerPlay());
