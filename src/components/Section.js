import React from 'react'
import styled from 'styled-components'

function Section({ title, backgroundImg, LeftBtnText, RightBtnText }) {
  return (
    <Container bgImage={backgroundImg}>
      <Hero>
        <HeroImg>
          <Img src="img/hero_logo_apple_watch_series_9__eg5xcrxghuaa_small.png" />
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
    padding: 0 calc(3.5vw + 5px);
    background: url("img/hero_apple_watch_series_9_order__d0fi9mb84dci_small.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
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
  color: #39A7FF;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
const RightButton = styled(LeftButton)`

`

