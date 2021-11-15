import EventManager from '../eventManager'

export default class Pawn extends EventManager {
    constructor(life, strength, def) {
        super();
        this.life = life;
        this.strength = strength;
        this.def = def;
    }

    getLife() {
        return this.life
    }

    getStrength() {
        return this.strength
    }

    getDef() {
        return this.def
    }

    attack(target) {
        this.target = target

        if (this.target.receiveAttack(this)) {
            this.target.receiveAttack(this)
            return true
        }
        return false
    }

    receiveAttack(opponent, strikeBack) {
        this.opponent = opponent
        this.strikeBack = strikeBack
        if (this.strikeBack) {
            this.life = this.life - this.opponent.def
            return true
        } else {
            this.life = this.life - this.opponent.strength
            this.opponent.receiveAttack(this, true)
            return true
        }
        return false
    }
}