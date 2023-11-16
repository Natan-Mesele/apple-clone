import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';

function Header() {
  return (
    <Container>
        <a>
            <img src="img/Apple_logo.svg" />
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
          <Search />
        </MenuSearch>
        <MenuBag>
          <Bag />
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
    font-size: 0.8rem;
    padding: 0 20px;
  }
`
const Search = styled(SearchIcon)`
  color: gray;
`
const MenuSearch = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`

const Bag = styled(LocalMallIcon)`
  color: gray;
`
const MenuBag = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 20px;
`