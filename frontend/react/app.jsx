import React from 'react';
import Header from './partials/header.jsx';
import AboutPage from './modules/about/index.jsx';
import PortfolioPage from './modules/portfolio/index.jsx';
import ContactPage from './modules/contact/index.jsx';
import NotFoundPage  from './partials/notfound.jsx';
import { Route, Switch } from 'react-router';
import { IntlProvider } from 'react-intl';
import {Helmet} from "react-helmet"

const App = () => (
    <IntlProvider locale="en">
        <div className="container" id="container">
            <Header/>
            <Switch>
              <Route exact path="/" component={AboutPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route component={NotFoundPage}/>
            </Switch>
            
        </div>
    </IntlProvider>    
);

export default App
