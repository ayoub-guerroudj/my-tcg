import models from './config'

var env = "prod";

export default {

    setEnv: function (paramEnv = 'prod') {
        env = paramEnv;
    },

    get: function (modelName, params = {}) {

        if (env === "test") {
            modelName = "mock" + modelName.substr(0,1).toUpperCase() + modelName.substr(1);
        }

        if (models[modelName]) {
            var configParams = JSON.parse(models[modelName].param),
                constructorParams = $.extend({}, configParams, params);

            var inst = Object.create(models[modelName].class.prototype);
            models[modelName].class.call(inst, constructorParams);
            return inst;
        } else {
            throw Error ("can't load model " + modelName);
        }
    }

}