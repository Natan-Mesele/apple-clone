import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
        <a>
            <img src="img/apple _black.svg" />
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
        <MenuSearch >
          <a>
              <img src="img/search.svg" />
          </a>
        </MenuSearch>
        <MenuBag>
          <a>
              <img src="img/shopping-bag.svg" />
          </a>
        </MenuBag>
        
    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 50px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  img {
    width: 13px;
    height: 18px;
    object-fit: contain;
    display: flex;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
  }
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    

  a {
    color: gray;
    text-decoration: none;
    font-size: 0.7rem;
    padding: 0 1rem;
    font-weight: 500;
  }
`
const MenuSearch = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center; 
  margin-left: 1rem; 

  img {
    color: black;
  }
`
const MenuBag = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 20px;
`