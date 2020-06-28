const logger = require('../services/logger');

module.exports.Error = (message, data, code) => {
    let logString = message;

    if (code === undefined) {
        code = 500;
    }

    let obj = {
        code: code,
        status: false,
        message: message
    };

    if (data !== undefined) {
        obj.data = data;
        logString += ` | ${JSON.stringify(data)}`
    }
    logger.error(logString);
    return obj;
};

module.exports.Success = (message, data, code) => {
    let logString = message;

    if (code === undefined) {
        code = 200;
    }
    let obj = {
        code: code,
        status: true,
        message: message
    };

    if (data !== undefined) {
        obj.data = data;
        logString += ` | ${JSON.stringify(data)}`
    }
    logger.info(logString);
    return obj;
};

module.exports.ValidateParams = (json, required_list) => {
    var miss_list = [];
    for (let x of required_list) {
        if (!json[x]) {
            miss_list.push(x);
        }
    }
    if (miss_list.length > 0) {
        return {status: false, list: miss_list};
    } else {
        return {status: true, list: miss_list};
    }
};