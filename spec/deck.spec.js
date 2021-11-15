import Deck from '../src/models/deck';

let deck = new Deck({ cards: [{ val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }, { val: 5 }, { val: 6 }, { val: 7 }, { val: 8 }, { val: 9 }, { val: 10 }, { val: 11 }] })

describe('class Deck', () => {

    describe(' -- constructor', function () {
        it(' param config sets deck (cards)', function () {
            expect(Array.isArray(deck.config.cards))
                .toBe(true)
        })
    })

    describe(' -- shuffle', function () {
        it(' Should return bool', function () {
            expect(typeof (deck.shuffle()))
                .toBe('boolean')
        })
    })

    describe(' -- insertAt', () => {

        let insertAt = deck.insertAt({ val: 12 }, 4)

        it(' First param need to be a card', () => {
            expect(typeof (deck.card))
                .toBe('object')
        })

        it(' Second param need to be an int', () => {
            expect(Number.isInteger(deck.position))
                .toBe(true)
        })

        it(' Should return bool', function () {
            expect(typeof (insertAt))
                .toBe('boolean')
        })
    })


    describe(' -- draw', () => {
        it(' Should return card (mixed) or false', function () {
            expect(deck.draw() === false || typeof (deck.draw()) === 'object')
                .toBe(true)
        })
    })

    describe(' -- getCardsCount', () => {
        it(' Should return cards count (int)', function () {
            expect(Number.isInteger(deck.getCardsCount()))
                .toBe(true)
        })
    })

})