import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import Product from './Product'

function Home() {
  return (
    <Container>
        <Section 
          backgroundImg='promo_apple_watch_series_9_order__b3u85rm9zf6u_large_2x.jpg'
          Image='promo_logo_apple_watch_series_9__ckz0hbex0yeu_medium_2x.png'
          title="Smarter.Brighter.Mightier."
          LeftBtnText="Learn more"
          RightBtnText="Buy"
        />
        <Section 
          backgroundImg='hero_iphone15pro__i70z9oz3hj2i_large_2x (1).jpg'
          Image='logo_light__cfvl40z2nzau_large_2x.png'
          title="Titanium.so strong.so light.so pro."
          LeftBtnText="Learn more"
          RightBtnText="Buy"
        />
        <Section 
          backgroundImg='hero_ase2023__fajyx7tk70a6_large_2x (1).jpg'
          Image='hero_logo_monarch__d603qujju5me_large_2x.png'
          title="New Camera.New design. Newphoria."
          LeftBtnText="Learn more"
          RightBtnText="Buy"
        />
        <Content>
          <Product 
            backgroundImg='holiday_2023_promo__dirvdl6a3r2a_medium_2x.jpg'
            title="New Camera.New design. Newphoria."
            LeftBtnText="Learn more"
            RightBtnText="Buy"
          />
          <Product 
            backgroundImg='promo_iphone15_announce__fmxxi8r9fkuy_small_2x.jpg'
            title="New Camera.New design. Newphoria."
            LeftBtnText="Learn more"
            RightBtnText="Buy"
          />
        </Content>
        <Content>
          <Product 
            backgroundImg='promo_mbp__ek7p477bkp6q_medium_2x.jpg'
            title="New Camera.New design. Newphoria."
            LeftBtnText="Learn more"
            RightBtnText="Buy"
          />
          <Product 
            backgroundImg='hero_monarch__e0t8lqi77g6e_large_2x (1).jpg'
            title="New Camera.New design. Newphoria."
            LeftBtnText="Learn more"
            RightBtnText="Buy"
          />
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