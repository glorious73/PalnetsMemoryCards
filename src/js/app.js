import Game from './game';
import UI from './UI';

const game  = new Game();
const ui    = new UI();
const cards = document.querySelectorAll('.memory-card');

// Cards
function flipCard() {
    game.flipCard(this);
    if(game.areAllCardsMatched(cards))
        showGameFinishedModal();
}

function shuffle() {
    game.shuffle(cards);
}

// UI
function showGameFinishedModal() {
    ui.showGameFinishedModal();
}
function closeUIModal() {
    ui.closeUIModal();
}

// Initial game setup
shuffle();
// Event listeners
document.getElementById('uiModalClose').addEventListener('click', closeUIModal);
//document.getElementById('playAgainButton').addEventListener('click', closeUIModal); // To be changed
cards.forEach(card => card.addEventListener('click', flipCard));
