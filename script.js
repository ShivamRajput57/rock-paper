const Computer_move = document.querySelector(".move");
const user_score = document.querySelector(".user_score");
const computer_score = document.querySelector(".computer_score");
const winner = document.querySelector(".winner");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

//function geHumanChoice() {
//     let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
//     while (!['rock', 'paper', 'scissors'].includes(choice)) {
//         choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
//     }
//     return choice;

// }
let score_user = 0;
let score_computer = 0;
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    score_user += 1;
    user_score.innerText = "user score : " + score_user.toString();

    return "You win!";
  } else {
    score_computer += 1;
    computer_score.innerText = "computer score : " + score_computer.toString();

    return "You lose!";
  }
}

const board = document.querySelector(".board");
board.addEventListener("click", (event) => {
  if (event.target === board) return;
  const humanChoice = event.target.className;
  const computerChoice = getComputerChoice();
  console.log(humanChoice);
  console.log(computerChoice);
  Computer_move.innerText = computerChoice;
  const RoundWinner = playRound(humanChoice, computerChoice);
  console.log(RoundWinner);

  if (score_user >= 5 && score_computer < 5) {
    winner.innerText = "You Win!";
  }
  if (score_user < 5 && score_computer >= 5) {
    winner.innerText = "You Loose !";
  }
  winner.style.color = "red";
  winner.style.fontSize = "40px";
  winner.style.fontWeight = "bold";
  winner.style.textAlign = "center";
  winner.style.marginTop = "20px";
  winner.style.textDecoration = "underline";
  winner.style.textTransform = "uppercase";
});
