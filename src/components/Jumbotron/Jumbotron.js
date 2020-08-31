import React from 'react'
import PropTypes from 'prop-types'
import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components'
import config from '../../utils/siteConfig'

const MyTitle = styled.h1`
    color: #000000; 
    margin: 0;
    font-size: 4em;
    font-family: 'Dancing Script', cursive;
`

const MyJumbotron = styled(Jumbotron)`
  background: #f6f2ff;
  padding: 100px 0 100px 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
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
                <div className="site-mast-right">
                    <MyTitle>My Source of Love</MyTitle>
                </div>
                    <p style={{ color: `#000000` }}>By Helly Dayana</p>
                <p style={{ color: `#000000` }}>
                    A full portfolio site it's been develop, in the mean time please check out my social networks and my photos!!
                    <br></br>
                    Make sure to check my portfolio <a href="https://picti.net/WSjiC" target='_blank'>here</a>
                </p>
                <div className="site-mast-right">
                    <a href="https://www.instagram.com/mysourceoflove/" target='_blank'><img style={{ width: '75px', height: '75px' }} src={require('../../images/instagram.svg')} alt="Instagram Icon" />
                    </a>
                    {/* <img style={{ width: '75px', height: '75px', marginLeft: '20px' }} src={require('../../images/facebook.svg')} alt="Facebook Icon" /> */}

                    <a href="https://twitter.com/hellyydaya" target='_blank'><img style={{ width: '75px', height: '75px', marginLeft: '15px' }} src={require('../../images/twitter.svg')} alt="Twitter Icon" />
                    </a>

                    {/* <img style={{ width: '75px', height: '75px', marginLeft: '20px' }} src={require('../../images/youtube.svg')} alt="Youtube Icon" /> */}

                    <a href="mailto: HellyDayana@sourceoflove.com"><img style={{ width: '75px', height: '75px', marginLeft: '15px' }} src={require('../../images/envelope.svg')} alt="Email Icon" /></a>
                </div>
            </Container>
        </MyJumbotron>
    )
}

Jumbo.propTypes = {
    data: PropTypes.string.isRequired,
}

export default Jumbo
