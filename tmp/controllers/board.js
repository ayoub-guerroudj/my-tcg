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

var BoardController = function (_Controller) {
    _inherits(BoardController, _Controller);

    function BoardController(selector, parent) {
        _classCallCheck(this, BoardController);

        var _this = _possibleConstructorReturn(this, (BoardController.__proto__ || Object.getPrototypeOf(BoardController)).call(this, selector, parent));

        _this.mCards = [];
        _this.mActiveCard = null;

        _this.on('clickCard', _this.onClickCard.bind(_this));

        _this.parent.on('playCard', _this.onPlayCard.bind(_this));
        _this.parent.on('activateCard', _this.onActivateCard.bind(_this));
        _this.parent.on('targetCard', _this.onTargetCard.bind(_this));
        _this.parent.on('attackCard', _this.onAttack.bind(_this));
        _this.parent.on('attackHand', _this.onAttack.bind(_this));

        _this.parent.on('discardCard', _this.onDiscardCard.bind(_this));

        return _this;
    }

    _createClass(BoardController, [{
        key: 'onClickCard',
        value: function onClickCard(card) {
            this.parent.trigger('clickBoard', card);
        }
    }, {
        key: 'onPlayCard',
        value: function onPlayCard(card) {
            var self = this,
                state = card.getState();

            state.position = this.mCards.length;
            this.mCards.push(card);

            var width = this.mCards.length * 110,
                start = this.parent.getDom().width() / 2 - width / 2;

            card.setParent(this);
            card.getDom().addClass('board');

            card.getDom().on('transitionend', function te() {
                var $this = $(this);

                $this.off('transitionend', te);

                card.getDom().css({ "top": self.parent.getDom().height() / 2 - 70 });

                self.mCards.forEach(function (cardCtrl) {
                    var $dom = cardCtrl.getDom();
                    $dom.offset({ "left": start + cardCtrl.getState().position * 105 + 5 });
                });

                $this.removeClass('play');
            });

            card.getDom().addClass('play');

            if (this.getSide() === "up") {
                card.getDom().addClass('flip');
            }
        }
    }, {
        key: 'onActivateCard',
        value: function onActivateCard(card) {
            this.mActiveCard = card;
            card.getDom().addClass('active');
        }
    }, {
        key: 'onTargetCard',
        value: function onTargetCard(card) {
            card.getDom().addClass('target');
            var intervalCount = 0,
                i = setInterval(function () {
                intervalCount++;
                if (intervalCount == 1) {
                    card.getDom().addClass("hit");
                    card.getDom().removeClass("target");
                } else {
                    card.getDom().removeClass("hit");
                    clearInterval(i);
                }
            }, 1500);
        }
    }, {
        key: 'onAttack',
        value: function onAttack(target) {
            var initOffset = this.mActiveCard.getDom().offset(),
                targetOffset = target.domTarget !== undefined ? target.domTarget.offset() : target.getDom().offset();

            if (this.getSide() === "down") {
                targetOffset.top += 20;
                targetOffset.left += 70;
            } else {
                targetOffset.top -= 20;
                targetOffset.left -= 70;
            }

            var activeCardDom = this.mActiveCard.getDom();
            activeCardDom.on('transitionend', function te() {
                var $this = $(this);
                $this.off('transitionend', te);
                $this.offset(initOffset);
                activeCardDom.removeClass('attack');
            });
            activeCardDom.addClass('attack');
            activeCardDom.removeClass('active');
            activeCardDom.offset(targetOffset);
        }
    }, {
        key: 'onDiscardCard',
        value: function onDiscardCard(card) {
            this.mCards.splice(card.getState().position, 1);
            card.getDom().removeClass('board');
        }
    }]);

    return BoardController;
}(_dom2.default);

exports.default = BoardController;