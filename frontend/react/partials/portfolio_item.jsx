import React from 'react'

const PortfolioItem = ({portfolio}) => {
    <div className="media-cell {portfolio.type} hentry">
        <div className="media-box">
            <img src="{portfolio.img}" alt="portfolio-post"/>
            <div className="mask"></div>
            <a href="{portfolio.link}"></a>
        </div>
        <div className="media-cell-desc">
            <h3>{portfolio.title}</h3>
            <p className="category">{portfolio.description}</p>
        </div>
  </div>
}

export default PortfolioItem

