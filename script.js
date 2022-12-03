console.log("Hello World!!");
const options = ["rock", "paper", "scissors"];
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const results = document.querySelector(".results");
const playerscoreboard = document.querySelector(".plrscore");
const computerscoreboard = document.querySelector(".computerscore");
const playAgain = document.querySelector(".restart");


let playerscore = 0;
let computerscore = 0;

function getComputerChoice(){
    let option = options[Math.floor(Math.random() * options.length)];
    return(option);
}

function playRound(plrSelection){
    if(playerscore === 5 || computerscore === 5){
    }else{
        const computerSelection = getComputerChoice();

        if(plrSelection === "rock" && computerSelection === "scissors" ||
        plrSelection === "paper" && computerSelection === "rock" ||
        plrSelection === "scissors" && computerSelection === "paper"){
            results.textContent = "You win, " + plrSelection + " beats " + computerSelection + "!";
            playerscore = playerscore + 1;
            playerscoreboard.textContent = playerscore;
            if(playerscore === 5){
                results.textContent = "Congratulations! You beat the almighty computer!";
                playAgain.style.visibility = "visible";
            }

        }else if(plrSelection === "rock" && computerSelection === "paper" ||
        plrSelection === "paper" && computerSelection === "scissors" ||
        plrSelection === "scissors" && computerSelection === "rock"){
            results.textContent = "You lose, " + computerSelection + " beats " + plrSelection + "!";
            computerscore = computerscore + 1;
            computerscoreboard.textContent = computerscore;
            if(computerscore === 5){
                results.textContent = "Imagine losing to a computer...";
                playAgain.style.visibility = "visible";
            }

        }else if(plrSelection === "rock" && computerSelection === "rock" ||
        plrSelection === "paper" && computerSelection === "paper" ||
        plrSelection === "scissors" && computerSelection === "scissors"){
            results.textContent = "You tied!";
        }
    }
}

rockButton.addEventListener("click", () => {
    playRound("rock");
});
paperButton.addEventListener("click", () => {
    playRound("paper");
});
scissorsButton.addEventListener("click", () => {
    playRound("scissors");
});
playAgain.addEventListener("click", () => {
    playerscore = 0;
    computerscore = 0;
    results.textContent = " ";
    playerscoreboard.textContent = "0";
    computerscoreboard.textContent = "0";
    playAgain.style.visibility = "hidden";
});