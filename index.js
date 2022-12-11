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
            return "The user wins!"
        }
    };
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "The computer wins!"
        } else {
            return "The user wins!"
        }
    };
    if (userChoice = "scissors") {
        if (computerChoice === "rock") {
            return "The computer wins!"
        } else {
            return "The user wins!"
        }
    }

}
