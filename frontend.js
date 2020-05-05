'use strict';

const Config = require('./config.js');
const Hapi = require('hapi');
const BabelRegister = require('babel-register');


const server = Hapi.server({
    port: Config.frontend.port,
    host: Config.frontend.host,
    router: {
        stripTrailingSlash: true
    },
    relativeTo: __dirname,
    preRegister: (server) => {
        BabelRegister();
    }
});

const init = async () => {
    try {
        await server.register(
            [
                {
                    plugin: require('inert')
                },
                {
                    plugin: require('vision')
                },
                {
                    plugin: require('./frontend/index')
                },
                {
                    plugin: require('good'),
                    options: {
                        reporters: {
                            console: [{
                                module: 'good-squeeze',
                                name: 'Squeeze',
                                args: [{
                                    response: '*',
                                    log: '*'
                                }]
                            }, {
                                module: 'good-console'
                            }, 'stdout']
                        }
                    }
                    
                }
            ]
        );
        await server.start();
        console.log(`Server running at: ${server.info.uri}`);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};

init();