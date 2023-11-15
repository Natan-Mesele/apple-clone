import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';

function Header() {
  return (
    <Container>
        <a>
            <img src="img/logo.png" />
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
  background: #0a0a0a;
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
    color: #fafafa;
    text-decoration: none;
    font-size: 0.8rem;
    padding: 0 20px;
  }
`
const Search = styled(SearchIcon)`
  color: #fafafa;

`
const MenuSearch = styled.div`
  cursor: pointer;
  font-size: 2px;
`

const Bag = styled(LocalMallIcon)`
  color: #fafafa;
`
const MenuBag = styled.div`
  cursor: pointer;
  font-size: 2px;
  padding: 0 20px;
`