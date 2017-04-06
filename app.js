var activePlayer = 0
// 0 = Player 1, 1 = Player 2

var scores = [90,0]
var roundScore = 0

var dice

var playerRoundScoreId
var playerCurrentScoreId

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
