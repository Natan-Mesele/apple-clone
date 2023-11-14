import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
        <a>
            <img src=""/>
        </a>
        <Menu>
            <a href="#">Store</a>
            <a href="#">Mac</a>
            <a href="#">ipad</a>
            <a href="#">iphone</a>
            <a href="#">Watch</a>
            <a href="#">Vision</a>
            <a href="#">Airpods</a>
            <a href="#">Tv & Home</a>
            <a href="#">Entertainment</a>
            <a href="#">Accessorie</a>
            <a href="#">Support</a>
        </Menu>
    </Container>
  )
}

export default Header

const Container = styled.div`

`
const Menu = styled.div`

`