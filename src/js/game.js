export default class Game {
    constructor(util) {
        this.firstCard      = null;
        this.secondCard     = null;
        this.hasFlippedCard = false;
        this.lockBoard      = false;
        this.gameStarted    = false;
        this.totalSeconds   = 0;
        this.timeInterval   = null;
        this.util           = util;
    }

    restartGame(cards) {
        // 1. Disable Restart button
        const restartButton = document.getElementById('btnRestart');
        restartButton.innerHTML = 'Restarting...';
        restartButton.disabled = true;
        // 2. Unflip and Unmatch cards
        cards.forEach(card => {
            card.classList.remove('flip');
            card.classList.remove('matched');
        });
        // 3. Shuffle cards
        this.shuffle(cards);
        // 4. Reset board
        this.resetBoard();
        // 5. Restart counter
        this.totalSeconds = 0;
        document.getElementById('timeElapsed').innerHTML = `Time Elapsed: 00s`;
        // 6. Disable Game Started flag
        this.gameStarted = false;
        // 7. Enable Restart button
        restartButton.innerHTML = 'Restart';
        restartButton.disabled = false;
    }

    flipCard(card) {
        if(!this.gameStarted) {
            this.gameStarted = true;
            let self = this; // to ensure the object calls updateTime
            this.timeInterval = setInterval(function() { self.updateTime(); }, 1000);
            console.log(`Interval started`);
        }
        
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
        if(this.gameStarted) {
            this.totalSeconds++;
            document.getElementById('timeElapsed').innerHTML = `Time Elapsed: ${this.util.pad(this.totalSeconds)}s`;
        }
    }

    clearTimeInterval() {
        clearInterval(this.timeInterval);
    }
}