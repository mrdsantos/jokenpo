const computerSelection = computerPlay();
const playerSelection =  playerPlay();

function computerPlay() {
    let a = (Math.floor(Math.random() * 3) + 1)
    if (a == 1) {
        return "rock"
    }
    else if (a == 2) {
        return "paper"
    }
    else {
        return "scissor"
    }
}

function playerPlay() {
    let a = prompt("Choose your weapon: Paper, Scissor or Rock?", "");
    let b = a.toLowerCase();
    if (b === "rock" || b === "scissor" || b === "paper") {
        return b
    }
    else {
        alert("You must choose between the rock, paper or scissor.")
    }
    
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection == "scissor" && playerSelection == "rock") {
        return "You win! Rock breaks Scissor."
    }
    else if (computerSelection == "rock" && playerSelection == "paper") {
        return "You win! Paper covers rock."
    }
    else if (computerSelection == "paper" && playerSelection == "scissor") {
        return "You win! Scissor cuts paper."
    }
    else if (computerSelection == "Scissor" && playerSelection == "paper") {
        return "You lose! Scissor cuts paper."
    }
    else if (computerSelection == "rock" && playerSelection == "Scissor") {
        return "You lose! Rock breaks scissor."
    }
    else if (computerSelection == "paper" && playerSelection == "rock") {
        return "You lose! Paper covers rock."
    }
    else if (computerSelection == "scissor" && playerSelection == "scissor") {
        return "It's a draw! Both players chosen scissor."
    }
    else if (computerSelection == "rock" && playerSelection == "rock") {
        return "It's a draw! Both players chosen rock."
    }
    else if (computerSelection == "paper" && playerSelection == "paper") {
        return "It's a draw! Broth players chosen paper."
    }
    else {
        return "Something went wrong."
    }
}

console.log(playRound(computerSelection, playerSelection));