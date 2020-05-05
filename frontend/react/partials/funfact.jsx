import React from 'react'

const FunFact = () => (
    <React.Fragment>
        <h2 className="section-title"><span>FUN FACT</span></h2>
        <div className="row">
            <div className="col-sm-6 col-md-3">
                <div className="fun-fact">
                    <i className="icon-instagram-1"></i>
                    <h4>24000 SHOTS CAPTURED</h4>
                </div>
            </div>
            <div className="col-sm-6 col-md-3">
                <div className="fun-fact">
                    <i className="icon-jabber"></i>
                    <h4>37 PROJECTS COMPLETED</h4>
                </div>
            </div>
            <div className="col-sm-6 col-md-3">
                <div className="fun-fact">
                    <i className="icon-child"></i>
                    <h4>87 SATISFIED CUSTOMERS</h4>
                </div>
            </div>
            <div className="col-sm-6 col-md-3">
                <div className="fun-fact">
                    <i className="icon-bicycle"></i>
                    <h4>1450 KM CYCLED</h4>
                </div>
            </div>
        </div>
    </React.Fragment>
)

export default FunFact