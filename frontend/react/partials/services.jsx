import React from 'react'

const Services = () => ( 
    <React.Fragment>
        <h2 className="section-title"><span><i className="fa fa-magic"></i>SERVICES</span></h2>
        <div className="row">
            <div className="col-sm-6 col-md-3">
                <div className="service color1">
                    <i className="fa fa-html5"></i>
                    <h4>Web Design</h4>
                    <p>I design super cool websites. It is a long established fact that a reader will be distracted by the readable content. </p>
                </div>
            </div>
            <div className="col-sm-6 col-md-3">
                <div className="service color2">
                    <i className="fa fa-font"></i>
                    <h4>Type Design</h4>
                    <p>I can design beautiful type faces for both digital and print media. It is a long established fact that a reader will be distracted. </p>
                </div>
            </div>
            <div className="col-sm-6 col-md-3">
                <div className="service color3">
                    <i className="icon-smashmag"></i>
                    <h4>Blog Writer</h4>
                    <p>I write about web design. It is a long established fact that a reader will be distracted by the readable content. </p>
                </div>
            </div>
            <div className="col-sm-6 col-md-3">
                <div className="service color4">
                    <i className="fa fa-rocket"></i>
                    <h4>Project Management</h4>
                    <p>I have strong project management skills. It is a long established fact that a reader will be distracted by the readable content. </p>
                </div>
            </div>
        </div>
    </React.Fragment>
)
export default Services