export default class Card {
    constructor() {

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
}