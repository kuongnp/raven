'use strict';

const Config = require('./config.js');
const Hapi = require('hapi');


const server = Hapi.server({
    port: Config.backend.port,
    host: Config.backend.host
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
                    plugin: require('./backend/index')
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