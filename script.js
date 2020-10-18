// game variables
let player1Score = 0
let player2Score = 0
let player1Turn = true

// DOM elements
const messageDisplay = document.getElementById("message")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const dice1 = document.getElementById("player1Dice")
const dice2 = document.getElementById("player2Dice")
const roll = document.getElementById("rollBtn")
const reset = document.getElementById("resetBtn")

function showResetBtn (){
  rollBtn.style.display = "none"
  resetBtn.style.display = "inline-block"
}

/* Event listener to the Roll Dice Button. Then we generate a random number betwen 1 to 6*/
 
 rollBtn.addEventListener("click", function(){
     const diceRoll = Math.floor(Math.random() * 6) + 1
    //  As palyerTurn is already a binary value dont need to write player1Turn === true.
     if (player1Turn) {
       player1Score += diceRoll
       player1Scoreboard.textContent = player1Score
       dice1.innerText = diceRoll
       dice1.classList.remove("active")
       dice2.classList.add("active")
       messageDisplay.innerText = ("Player 2 Turn")
       } else {
         player2Score += diceRoll
         player2Scoreboard.textContent = player2Score
         dice2.innerText = diceRoll
         dice2.classList.remove("active")
         dice1.classList.add("active")
         messageDisplay.innerText = ("Player 1 Turn")
     }

     if (player1Score >= 20){
       showResetBtn()
       message.textContent = "Player 1 Wins"
       } else if (player2Score >= 20){
        showResetBtn()
        message.textContent = "Player 2 Wins"
        }
    // instead of setting the value inside the if or else we can also flip the value to it's oposite as it is a binary value.
     player1Turn = !player1Turn
 })


 resetBtn.addEventListener("click", function(){
    player1Score = 0
    player2Score = 0
    player1Turn = true
    message.textContent = "Player 1 Turn"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    player1Scoreboard.textContent = player1Score
    player2Scoreboard.textContent = player2Score
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    rollBtn.style.display = "inline-block"
    resetBtn.style.display = "none"
    
})