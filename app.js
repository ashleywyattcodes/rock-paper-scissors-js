// select the span based on id for computer choice 
const computerChoiceDisplay = document.getElementById('computer-choice')
// select the span based on id for user choice:
const userChoiceDisplay = document.getElementById('user-choice')
// select the span based on id for results: 
const resultDisplay = document.getElementById('result')
// get all of the possible choices 
const possibleChoices = document.querySelectorAll('button') // only using button selector because there aren't any other buttons. If adding other buttons switch to class="button"
// grab the buttons 
// save the choice globally so it can be accessed wherever 
let userChoice
let computerChoice
let result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
   // what ever id is selected it needs to be saved as the user choice. 
   userChoice = e.target.id
   // get the user choiceDisplay 
   userChoiceDisplay.innerHTML = userChoice
   // generate the computer choice 
   generateComputerChoice()
   // generate the result 
   getResult()
}))
// create random number for computer to select. 
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
    
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
// create function for results. 
function getResult(){
    if (computerChoice === userChoice){
        result = 'its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win!'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'you lose!'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'you win!'
    }
    if (computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lose!'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'you win!'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'you lose!'
    }
    resultDisplay.innerHTML = result 
}