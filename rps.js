function computerPlayArray() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random() * choices.length);

  return choices[randomChoice];
}

function playRound(playerSelection) {
  // console.log(`You chose ${playerSelection}`);
  const computerSelection = computerPlayArray();
  // console.log(`Computer chose ${computerSelection}`);

  resetAllComputerWeaponStyles();
  setComputerChosenButtonStyle(
    document.getElementById('computer-' + computerSelection.toLowerCase())
  );

  let result;
  if (playerSelection === 'player-rock') {
    if (computerSelection === 'rock') {
      result = 'tie';
    } else if (computerSelection === 'paper') {
      result = 'lose';
      computerScore += 1;
    } else if (computerSelection === 'scissors') {
      result = 'win';
      playerScore += 1;
    }
  } else if (playerSelection === 'player-paper') {
    if (computerSelection === 'rock') {
      result = 'win';
      playerScore += 1;
    } else if (computerSelection === 'paper') {
      result = 'tie';
    } else if (computerSelection === 'scissors') {
      result = 'lose';
      computerScore += 1;
    }
  } else if (playerSelection === 'player-scissors') {
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
}

function removePlayerHeart() {
  heartToRemove = `player-heart-${5 - computerScore}`;
  console.log(heartToRemove);
  // console.log(document.getElementById(heartToRemove));
  heartElement = document.querySelector(`.${heartToRemove}`);
  console.log(heartElement);
  heartElement.style.opacity = '0.1';
}

function removeComputerHeart() {
  heartToRemove = `computer-heart-${5 - playerScore}`;
  console.log(heartToRemove);
  // console.log(document.getElementById(heartToRemove));
  heartElement = document.querySelector(`.${heartToRemove}`);
  console.log(heartElement);
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

  resetAllPlayerWeaponStyles();
  resetAllComputerWeaponStyles();
  resetAllHearts();

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
  playerScore = 0;
  computerScore = 0;
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
  // console.log(weapon);
  weapon.style.backgroundColor = 'rgb(9, 255, 0)';
  // weapon.textContent = '!';
}

function setComputerChosenButtonStyle(weapon) {
  weapon.style.backgroundColor = 'rgb(156, 51, 255)';
}

function setUpButtons() {
  playerWeapons.forEach((weapon) => {
    weapon.addEventListener('click', () => {
      resetAllPlayerWeaponStyles();
      setPlayerChosenButtonStyle(weapon);
      playRound(weapon.id);
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

function savePlayerButtonsStyles() {
  playerWeapons.forEach((weapon) => {
    playerWeaponStyles.push(createButtonStyleSave(weapon.id, weapon.style));
  });
}

function saveComputerButtonsStyles() {
  computerWeapons.forEach((weapon) => {
    computerWeaponStyles.push(createButtonStyleSave(weapon.id, weapon.style));
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
setUpButtons();
let playerWeaponStyles = [];
savePlayerButtonsStyles();

const computerWeapons = document.querySelectorAll('.computer-weapon');
let computerWeaponStyles = [];
saveComputerButtonsStyles();

const allHearts = document.querySelectorAll('.heart');
// console.log(playerWeapons);
// console.log(playerButtonStyles);

setupGame();
