import React from 'react'
import PropTypes from 'prop-types'
import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components'
import config from '../../utils/siteConfig'

const MyJumbotron = styled(Jumbotron)`
  background: linear-gradient(0deg, rgba(224,168,238,0.773546918767507) 0%, rgba(222,160,238,0.8211659663865546) 100%);
  padding: 100px 0 100px 0;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10vh;
  justify-content: space-between;
  height: 35vh;
  width: 65vh;
`
const AuthorImg = styled.figure`
  margin-top: 75px;
  margin-bottom: 75px;
  img{
      border-radius: 50%;
      border: 15px solid #fff;
      box-shadow: -14.142px -14.142px 40px 0px rgb( 255, 255, 255 );
  }
  div{
      border-radius: 50%;
      background-color: rgb( 255, 255, 255 );
  }
`
const Jumbo = ({ data }) => {
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null
    return (
        <MyJumbotron>
            <AuthorImg>
                <img src={require(`../../author-2.jpg`)} alt="Author Image"/>
            </AuthorImg>
            <Container>
                <div>
                    <h1 style={{ color: `#ffffff`, margin: `0` }}>Author Name</h1>
                    <p style={{ color: `#ffffff` }}>description</p>
                </div>
                <p style={{ color: `#ffffff` }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="site-mast-right">
                    { site.twitter && <a href={ twitterUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/twitter.svg" alt="Twitter" /></a>}
                    { site.facebook && <a href={ facebookUrl } className="site-nav-item" target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/facebook.svg" alt="Facebook" /></a>}
                    <a className="site-nav-item" href={ `https://feedly.com/i/subscription/feed/${config.siteUrl}/rss/` } target="_blank" rel="noopener noreferrer"><img className="site-nav-icon" src="/images/icons/rss.svg" alt="RSS Feed" /></a>
                </div>
            </Container>
        </MyJumbotron>
    )
}

Jumbo.propTypes = {
    data: PropTypes.string.isRequired,
}

export default Jumbo
