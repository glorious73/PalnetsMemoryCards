import Game from './game';
import UI from './UI';
import Card from './card';
import Util from './util';

const util  = new Util();
const game  = new Game(util);
const ui    = new UI();
const card  = new Card();
const cards = document.querySelectorAll('.memory-card');

// Game
function flipCard() {
    game.flipCard(this);
    if(card.areAllCardsMatched(cards)) {
        ui.showGameFinishedModal(game.totalSeconds, restartGame);
    }
}
function shuffle() {
    game.shuffle(cards);
}
function restartGame() {    
    ui.closeUIModal();
    game.restartGame(cards);
}

// Initial game setup
shuffle();
// Event listeners
document.getElementById('btnRestart').addEventListener('click', restartGame);
cards.forEach(card => card.addEventListener('click', flipCard));
