export default class UI {
    constructor() {

    }

    instantiateGameFinishedModal(timeElapsed, playAgainCallback) {
        // grab template
        let template = document.getElementById('gameFinishedTemplate');
        let fragment = document.importNode(template.content, true);
        // add event listeners
        const playbutton = fragment.querySelector('#playAgainButton');
        playbutton.addEventListener('click', playAgainCallback);
        const closebutton = fragment.querySelector('#closeButton');
        closebutton.addEventListener('click', this.closeUIModal);
        // add time elapsed
        fragment.querySelector('#gameTime').innerHTML = `You finished the game in ${timeElapsed} seconds.`;
        return fragment;
    }

    showGameFinishedModal(timeElapsed, restartGame) {
        // Instantiate modal content
        const fragment = this.instantiateGameFinishedModal(timeElapsed, restartGame);
        // Show modal
        const modal = document.getElementById("uiModal");
        const modalContent = document.getElementById("uiModalContent");
        modal.style.display = "block";
        modalContent.innerHTML = '';
        modalContent.appendChild(fragment);
    }

    closeUIModal() {
        const modal = document.getElementById("uiModal");
        modal.style.display = "none";
    }

    reload() {
        location.reload();
    }
}