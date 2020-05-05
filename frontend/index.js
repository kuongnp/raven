'use strict';

const config = require('./config.json');

exports.plugin = {
    name: 'frontend',
    version: '1.0.0',
    register: async function (server, options) {
        await server.register(require('./'+config.key));
    }
};