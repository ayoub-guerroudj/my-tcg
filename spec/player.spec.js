import Player from '../src/models/player'
import Pawn from '../src/models/pawn'

let pawn = new Pawn(5, 7, 6);

let player = new Player({test: 'hey'})

describe('class Player', () => {
    it('Should extend Pawn', () => {
        expect(Pawn.prototype.isPrototypeOf(player)).toBe(true)
    })

    describe(' -- constructor', () => {
        it(' First param should be an object', () => {
            expect(typeof(player.config)).toBe('object')
        })
    })
})