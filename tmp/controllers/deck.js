'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _factory = require('../models/factory');

var _factory2 = _interopRequireDefault(_factory);

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeckController = function (_Controller) {
    _inherits(DeckController, _Controller);

    function DeckController(selector, parent) {
        _classCallCheck(this, DeckController);

        var _this = _possibleConstructorReturn(this, (DeckController.__proto__ || Object.getPrototypeOf(DeckController)).call(this, selector, parent));

        _this.$dom.on('click', _this.onClick.bind(_this));

        _this.parent.on('drawCard', _this.onDrawCard.bind(_this));
        _this.parent.on('emptyDeck', _this.onEmpty.bind(_this));

        return _this;
    }

    _createClass(DeckController, [{
        key: 'onClick',
        value: function onClick() {
            this.parent.trigger('clickDeck', this);
        }
    }, {
        key: 'onDrawCard',
        value: function onDrawCard(cardState) {

            var self = this,
                cardCtrl,
                card;

            if (cardState !== undefined) {
                cardCtrl = new _card2.default(self.parent), cardCtrl.setState(cardState);

                card = cardCtrl.getDom();
                card.offset(self.$dom.offset());

                card.on('transitionend', function te() {
                    card.off('transitionend', te);

                    self.parent.trigger('newCard', cardCtrl);
                });

                setTimeout(function () {
                    cardCtrl.setParent(this);
                    card.addClass('draw');

                    card.offset({ "left": self.parent.getDom().width() / 2 - card.width() / 2, "top": card.offset().top + (self.parent.side === "up" ? 1 : -1) * 100 });
                }, 10);

                if (self.getSide() === 'down') {
                    setTimeout(function () {
                        card.addClass('flip');
                        card.offset({ "left": self.parent.getDom().width() / 2 - card.width() / 2, "top": card.offset().top + (self.parent.side === "up" ? 1 : -1) * 100 });
                    }, 200);
                }
            }
        }
    }, {
        key: 'onEmpty',
        value: function onEmpty() {
            this.$dom.addClass('empty');
        }
    }]);

    return DeckController;
}(_dom2.default);

exports.default = DeckController;