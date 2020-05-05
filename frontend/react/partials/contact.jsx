import React from 'react'

const Contact = ({site}) => (
    <React.Fragment>
        <h2 className="section-title"><span><i className="icon-address-book"></i>LET'S GET IN TOUCH</span></h2>
        <div className="letter">
            <h4 className="letter-title">{site.contact.name}</h4>
            <div className="stamp">
              <img src="/assets/images/site/stamp-image.png" alt="stamp"/>
            </div>
            <div className="letter-info">
                <p><i className="icon-at"></i>{site.contact.email}</p>
                <p><i className="icon-phone"></i>{site.contact.phone_number}</p>
                <p><i className="icon-location"></i>{site.contact.address}</p>
            </div>
        </div> 
    </React.Fragment>
)
   
export default Contact