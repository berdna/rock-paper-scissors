function getComputerChoice() {
        let rand = Math.floor(Math.random() * 3);
        switch(rand){
            case 0:
                return "Rock";
                break;
            case 1:
                return "Paper"
                break;
            case 2:
                return "Scissor"
                break;
        }
}

let playerSelection = "rock";
let computerSelection = getComputerChoice();
let winCount = 0;
let loseCount = 0;

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    switch(computerSelection){
        case "ROCK":
            switch(playerSelection){
                case "ROCK":
                    const newComputerSelection = getComputerChoice();
                    return playRound(playerSelection, newComputerSelection);
                    break;
                case "PAPER":
                    winCount++;
                    return "You win! Paper beats Rock";
                    break;
                case "SCISSOR":
                    loseCount++;
                    return "You lose! Rock beats Scissor";
                    break;
            }
            break;
        case "PAPER":
            switch(playerSelection){
                case "ROCK":
                    loseCount++;
                    return "You lose! Paper beats Rock";
                    break;
                case "PAPER":
                    const newComputerSelection = getComputerChoice();
                    return playRound(playerSelection, newComputerSelection);
                    break;
                case "SCISSOR":
                    winCount++;
                    return "You win! Scissor beats Paper";
                    break;
            }
            break;
        case "SCISSOR":
            switch(playerSelection){
                case "ROCK":
                    winCount++;
                    return "You win! Rock beats Scissor";
                    break;
                case "PAPER":
                    loseCount++;
                    return "You lose! Scissor beats Paper";
                    break;
                case "SCISSOR":
                    const newComputerSelection = getComputerChoice();
                    return playRound(playerSelection, newComputerSelection);
                    break;
            }
            break;
    }
}

const game = (num) => {
    for(i = 0; i < num; i++){
        playRound(playerSelection, computerSelection);
    }
    if(winCount > loseCount) {
        console.log("You are the winner of this game.");
    }
    else {
        console.log("You are the loser of the game.");
    }
}

game(5);