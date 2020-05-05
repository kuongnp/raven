import React from 'react'

const Gmap = ({site}) => (
    <React.Fragment>
        <h2 className="section-title"><span><i className="icon-location"></i>LOCATION</span></h2>
        <div className="map">
            <div data-latitude="{site.contact.gmap.latitude}" data-longitude="{site.contact.gmap.longitude}" data-zoom="18" id="map-canvas" className="map-canvas"></div>
        </div>
    </React.Fragment>
)

export default Gmap