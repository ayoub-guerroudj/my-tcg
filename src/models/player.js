import ModelFactory from './factory';
import Pawn from './pawn'

export default class Player{

    constructor(config) {
        this.config = config;

        this.deck = ModelFactory.get('deck');
    }

    draw () {
        return this.deck.draw();
    }



}