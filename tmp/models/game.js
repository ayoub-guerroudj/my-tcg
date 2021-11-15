"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function Game(config) {
    _classCallCheck(this, Game);

    this.up = config.up;
    this.down = config.down;
};

exports.default = Game;