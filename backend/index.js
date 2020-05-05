'use strict';
const handlebars = require('handlebars');
const routes = require('./routes');
const config = require('../config.js');
const helpers = require('./helpers.js');
const Bcrypt = require('bcrypt');

const people = { // our "users database"
    1: {
      id: 1,
      name: 'Jen Jones'
    }
};

// bring your own validation function
const validate = async function (decoded, request) {
    console.log('abc');
    // do your checks to see if the person is valid
    if (!people[decoded.id]) {
      return { isValid: false };
    }
    else {
      return { isValid: true };
    }
};



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
        
        /*await server.register(require('hapi-auth-jwt2'));
        
        server.auth.strategy('jwt', 'jwt',
        { key: 'linhtut',          // Never Share your secret key
            validate: validate,            // validate function defined above
            verifyOptions: { algorithms: [ 'HS256' ] } // pick a strong algorithm
        });
        
        server.auth.default('jwt');*/
       
        server.route(routes);
        // etc ...
        //await someAsyncMethods();
    }
};