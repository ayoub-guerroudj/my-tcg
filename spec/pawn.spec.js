import EventManager from '../src/eventManager';
import Pawn from '../src/models/pawn'

let pawn = new Pawn(5, 7, 6);
let pawn2 = new Pawn(8, 4, 6);
describe('class Pawn', () => {
    it('Should extend eventManager', () => {
        expect(EventManager.prototype.isPrototypeOf(pawn)).toBe(true)
    })

    describe(' -- constructor', () => {
        it(' First param (life) sould be an int', () => {
            expect(Number.isInteger(pawn.life)).toBe(true)
        })
        it(' Second param (strength) sould be an int', () => {
            expect(Number.isInteger(pawn.strength)).toBe(true)
        })
        it(' Third param (def) sould be an int', () => {
            expect(Number.isInteger(pawn.def)).toBe(true)
        })
    })

    describe(' -- getLife', () => {
        it(' Should return an int', () => {
            expect(Number.isInteger(pawn.getLife())).toBe(true)
        })
    })

    describe(' -- getStrength', () => {
        it(' Should return an int', () => {
            expect(Number.isInteger(pawn.getStrength())).toBe(true)
        })
    })

    describe(' -- getDef', () => {
        it(' Should return an int', () => {
            expect(Number.isInteger(pawn.getDef())).toBe(true)
        })
    })

    describe(' -- attack', () => {
        let attack = pawn.attack(pawn2)
        it(' Should return a boolean', () => {
            expect(typeof(attack)).toBe('boolean')
        })

        it(' First param should recive a target extending Pawn class', () => {
            expect(Pawn.prototype.isPrototypeOf(pawn.target)).toBe(true)
        })
    })

    describe(' -- receiveAttack', () => {
        let receiveAttack = pawn2.receiveAttack(pawn, false)
        it(' Should return a boolean', () => {
            expect(typeof(receiveAttack)).toBe('boolean')
        })

        it(' First param Should recive an opponent extending Pawn class', () => {
            expect(Pawn.prototype.isPrototypeOf(pawn.opponent)).toBe(true)
        })

        it(' Second param should receive a bool', () => {
            expect(typeof(pawn.strikeBack)).toBe('boolean')
        })
    })
})
