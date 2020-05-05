'use strict';
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { StaticRouter } from 'react-router'
import App from './app.jsx'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux'

import helpers from './helpers.js'

const store = createStore(reducer);
const internals = {};
internals.routeHandler = function (request, h) {
    
    console.log(request);
    const routerState = {};
    const routerProps = {
        location: request.url.pathname,
        context: routerState
    };
    console.log(routerProps);
    const AppEl = ( 
    <Provider store={store}>
        <StaticRouter {...routerProps}>
          <App/>
        </StaticRouter>
    </Provider>
    );
    try {
        const markup = ReactDOMServer.renderToString(AppEl);
        const helmet = Helmet.renderStatic(); // leaks if not called after render
        if (routerState.url) {
            console.log(routerState.code);
            return h().redirect(routerState.url).code(routerState.code);
        }
        
        return h.view('default', {
            helmet,
            markup,
            state: request.app.state
        });
    } catch (e) {
        console.log(e);
    }
    
    
};



exports.plugin = {
    name: 'react portfolio',
    version: '1.0.0',
    register: async function (server, options) {
        server.ext('onPreResponse', async function (request, h) {
            var response = request.response;
             if (response.variety && response.variety === 'view') {
                 response.source.context = response.source.context || {};
                 response.source.context.site =  await helpers.get_site();
                 response.source.context.site.main_menu =  await helpers.get_nav('main_menu');
                 //response.source.context.site.footer_menu =  await helpers.get_nav('footer_menu');
             }
            return h.continue;
        });
        server.views({
            engines: { jsx: require('hapi-react-views') },
            relativeTo: __dirname,
            path: './layouts'
        });
        server.route({
            method: 'GET',
            path: '/{glob*}',
            handler: internals.routeHandler
        })
        server.route({
            method: 'GET',
            path: '/assets/{param*}',
            handler: {
                directory: {
                    path: 'frontend/react/assets',
                    listing: false,
          			index: true
                }
            }
        });
        
    }
};
