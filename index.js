const buttonElements = document.querySelectorAll("button");
const resultStatement = document.getElementById("result");
const playerScoreResult = document.getElementById("user-score");
const computerScoreResult = document.getElementById("computer-score");
const resetButton = document.getElementById("reset");

playerScore = 0;
computerScore = 0;

resetButton.addEventListener("click", () => {
  computerScoreResult.innerText = 0;
  playerScoreResult.innerText = 0;
});

buttonElements.forEach((button) => {
  button.addEventListener("click", () => {
    const computerMove = computerPlay();
    console.log(computerMove);
    determineOutcome(button.id, computerMove);
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function determineOutcome(playerMove, compMove) {
  if (playerMove === compMove) {
    resultStatement.innerText = "Draw!";
  } else {
    if (playerMove == "rock") {
      if (compMove == "paper") {
        resultStatement.innerText = "You Lose!";
        computerScore++;
        computerScoreResult.textContent = computerScore;
      }
      if (compMove == "scissors") {
        resultStatement.innerText = "You Win!";
        playerScore++;
        playerScoreResult.textContent = playerScore;
      }
    }
    if (playerMove == "paper") {
      if (compMove == "rock") {
        resultStatement.innerText = "You Win!";
        playerScore++;
        playerScoreResult.textContent = playerScore;
      }
      if (compMove == "scissors") {
        resultStatement.innerText = "You Lose!";
        computerScore++;
        computerScoreResult.textContent = computerScore;
      }
    }
    if (playerMove == "scissors") {
      if (compMove == "paper") {
        resultStatement.innerText = "You Win!";
        playerScore++;
        playerScoreResult.textContent = playerScore;
      }
      if (compMove == "rock") {
        resultStatement.innerText = "You Lose!";
        computerScore++;
        computerScoreResult.textContent = computerScore;
      }
    }
  }
}
