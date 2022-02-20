const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
let result = document.querySelector('#result');
let p1Score = document.querySelector('#p1Score');
let p2Score = document.querySelector('#p2Score');
let userScore = 0;
let computerScore = 0;
let winningScore = 5;
let isGameOver = false;


rockBtn.addEventListener('click', function () {
    let user = 'rock';
    let pc = computerPlay();
    let round = playRound(user, pc)
    result.textContent = round;
    game(round);
    winningScore++;


});


paperBtn.addEventListener('click', function () {
    let user = 'paper';
    let pc = computerPlay();
    let round = playRound(user, pc)
    result.textContent = round;
    game(round);
});

scissorsBtn.addEventListener('click', function () {
    let user = 'scissors';
    let pc = computerPlay();
    let round = playRound(user, pc)
    result.textContent = round;
    game(round);
});

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

function game(input) {


    if (input === "You won") {
        userScore++;

        console.log("You wons")
        console.log("Your score is: " + userScore);
        console.log("Computer score is : " + computerScore);
    } else if (input === "You lost") {

        computerScore++;
        console.log("You lost")
        console.log("Your score is: " + userScore);
        console.log("Computer score is : " + computerScore);
    } else {
        console.log("Tie")
    }

    p1Score.innerText = userScore;
    p2Score.innerText = computerScore;

}