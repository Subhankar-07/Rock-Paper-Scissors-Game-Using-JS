let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreMsg=document.querySelector("#user-score");
const compScoreMsg=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const option=["rock","paper","scissors"];
    const ranIdx=Math.floor(Math.random()*3);
    return option[ranIdx];
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreMsg.innerText= userScore;
        msg.innerText=`You Win !! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="Green";
    }
    else{
        compScore++;
        compScoreMsg.innerText= compScore;
        msg.innerText=`You Lose ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="Red";
    }

}

const DrawGame=()=>{
    msg.innerText=("Game was draw Play Again !!");
    msg.style.backgroundColor="#081b31";
}

const playGame=(userChoice)=>{
    //Generate the comp choice
    const compChoice=genCompChoice();

    if(userChoice === compChoice){
        //Draw Game
        DrawGame();
    }
    else{

        let userWin = true;
        if(userChoice === "rock"){
            //paper,scissor
            userWin=(compChoice==="paper") ? false : true;
        }
        else if(userChoice === "paper"){
            //rock,scissor
            userWin=(compChoice === "scissors") ? false : true;
        }
        else{
            //paper,rock
            userWin=(compChoice === "rock") ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});