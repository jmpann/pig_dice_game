var activePlayer = 0
// 0 = Player 1, 1 = Player 2

var scores = [0,0]
var roundScore = 0

var dice

var playerRoundScoreId
var playerCurrentScoreId

$("#roll-dice").on("click", rollDice);

$('#hold-dice').on("click", updateCurrentScore)

function rollDice(){
  dice = Math.floor(Math.random() * 6) + 1
  $('#dice').attr('src', `dice-${dice}.png`)

  if (dice !== 1) {
    roundScore += dice
  } else {
    console.log("player " + (activePlayer + 1 ) + " has lost their turn")
    activePlayer = changeTurn(activePlayer)
  }
  playerRoundScoreId = `#score-${activePlayer}`
  $(`${playerRoundScoreId}`).text(roundScore)

}

function updateCurrentScore() {
  scores[activePlayer] += roundScore
  playerCurrentScoreId = `#current-${activePlayer}`
  $(`${playerCurrentScoreId}`).text(scores[activePlayer])

  if (scores[activePlayer] >= 100){
    $('#winner-message').text(`Player ${activePlayer + 1} is the Winner!`)
  } else {
    activePlayer = changeTurn(activePlayer)
    }
}


function resetRoundScore(){
  roundScore = 0
  $(`${playerRoundScoreId}`).text(roundScore)
}


function changeTurn(activePlayer) {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  resetRoundScore()
  return activePlayer
}
