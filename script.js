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

console.log(getComputerChoice());
console.log(getHumanChoice());