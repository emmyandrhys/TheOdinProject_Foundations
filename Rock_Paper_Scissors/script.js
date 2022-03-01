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

function playRound (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie! Try again.";
  }
  if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      return 'You win! Rock smashes Scissors!';
    } else {
      return 'You lose! Paper covers Rock!';
    }
  }
  if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      return 'You win! Scissors cut Paper!';
    } else {
      return 'You lose! Rock smashes Scissors!';
    }
  }
  if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return 'You win! Paper covers Rock!';
    } else {
      return 'You lose! Scissors cut Paper!';
    }
  }
}

const playerSelection = playerPlay ();
const computerSelection = computerPlay ();
