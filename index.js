const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput
    } else {
        console.log("Sorry, you can't use this.");
    }
}

const getComputerChoice = () => {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return "rock";
    } else if (number === 1) {
        return "paper";
    } else if (number === 2) {
        return "scissors";
    }
}

function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "The game is a tie!";
    };
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "The computer wins!"
        } else {
            return "You win!"
        }
    };
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "The computer wins!"
        } else {
            return "You win!"
        }
    };
    if (userChoice = "scissors") {
        if (computerChoice === "rock") {
            return "The computer wins!"
        } else {
            return "You win!"
        }
    }

}

function playGame() {
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));

}
playGame();
