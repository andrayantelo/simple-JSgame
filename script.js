// rock paper scissors rope game//

var weapons = ['rock', 'paper', 'scissors', 'rope'];

var playAgain = function () {
       var response = prompt("Do you wish to play again? Y or N?");
           return response;
       };
        

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        console.log("It's a tie!");
        return "tie";
        
    }
        
    else if (choice1 === "rock") {
        if (choice2 === "paper") {
            console.log("Paper wins!");
            
        }
        else if (choice2 === "scissors") {
            console.log("Rock wins!");
            
        }
        else if (choice2 === "rope") {
            console.log("Rope wins!");
            
        }
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            console.log("Paper wins!");
            
        }
        else if (choice2 === "scissors") {
            console.log("Scissors wins!");
            
        }
        else if (choice2 === "rope") {
            console.log("Paper wins!");
            
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            console.log("Rock wins!");
            
        }
        else if (choice2 === "paper") {
            console.log("Scissors wins!");
            
        }
        else if (choice2 === "rope") {
            console.log("Scissors wins!");
            
        }
    }
    if (choice1 === "rope") {
        if (choice2 === "rock") {
            console.log("Rope wins!");
            
        }
        else if (choice2 === "paper") {
            console.log("Paper wins!");
            
        }
        else if (choice2 === "scissors") {
            console.log("Scissors wins");
            
        }
    }
};

do {
    var userChoice = prompt("Rock, paper, scissors, or rope?");
    
    if (weapons.indexOf(userChoice) >=0 ) {
            
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
    
        var comparison = compare(userChoice, computerChoice);
    
        var playagain = playAgain();
     }   
     else {
         continue; }
    }
    

while (playagain === "y");



// how to ask player playagain again if they didn't type y or n
// how to ask for a weapons choice again if there is a tie
