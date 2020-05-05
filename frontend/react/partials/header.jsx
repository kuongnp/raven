import React from 'react'
import { connect } from 'react-redux'

const Header = ({site}) => (
    <header className="header">
        <a href="/">
            <img src="/assets/images/site/avatar.png" alt="avatar"/>
        </a>
    	<h1>{site.title}</h1>
        <p>{site.tagline}</p>
        <ul class="vs-nav">
            {site.main_menu.map((item,i)=> (<li><a href="{item.link}">{item.name}</a></li>))}
        </ul>

        
        
        
    </header>
)

const mapStateToProps = state => ({
  site: state.site
})

export default connect(mapStateToProps)(Header)
