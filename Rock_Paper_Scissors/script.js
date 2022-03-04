function getRndInteger (min, max) {
  return Math.floor (Math.random () * (max - min)) + min;
}

function computerPlay () {
  let pick = getRndInteger (1, 4);
  if (pick === 1) {
    return 'rock';
  }
  if (pick === 2) {
    return 'paper';
  }
  if (pick === 3) {
    return 'scissors';
  }
}
function playerPlay () {
  let pick = window.prompt ('What do you pick: Rock, Paper, or Scissors?');
  pick = pick.toLowerCase ();
  if (pick === 'rock' || pick === 'paper' || pick === 'scissors') {
    return pick;
  } else {
    console.log ("Huh? That isn't a valid choice.");
    playerPlay ();
  }
}

function playRound (playerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie! Try again.");
    let playerPick=playerPlay();
    let computerPick=computerPlay();
    playRound(playerPick,computerPick);
  }
  if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      return 0;
    } else {
      return 1;
    }
  }
  if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      return 2;
    } else {
      return 3;
    }
  }
  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return 4;
    } else {
      return 5;
    }
  }
}
const RPSwinLose = ['You win! Rock smashes Scissors!', 'You lose! Paper covers Rock!', 'You win! Scissors cut Paper!', 'You lose! Rock smashes Scissors!','You win! Paper covers Rock!', 'You lose! Scissors cut Paper!']
function game(){
var computerScore=0;
var playerScore=0;
for (let i=0; i<5; i++){
var playerSelection = playerPlay ();
var computerSelection = computerPlay ();
var match=playRound(playerSelection,computerSelection)
if (match%2===0){
playerScore+=1;
}
else{
computerScore+=1;
}
console.log(RPSwinLose[match])
console.log("Player Score: " + playerScore);
console.log("Computer Score: " + computerScore);
console.log((i + 1)+ " rounds played out of 5")
}
if (playerScore>computerScore){
console.log('You win the game.  You "rock" at Rock, Paper, Scissors.  You definitely are a "cut" above.')}
else{
console.log('You lose.  The computer "rocked" you.  It "cut" you up.')}
}

const selections =  Array.from(document.getElementsByClassName('.player_option'));
selections.forEach(selection => selection.addEventListener('click', console.log(selection)))
