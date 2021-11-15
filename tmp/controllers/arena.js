'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _factory = require('../models/factory');

var _factory2 = _interopRequireDefault(_factory);

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

var _side = require('./side');

var _side2 = _interopRequireDefault(_side);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var secondClick = false;

var ArenaController = function (_Controller) {
    _inherits(ArenaController, _Controller);

    function ArenaController() {
        _classCallCheck(this, ArenaController);

        var _this = _possibleConstructorReturn(this, (ArenaController.__proto__ || Object.getPrototypeOf(ArenaController)).call(this, 'body'));

        _this.up = new _side2.default(".side.opponent", _this);
        _this.down = new _side2.default(".side.player", _this);

        _this.game = _factory2.default.get('game', { 'up': _factory2.default.get('player', { type: 'computer' }),
            'down': _factory2.default.get('player', { type: 'human' }) });

        _this.on('clickDeck', _this.onClickDeck.bind(_this));
        _this.on('clickHand', _this.onClickHand.bind(_this));
        _this.on('clickBoard', _this.onClickBoard.bind(_this));
        _this.on('targetHand', _this.onTargetHand.bind(_this));
        _this.on('clickEndTurn', _this.onClickEndTurn.bind(_this));

        return _this;
    }

    _createClass(ArenaController, [{
        key: 'onClickDeck',
        value: function onClickDeck(deck) {
            var s = deck.getSide();

            var self = this;
            var cardState = this.game[s].draw();

            cardState.getSide = function () {
                return s;
            };
            self.trigger('drawCard', cardState);

            if (self.game[s].deck.getCardsCount() === 0) {
                self.trigger('emptyDeck');
            }
        }
    }, {
        key: 'onClickHand',
        value: function onClickHand(card) {
            // api call then
            this.trigger('playCard', card);
        }
    }, {
        key: 'onClickBoard',
        value: function onClickBoard(card) {
            var self = this;
            if (!secondClick) {
                this.trigger('activateCard', card);
                secondClick = true;
            } else {
                this.trigger('targetCard', card);

                setTimeout(function () {
                    self.trigger('discardCard', card);
                }, 4000);
                secondClick = false;
            }
        }
    }, {
        key: 'onTargetHand',
        value: function onTargetHand(hand) {
            if (secondClick) {
                this.trigger('attackHand', hand);
            }
        }
    }, {
        key: 'onClickEndTurn',
        value: function onClickEndTurn() {
            var self = this;
            this.trigger('endTurn', { getSide: function getSide() {
                    return 'down';
                } });
            console.log('end turn');

            setTimeout(function () {
                self.trigger('yourTurn', { getSide: function getSide() {
                        return 'down';
                    } });
                console.log('your turn');
            }, 5000);
        }
    }]);

    return ArenaController;
}(_dom2.default);

exports.default = ArenaController;