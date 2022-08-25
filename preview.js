// function that returns rock, paper, scissors, Lizzard, Spock as randomly as possible
function rockPapperScissors (){
  let choiceNumber = Math.ceil(Math.random() * 5 );
      if (choiceNumber === 1) {
      return "rock";
      } else if (choiceNumber === 2){
        return "Paper";
      } else if (choiceNumber === 3) {
        return "scissors";
      } else if (choiceNumber === 4) {
        return "Lizzard";
      } else {
        return "Spock";
      }
} 


const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const lizzard = document.querySelector(".lizzard");
const spock = document.querySelector(".spock");

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

lizzard.addEventListener("click", function() {
  let player = "lizzard";
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
        document.querySelector(".userPoint" + 1);
      } else if (player === computer  ) {
        console.log("its a tie");
      } else {
        console.log("you loose");
      }
    }

    
    