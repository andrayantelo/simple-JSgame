// rock paper scissors rope game

var userChoice = prompt("Rock, paper, scissors, or rope?");

var computerChoice = Math.random()

if (computerChoice < 0.25) {
    computerChoice = "rock";
}
else if (computerChoice > 0.25 && computerChoice < 0.50) {
    computerChoice = "paper";
}
else if (computerChoice > 0.50 && computerChoice < 0.75) {
    computerChoice = "scissors";
}
else if (computerChoice > 0.75 && computerChoice < 1) {
    computerChoice = "rope";
}

console.log("Computer:" + computerChoice);

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        console.log("It's a tie!");
    }
        
    else if (choice1 === "rock") {
        if (choice2 === "paper") {
            console.log("Paper wins!");
        }
    }
};




