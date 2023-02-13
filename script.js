function game() {

    let p = 0;
    let c = 0;
    let win;

    function getComputerChoice() {
        let choice = Math.floor(Math.random() * 3);
        console.log(choice);
        if (choice === 0) {
            return "rock";
        } else if (choice === 1) {
            return "paper";
        } else {
            return "scissors";
        }
    }
    
    function getPlayerChoice() {
        return prompt("Rock, paper, or scissors? You decide.").toLowerCase();
    }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === "rock" && computerSelection === "paper") {
            alert(`You lost this round! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.toLowerCase()}.`);
            win = false;
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            win = true;
            alert(`You won this round! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.toLowerCase()}.`);
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            win = true;
            alert(`You won this round! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.toLowerCase()}.`);
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            win = false;
            alert(`You lost this round! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.toLowerCase()}.`);
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            win = false;
            alert(`You lost this round! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.toLowerCase()}.`);
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            win = true;
            alert(`You won this round! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.toLowerCase()}.`);
        } else if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")) {
            alert(`They say great minds (or CPUs) think alike, you chose ${playerSelection} and so did the computer. Go again!`);
            win = null;
        } else {
            alert('Your input doesn\'t compute. Enter your selection again.');
            win = null;
        }
    }

    alert("Let\'s play a game of rock paper scissors! Best out of five rounds & whoever wins more is the champion!");
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        if (win === false) {
            c++;
            alert(`The score after Round ${i + 1} is You with ${p} & the computer with ${c}.`);
        } else if (win === true) {
            p++;
            alert(`The score after Round ${i + 1} is You with ${p} & the computer with ${c}.`);
        } else {
            i--;
        }
    }

    if (p < c) {
        alert(`You lost this time! The score was You: ${p} to Computer: ${c}.`);
    } else if (p > c) {
        alert(`Congrats, you won! The score was You: ${p} to Computer: ${c}.`);
    }
}