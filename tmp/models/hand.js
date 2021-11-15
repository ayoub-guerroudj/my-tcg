"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hand = function () {
    function Hand(config) {
        _classCallCheck(this, Hand);

        this.config = config;
        this.cards = config.cards;
        if (config.limit) {
            this.limit = config.limit;
        } else {
            this.limit = 7;
        }
    }

    _createClass(Hand, [{
        key: "addCard",
        value: function addCard(card) {
            this.card = card;
            var prev_length = this.cards.length;

            if (this.cards.length === 7) {
                return false;
            }

            this.cards.push(card);

            if (this.cards.length === prev_length + 1) {
                return true;
            }

            return false;
        }
    }, {
        key: "removeCard",
        value: function removeCard(position) {
            this.position = position;
            if (this.cards.length === 0) {
                return false;
            }
            var card = this.cards.splice(this.position, 1);

            return card;
        }
    }, {
        key: "getAllCards",
        value: function getAllCards() {
            return this.cards;
        }
    }, {
        key: "getCardsCount",
        value: function getCardsCount() {
            return this.cards.length;
        }
    }]);

    return Hand;
}();

exports.default = Hand;