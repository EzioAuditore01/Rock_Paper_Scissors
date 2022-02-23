const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
let result = document.querySelector('#result');
let p1Score = document.querySelector('#p1Score');
let p2Score = document.querySelector('#p2Score');
let reset = document.querySelector('#reset')
let userScore = 0;
let computerScore = 0;
let winningScore = 5;
let isGameOver = false;



rockBtn.addEventListener('click', function () {
    if (!isGameOver) {
        let user = 'rock';
        let pc = computerPlay();
        let round = playRound(user, pc);
        game(round);

        if (userScore === winningScore || computerScore === winningScore) {
            isGameOver = true;
            setFinalMessage();
        }
        else {
            result.textContent = round;
        }

    }


});


paperBtn.addEventListener('click', function () {
    if (!isGameOver) {
        let user = 'paper';
        let pc = computerPlay();
        let round = playRound(user, pc);
        game(round);

        if (userScore === winningScore || computerScore === winningScore) {
            isGameOver = true;
            setFinalMessage();
        } else {
            result.textContent = round;
        }


    }
});

scissorsBtn.addEventListener('click', function () {
    if (!isGameOver) {
        let user = 'scissors';
        let pc = computerPlay();
        let round = playRound(user, pc);
        game(round);

        if (userScore === winningScore || computerScore === winningScore) {
            isGameOver = true;
            setFinalMessage();
        }

        else {
            result.textContent = round;
        }
    }
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
        return "Its a draw!";
    }

    if (player === "rock" && computer === "paper") {
        win = 2;
        return "You lost,rock losses to paper!";
    }

    if (player === "rock" && computer === "scissors") {


        return "You won,rock beats scissors!";
    }

    if (player === "paper" && computer === "paper") {
        return "Its a draw!";
    }

    if (player === "paper" && computer === "rock") {

        return "You won,paper beats rock!";
    }

    if (player === "paper" && computer === "scissors") {

        return "You lost,papers losses to scissors";
    }

    if (player === "scissors" && computer === "scissors") {
        return "Its a draw!";
    }

    if (player === "scissors" && computer === "rock") {

        return "You lost,scissors losses to rock!";
    }

    if (player === "scissors" && computer === "paper") {

        return "You won,scissors beat paper!";
    }

}

function game(input) {

    if (input.substring(0, 7) === "You won") {
        userScore++;


    } else if (input.substring(0, 8) === "You lost") {

        computerScore++;

    }

    p1Score.innerText = userScore;
    p2Score.innerText = computerScore;

}

reset.addEventListener('click', function () {
    isGameOver = false;
    userScore = 0;
    computerScore = 0;
    result.textContent = "";
    p1Score.innerText = 0;
    p2Score.innerText = 0;
})
function setFinalMessage() {
    return userScore > computerScore
        ? (result.textContent = 'You won!')
        : (result.textContent = 'You lost...')
}

