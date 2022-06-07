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
  if (playerScore !== 5 && computerScore !== 5) {
    return;
  }

  let gameResultText;
  if (playerScore === 5) {
    gameResultText = 'You won the game!';
  }
  if (computerScore === 5) {
    gameResultText = 'You lost the game!';
  }

  resetAllButtonStyles();

  playerButtons.forEach((element) => {
    element.disabled = true;
  });

  setTimeout(() => {
    alert(gameResultText);
    playerButtons.forEach((element) => {
      element.disabled = false;
    });
    setupGame();
  }, 1000);
}

function setupGame() {
  roundResultsDiv.textContent = 'Choose rock, paper, or scissors';
  playerScoreDiv.textContent = 0;
  computerScoreDiv.textContent = 0;

  playerScore = 0;
  computerScore = 0;
}

function resetAllButtonStyles() {
  console.log('resetAllButtonStyles');
  playerButtons.forEach((playerButton) => {
    playerButtonStyles.forEach((playerButtonStyle) => {
      if (playerButtonStyle.id === playerButton.id) {
        // console.log(`Found ${button.id}`);
        // console.log(`element.style: ${element.style}`);
        playerButton.style = playerButtonStyle.style;
      }
    });
  });
}

function setChosenButtonStyle(button) {
  button.style.backgroundColor = 'yellow';
}

function setUpButtons() {
  playerButtons.forEach((button) => {
    button.addEventListener('click', () => {
      resetAllButtonStyles();
      setChosenButtonStyle(button);
      playRound(button.id);
      checkForWinner();
    });
  });
}

function createButtonStyleSave(id, style) {
  return {
    id,
    style,
  };
}

function saveButtonsStyles() {
  console.log('saveButtonsStyles');
  playerButtons.forEach((button) => {
    playerButtonStyles.push(createButtonStyleSave(button.id, button.style));
  });
}

const roundResultsDiv = document.querySelector('#results');
const playerScoreDiv = document.querySelector('#player-score');
const computerScoreDiv = document.querySelector('#computer-score');

let playerScore;
let computerScore;

const playerButtons = document.querySelectorAll('.playerButton');
setUpButtons();

let playerButtonStyles = [];
saveButtonsStyles();

console.log(playerButtons);
// console.log(playerButtonStyles);

setupGame();
