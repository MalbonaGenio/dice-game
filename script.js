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
 })