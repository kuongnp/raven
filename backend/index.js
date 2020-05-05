'use strict';
const handlebars = require('handlebars');
const routes = require('./routes');
const config = require('../config.js');
const helpers = require('./helpers.js');

exports.plugin = {
    name: 'backend',
    version: '1.0.0',
    register: async function (server, options) {
        server.views({
            engines: {
                html: handlebars.create(),
            },
            relativeTo: __dirname,
            path: './modules',
            layoutPath: './layouts',
            layout: 'default',
            partialsPath:'./partials',
            helpersPath: './helpers'
        });
        const bind = {
            api_url: 'http://'+config.api.host+':'+config.api.port,
            helpers: helpers
        };
        server.bind(bind);
        server.route(routes);
        // etc ...
        //await someAsyncMethods();
    }
};