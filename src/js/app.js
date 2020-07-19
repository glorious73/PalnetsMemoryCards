import Game from './game';
import UI from './UI';

const game  = new Game();
const ui    = new UI();
const cards = document.querySelectorAll('.memory-card');

// Game
function flipCard() {
    game.flipCard(this);
    if(game.areAllCardsMatched(cards)) {
        clearInterval(timeElapsedInterval);
        showGameFinishedModal();
    }
}
function shuffle() {
    game.shuffle(cards);
}
function updateTime() {
    game.updateTime();
}

// UI
function showGameFinishedModal() {
    ui.showGameFinishedModal(game.totalSeconds);
}
function closeUIModal() {
    ui.closeUIModal();
}

// Initial game setup
shuffle();
// Time Elapsed
let timeElapsedInterval = setInterval(updateTime, 1000);
// Event listeners
document.getElementById('uiModalClose').addEventListener('click', closeUIModal);
//document.getElementById('playAgainButton').addEventListener('click', closeUIModal); // To be changed
cards.forEach(card => card.addEventListener('click', flipCard));
