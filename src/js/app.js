import Game from './game';
import UI from './UI';

const game  = new Game();
const ui    = new UI();
const cards = document.querySelectorAll('.memory-card');

// Cards
function flipCard() {
    game.flipCard(this);
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

// UI
function closeUIModal() {
    ui.closeUIModal();
}

cards.forEach(card => card.addEventListener('click', flipCard));