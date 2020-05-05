'use strict';

const route = require('./route');
exports.plugin = {
    name: 'setting',
    version: '1.0.0',
    register: async function (server, options) {
        server.route(route);
    }
};