import React from 'react'
import About from '../../partials/about.jsx'
import Services from '../../partials/services.jsx'
import LastesTweets from '../../partials/lastes_tweets.jsx'
import WorkProcess from '../../partials/workprocess.jsx'
import FunFact from '../../partials/funfact.jsx'
import Client from '../../partials/client.jsx'
import OtherPage from '../../partials/otherpage.jsx'

import {Helmet} from "react-helmet"
import { connect } from 'react-redux'

const AboutPage = () => (
    <section id="about" className="page">
    	<div className="content">
            <div className="row">
            	<About/>
                <LastesTweets/>
            </div>
            <Services/>
            <WorkProcess/>
            <FunFact/>
            <Client/>
            <OtherPage/>
    	</div>
    </section>
)


export default AboutPage