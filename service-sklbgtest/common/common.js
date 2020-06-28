var _ = require('lodash');
const logger = require('../services/logger');

const Error = (message, data, code) => {
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

const Success = (message, data, code) => {
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

const ValidateParams = (json, required_list) => {
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

const Filter = (data, filters) => {
   
    // return data after applying all the filters
    if (Object.keys(filters).length == 0) {
        return data;
    }

    // select first filter
    let key = Object.keys(filters)[0];

    // apply selected filter againest to data
    let filteredData = data.filter((d)=>{
        return _.get(d, key) == filters[key];
    });

    // remove applyed filter from filters list
    let {[key]: removedKey, ...availableFilters} = filters;

    // call function recursively with filtered data and
    // filters that available for apply
    return Filter(filteredData, availableFilters)
}

module.exports = {
    Error,
    Success,
    ValidateParams,
    Filter
}