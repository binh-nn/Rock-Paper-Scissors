function getComputerChoice () {
    // Generates number that will correlate to the choice
    let choice = Math.floor(Math.random() * 3);
    
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else if (choice === 2) {
        return "scissors";
    }
}

console.log(getComputerChoice());