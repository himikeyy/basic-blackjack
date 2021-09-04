
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEL = document.getElementById("cards-el")

let gamestatus = true
let player = {
     name: "Dustin",
     chips: 100
}


let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": P" + player.chips + " chips"

function getRandomCard() {
     let rand = Math.floor(Math.random()*13) + 1

     if (rand === 1){
          return 11
     }
     else if (rand > 10) {
          return 10
     } 
     else {
          return rand
     }
}


function startGame() {
     if(gamestatus == false){
         
     }
     else{
          isAlive = true
          let firstCard = getRandomCard()
          let secondCard = getRandomCard()
          cards = [firstCard,secondCard]
          sum = firstCard + secondCard
          player.chips -= 5
          playerEl.textContent = player.name + ": P" + player.chips + " chips"
          renderGame()
     } 
     
     console.log(player.chips)
}    

function renderGame() {
     if(player.chips != 0){
          cardsEL.textContent ="Cards: "
          for(let i = 0; i < cards.length; i++){
               cardsEL.textContent += cards[i] + " "
          }    
     
          sumEl.textContent = "Sum: " + sum
     
          if (sum <= 20) {
               message = "Do you want to draw a new card?"
            
            }
            else if (sum === 21) {
                 message = "Woohoo! You've got Blackjack!"
                 hasBlackJack = true
            }
            
            else {
                 message = "You're out of the game!"
                 isAlive = false
            }    
            messageEl.textContent = message
            gamestatus = true
     }
     else {
          messageEl.textContent = "Game Over!"
          gamestatus = false
          
     }
         
     
}

function newCard() {   
     if(isAlive === true && hasBlackJack === false)
     {
          let cardvar = getRandomCard()
          sum += cardvar
          cards.push(cardvar)
          renderGame()
     }
   
}

