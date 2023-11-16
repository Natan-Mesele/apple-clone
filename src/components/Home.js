import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Product from './Product'

function Home() {
  return (
    <Container>
        <Section 
          backgroundImg='hero_apple_watch_series_9_order__d0fi9mb84dci_small.jpg'
          title="Smarter.Brighter.Mightier."
          LeftBtnText="Learn more"
          RightBtnText="Buy"
        />
        <Section 
          backgroundImg='hero_iphone15pro__i70z9oz3hj2i_small.jpg'
          title="Titanium.so strong.so light.so pro."
          LeftBtnText="Learn more"
          RightBtnText="Buy"
        />
        <Section 
          backgroundImg='hero_iphone15_announce__uuemlcwczn6u_small.jpg'
          title="New Camera.New design. Newphoria."
          LeftBtnText="Learn more"
          RightBtnText="Buy"
        />
        <Content>
          <Product />
          <Product />
        </Content>
        
    </Container>
  )
}

export default Home

const Container = styled.div`

`
const Content = styled.div`
  display: flex;
  padding: 0 10px;
`