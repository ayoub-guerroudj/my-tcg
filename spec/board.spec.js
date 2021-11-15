import Board from '../src/models/board'

let board = new Board({ cards: [{ val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }, { val: 5 }, { val: 6 }], limit: 7 })

describe('class Board', () => {
    describe(' -- constructor', () => {
        it(' param config sets board (cards)', () => {
            expect(Array.isArray(board.config.cards))
                .toBe(true)
        })

        it(' param config sets limit', () => {
            expect(Number.isInteger(board.config.limit) || board.config.limit === undefined)
                .toBe(true)
        })

        it(' set limit to 7 if not setted b4', () => {
            if (board.config.limit === undefined) {
                expect(board.limit).toBe(7)
            }
        })
    })

    let add = board.addCard({ val: 15 })
    describe(' -- addCard', () => {

        it(' Should recive card as first parameter', () => {
            expect(typeof (board.card))
                .toBe('object')
        })

        it(' Should return bool', () => {
            expect(typeof (add)).toBe('boolean')
        })

        it(' Should return false if board is full', () => {
            if (board.cards === 7) {
                expect(add).toBe(false)
            }
        })
    })

    describe(' -- removeCard', () => {
        let remove = board.removeCard(4)

        it(' Should return a card or false', () => {
            expect(remove === false || typeof(remove) === 'object').toBe(true)
        })
        
        it(' First param need to be an int', () => {
            expect(Number.isInteger(board.position))
                .toBe(true)
        })
    })

    describe(' -- getAllCards', () => {
        it(' Should return an array', () => {
            expect(Array.isArray(board.getAllCards())).toBe(true)
        })
    })

    describe(' -- getCardsCount', () => {
        it(' Should return an integer', () => {
            expect(Number.isInteger(board.getCardsCount())).toBe(true)
        })
    })
})