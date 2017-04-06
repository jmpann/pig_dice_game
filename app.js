var activePlayer, scores, roundScore, dice

init();



/* Roll Dice logic. Updates player's round score. */
$("#roll-dice").on("click", rollDice);
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

/* Holding Turn updates the players current score */
$('#hold-dice').on("click", updateCurrentScore)
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

/* Helper methods */
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


/* Initializes a new game */
$('#new-game').on("click", init)
function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    $('#score-0').text('0')
    $('#score-1').text('0')
    $('#current-0').text('0')
    $('#current-1').text('0')
    $('#name-0').text('Player 1')
    $('#name-1').text('Player 2')
    $('#player-0-panel').removeClass('winner');
    $('#player-1-panel').removeClass('winner');
    $('#player-0-panel').removeClass('active');
    $('#player-1-panel').removeClass('active');
    $('#player-0-panel').addClass('active');
}
