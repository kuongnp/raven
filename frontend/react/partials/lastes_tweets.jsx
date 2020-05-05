import React from 'react'

const LatestTweets = () => (
    <div className="col-md-4">
        <h2 className="section-title"><span><i className="icon-twitter"></i>LATEST TWEETS</span></h2>	
        <div id="latest-tweets" className="widget-twitter" data-twitter-name="hapijs" data-tweet-count="1" data-include-retweets="false"></div>
    </div>
)

export default LatestTweets
