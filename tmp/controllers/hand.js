'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HandController = function (_Controller) {
    _inherits(HandController, _Controller);

    function HandController(selector, parent) {
        _classCallCheck(this, HandController);

        var _this = _possibleConstructorReturn(this, (HandController.__proto__ || Object.getPrototypeOf(HandController)).call(this, selector, parent));

        _this.mCards = [];

        _this.$dom.find('.end-turn').on('click', _this.onClickEndTurn.bind(_this));
        _this.$dom.find('.shield').on('click', _this.onClickShield.bind(_this));

        _this.domTarget = _this.$dom.find('.shield');

        _this.on('clickCard', _this.onClickCard.bind(_this));

        _this.parent.on('newCard', _this.onNewCard.bind(_this));
        _this.parent.on('playCard', _this.onPlayCard.bind(_this));
        return _this;
    }

    _createClass(HandController, [{
        key: 'onClickEndTurn',
        value: function onClickEndTurn() {
            this.parent.trigger('clickEndTurn');
        }
    }, {
        key: 'onClickShield',
        value: function onClickShield() {
            this.parent.trigger('targetHand', this);
        }
    }, {
        key: 'onClickCard',
        value: function onClickCard(card) {
            this.parent.trigger('clickHand', card);
        }
    }, {
        key: 'onNewCard',
        value: function onNewCard(card) {
            var state = card.getState();
            state.position = this.mCards.length;
            this.mCards.push(card);

            card.setParent(this);
            card.getDom().addClass('hand');

            var width = this.mCards.length * 110,
                start = this.parent.getDom().width() / 2 - width / 2,
                topPosition = this.getSide() === "down" ? this.parent.getDom().height() - 70 : -70;

            card.getDom().css({ "top": topPosition, "left": start });

            this.mCards.forEach(function (cardCtrl) {
                var $dom = cardCtrl.getDom();
                $dom.offset({ "left": start + cardCtrl.getState().position * 105 + 5 });
            });
        }
    }, {
        key: 'onPlayCard',
        value: function onPlayCard(card) {
            this.mCards.splice(card.getState().position, 1);
            card.getDom().removeClass('hand');
        }
    }]);

    return HandController;
}(_dom2.default);

exports.default = HandController;