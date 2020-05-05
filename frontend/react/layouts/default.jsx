import React from 'react'

const Layout = ({helmet,markup,state}) => (
    <html>
        <head>
            {helmet.title.toComponent()}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {helmet.meta.toComponent()}
            {/*FAV and TOUCH ICONS*/}
            <link rel="shortcut icon" href="/assets/images/ico/favicon.ico"/>
            <link rel="apple-touch-icon" href="/assets/images/ico/apple-touch-icon.png"/>
            {/* FONTS */}
            <link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'/>
            <link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'/>
            <link href='http://fonts.googleapis.com/css?family=Tangerine:400,700' rel='stylesheet' type='text/css'/>
            {/*STYLES*/}
            <link rel="stylesheet" media="print" href="/assets/css/print.css"/>
            <link rel="stylesheet" href="/assets/css/normalize.css"/>
            <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="/assets/js/nprogress/nprogress.css"/>
            <link rel="stylesheet" href="/assets/css/animate.css"/>
            <link rel="stylesheet" href="/assets/css/fonts/font-awesome/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="/assets/css/fonts/fontello/css/fontello.css"/>
            <link rel="stylesheet" href="/assets/css/jquery.fancybox-1.3.4.css"/>
            <link rel="stylesheet" href="/assets/js/google-code-prettify/prettify.css"/>
            <link rel="stylesheet" href="/assets/css/uniform.default.css"/>
            <link rel="stylesheet" href="/assets/css/flexslider.css"/>
            <link rel="stylesheet" href="/assets/js/mediaelement/mediaelementplayer.css"/>
            <link rel="stylesheet" href="/assets/css/tooltipster.css"/>
            <link rel="stylesheet" href="/assets/css/style.css" />
            <link rel="stylesheet" href="/assets/css/main.css" />
            {helmet.link.toComponent()}
        </head>
        <body>
            <div id="app-mount"
                dangerouslySetInnerHTML={{
                    __html: markup
                }}
            />
            <script id="app-state"
                dangerouslySetInnerHTML={{
                    __html: state
                }}
            />
            
            
        </body>
    </html>
)

export default Layout
    
