function playGame () {
    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore === computerScore) {
        console.log("The game is tied!");
    } else if (humanScore > computerScore) {
        console.log("You won the game!");
    } else {
        console.log("You lost the game!");
    }
}

function playRound (humanChoice, computerChoice) {
    let humanPick = humanChoice.toLowerCase();
    let computerPick = computerChoice.toLowerCase();

    // Condition to check for humanPick vs computerPick
    if (humanPick === computerPick) {
        console.log("TIE!");
    } else if ((humanPick === "paper") && (computerPick === "rock")) {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    } else if ((humanPick === "rock") && (computerPick === "paper")) {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    } else if ((humanPick === "rock") && (computerPick === "scissors")) {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    } else if ((humanPick === "scissors") && (computerPick === "rock")) {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if ((humanPick === "scissors") && (computerPick === "paper")) {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    } else if ((humanPick === "paper") && (computerPick === "scissors")) {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
}

function getComputerChoice () {
    // Generates number that will correlate to the choice
    let choice = Math.floor(Math.random() * 3);

    // Condition to check whether to chose Rock Paper or Scissors 
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else if (choice === 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Please type rock, paper, or scissors.");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

playGame();

console.log(humanScore + " - " + computerScore);