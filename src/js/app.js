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
function restartGame() {
    game.restartGame(cards, ui);
}

// UI
function showGameFinishedModal() {
    ui.showGameFinishedModal(game.totalSeconds);
}

// Initial game setup
shuffle();
// Time Elapsed
let timeElapsedInterval = setInterval(updateTime, 1000);
// Event listeners
document.getElementById('btnRestart').addEventListener('click', restartGame);
cards.forEach(card => card.addEventListener('click', flipCard));
