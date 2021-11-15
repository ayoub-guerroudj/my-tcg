import Hand from '../src/models/hand'

let hand = new Hand({ cards: [{ val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }, { val: 5 }, { val: 6 }], limit: 7 })

describe('class Hand', () => {
    describe(' -- constructor', () => {
        it(' param config sets hand (cards)', () => {
            expect(Array.isArray(hand.config.cards))
                .toBe(true)
        })

        it(' param config sets limit', () => {
            expect(Number.isInteger(hand.config.limit) || hand.config.limit === undefined)
                .toBe(true)
        })

        it(' set limit to 7 if not setted b4', () => {
            if (hand.config.limit === undefined) {
                expect(hand.limit).toBe(7)
            }
        })
    })

    let add = hand.addCard({ val: 15 })
    describe(' -- addCard', () => {

        it(' Should recive card as first parameter', () => {
            expect(typeof (hand.card))
                .toBe('object')
        })

        it(' Should return bool', () => {
            expect(typeof (add)).toBe('boolean')
        })

        it(' Should return false if hand is full', () => {
            if (hand.cards === 7) {
                expect(add).toBe(false)
            }
        })
    })

    describe(' -- removeCard', () => {
        let remove = hand.removeCard(4)

        it(' Should return a card or false', () => {
            expect(remove === false || typeof(remove) === 'object').toBe(true)
        })

        it(' First param need to be an int', () => {
            expect(Number.isInteger(hand.position))
                .toBe(true)
        })
    })

    describe(' -- getAllCards', () => {
        it(' Should return an array', () => {
            expect(Array.isArray(hand.getAllCards())).toBe(true)
        })
    })

    describe(' -- getCardsCount', () => {
        it(' Should return an integer', () => {
            expect(Number.isInteger(hand.getCardsCount())).toBe(true)
        })
    })
})