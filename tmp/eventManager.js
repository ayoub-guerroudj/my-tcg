"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventManager = function () {
    function EventManager() {
        _classCallCheck(this, EventManager);

        this.mlisteners = {};
    }

    _createClass(EventManager, [{
        key: "trigger",
        value: function trigger(event) {
            var _this = this;

            var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (this.mlisteners[event]) {
                this.mlisteners[event].forEach(function (el) {
                    el.call(_this, payload);
                });
            }
        }
    }, {
        key: "on",
        value: function on(event, callback) {
            if (this.mlisteners[event] === undefined) {
                this.mlisteners[event] = [];
            }

            this.mlisteners[event].push(callback);
        }
    }]);

    return EventManager;
}();

exports.default = EventManager;