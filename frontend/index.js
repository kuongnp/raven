'use strict';
const helpers = require('./helpers');
//const config = require('./config.json');

exports.plugin = {
    name: 'frontend',
    version: '1.0.0',
    register: async function (server, options) {
        let active_theme = await helpers.active_theme();
        let key = active_theme.key;
        await server.register(require('./'+'portfolio'));
    }
};