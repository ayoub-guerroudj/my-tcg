export default class Hand {

    constructor(config) {
        this.config = config
        this.cards = config.cards
        if (config.limit) {
            this.limit = config.limit
        } else {
            this.limit = 7
        }
    }

    addCard(card) {
        this.card = card
        let prev_length = this.cards.length

        if (this.cards.length === 7) {
            return false
        }

        this.cards.push(card)

        if (this.cards.length === prev_length + 1) {
            return true
        }

        return false
    }

    removeCard(position) {
        this.position = position
        if (this.cards.length === 0) {
            return false
        }
        let card = this.cards.splice(this.position, 1)

        return card
    }

    getAllCards() {
        return this.cards
    }

    getCardsCount() {
        return this.cards.length
    }
}