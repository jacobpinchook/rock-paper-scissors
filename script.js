let playerScore = 0;
let computerScore = 0;
let roundWinner;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
          return 'rock';
        case 1:
          return 'paper';
        case 2:
          return 'scissors';
    }
}

function playRound(playerChoice, computerChoice) {
    if (
        (playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors") || 
        (playerChoice === "scissors" && computerChoice === "rock") 
    ) {
        // alert(`You lost this round! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice.toLowerCase()}.`);
        roundWinner = "computer";
        computerScore++;
    } 
    
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") || 
        (playerChoice === "scissors" && computerChoice === "paper") 
    ) {
        roundWinner = "player";
        playerScore++;
        // alert(`You won this round! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice.toLowerCase()}.`);
    } 

    if (playerChoice === computerChoice) {
        // alert(`They say great minds (or CPUs) think alike, you chose ${playerChoice} and so did the computer. Go again!`);
        roundWinner = "tie";
    }

    updateScoreMessage(winner, playerChoice, computerChoice);
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}

// UI

const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const playerScorePara = document.getElementById('playerScore');
const computerScorePara = document.getElementById('computerScore');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const endgameModal = document.getElementById('endgameModal');
const endgameMsg = document.getElementById('endgameMsg');
const overlay = document.getElementById('overlay');
const restartBtn = document.getElementById('restartBtn');

rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));
restartBtn.addEventListener('click', restartGame);
overlay.addEventListener('click', closeEndgameModal);

function handleClick(playerChoice) {
    if (isGameOver()) {
      openEndgameModal()
      return
    }
  
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    updateChoices(playerChoice, computerChoice);
    updateScore();
  
    if (isGameOver()) {
      openEndgameModal()
      setFinalMessage()
    }
}

function updateChoices (playerChoice, computerChoice) {
    switch (playerChoice) {
        case 'rock':
        playerSign.textContent = '✊'
        break;
        case 'paper':
        playerSign.textContent = '✋'
        break;
        case 'scissors':
        playerSign.textContent = '✌'
        break;
    }
    
    switch (computerChoice) {
    case 'rock':
        computerSign.textContent = '✊'
        break;
    case 'paper':
        computerSign.textContent = '✋'
        break;
    case 'scissors':
        computerSign.textContent = '✌'
        break;
    }
}

function updateScore() {
    if (roundWinner === 'tie') {
        scoreInfo.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
        scoreInfo.textContent = 'You won!'
    } else if (roundWinner === 'computer') {
        scoreInfo.textContent = 'You lost!'
    }

    playerScorePara.textContent = `Player: ${playerScore}`
    computerScorePara.textContent = `Computer: ${computerScore}`
}

function updateScoreMessage(winner, playerChoice, computerChoice) {
    if (winner === 'player') {
        scoreMessage.textContent = `${capitalizeFirstLetter(
        playerChoice
        )} beats ${computerChoice}`
        return
    }
    if (winner === 'computer') {
        scoreMessage.textContent = `${capitalizeFirstLetter(
        playerChoice
        )} is beaten by ${computerChoice}`
        return
    }

    scoreMessage.textContent = `${capitalizeFirstLetter(
        playerChoice
    )} ties with ${computerChoice}`
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
}

function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}

function setFinalMessage() {
    return playerScore > computerScore
        ? (endgameMsg.textContent = 'You won!')
        : (endgameMsg.textContent = 'You lost...');
}

function restartGame() {
    playerScore = 0
    computerScore = 0
    scoreInfo.textContent = 'Choose your weapon'
    scoreMessage.textContent = 'First to score 5 points wins the game'
    playerScorePara.textContent = 'Player: 0'
    computerScorePara.textContent = 'Computer: 0'
    playerSign.textContent = '❔'
    computerSign.textContent = '❔'
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}