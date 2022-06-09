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

  printScores();
}

function removePlayerHeart() {
  heartToRemove = `player-heart-${5 - computerScore}`;
  // console.log(heartToRemove);
  // console.log(document.getElementById(heartToRemove));
  heartElement = document.querySelector(`.${heartToRemove}`);
  // console.log(heartElement);
  heartElement.style.opacity = '0.1';
}

function removeComputerHeart() {
  heartToRemove = `computer-heart-${5 - playerScore}`;
  // console.log(heartToRemove);
  // console.log(document.getElementById(heartToRemove));
  heartElement = document.querySelector(`.${heartToRemove}`);
  // console.log(heartElement);
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

  // unSetUpButtons();

  // resetAllPlayerWeaponStyles();
  // resetAllComputerWeaponStyles();

  // setUpButtons();

  console.log(gameResultText);
  alert(gameResultText);
  setupGame();
  printScores();
  resetAllPlayerWeaponStyles();
  resetAllComputerWeaponStyles();
  resetAllHearts();

  // setTimeout(() => {
  //   resetAllPlayerWeaponStyles();
  //   resetAllComputerWeaponStyles();
  //   resetAllHearts();

  //   setUpButtons();
  //   setupGame();

  //   alert(gameResultText);
  // }, 1000);
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

function printScores() {
  console.log(`playerScore: ${playerScore}`);
  console.log(`computerScore: ${computerScore}`);
}

function setUpButtons() {
  playerWeapons.forEach((weapon) => {
    weapon.addEventListener('click', () => {
      resetAllPlayerWeaponStyles();
      resetAllComputerWeaponStyles();

      playRound(weapon);
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
