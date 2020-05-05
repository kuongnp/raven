import React from 'react'
import PortfolioItem from '../../partials/portfolio_item.jsx'

import {Helmet} from "react-helmet"
import { connect } from 'react-redux'

const PortfolioPage = ({portfolios,displayCategory}) => (
    <section id="portfolio" className="page">
    	<div className="content">
            <h2 className="section-title center"><span><i class="icon-leaf"></i>MY WORKS</span></h2>
            
            <ul id="filters" class="filters">
              <li class="current"><a href="#" data-filter="*">ALL</a></li>
              <li><a href="#" data-filter=".design">DESIGN</a></li>
              <li><a href="#" data-filter=".coding">CODING</a></li>
              <li><a href="#" data-filter=".logo">LOGO</a></li>
            </ul>
            <div className="portfolio-items media-grid" data-layout="masonry">
            
            {
                portfolios
                .filter(({category}) =>
                    displayCategory === category || displayCategory === "all"
                )
                .map((portfolio,i) => (
                    <PortfolioItem key={i} portfolio={portfolio}/>
                ))
            } 
            </div>
        </div>
</section>
)



const mapStateToProps = state => {
    let portfolios = Object.values(state.portfolios);
    return ({
      portfolios: portfolios
    })    
}

export default connect(mapStateToProps)(PortfolioPage)