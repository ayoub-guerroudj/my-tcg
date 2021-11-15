import Cemetary from '../src/models/cemetary';

let cemetary = new Cemetary({ cards: [{ val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }, { val: 5 }, { val: 6 }, { val: 7 }, { val: 8 }, { val: 9 }, { val: 10 }, { val: 11 }] })

describe('class Cemetary', () => {

    describe(' -- constructor', function () {
        it(' param config sets cemetary (cards)', function () {
            expect(Array.isArray(cemetary.config.cards))
                .toBe(true)
        })
    })

    describe(' -- shuffle', function () {
        it('Should return bool', function () {
            expect(typeof (cemetary.shuffle()))
                .toBe('boolean')
        })
    })

    describe(' -- insertAt', () => {

        let insertAt = cemetary.insertAt({ val: 12 }, 4)

        it(' First param need to be a card', () => {
            expect(typeof (cemetary.card))
                .toBe('object')
        })

        it(' Second param need to be an int', () => {
            expect(Number.isInteger(cemetary.position))
                .toBe(true)
        })

        it(' Should return bool', function () {
            expect(typeof (insertAt))
                .toBe('boolean')
        })
    })


    describe(' -- draw', () => {
        it(' Should return card (mixed) or false', function () {
            expect(cemetary.draw() === false || typeof (cemetary.draw()) === 'object')
                .toBe(true)
        })
    })

    describe(' -- getCardsCount', () => {
        it(' Should return cards count (int)', function () {
            expect(Number.isInteger(cemetary.getCardsCount()))
                .toBe(true)
        })
    })

})