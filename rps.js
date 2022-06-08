function computerPlayArray() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * choices.length);

  return choices[randomChoice];
}

function playRound(playerSelection) {
  // console.log(`You chose ${playerSelection}`);
  const computerSelection = computerPlayArray();
  // console.log(`Computer chose ${computerSelection}`);

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

  // removeHeart();
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
  computerWeapons.forEach((weapon) => {
    computerWeaponStyles.forEach((playerWeaponStyle) => {
      if (playerWeaponStyle.id === weapon.id) {
        weapon.style = playerWeaponStyle.style;
      }
    });
  });
}

function setPlayerChosenButtonStyle(weapon) {
  console.log(weapon);
  weapon.style.backgroundColor = 'rgb(9, 255, 0)';
  // weapon.textContent = '!';
}

function setComputerChosenButtonStyle(weapon) {
  weapon.style.backgroundColor = 'rgb(156, 51, 255)';
}

function setUpButtons() {
  playerWeapons.forEach((weapon) => {
    weapon.addEventListener('click', () => {
      resetAllPlayerButtonStyles();
      setPlayerChosenButtonStyle(weapon);
      playRound(weapon.id);
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
  computerWeapons.forEach((button) => {
    computerWeaponStyles.push(createButtonStyleSave(button.id, button.style));
  });
}

let playerScore;
let computerScore;

const playerWeapons = document.querySelectorAll('.player-weapon');
setUpButtons();
let playerWeaponStyles = [];
savePlayerButtonsStyles();

const computerWeapons = document.querySelectorAll('.computer-weapon');
let computerWeaponStyles = [];
saveComputerButtonsStyles();

// console.log(playerWeapons);
// console.log(playerButtonStyles);

// setupGame();
