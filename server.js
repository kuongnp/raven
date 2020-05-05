'use strict';

const _ = require('lodash');
const Glue = require('glue');
const manifest = require('./manifest');
const BabelRegister = require('babel-register');


const options = {
    relativeTo: __dirname,
    preRegister: (server) => {
        BabelRegister();
    }
};

const startServer = async function () {
    try {
        for (const fest of manifest) {
            const server = await Glue.compose(fest, options);
            await server.start();
            console.log('server started at: ' + server.info.uri);
        }
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};

startServer();

