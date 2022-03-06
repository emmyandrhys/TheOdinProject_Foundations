//gets random number for computer to make choice
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//gets computer's choice for round
function computerPlay() {
  let pick = getRndInteger(1, 4);
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
//unnecessary for GUI version, translates text entry player choice
function playerPlay() {
  let pick = window.prompt('What do you pick: Rock, Paper, or Scissors?');
  pick = pick.toLowerCase();
  if (pick === 'rock' || pick === 'paper' || pick === 'scissors') {
    return pick;
  } else {
    console.log("Huh? That isn't a valid choice.");
    playerPlay();
  }
}

const winnerDialog = document.getElementById('winner');

function game() {
  if (playerScore > computerScore) {
    winnerDialog.textContent = 'You win the game.  You "rock" at Rock, Paper, Scissors.  You definitely are a "cut" above.'
  }
  else {
    winnerDialog.textContent ='You lose.  The computer "rocked" you.  It "cut" you up.'
  }
  winnerDialog.style.visibility='visible';
  selectiontext.style.visibility='hidden';
}
var wait = true;

const selectionsBox = document.getElementById("selections");

/* const playerWait = document.getElementById('player_wait');
const playerRock = document.getElementById('player_rock');
const playerPaper = document.getElementById('player_paper');
const playerScissors = document.getElementById('player_scissors');

const computerWait = document.getElementById('computer_wait');
const computerRock = document.getElementById('computer_rock');
const computerPaper = document.getElementById('computer_paper');
const computerScissors = document.getElementById('computer_scissors');
 */

const playerSelected = document.getElementById('player_selection');
const computerSelected = document.getElementById('computer_selection');
const selectiontext = document.getElementById('selection_text');
var computerScore = 0;
var playerScore = 0;
var rounds = 0;

const playerScoreDisplay = document.getElementById('player_score');
const gamesPlayed = document.getElementById('matches_played');
const computerScoreDisplay = document.getElementById('computer_score');

const RPSwinLose = ['You win! Rock smashes Scissors!', 'You lose! Paper covers Rock!', 'You win! Scissors cut Paper!', 'You lose! Rock smashes Scissors!', 'You win! Paper covers Rock!', 'You lose! Scissors cut Paper!']

function playRound(playerSelection) {
  var computerSelection = computerPlay();
  if(playerSelection==='rock'){playerSelected.src='./rock.svg'};
  if(playerSelection==='paper'){playerSelected.src='./paper_ball.svg'};
  if(playerSelection==='scissors'){playerSelected.src='./scissors.svg'};
  if(computerSelection==='rock'){computerSelected.src='./rock.svg'};
  if(computerSelection==='paper'){computerSelected.src='./paper_ball.svg'};
  if(computerSelection==='scissors'){computerSelected.src='./scissors.svg'};

  if (playerSelection === computerSelection) {
    selectiontext.textContent = "It's a tie.  Try again.";
    wait = true;
    return;
  }
  if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      playerScore +=1;
      selectiontext.textContent = RPSwinLose[0];
        } else {
      computerScore += 1;
      selectiontext.textContent = RPSwinLose[1];
    } rounds += 1;
  }
  if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      playerScore +=1;
      selectiontext.textContent = RPSwinLose[2];
    } else {
  computerScore += 1;
  selectiontext.textContent = RPSwinLose[3];
} rounds += 1;
  }
  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      playerScore +=1;
      selectiontext.textContent = RPSwinLose[4];
        } else {
      computerScore += 1;
      selectiontext.textContent = RPSwinLose[5];
    } rounds += 1;
  }
  console.log(`Player Score: ${playerScore}`)
  console.log(`Matches Played: ${rounds}`)
  console.log(`Computer Score: ${computerScore}`)
playerScoreDisplay.textContent = `${playerScore}`;
gamesPlayed.textContent = `${rounds}`;
computerScoreDisplay.textContent = `${computerScore}`;
if (rounds < 5) {wait=true;}
if (rounds===5){game()};
}



const selections = Array.from(document.getElementsByClassName('player_option'));
selections.forEach(selection => selection.addEventListener('click', function () {if (wait) { wait = false; playRound(selection.id) } else { return } }))