export default class Game {
    constructor() {
        this.firstCard  = null;
        this.secondCard = null;
        this.hasFlippedCard = false;
        this.lockBoard      = false;
    }

    flipCard(card) {
        if (this.lockBoard) return;
    
        card.classList.add('flip');
    
        if (!this.hasFlippedCard) {
            this.hasFlippedCard = true;
            this.firstCard = card;
            return;
        }
    
        this.secondCard = card;
        this.checkForMatch();
    }

    checkForMatch() {
        let isMatch = (this.firstCard.dataset.planet) === (this.secondCard.dataset.planet);
        console.log(`first card = ${this.firstCard.dataset.planet}.\nsecond card = ${this.secondCard.dataset.planet}.\n isMatch = ${isMatch}`);
        if (isMatch)
            this.disableCards();
        else
            this.unflipCards();
    }

    disableCards() {
        this.firstCard.classList.add('matched');
        this.firstCard.removeEventListener('click', this.flipCard);
    
        this.secondCard.classList.add('matched');
        this.secondCard.removeEventListener('click', this.flipCard);
    
        this.resetBoard();
    }

    unflipCards() {
        this.lockBoard = true;
        setTimeout(() => {
            this.firstCard.classList.remove('flip');
            this.secondCard.classList.remove('flip');
            this.resetBoard();
        }, 1500);
    }

    resetBoard() {
        [this.hasFlippedCard, this.lockBoard] = [false, false];
        [this.firstCard, this.secondCard] = [null, null];
    }

    shuffle(cards) {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 12);
            card.style.order = randomPos;
        });
    }
}