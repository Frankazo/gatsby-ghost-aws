import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Navigation } from '../common'
import styled from 'styled-components'

const Myfooter = styled.footer`
      background: linear-gradient(0deg, rgba(224,168,238,0.773546918767507) 0%, rgba(222,160,238,0.8211659663865546) 100%);
`

const Footer = ({ data }) => {
    const site = data.allGhostSettings.edges[0].node
    return (
        <div className="viewport-bottom">
            {/* The footer at the very bottom of the screen */}
            <Myfooter className="site-foot">
                <div className="site-foot-nav container">
                    <div className="site-foot-nav-left">
                        <Link to="/">{site.title}</Link> © 2020 &mdash; Develop By <a className="site-foot-nav-item" href="https://Frankazo.github.io/" target="_blank" rel="noopener noreferrer">Frankazo</a>
                    </div>
                    <div className="site-foot-nav-right">
                        <Navigation data={site.navigation} navClass="site-foot-nav-item" />
                    </div>
                </div>
            </Myfooter>
        </div>
    )
}

Footer.propTypes = {
    data: PropTypes.string.isRequired,
}

export default Footer
