'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _factory = require('./factory');

var _factory2 = _interopRequireDefault(_factory);

var _pawn = require('./pawn');

var _pawn2 = _interopRequireDefault(_pawn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
    function Player(config) {
        _classCallCheck(this, Player);

        this.config = config;

        this.deck = _factory2.default.get('deck');
    }

    _createClass(Player, [{
        key: 'draw',
        value: function draw() {
            return this.deck.draw();
        }
    }]);

    return Player;
}();

exports.default = Player;