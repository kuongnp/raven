'use strict';

const handlebars = require('handlebars');
const routes = require('./routes');
const helpers = require('./helpers.js');

exports.plugin = {
    name: 'mohican',
    version: '1.0.0',
    register: async function (server, options) {
        server.ext('onPreResponse', async function (request, h) {
            var response = request.response;
             if (response.variety && response.variety === 'view') {
                 response.source.context = response.source.context || {};
                 response.source.context.site =  await helpers.get_site();
                 response.source.context.site.main_menu =  await helpers.get_nav('main_menu');
                 response.source.context.site.footer_menu =  await helpers.get_nav('footer_menu');
             }
            return h.continue;
        });
        
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
        server.route(routes);
    }
};
