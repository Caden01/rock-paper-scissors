let winner = '';
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const rock_paper_scissors = ["Rock", "Paper", "Scissors"];
    let result = rock_paper_scissors[Math.floor(Math.random() * rock_paper_scissors.length)]
    return result;

}

function capitalizeLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    console.log(`You picked: ${playerSelection}`);
    console.log(`Computer picked: ${computerSelection}`);

    if (playerSelection === computerSelection) {
        return console.log("Draw!");
    }
    else if (
        (playerSelection === "rock"  && computerSelection === "scissors") ||
        (playerSelection === "paper"  && computerSelection === "rock") ||
        (playerSelection === "scissors"  && computerSelection === "paper")
    ) {
        playerScore++;
        winner = "player";
        return console.log(`You won this round! ${capitalizeLetter(playerSelection)} beats ${capitalizeLetter(computerSelection)}`);
        
    }
    else if (
        (computerSelection === "rock"  && playerSelection === "scissors") ||
        (computerSelection === "paper"  && playerSelection === "rock") ||
        (computerSelection === "scissors"  && playerSelection === "paper")
    ) {
        computerScore++;
        winner = "computer";
        return console.log(`You lost this round! ${capitalizeLetter(computerSelection)} beats ${capitalizeLetter(playerSelection)}`);
    }
    else {
        return console.log("Error, you must enter rock, paper or scissors");
    }   
}

function game() {
    for(let i = 0; i < Infinity; i++) {
        const playerSelection = prompt("Enter rock, paper or scissors");
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(`You: ${playerScore} Computer: ${computerScore}`);
        
        if (playerScore == 5 || computerScore == 5) {
            break; 
        }
    }
    if (playerScore == 5) {     
            return "You won the whole game!" 
    }
    else  if (computerScore == 5) {
            return "You lost the whole game!"
    }
}


/*const playerSelection = prompt("Enter rock, paper or scissors");
const computerSelection = getComputerChoice();*/


/*console.log(playRound(playerSelection, computerSelection));*/
console.log(game());
