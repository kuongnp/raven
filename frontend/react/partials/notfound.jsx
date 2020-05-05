'use strict';
import React from 'react'
import {Helmet} from "react-helmet"
import RouteStatus from './routestatus.jsx'


const NotFoundPage = () => (
    <RouteStatus code={404}>
            <Helmet>
                <title>Page not found</title>
            </Helmet>
            <div className="full-width-content">
                <article className="post hentry">
                    <div className="entry-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="http-alert">
                                    <h1>404</h1>
                                    <p>The page you are looking for was not found!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
    </RouteStatus>
)

export default NotFoundPage
