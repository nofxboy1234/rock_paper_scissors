function computerPlayArray() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * choices.length);

  return choices[randomChoice];
}

function playRound(playerSelection) {
  console.log(`You chose ${playerSelection}`);
  const computerSelection = computerPlayArray();
  console.log(`Computer chose ${computerSelection}`);

  let result;
  if (playerSelection === 'player-rock') {
    if (computerSelection === 'rock') {
      result = 'You tied this round';
    } else if (computerSelection === 'paper') {
      result = 'You lost this round';
      computerScore += 1;
    } else if (computerSelection === 'scissors') {
      result = 'You won this round';
      playerScore += 1;
    }
  } else if (playerSelection === 'player-paper') {
    if (computerSelection === 'rock') {
      result = 'You won this round';
      playerScore += 1;
    } else if (computerSelection === 'paper') {
      result = 'You tied this round';
    } else if (computerSelection === 'scissors') {
      result = 'You lost this round';
      computerScore += 1;
    }
  } else if (playerSelection === 'player-scissors') {
    if (computerSelection === 'rock') {
      result = 'You lost this round';
      computerScore += 1;
    } else if (computerSelection === 'paper') {
      result = 'You won this round';
      playerScore += 1;
    } else if (computerSelection === 'scissors') {
      result = 'You tied this round';
    }
  }

  roundResultsDiv.textContent = result;
  playerScoreDiv.textContent = playerScore;
  computerScoreDiv.textContent = computerScore;
}

function checkForWinner() {
  if (playerScore === 5) {
    playerButtons.forEach((element) => {
      element.disabled = true;
    });

    setTimeout(() => {
      alert('You won the game!');
      playerButtons.forEach((element) => {
        element.disabled = false;
      });
      resetGame();
    }, 1000);
  }

  if (computerScore === 5) {
    playerButtons.forEach((element) => {
      element.disabled = true;
    });

    setTimeout(() => {
      alert('You lost the game!');
      playerButtons.forEach((element) => {
        element.disabled = false;
      });
      resetGame();
    }, 1000);
  }
}

function resetGame() {
  roundResultsDiv.textContent = 'Choose rock, paper, or scissors';
  playerScoreDiv.textContent = 0;
  computerScoreDiv.textContent = 0;

  playerScore = 0;
  computerScore = 0;
}

function SetUpButtons() {
  playerButtons.forEach((button) => {
    button.addEventListener('click', () => {
      playRound(button.id);
      checkForWinner();
    });
  });
}

const roundResultsDiv = document.querySelector('#results');
const playerScoreDiv = document.querySelector('#player-score');
const computerScoreDiv = document.querySelector('#computer-score');

let playerScore;
let computerScore;

const playerButtons = document.querySelectorAll('.playerButton');
SetUpButtons();

resetGame();
