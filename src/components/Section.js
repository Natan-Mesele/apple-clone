import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <Container>
        <Item>
          Smarter.Brighter.Mightier.
        </Item>
        <ButtonGroup>
          <LeftButton>
            Learn more
            
          </LeftButton>
          <RightButton>
            Buy
          </RightButton>
        </ButtonGroup>
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

`
const Item = styled.div`
  color: white;
  font-size: 1.6rem;
  margin-top: -14rem;
`
const ButtonGroup = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  
`
const LeftButton = styled.div`
`
const RightButton = styled.div`
`