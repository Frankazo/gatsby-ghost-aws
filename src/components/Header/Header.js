import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Navigation } from '../common'
import config from '../../utils/siteConfig'

const Nav = ({ data }) => {
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null
    return (
        <div className="container" style={{ paddingBottom: `20px` }}>
            <div className="site-mast">
                <div className="site-mast-left">
                    <Link to="/">
                        {/*{site.logo ?
                            <img className="site-logo" src={site.logo} alt={site.title} />
                            : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                        }*/}
                        <h2 style={{ color: `#000` }}>My Source Of Love</h2>
                    </Link>
                </div>
                <nav className="site-nav">
                    <div className="site-nav-left">
                        {/* The navigation items as setup in Ghost */}
                        <Navigation data={site.navigation} navClass="site-nav-item" />
                    </div>
                    <div className="site-nav-right">
                        <Link style={{ color: `#000` }} className="site-nav-item" to="/about">About</Link>
                    </div>
                </nav>
                <div className="site-mast-right">
                    { site.twitter && <a href={ twitterUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" /></a>}
                    { site.facebook && <a href={ facebookUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/facebook.svg" alt="Facebook" /></a>}
                    <a className="site-nav-item" href={ `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/` } target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" /></a>
                </div>
            </div>
        </div>
    )
}

Nav.propTypes = {
    data: PropTypes.string.isRequired,
}

export default Nav
