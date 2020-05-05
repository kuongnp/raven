'use strict';

const route = require('./route');
exports.plugin = {
    name: 'menu',
    version: '1.0.0',
    register: async function (server, options) {
        server.route(route);
    }
};