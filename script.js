//starting//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let computerChoice, 
    userChoice,
    userScore = 0,
    computerScore = 0;
    
//getting the computer choice
function getComputerChoice() {
    let getChoice = Math.random().toFixed(2);
    let Choice = (getChoice.toString()).at(-1);
    // console.log(Choice);
    Choice = Number(Choice);
    // console.log(Choice);
    if (Choice >= 0 && Choice <= 2) {
        computerChoice = "rock";
    } else if (Choice >= 3 && Choice <= 5) {
        computerChoice = "paper";
    } else if (Choice >= 6 && Choice <= 9) {
        computerChoice = "scissors";
    }
    return computerChoice;
}
// console.log(getComputerChoice());

//getting the user choice

function getUserChoice() {
    let ask = prompt("what do you choose I have already chosen! XD");
    let Choice = ask.toLowerCase();
    while (Choice !== "rock" && Choice !== "paper" && Choice !== "scissors") {
        ask = prompt("OOPS! invalid choice try again! :(");
        Choice = ask.toLowerCase();
    }
    userChoice = Choice;
return userChoice;
}

// console.log(getUserChoice());
//round logic
function play(computer, user){
    if (computer === "paper" && user === "rock"){
        console.log("You lose this round!  paper beats rock !!!!")
        computerScore++;
    } else if (computer === "paper" && user === "scissors"){
        console.log("You win this round!! scissors beats paper")
        userScore++;
    } else if (computer === "rock" && user === "paper"){
        console.log("You win this round!! scissors beats paper")
        userScore++;
    } else if (computer === "scissors" && user === "paper"){
        console.log("You lose this round!! scissors beats paper")
        computerScore++;
    } else if (computer === "scissors" && user === "rock"){
        console.log("You win this round!! scissors beats paper")
        userScore++;
    } else if (computer === "rock" && user === "scissors") {
        console.log("You lose this round!! scissors beats paper")
        computerScore++;
    } else if (computer === "rock" && user === "rock") {
        console.log("Nobody won TIE!!!!!")
    } else if (computer === "scissors" && user === "scissors") {
        console.log("Nobody won TIE!!!!!")
    } else  {
        console.log("Nobody won TIE!!!!!")
    }
}
    
for( let i = 0; i < 5; i++){
    getComputerChoice();
    getUserChoice()
    play(getComputerChoice, getUserChoice);
    console.log("ready for the next round, let's start!!")
}

if(computerScore > userScore){
    console.log("I won yaho!!");
} else {
    console.log("You won ! try me with another round hmmm Xb");
}
        
        
        


