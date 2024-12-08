let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");


const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};
const drawGame = () => {
    // console.log("game was draw.");
    msg.innerText = "Game was drow play agin"
    msg.style.backgroundColor = "yellow";

};

const showWinner = (userWin, userChoice, CompChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you win");
        msg.innerText = `You Win ! ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "red";

        
    }else{ 
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you lose");
        msg.innerText = `You lose ! ${CompChoice} beats  ${userChoice} ` ;
        msg.style.backgroundColor = "green";


    }

};

const playGame = (userChoice) => {
    // console.log("user choice =", userChoice);
    //generate computer choice
    const CompChoice = genCompChoice();
    // console.log("comp choice =",CompChoice);

     if(userChoice === CompChoice){
        //Draw game
        drawGame();
     }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors,paper
            userWin = CompChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock ,scissors
            userWin = CompChoice === " scissors" ? false : true;
        }else{
            // rock paper
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin)

     }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoices = choice.getAttribute("id");
        playGame(userChoices);
    });
});