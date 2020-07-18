export default class UI {
    constructor() {

    }

    showGameFinishedModal() {
        const modal = document.getElementById("uiModal");
        const modalContent = document.getElementById("uiModalContent");
        modal.style.display = "block";
        let template = document.getElementById('gameFinishedTemplate');
        let fragment = document.importNode(template.content, true);
        modalContent.appendChild(fragment);
    }

    closeUIModal() {
        const modal = document.getElementById("uiModal");
        modal.style.display = "none";
    }
}