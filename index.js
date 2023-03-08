function getComputerChoice() {
    let rock_paper_scissors = [];
    rock_paper_scissors [0] = "Rock";
    rock_paper_scissors [1] = "Paper";
    rock_paper_scissors [2] = "Scissors";
    let result = rock_paper_scissors[Math.floor(Math.random() * rock_paper_scissors.length)]
    return result;

}

function rockPaperScissors(computerSelection, playerSelection) {
    
}


const playerSelection = prompt("Enter rock, paper or scissors");
const computerSelection = getComputerChoice();

console.log(getComputerChoice());
console.log(rockPaperScissors());
