function getComputerChoice() {
    const rock_paper_scissors = ["Rock", "Paper", "Scissors"];
    let result = rock_paper_scissors[Math.floor(Math.random() * rock_paper_scissors.length)]
    return result;

}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();

    if (playerSelection === computerSelection) {
        return "Draw!";
    }
    else if (
        (playerSelection === "rock"  && computerSelection === "scissors") ||
        (playerSelection === "paper"  && computerSelection === "rock") ||
        (playerSelection === "scissors"  && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (
        (computerSelection === "rock"  && playerSelection === "scissors") ||
        (computerSelection === "paper"  && playerSelection === "rock") ||
        (computerSelection === "scissors"  && playerSelection === "paper")
    ) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else {
        return "Error, you must enter rock, paper or scissors"
    }
        
        
    
    
}


const playerSelection = prompt("Enter rock, paper or scissors");
console.log(playerSelection);

const computerSelection = getComputerChoice();

console.log(getComputerChoice());
console.log(playRound(playerSelection, computerSelection));
