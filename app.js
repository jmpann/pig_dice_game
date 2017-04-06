var activePlayer, scores, roundScore, dice

init();


$("#roll-dice").on("click", rollDice);

$('#hold-dice').on("click", updateCurrentScore)

function rollDice(){
  dice = Math.floor(Math.random() * 6) + 1
  $('#dice').attr('src', `dice-${dice}.png`)
  $('#lose-turn').text('')

  if (dice !== 1) {
    roundScore += dice
  } else {
    $('#lose-turn').text(`Player ${activePlayer + 1} has lost their turn.`)
    activePlayer = changeTurn(activePlayer)
  }
  $('#score-'+activePlayer).text(roundScore)

}

function updateCurrentScore() {
  scores[activePlayer] += roundScore
  $('#current-'+activePlayer).text(scores[activePlayer])

  if (scores[activePlayer] >= 100){
    $('#winner-message').text(`Player ${activePlayer + 1} is the Winner!`)
    $('.player-'+activePlayer+'-panel').removeClass('active').addClass('winner')

  } else {
    activePlayer = changeTurn(activePlayer)
    }
}


function resetRoundScore(){
  roundScore = 0
  $('#score-'+activePlayer).text(roundScore)
}


function changeTurn(activePlayer) {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  $('.player-0-panel').toggleClass('active')
  $('.player-1-panel').toggleClass('active')
  resetRoundScore()
  return activePlayer
}

$('#new-game').on("click", init)

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
