let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let person = {
    name: "PLAYER 1",
    score: 200
}
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")
let personEl = document.getElementById("person-el")
personEl.textContent = person.name + ": $" + person.score

function getRandomCard(){
    let card = Math.floor(Math.random()*13)+1
    if(card === 1){
        return 11
    }
    else if (card > 10){
        return 10
    }
    return card
}

function new_card(){
    if(isAlive == true && hasBlackJack == false){
        let card =getRandomCard()
        cards.push(card)
        sum += card
        render_game()
    }
}

function start_game(){
    hasBlackJack = false
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard =getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard+secondCard
    render_game()
}

function render_game() {
    sumEl.textContent = "Sum:" + sum
    cardEl.textContent = "Card:" + " "
    for(let i = 0;i<cards.length;i++){
         cardEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
        person.score += 50
    } else {
        message = "You're out of the game! "
        isAlive = false
        person.score -=25
    }
    messageEl.textContent =message  
    personEl.textContent = person.name + ": $" + person.score 
}