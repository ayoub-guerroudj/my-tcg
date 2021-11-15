
export default class Deck {

    constructor(config) {
        this.config = config
        this.cards = this.config.cards
    }

    randomize(array) {

        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    shuffle() {
        // had to shuffle the cards
        this.max = this.cards.length
        let past_cards = this.cards
        this.cards = this.randomize(this.cards)

        if (!(past_cards === this.cards)) {
            return true
        }
        return false
    }

    insertAt(card, position) {


        this.card = card
        this.position = position
        this.prev_length = this.cards.length

        if (position === undefined) {
            position = this.prev_length
        }

        this.cards.splice(position, 0, card)

        if (this.cards.length === this.prev_length + 1) {
            return true
        }
        return false
    }

    draw() {
        if (this.cards.length === 0) {
            return false
        }
        let card = this.cards.shift()

        return card
    }

    getCardsCount() {
        return this.cards.length
    }
}