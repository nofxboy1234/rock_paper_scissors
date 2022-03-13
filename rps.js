/*
When the user inputs "rock", "paper", or "scissors"
Get the computer's choice of "rock", "paper", or "scissors"
Compare the user's choice against the computer's choice
Display whether the user won or lost the round
After 5 rounds, show the user's and computer's final score and the winner
*/

function computerPlayArray() {
  console.log("computerPlay");
  const choices = ["Rock", "Paper", "Scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);

  return choices[randomChoice];
}

function computerPlay() {
  let numberOfChoices = 3;
  const randomChoice = Math.floor(Math.random() * numberOfChoices);

  if (randomChoice === 0) {
    return "Rock";
  } else if (randomChoice === 1) {
    return "Paper";
  } else if (randomChoice === 2) {
    return "Scissors";
  }
}

function capitalize(str = "") {
  return str[0].toUpperCase() + str.toLowerCase().slice(1);
}

function playRound(playerSelection, computerSelection) {
  let result;
  if (playerSelection === "Rock") {
    if (computerSelection === "Rock") {
      result = "Tie";
    } else if (computerSelection === "Paper") {
      result = "Lose";
    } else if (computerSelection === "Scissors") {
      result = "Win";
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      result = "Win";
    } else if (computerSelection === "Paper") {
      result = "Tie";
    } else if (computerSelection === "Scissors") {
      result = "Lose";
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      result = "Lose";
    } else if (computerSelection === "Paper") {
      result = "Win";
    } else if (computerSelection === "Scissors") {
      result = "Tie";
    }
  }

  return result;
}

function isPlayerSelectionValid(playerSelection) {
  if (
    playerSelection === "Rock" ||
    playerSelection === "Paper" ||
    playerSelection === "Scissors"
  ) {
    return true;
  } else {
    return false;
  }
}

function game() {
  let rounds = 5;
  let playerWins = 0;
  let computerWins = 0;
  let ties = 0;

  for (let i = 0; i < rounds; i++) {
    let playerSelection = "";
    while (!isPlayerSelectionValid(playerSelection)) {
      playerSelection = prompt(
        "Welcome to Rock, Paper, Scissors\nWhat is your choice?",
        "Rock"
      );
      if (!playerSelection) {
        console.log("Game cancelled!");
        return;
      }

      playerSelection = capitalize(playerSelection);

      if (!isPlayerSelectionValid(playerSelection)) {
        console.log("Please choose between: Rock, Paper, Scissors");
      }
    }

    const computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);

    let resultString;
    if (result === "Win") {
      resultString = `You ${result}! ${playerSelection} beats 
              ${computerSelection}`;
      playerWins += 1;
    } else if (result === "Lose") {
      resultString = `You ${result}! ${computerSelection} beats 
              ${playerSelection}`;
      computerWins += 1;
    } else if (result === "Tie") {
      resultString = `You ${result}! ${playerSelection} ties with 
              ${computerSelection}`;
      ties += 1;
    }
    console.log(
      `You chose ${playerSelection}, Computer chose ${computerSelection}`
    );
    console.log(resultString);
    console.log(
      `Player wins - ${playerWins}, Computer wins - ${computerWins}, 
              Ties - ${ties}`
    );
    console.log(`${rounds - (i + 1)} rounds left`);
  }

  if (playerWins > computerWins) {
    console.log("You win!");
  } else if (computerWins > playerWins) {
    console.log("Computer wins!");
  } else if (playerWins === computerWins) {
    console.log("It's a tie!");
  }
}

game();
