function computerPlayArray() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * choices.length);

  return choices[randomChoice];
}

function playRound(playerSelection) {
  setPlayerChosenButtonStyle(playerSelection);
  const computerSelection = computerPlayArray();
  setComputerChosenButtonStyle(
    document.getElementById('computer-' + computerSelection.toLowerCase())
  );

  let result;
  if (playerSelection.id === 'player-rock') {
    if (computerSelection === 'rock') {
      result = 'tie';
    } else if (computerSelection === 'paper') {
      result = 'lose';
      computerScore += 1;
    } else if (computerSelection === 'scissors') {
      result = 'win';
      playerScore += 1;
    }
  } else if (playerSelection.id === 'player-paper') {
    if (computerSelection === 'rock') {
      result = 'win';
      playerScore += 1;
    } else if (computerSelection === 'paper') {
      result = 'tie';
    } else if (computerSelection === 'scissors') {
      result = 'lose';
      computerScore += 1;
    }
  } else if (playerSelection.id === 'player-scissors') {
    if (computerSelection === 'rock') {
      result = 'lose';
      computerScore += 1;
    } else if (computerSelection === 'paper') {
      result = 'win';
      playerScore += 1;
    } else if (computerSelection === 'scissors') {
      result = 'tie';
    }
  }

  if (result === 'win') {
    removeComputerHeart();
  }
  if (result === 'lose') {
    removePlayerHeart();
  }

  if (result === 'tie') {
    messages.style.backgroundColor = 'orange';
    messages.style.color = 'black';
    messages.textContent = `You ${result}d the round!`;
  } else {
    if (result === 'win') {
      messages.style.backgroundColor = 'rgb(9, 255, 0)';
      messages.style.color = 'black';
    }
    if (result === 'lose') {
      messages.style.backgroundColor = 'red';
      messages.style.color = 'white';
    }
    messages.textContent = `You ${result} the round!`;
  }

  printScores();
}

function removePlayerHeart() {
  heartToRemove = `player-heart-${5 - computerScore}`;
  heartElement = document.querySelector(`.${heartToRemove}`);
  heartElement.style.opacity = '0.1';
}

function removeComputerHeart() {
  heartToRemove = `computer-heart-${5 - playerScore}`;
  heartElement = document.querySelector(`.${heartToRemove}`);
  heartElement.style.opacity = '0.1';
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

  messages.textContent = gameResultText;
  messages.style.backgroundColor = 'cyan';
  messages.style.color = 'black';

  unSetUpButtons();

  setTimeout(() => {
    setUpButtons();
    setupGame();
    printScores();

    resetAllPlayerWeaponStyles();
    resetAllComputerWeaponStyles();
    resetAllHearts();
    resetMessage();
  }, 5000);
}

function setupGame() {
  playerScore = 0;
  computerScore = 0;
}

function resetMessage() {
  messagesStyles.forEach((messageStyle) => {
    if (messageStyle.id === messages.id) {
      messages.style = messageStyle.style;
    }
  });
  messages.textContent = 'Select Rock, Paper, or Scissors below';
}

function resetAllPlayerWeaponStyles() {
  playerWeapons.forEach((weapon) => {
    playerWeaponStyles.forEach((playerWeaponStyle) => {
      if (playerWeaponStyle.id === weapon.id) {
        weapon.style = playerWeaponStyle.style;
      }
    });
  });
}

function resetAllComputerWeaponStyles() {
  computerWeapons.forEach((weapon) => {
    computerWeaponStyles.forEach((playerWeaponStyle) => {
      if (playerWeaponStyle.id === weapon.id) {
        weapon.style = playerWeaponStyle.style;
      }
    });
  });
}

function setPlayerChosenButtonStyle(weapon) {
  weapon.style.backgroundColor = 'rgb(9, 255, 0)';
}

function setComputerChosenButtonStyle(weapon) {
  weapon.style.backgroundColor = 'rgb(156, 51, 255)';
}

function printScores() {
  console.log(`playerScore: ${playerScore}`);
  console.log(`computerScore: ${computerScore}`);
}

function setButtonFunctions(e) {
  resetAllPlayerWeaponStyles();
  resetAllComputerWeaponStyles();

  playRound(e.target);
  checkForWinner();
}

function setUpButtons() {
  console.log('setUpButtons');
  playerWeapons.forEach((weapon) => {
    weapon.addEventListener('click', setButtonFunctions);
  });
}

function unSetUpButtons() {
  console.log('unSetUpButtons');
  playerWeapons.forEach((weapon) => {
    weapon.removeEventListener('click', setButtonFunctions);
  });
}

function createStyleSave(id, style) {
  return {
    id,
    style,
  };
}

function savePlayerButtonsStyles() {
  playerWeapons.forEach((weapon) => {
    playerWeaponStyles.push(createStyleSave(weapon.id, weapon.style));
  });
}

function saveMessagesStyle() {
  messagesStyles.push(createStyleSave(messages.id, messages.style));
}

function saveComputerButtonsStyles() {
  computerWeapons.forEach((weapon) => {
    computerWeaponStyles.push(createStyleSave(weapon.id, weapon.style));
  });
}

function resetAllHearts() {
  allHearts.forEach((heart) => {
    heart.style.opacity = '1.0';
  });
}

let playerScore;
let computerScore;

const playerWeapons = document.querySelectorAll('.player-weapon');
let contextPlayerWeapon;
setUpButtons();
let playerWeaponStyles = [];
savePlayerButtonsStyles();

const computerWeapons = document.querySelectorAll('.computer-weapon');
let computerWeaponStyles = [];
saveComputerButtonsStyles();

const messages = document.querySelector('.messages');
let messagesStyles = [];
saveMessagesStyle();

const allHearts = document.querySelectorAll('.heart');

setupGame();
