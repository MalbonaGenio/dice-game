// game variables
let player1Score = 0
let player2Score = 0
let player1Turn = true

// DOM elements
const messageDisplay = document.getElementById("message")
const player1Score = document.getElementById("player1Scoreboard")
const player2Score = document.getElementById("player2Scoreboard")
const dice1 = document.getElementById("player1Dice")
const dice2 = document.getElementById("player2Dice")
const roll = document.getElementById("rollBtn")
const reset = document.getElementById("resetBtn")

/* Event listener to the Roll Dice Button. Then we generate a random number betwen 1 to 6*/
 
 rollBtn.addEventListener("click", function(){
     const diceRoll = Math.floor(Math.random() * 6) + 1
    //  As palyerTurn is already a binary value dont need to write player1Turn === true.
     if (player1Turn) {
       console.log("Player 1 rolled: " + diceRoll)
     } else {
       console.log("Player 2 rolled: " + diceRoll)
     }
    // instead of setting the value inside the if or else we can also flip the value to it's oposite as it is a binary value.
     player1Turn = !player1Turn
 })