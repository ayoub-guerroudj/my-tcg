'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('babel-polyfill');

var _arena = require('./controllers/arena');

var _arena2 = _interopRequireDefault(_arena);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var main = function main() {
    _classCallCheck(this, main);

    new _arena2.default();
};

exports.default = new main();