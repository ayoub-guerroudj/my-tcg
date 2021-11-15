"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Deck = function () {
    function Deck(config) {
        _classCallCheck(this, Deck);

        this.config = config;
        this.cards = this.config.cards;
    }

    _createClass(Deck, [{
        key: "randomize",
        value: function randomize(array) {

            var currentIndex = array.length,
                randomIndex = void 0;

            // While there remain elements to shuffle...
            while (currentIndex != 0) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                var _ref = [array[randomIndex], array[currentIndex]];
                array[currentIndex] = _ref[0];
                array[randomIndex] = _ref[1];
            }

            return array;
        }
    }, {
        key: "shuffle",
        value: function shuffle() {
            // had to shuffle the cards
            this.max = this.cards.length;
            var past_cards = this.cards;
            this.cards = this.randomize(this.cards);

            if (!(past_cards === this.cards)) {
                return true;
            }
            return false;
        }
    }, {
        key: "insertAt",
        value: function insertAt(card, position) {

            this.card = card;
            this.position = position;
            this.prev_length = this.cards.length;

            if (position === undefined) {
                position = this.prev_length;
            }

            this.cards.splice(position, 0, card);

            if (this.cards.length === this.prev_length + 1) {
                return true;
            }
            return false;
        }
    }, {
        key: "draw",
        value: function draw() {
            if (this.cards.length === 0) {
                return false;
            }
            var card = this.cards.shift();

            return card;
        }
    }, {
        key: "getCardsCount",
        value: function getCardsCount() {
            return this.cards.length;
        }
    }]);

    return Deck;
}();

exports.default = Deck;