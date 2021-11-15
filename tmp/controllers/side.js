'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

var _deck = require('./deck');

var _deck2 = _interopRequireDefault(_deck);

var _hand = require('./hand');

var _hand2 = _interopRequireDefault(_hand);

var _board = require('./board');

var _board2 = _interopRequireDefault(_board);

var _cemetary = require('./cemetary');

var _cemetary2 = _interopRequireDefault(_cemetary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideController = function (_Controller) {
    _inherits(SideController, _Controller);

    function SideController(selector, parent) {
        _classCallCheck(this, SideController);

        var _this = _possibleConstructorReturn(this, (SideController.__proto__ || Object.getPrototypeOf(SideController)).call(this, selector, parent));

        _this.side = _this.$dom.offset().top === 0 ? "up" : "down";

        _this.mDeck = new _deck2.default(selector + ' > .deck', _this);
        _this.mHand = new _hand2.default(selector + ' > .hand-area', _this);
        _this.mBoard = new _board2.default(selector + ' > .board', _this);
        _this.mCemetary = new _cemetary2.default(selector + ' > .cemetary', _this);

        _this.on('clickDeck', _this.fwdToParent.bind(_this, 'clickDeck'));
        _this.on('clickHand', _this.fwdToParent.bind(_this, 'clickHand'));
        _this.on('clickBoard', _this.fwdToParent.bind(_this, 'clickBoard'));
        _this.on('targetHand', _this.fwdToParent.bind(_this, 'targetHand'));
        _this.on('clickEndTurn', _this.fwdToParent.bind(_this, 'clickEndTurn'));

        _this.parent.on('drawCard', _this.fwdToChild.bind(_this, 'drawCard'));
        _this.parent.on('playCard', _this.fwdToChild.bind(_this, 'playCard'));
        _this.parent.on('activateCard', _this.fwdToChild.bind(_this, 'activateCard'));
        _this.parent.on('targetCard', _this.fwdToChild.bind(_this, 'targetCard', 'attackCard'));
        _this.parent.on('discardCard', _this.fwdToChild.bind(_this, 'activateCard'));
        _this.parent.on('attackHand', _this.fwdToChild.bind(_this, false, 'attackHand'));

        if (_this.side === 'down') {
            _this.parent.on('endTurn', _this.fwdToChild.bind(_this, 'endTurn'));
            _this.parent.on('yourTurn', _this.fwdToChild.bind(_this, 'yourTurn'));
        }

        return _this;
    }

    _createClass(SideController, [{
        key: 'fwdToParent',
        value: function fwdToParent(event, p) {
            this.parent.trigger(event, p);
        }
    }, {
        key: 'fwdToChild',
        value: function fwdToChild(sameSide, oppositeSide, payload) {

            payload = payload || oppositeSide;

            if (payload.getSide() === this.getSide()) {
                if (sameSide !== false) {
                    this.trigger(sameSide, payload);
                }
            } else {
                if (typeof oppositeSide === "string") {
                    this.trigger(oppositeSide, payload);
                }
            }
        }
    }]);

    return SideController;
}(_dom2.default);

exports.default = SideController;