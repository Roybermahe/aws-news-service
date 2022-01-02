"use strict";
var fetch = require('cross-fetch');

module.exports = {
    get: async (url) => {
        const response = await fetch(url);
        return await response.json();
    }
}

