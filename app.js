function computerPlay() {

    let rps = ["Rock", "Paper", "Scissors"];

    let randNumber = Math.floor(Math.random() * 3);

    return rps[randNumber];

}
console.log(computerPlay());
