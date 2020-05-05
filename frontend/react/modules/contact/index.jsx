import React from 'react'
import Contact from '../../partials/contact.jsx'
import ContactForm from '../../partials/contact_form.jsx'
import Social from '../../partials/social.jsx'
import Gmap from '../../partials/gmap.jsx'

import {Helmet} from "react-helmet"
import { connect } from 'react-redux'

const ContactPage = ({site}) => (
<section id="contact" className="page">
	<div className="content">
        <div className="row">
            <div className="col-md-6">
                <Contact site={site}/>
                <ContactForm/>
            </div>
            <div className="col-md-6">
                <Social site={site}/>
                <Gmap site={site}/>
            </div>
        </div>    				
    </div>
</section>
)



const mapStateToProps = state => ({
      site:  state.site
    }  
)
  

export default connect(mapStateToProps)(ContactPage)
