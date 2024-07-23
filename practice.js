// caches all of the card elements in a variable
const cardEls = document.querySelectorAll('some-identifier-for-all-your-cards')

// adds an event listener to each card element
cardEls.forEach(cardEl => {
  cardEl.addEventListener('click', handleClickCard)
})

// declare a state variable to hold the info regarding the cards
let cardVals = []

// invoke to initialize the game when the browser loads
init()

function init() {
  // sets initial state (there are tons of ways to do this, shown below is an example)
  cardVals = ['', '', '', '', '', '', '', '', '', '', '', '']
  // renders initial state
  render()
}

function render() {
  cardEls.forEach(cardEl => {
    // code to change the cardEl (HTML) to reflect the state in cardVals
  })
}

function handleClickCard() {
  // user interaction changes state of cardVals in some way
  // then renders the updated state
  render()
}