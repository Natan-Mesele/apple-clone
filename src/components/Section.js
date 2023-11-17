import React from 'react'
import styled from 'styled-components'

function Section({ title, backgroundImg, LeftBtnText, RightBtnText, Image }) {
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

export default Section

const Container = styled.div`
    min-height: calc(100vh - 50px);
    background: url("img/hero_apple_watch_series_9_order__d0fi9mb84dci_small.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 12px solid white;
    background-image: ${props => `URL("/img/${props.bgImage}")`}
`
const Hero = styled.div`
  Margin-top: -16rem;
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
  color: white;
  font-size: 1.6rem;
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
  font-size: 1.4rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
const RightButton = styled(LeftButton)`

`

