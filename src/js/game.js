export default class Game {
    constructor() {
        this.firstCard  = null;
        this.secondCard = null;
        this.hasFlippedCard = false;
        this.lockBoard      = false;
        this.totalSeconds   = 0;
    }

    restartGame(cards, ui) {
        // 1. Disable Restart button
        const restartButton = document.getElementById('btnRestart');
        restartButton.innerHTML = 'Restarting...';
        restartButton.disabled = true;
        // 2. Unflip and Unmatch cards
        cards.forEach(card => {
            card.classList.remove('flip');
            card.classList.remove('matched');
        });
        console.log(`removed classes for card`);
        // 3. Shuffle cards
        setTimeout(this.shuffle(cards), 4000);
        console.log(`shuffled`);
        // 4. Reset board
        this.resetBoard();
        console.log(`reset board`);
        // 5. Restart counter
        this.totalSeconds = 0;
        console.log(`total seconds = ${this.totalSeconds}`);
        // 6. Ensure modal is removed
        ui.closeUIModal();
        // 7. Enable Restart button
        restartButton.innerHTML = 'Restart';
        restartButton.disabled = false;
    }

    flipCard(card) {
        if (this.lockBoard) return;
        if(card == this.firstCard) return;
    
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
        }, 1100);
    }

    resetBoard() {
        [this.hasFlippedCard, this.lockBoard] = [false, false];
        [this.firstCard, this.secondCard] = [null, null];
    }

    shuffle(cards) {
        cards.forEach(card => {
            let randomPos = Math.floor(Math.random() * 16);
            card.style.order = randomPos;
        });
    }

    updateTime() {
        this.totalSeconds++;
        document.getElementById('timeElapsed').innerHTML = `Time Elapsed: ${this.pad(this.totalSeconds)}s`;
    }

    areAllCardsMatched(cards) {
        // 1. Assume is finished
        let isAllMatched = true;
        // 2. change if not finished
        cards.forEach(card => {
            if(!card.classList.contains('matched')) {
                isAllMatched = false;
                return;
            }
        });
        return isAllMatched;
    }

    pad(val) {
        let valString = val + "";
        if (valString.length < 2) 
            return "0" + valString;
        else
            return valString;
    }
}