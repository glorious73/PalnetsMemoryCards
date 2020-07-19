export default class UI {
    constructor() {

    }

    instantiateGameFinishedModal(timeElapsed) {
        // grab template
        let template = document.getElementById('gameFinishedTemplate');
        let fragment = document.importNode(template.content, true);
        // add event listeners
        const button = fragment.querySelector('#playAgainButton');
        button.addEventListener('click', this.reload);
        // add time elapsed
        fragment.querySelector('#gameTime').innerHTML = `You finished the game in ${timeElapsed} seconds.`;
        return fragment;
    }

    showGameFinishedModal(timeElapsed) {
        // Instantiate modal content
        const fragment = this.instantiateGameFinishedModal(timeElapsed);
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