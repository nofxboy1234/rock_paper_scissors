function computerPlayArray() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * choices.length);

  return choices[randomChoice];
}

function playRound(playerSelection) {
  console.log(`You chose ${playerSelection}`);
  const computerSelection = computerPlayArray();
  console.log(`Computer chose ${computerSelection}`);

  resetAllComputerButtonStyles();
  setComputerChosenButtonStyle(
    document.getElementById('computer-' + computerSelection.toLowerCase())
  );

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

  resetAllPlayerButtonStyles();
  resetAllComputerButtonStyles();

  playerWeapons.forEach((element) => {
    element.disabled = true;
  });

  setTimeout(() => {
    alert(gameResultText);
    playerWeapons.forEach((element) => {
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

function resetAllPlayerButtonStyles() {
  playerWeapons.forEach((weapon) => {
    playerWeaponStyles.forEach((playerWeaponStyle) => {
      if (playerWeaponStyle.id === weapon.id) {
        weapon.style = playerWeaponStyle.style;
      }
    });
  });
}

function resetAllComputerButtonStyles() {
  computerButtons.forEach((playerButton) => {
    computerButtonStyles.forEach((playerButtonStyle) => {
      if (playerButtonStyle.id === playerButton.id) {
        playerButton.style = playerButtonStyle.style;
      }
    });
  });
}

function setPlayerChosenButtonStyle(weapon) {
  console.log(weapon);
  weapon.style.backgroundColor = 'gold';
  // weapon.textContent = '!';
}

function setComputerChosenButtonStyle(weapon) {
  weapon.style.backgroundColor = 'yellow';
}

function setUpButtons() {
  playerWeapons.forEach((weapon) => {
    weapon.addEventListener('click', () => {
      resetAllPlayerButtonStyles();
      setPlayerChosenButtonStyle(weapon);
      // playRound(weapon.id);
      // checkForWinner();
    });
  });
}

function createButtonStyleSave(id, style) {
  return {
    id,
    style,
  };
}

function savePlayerButtonsStyles() {
  playerWeapons.forEach((button) => {
    playerWeaponStyles.push(createButtonStyleSave(button.id, button.style));
  });
}

function saveComputerButtonsStyles() {
  computerButtons.forEach((button) => {
    computerButtonStyles.push(createButtonStyleSave(button.id, button.style));
  });
}

const roundResultsDiv = document.querySelector('#results');
const playerScoreDiv = document.querySelector('#player-score');
const computerScoreDiv = document.querySelector('#computer-score');

let playerScore;
let computerScore;

const playerWeapons = document.querySelectorAll('.player-weapon');
setUpButtons();
let playerWeaponStyles = [];
savePlayerButtonsStyles();

const computerButtons = document.querySelectorAll('.computerButton');
let computerButtonStyles = [];
saveComputerButtonsStyles();

// console.log(playerWeapons);
// console.log(playerButtonStyles);

// setupGame();
