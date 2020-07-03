import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// Styles
import '../../styles/app.css'

//custom components
import Jumbo from '../Jumbotron/Jumbotron'
import Portfolio from '../portfolio/Portfolio'
import Nav from '../Header/Header'
import Footer from '../Footer/Footer'

const DefaultLayout = ({ data, children, bodyClass, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>
                <body className={bodyClass} />
            </Helmet>

            <div className="viewport">

                <div className="viewport-top">
                    <header
                        className="site-head"
                        style={isHome ? ({ backgroundColor: `#fff` }) : ({ backgroundColor: `rgba(224,168,238,0.773546918767507)` })}>
                        <Nav
                            data={data}
                        />
                        { isHome ?
                            (<Jumbo
                                data={data}
                            />)
                            : null }
                    </header>

                    <main className="site-main">
                        {/* All the main content gets inserted here, index.js, post.js */}
                        { isHome ?
                            (<div>
                                <h2 className="container">Portfolio</h2>
                                <Portfolio />
                            </div>)
                            : null }
                        { isHome ?
                            (<div>
                                <h2
                                    style={{ marginBottom: `10px` }}
                                    className="container"
                                >
                                Recent Post
                                </h2>
                                {children}
                            </div>)
                            : <div> {children} </div>}
                    </main>
                </div>
                <Footer
                    data={data}
                />
            </div>

        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
