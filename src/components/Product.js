import React from 'react'
import styled from 'styled-components'

function Product({ title, backgroundImg, LeftBtnText, RightBtnText, Image }) {
  return (
    <Container bgImage={backgroundImg}>
      <Hero>
        <HeroImg bgImage={Image}>
          <Img src="img/promo_logo_apple_watch_series_9__ckz0hbex0yeu_medium_2x.png" />
        </HeroImg>
        <Item>
          {title}
        </Item>
        <ButtonGroup>
          <LeftButton>
            {LeftBtnText}
          </LeftButton>
          <RightButton>
            {RightBtnText}
          </RightButton>
        </ButtonGroup>
      </Hero> 
    </Container>
  )
}

export default Product

const Container = styled.div`
    background: url("img/hero_apple_watch_series_9_order__d0fi9mb84dci_small.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: white;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    height: 450px;
    background-image: ${props => `URL("/img/${props.bgImage}")`}
`
const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const HeroImg = styled.div`
  
`
const Img = styled.img`
  width: 150px;
  object-fit: cover;
`
const Item = styled.div`
  color: gray;
  font-size: 1.3rem;
`
const ButtonGroup = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`
const LeftButton = styled.div`
  color: #0766AD;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
const RightButton = styled(LeftButton)`

`