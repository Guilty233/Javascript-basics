let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score'); // removes the score from local storage
  updateScoreElement();
}
function playGame(playerChoice){
  const computerChoice = pickComputerMove();
  let result = '';
  if(playerChoice === 'rock'){
    if(computerChoice === 'rock'){
      result = 'Tie';
    }
    else if(computerChoice === 'paper'){
      result = 'You lose';
    }
    else if(computerChoice === 'scissors'){
      result = 'You win';
    }
  }
  else if(playerChoice === 'paper'){
    if(computerChoice === 'rock'){
      result = 'You win';
    }
    else if(computerChoice === 'paper'){
      result = 'Tie';
    }
    else if(computerChoice === 'scissors'){
      result = 'You lose';
    }
  }
  else if(playerChoice === 'scissors'){
    if(computerChoice === 'rock'){
      result = 'You lose';
    }
    else if(computerChoice === 'paper'){
      result = 'You win';
    }
    else if(computerChoice === 'scissors'){
      result = 'Tie';
    }
  }
  if(result === 'You win'){
    score.wins++;
  }
  else if(result === 'You lose'){
    score.losses++;
  }
  else{
    score.ties++;
  }
  localStorage.setItem('score', JSON.stringify(score)); // saves the score to local storage
  document.querySelector('.js-result').innerHTML = result;
  innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerChoice}-emoji.png" class="move-icon">, Computer <img src="images/${computerChoice}-emoji.png" class="move-icon">`;
  
  /*alert(`You chose ${playerChoice}, computer chose ${computerChoice}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);*/
  updateScoreElement();
}
function updateScoreElement(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function pickComputerMove(){
  const randomNumber = Math.random();
  let computerChoice;
  if(randomNumber >= 0 && randomNumber < 1/3){
    computerChoice = 'rock';
  }
  else if(randomNumber >= 1/3 && randomNumber < 2/3){
    computerChoice = 'paper';
  }
  else if(randomNumber >= 2/3 && randomNumber < 1){
    computerChoice = 'scissors';
  }
  return computerChoice;
}
let playerMoveInterval;
function autoPlay(){
  playerMoveInterval = setInterval(() => {
    const playerChoice = pickComputerMove();
    playGame(playerChoice);
  }, 1000);
}
function stopAutoPlay(){
  clearInterval(playerMoveInterval);
}