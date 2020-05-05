'use strict';
const Config = require('./config.js');
const manifest = [
    //api
    {
        server: {
            port: Config.api.port,
            host: Config.api.host
        },
        register: {
            plugins: [
                {
                    plugin: './db/index'
                },
                {
                    plugin: './api/index'
                },
                {
                    plugin: 'good',
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
        }
    },
    //backend
    {
        server: {
            port: Config.backend.port,
            host: Config.backend.host,
            router: {
              stripTrailingSlash: true
            }
        },
        register: {
            plugins: [
                {
                    plugin: 'inert'
                },
                {
                    plugin: 'vision'
                },
                {
                    plugin: './backend/index'
                },
                {
                    plugin: 'good',
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
        }
    },
    //frontend
    {
        server: {
            port: Config.frontend.port,
            host: Config.frontend.host
        },
        register: {
            plugins: [
                {
                    plugin: 'inert'
                },
                {
                    plugin: 'vision'
                },
                {
                    plugin: './frontend/index'
                },
                {
                    plugin: 'good',
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
        }
    }
    
];



module.exports = manifest;