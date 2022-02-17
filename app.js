function computerPlay() {

    let rps = ["Rock", "Paper", "Scissors"];

    let randNumber = Math.floor(Math.random() * 3);

    return rps[randNumber];

}



function playRound(playerSelection, computerSelection) {

    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player === "rock" && computer === "rock") {
        return "Its a draw";
    }

    if (player === "rock" && computer === "paper") {
        return "You lost";
    }

    if (player === "rock" && computer === "scissors") {
        return "You won";
    }

    if (player === "paper" && computer === "paper") {
        return "Its a draw";
    }

    if (player === "paper" && computer === "rock") {
        return "You won";
    }

    if (player === "paper" && computer === "scissors") {
        return "You lost";
    }

    if (player === "scissors" && computer === "scissors") {
        return "Its a draw";
    }

    if (player === "scissors" && computer === "rock") {
        return "You lost";
    }

    if (player === "scissors" && computer === "paper") {
        return "You won";
    }

}

function game() {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let input = prompt("Enter the option:");

        if (playRound(input, computerPlay()) === "You won") {
            userScore++;
            console.log("You won")
            console.log("Your score is: " + userScore);
            console.log("Computer score is : " + computerScore);
        } else if (playRound(input, computerPlay()) === "You lost") {

            computerScore++;
            console.log("You lost")
            console.log("Your score is: " + userScore);
            console.log("Computer score is : " + computerScore);
        } else {
            console.log("Tie")
        }
    }

    if (userScore > computerScore) {
        console.log("You won")
    } else {
        console.log("You lost");
    }
}

game();

