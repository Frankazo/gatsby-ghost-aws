import React from 'react'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 30px 10vh 30px;
`

const Colum = styled(Col)`
    padding: 10px;
`

const Portfolio = () => (
    <Container>
        <Colum>
            <Image src="https://images.unsplash.com/photo-1592436259366-18ab6da5f195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" roundedCircle />
        </Colum>
        <Colum>
            <Image src="https://images.unsplash.com/photo-1592461013857-97a37dafbbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" rounded />
        </Colum>
        <Colum>
            <Image src="https://images.unsplash.com/photo-1459535653751-d571815e906b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" rounded />
        </Colum>
        <Colum>
            <Image src="https://images.unsplash.com/photo-1592407928465-e557fbbf4ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" rounded />
        </Colum>
    </Container>
)

export default Portfolio
