/*
When the user inputs "rock", "paper", or "scissors"
Get the computer's choice of "rock", "paper", or "scissors"
Compare the user's choice against the computer's choice
Display whether the user won or lost the round
After 5 rounds, show the user's and computer's final score and the winner
*/

function computerPlayArray() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * choices.length);

  return choices[randomChoice];
}

function capitalize(str = '') {
  return str[0].toUpperCase() + str.toLowerCase().slice(1);
}

function playRound2(e) {
  console.log(e.id);
}

function playRound(playerSelection) {
  console.log(`You chose ${playerSelection}`);
  const computerSelection = computerPlayArray();
  console.log(`Computer chose ${computerSelection}`);

  let result;
  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      result = 'You tied this round';
    } else if (computerSelection === 'paper') {
      result = 'You lost this round';
    } else if (computerSelection === 'scissors') {
      result = 'You won this round';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      result = 'You won this round';
    } else if (computerSelection === 'paper') {
      result = 'You tied this round';
    } else if (computerSelection === 'scissors') {
      result = 'You lost this round';
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      result = 'You lost this round';
    } else if (computerSelection === 'paper') {
      result = 'You won this round';
    } else if (computerSelection === 'scissors') {
      result = 'You tied this round';
    }
  }

  results.textContent = result;
}

function isPlayerSelectionValid(playerSelection) {
  if (
    playerSelection === 'Rock' ||
    playerSelection === 'Paper' ||
    playerSelection === 'Scissors'
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
    let playerSelection = '';
    while (!isPlayerSelectionValid(playerSelection)) {
      playerSelection = prompt(
        'Welcome to Rock, Paper, Scissors\nWhat is your choice?',
        'Rock'
      );
      if (!playerSelection) {
        console.log('Game cancelled!');
        return;
      }

      playerSelection = capitalize(playerSelection);

      if (!isPlayerSelectionValid(playerSelection)) {
        console.log('Please choose between: Rock, Paper, Scissors');
      }
    }

    const computerSelection = computerPlayArray();
    let result = playRound(playerSelection, computerSelection);

    let resultString;
    if (result === 'Win') {
      resultString = `You ${result}! ${playerSelection} beats 
              ${computerSelection}`;
      playerWins += 1;
    } else if (result === 'Lose') {
      resultString = `You ${result}! ${computerSelection} beats 
              ${playerSelection}`;
      computerWins += 1;
    } else if (result === 'Tie') {
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
    console.log('You win!');
  } else if (computerWins > playerWins) {
    console.log('Computer wins!');
  } else if (playerWins === computerWins) {
    console.log("It's a tie!");
  }
}

function alertFunction(e) {
  console.log(e);
  alert('rock');
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => playRound(button.id));
});

const results = document.querySelector('#results');
