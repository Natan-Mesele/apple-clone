import React from 'react'
import styled from 'styled-components'

function Product() {
  return (
    <Container>
        Product
    </Container>
  )
}

export default Product

const Container = styled.div`
    background: black;
    color: white;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    height: 300px;
`