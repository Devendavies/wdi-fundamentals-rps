////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
"use strict";

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    move  = move || getInput();
    return move;
}

function getComputerMove(move) {
    move = move || randomPlay();
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    
    if (playerMove == computerMove) {
        winner = 'tie';
    } else if (((playerMove == 'rock') && (computerMove == 'scissors'))   || 
            ((playerMove == 'paper') && (computerMove == 'rock'))       || 
            ((playerMove == 'scissors') && (computerMove == 'paper'))) {
        winner = 'player';
    } else {
        winner = 'computer';
    }
    
    return winner;
}

function playToFive() {
    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var winner;
    var champ = 'undefined';
    
    console.log("Let's play Rock, Paper, Scissors!");
    
    while ((playerWins < 5) && (computerWins < 5)) {
        playerMove   = getPlayerMove();
        computerMove = getComputerMove();

        console.log("You have chosen " + playerMove);
        console.log("The computer chose " + computerMove);

        winner = getWinner(playerMove, computerMove);

        if (winner == 'player') {
            playerWins += 1;
            console.log("You have won this round!");
        } else if (winner == 'computer') {
            computerWins += 1;
            console.log("You have lost this round");
        } else {
            console.log("You have tied with the computer!");
        }
        console.log("The current score is player:" + playerWins);
        console.log("  to computer:" + computerWins);
    }

        if (playerWins == 5) {
            console.log("YOU WON IT ALL!");
            champ = 'Player';
        }
        else if (computerWins == 5) {
            console.log("Better luck next time, computers rule... for now...");
            champ = 'Computer';
        }
    return champ;
}

playToFive();