export default class UI {
    constructor() {

    }

    showDeleteModal(e) {
        // Prevent default
        e = e || window.event;
        e.preventDefault();
        // Show modal
        const modal = document.getElementById("uiModal");
        const modalContent = document.getElementById("uiModalContent");
        modal.style.display = "block";
        modalContent.innerHTML = `
                    <div class="card card-color p-5 mt-4">
                        <h2>Congrats!</h2>
                        <hr />
                        <h5 class="p-3">You finished the game in XYZ seconds.</h5>
                        <hr />
                        <div class="d-flex flex-row align-items-center justify-content-center">
                            <button type="button" class="btn-play-again mx-2" onclick="playAgain()">Play Again</button>
                        </div>
                    </div>
        `;
    }

    closeUIModal() {
        const modal = document.getElementById("uiModal");
        modal.style.display = "none";
    }
}