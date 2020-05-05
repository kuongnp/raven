'use strict';

const routes = require('./routes');

exports.plugin = {
    name: 'api',
    version: '1.0.0',
    register: async function (server, options) {
        // Create a route for example
        server.route({
            method: 'GET',
            path: '/',
            handler: function (request, h) {
                return 'Welcome API Raven.vn';
            }
        });

        // etc ...
        //await someAsyncMethods();
        //await server.register([require('./menu'),require('./setting')]);
        server.route(routes);
    }
};
