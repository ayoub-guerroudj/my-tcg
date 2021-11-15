'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardController = function (_Controller) {
    _inherits(CardController, _Controller);

    function CardController(parent) {
        _classCallCheck(this, CardController);

        var _this = _possibleConstructorReturn(this, (CardController.__proto__ || Object.getPrototypeOf(CardController)).call(this, '<div></div>', parent));

        _this.$dom.append('<div></div>').find('div:first-child').addClass('card-front');
        _this.$dom.append('<div></div>').find('div:last-child').addClass('card-back');

        _this.$dom.addClass('card');

        _this.$dom.hover(_this.onOver.bind(_this), _this.onOut.bind(_this));
        _this.$dom.on("click", _this.onClick.bind(_this));

        _this.$dom.appendTo(parent.getDom());
        return _this;
    }

    _createClass(CardController, [{
        key: 'setState',
        value: function setState(state) {
            _get(CardController.prototype.__proto__ || Object.getPrototypeOf(CardController.prototype), 'setState', this).call(this, state);

            this.$dom.find('div:first-child').addClass(state.face);
        }
    }, {
        key: 'setParent',
        value: function setParent(parent) {
            _get(CardController.prototype.__proto__ || Object.getPrototypeOf(CardController.prototype), 'setParent', this).call(this, parent);
        }
    }, {
        key: 'onOver',
        value: function onOver() {
            if (this.$dom.hasClass('hand')) {
                var top = this.getSide() === "down" ? this.root.getDom().height() / 2 - 70 - 30 : -70 + 30;
                this.$dom.css('top', top);
            }
        }
    }, {
        key: 'onOut',
        value: function onOut() {
            if (this.$dom.hasClass('hand')) {
                var top = this.getSide() === "down" ? this.root.getDom().height() / 2 - 70 : -70;
                this.$dom.css('top', top);
            }
        }
    }, {
        key: 'onClick',
        value: function onClick() {
            this.parent.trigger('clickCard', this);
        }
    }]);

    return CardController;
}(_dom2.default);

exports.default = CardController;