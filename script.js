let computerChoice, 
    userChoice,
    userScore = 0,
    computerScore = 0;
   
function getComputerChoice() {

    let randomChosenNumber = Math.random().toFixed(2);
    let lastNumberDigit  = (randomChosenNumber.toString()).at(-1); //since the number is decimal, its string version will help getting the last digit
    lastNumberDigit  = Number(lastNumberDigit );

    if (lastNumberDigit  >= 0 && lastNumberDigit  <= 2) {
        computerChoice = "rock";
    } else if (lastNumberDigit  >= 3 && lastNumberDigit  <= 5) {
        computerChoice = "paper";
    } else if (lastNumberDigit  >= 6 && lastNumberDigit  <= 9) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getUserChoice() {

    let userChoice = prompt("what do you choose I have already chosen! XD");
    let userChoiceLowerCase = userChoice.toLowerCase();

    while (userChoiceLowerCase !== "rock" && userChoiceLowerCase !== "paper" && userChoiceLowerCase !== "scissors") {
        userChoice = prompt("OOPS! invalid choice try again! :(");
        userChoiceLowerCase = userChoice.toLowerCase();
    }

return userChoice;
}

function playOneRound(computer_choice, user_choice){
    if (computer_choice === "paper" && user_choice === "rock"){
        console.log("You lose this round!  paper beats rock !!!!");
        computerScore++;
    } else if (computer_choice === "paper" && user_choice === "scissors"){
        console.log("You win this round!! scissors beats paper");
        userScore++;
    } else if (computer_choice === "rock" && user_choice === "paper"){
        console.log("You win this round!! paper beats rock");
        userScore++;
    } else if (computer_choice === "scissors" && user_choice === "paper"){
        console.log("You lose this round!! scissors beats paper");
        computerScore++;
    } else if (computer_choice === "scissors" && user_choice === "rock"){
        console.log("You win this round!! rock beats scissors");
        userScore++;
    } else if (computer_choice === "rock" && user_choice === "scissors") {
        console.log("You lose this round!! rock beats scissors");
        computerScore++;
    } else if (computer_choice === "rock" && user_choice === "rock") {
        console.log("Same choice, nobody won TIE!!!!!");
    } else if (computer_choice === "scissors" && user_choice === "scissors") {
        console.log("Same choice, nobody won TIE!!!!!");
    } else  {
        console.log("Same choice, nobody won TIE!!!!!");
    }
}
console.log("Play with me rock, scissors and paper XD\n HERE WE GOOOOO\n")    
for( let i = 0; i < 5; i++){
   
    playOneRound(getComputerChoice(), getUserChoice());

}
console.log("Game is over\n Your score : "+userScore+" \n My score : "+computerScore+" \n SO :\n");
if(computerScore > userScore){
    console.log("I won yaho!!");
} else {
    console.log(" SHOOOOT!!!!!! You won ! try me with another round hmmm Xb");
}
        
        
        


