const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result h1");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const myChoise = document.querySelector(".my_choise");
const computerChoise = document.querySelector(".computer_choise");
const resetButton = document.querySelector(".reset_Tour"); // Select reset button

const playerIcon = document.createElement("i");
const compIcon = document.createElement("i");

let cScore = 0;
let pScore = 0;

function playerSelection() {
  rock.addEventListener("click", (e) => {
    e.preventDefault(); // Stops page from jumping to top
    showPlayerChoice("rock");
    playRound("rock");
  });

  paper.addEventListener("click", (e) => {
    e.preventDefault();
    showPlayerChoice("paper");
    playRound("paper");
  });

  scissors.addEventListener("click", (e) => {
    e.preventDefault();
    showPlayerChoice("scissors");
    playRound("scissors");
  });

  // Add Reset Listener
  resetButton.addEventListener("click", resetGame);
}

function showPlayerChoice(choice) {
  playerIcon.className = "fa-regular";
  if (choice === "rock") playerIcon.classList.add("fa-hand-back-fist");
  if (choice === "paper") playerIcon.classList.add("fa-hand");
  if (choice === "scissors") playerIcon.classList.add("fa-hand-scissors");

  myChoise.innerHTML = "";
  myChoise.appendChild(playerIcon);
}

function showComputerChoice(choice) {
  compIcon.className = "fa-regular";
  if (choice === "rock") compIcon.classList.add("fa-hand-back-fist");
  if (choice === "paper") compIcon.classList.add("fa-hand");
  if (choice === "scissors") compIcon.classList.add("fa-hand-scissors");

  computerChoise.innerHTML = "";
  computerChoise.appendChild(compIcon);
}

function playRound(playerSelection) {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];

  showComputerChoice(randomChoice);

  if (playerSelection === randomChoice) {
    result.innerHTML = `It's a Tie 👻!`;
    result.style.color = "#f39c12"; // Orange for tie
    return;
  }

  const win =
    (playerSelection === "rock" && randomChoice === "scissors") ||
    (playerSelection === "paper" && randomChoice === "rock") ||
    (playerSelection === "scissors" && randomChoice === "paper");

  if (win) {
    result.innerHTML = `You Win 🎉!`;
    result.style.color = "#2ecc71"; // Green for win
    pScore++;
    playerScore.innerHTML = pScore;
  } else {
    result.innerHTML = `You Lose 😓!`;
    result.style.color = "#e74c3c"; // Red for loss
    cScore++;
    computerScore.innerHTML = cScore;
  }
}

function resetGame() {
  cScore = 0;
  pScore = 0;
  playerScore.innerHTML = 0;
  computerScore.innerHTML = 0;
  result.innerHTML = "";
  myChoise.innerHTML = "";
  computerChoise.innerHTML = "";
}

playerSelection();
