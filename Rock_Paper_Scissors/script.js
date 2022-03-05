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

var wait = true;

var selectiontext = "What is your choice?  Rock, Paper, or Scissors?";
var playerSvg="";
var computerSvg="";
const rockSVG = "<img src='./rock.svg' alt='rock'/>";
const paperSVG = "<img src='./paper_ball.svg' alt='paper'/>";
const scissorsSVG = "<img src='./scissors.svg' alt='scissors'/>";

const selectionsBox = document.getElementById("selections");
const selectionsDisplayed = `<h1>${selectiontext}</h1><div><div id="playerChoice">${playerSvg}</div><div id="computerChoice">${computerSvg}</div></div>`

var computerScore = 0;
var playerScore = 0;
var rounds = 0;

const playerScoreDisplay = document.getElementById('player_score');
const gamesPlayed = document.getElementById('games_played');
const computerScoreDisplay = document.getElementById('computer_score');

const RPSwinLose = ['You win! Rock smashes Scissors!', 'You lose! Paper covers Rock!', 'You win! Scissors cut Paper!', 'You lose! Rock smashes Scissors!', 'You win! Paper covers Rock!', 'You lose! Scissors cut Paper!']

function playRound(playerSelection) {
  var computerSelection = computerPlay();
  if(playerSelection='rock'){playerSvg = rockSVG};
  if(playerSelection='paper'){playerSvg=paperSVG};
  if(playerSelection='scissors'){playerSvg=scissorsSVG};
  if(computerSelection='rock'){computerSvg = rockSVG};
  if(computerSelection='paper'){computerSvg=paperSVG};
  if(computerSelection='scissors'){computerSvg=scissorsSVG};

  if (playerSelection === computerSelection) {
    selectiontext = "It's a tie.  Try again.";
    wait = true;
    return;
  }
  if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      playerScore +=1;
      selectiontext = RPSwinLose[0];
        } else {
      computerScore += 1;
      selectiontext = RPSwinLose[1];
    } match += 1;
  }
  if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      playerScore +=1;
      selectiontext = RPSwinLose[2];
    } else {
  computerScore += 1;
  selectiontext = RPSwinLose[3];
} match += 1;
  }
  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      playerScore +=1;
      selectiontext = RPSwinLose[4];
        } else {
      computerScore += 1;
      selectiontext = RPSwinLose[5];
    } match += 1;
  }
playerScoreDisplay.textContent = `${playerScore}`;
gamesPlayed.textContent = `${gamesPlayed}`;
computerScoreDisplay.textContent = `${computerScore}`;
if (match = 5){game()}
}

const winnerDialog = document.getElementById('winner');

function game() {
  if (playerScore > computerScore) {
    winnerDialog.textContent = 'You win the game.  You "rock" at Rock, Paper, Scissors.  You definitely are a "cut" above.'
  }
  else {
    winnerDialog.textContent ='You lose.  The computer "rocked" you.  It "cut" you up.'
  }
}

const selections = Array.from(document.getElementsByClassName('player_option'));
selections.forEach(selection => selection.addEventListener('click', function () { console.log(selection.id);if (wait) { wait = false; playRound(selection.id) } else { return } }))