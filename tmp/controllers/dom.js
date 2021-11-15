'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jqueryBrowserify = require('jquery-browserify');

var _jqueryBrowserify2 = _interopRequireDefault(_jqueryBrowserify);

var _eventManager = require('../eventManager');

var _eventManager2 = _interopRequireDefault(_eventManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dom = function (_EventManager) {
    _inherits(Dom, _EventManager);

    function Dom(selector) {
        var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, Dom);

        var _this = _possibleConstructorReturn(this, (Dom.__proto__ || Object.getPrototypeOf(Dom)).call(this));

        _this.$dom = (0, _jqueryBrowserify2.default)(selector);
        _this.parent = parent;

        if (parent) {
            var p = parent;
            while (p.parent !== null) {
                p = p.parent;
            }
            _this.root = p;
        } else {
            _this.root = _this;
        }

        _this.mState;

        _this.side = "";

        return _this;
    }

    _createClass(Dom, [{
        key: 'getSide',
        value: function getSide() {
            if (this.side === "") {
                return this.parent.getSide();
            } else {
                return this.side;
            }
        }
    }, {
        key: 'setState',
        value: function setState(state) {
            this.mState = state;
        }
    }, {
        key: 'getState',
        value: function getState() {
            return this.mState;
        }
    }, {
        key: 'setParent',
        value: function setParent(parent) {
            this.parent = parent;
        }
    }, {
        key: 'getParent',
        value: function getParent() {
            return this.parent;
        }
    }, {
        key: 'setDom',
        value: function setDom(selector) {
            this.$dom = (0, _jqueryBrowserify2.default)(selector);
        }
    }, {
        key: 'getDom',
        value: function getDom() {
            return this.$dom;
        }
    }]);

    return Dom;
}(_eventManager2.default);

exports.default = Dom;