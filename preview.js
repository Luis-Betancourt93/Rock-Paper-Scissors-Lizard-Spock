

let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const lizard = document.querySelector(".lizard");
const spock = document.querySelector(".spock");

// function that returns rock, paper, scissors, Lizzard, Spock as randomly as possible
function rockPapperScissors (){
  let choiceNumber = Math.ceil(Math.random() * 5 );
      if (choiceNumber === 1) {
      return "rock";
      } else if (choiceNumber === 2){
        return "paper";
      } else if (choiceNumber === 3) {
        return "scissors";
      } else if (choiceNumber === 4) {
        return "lizard";
      } else {
        return "spock";
      }
} 


rock.addEventListener("click", function(){
  let player = "rock";
  didYouWin(player);
});

paper.addEventListener("click", function() {
  let player = "paper";
  didYouWin(player);
});

scissors.addEventListener("click", function() {
  let player = "scissors";
  didYouWin(player);
});

lizard.addEventListener("click", function() {
  let player = "lizard";
  didYouWin(player);
});

spock.addEventListener("click", function() {
  let player = "spock";
  didYouWin(player);
});


// Function to see who won 
function didYouWin(player) {
      let computer  = rockPapperScissors();
      if( (player === "scissors" && computer === "paper") || 
          (player === "paper"   && computer === "rock")  || 
          (player === "rock" && computer === "lizard") ||
          (player === "lizard" && computer === "spock") ||
          (player === "spock" && computer === "scissors") ||
          (player === "scissors" && computer === "lizard") ||
          (player === "lizard" && computer === "paper") ||
          (player === "paper" && computer === "spock") ||
          (player === "spock" && computer === "rock") ||
          (player === "rock" && computer === "scissors")){
        console.log("you win");
        youWin();
       
      } else if (player === computer  ) {
        console.log("its a tie");
      } else {
        console.log("you loose");
        computerWin()
      }
    }

  function youWin() {
    userScore++;
    userScore_span.innerHTML = userScore;
  }

  function computerWin() {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
  }