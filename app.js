
var scores = [90,90]

var roundScore = 0

var activePlayer = 0
// 0 = Player 1, 1 = Player 2

var dice

var playerRoundScoreId
var playerCurrentScoreId

$("#roll-dice").on("click", function(){
  dice = Math.floor(Math.random() * 6) + 1
  if (dice === 1) {
    console.log("player " + (activePlayer + 1 ) + " has lost their turn")
    activePlayer = changeTurn(activePlayer)
  } else {
    roundScore += dice
  }
  playerRoundScoreId = `#score-${activePlayer}`
  $(`${playerRoundScoreId}`).text(roundScore)
});

$('#hold-dice').on("click", updateCurrentScore)

function updateCurrentScore() {
  scores[activePlayer] += roundScore
  playerCurrentScoreId = `#current-${activePlayer}`
  $(`${playerCurrentScoreId}`).text(scores[activePlayer])

  if (scores[activePlayer] < 100){
    activePlayer = changeTurn(activePlayer)
  } else {
    console.log(activePlayer + "is the winner")
    }
    resetRoundScore()
}

function resetRoundScore(){
  roundScore = 0
  $(`${playerRoundScoreId}`).text(roundScore)
}

function changeTurn(activePlayer) {
  if (activePlayer === 0){
     activePlayer = 1
  } else {
     activePlayer = 0
  }
  resetRoundScore()
  return activePlayer
}
