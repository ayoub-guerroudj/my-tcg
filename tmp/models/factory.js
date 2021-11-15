'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = "prod";

exports.default = {

    setEnv: function setEnv() {
        var paramEnv = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'prod';

        env = paramEnv;
    },

    get: function get(modelName) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


        if (env === "test") {
            modelName = "mock" + modelName.substr(0, 1).toUpperCase() + modelName.substr(1);
        }

        if (_config2.default[modelName]) {
            var configParams = JSON.parse(_config2.default[modelName].param),
                constructorParams = $.extend({}, configParams, params);

            var inst = Object.create(_config2.default[modelName].class.prototype);
            _config2.default[modelName].class.call(inst, constructorParams);
            return inst;
        } else {
            throw Error("can't load model " + modelName);
        }
    }

};