import React from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSection } from "../actions";
import Nav from "react-bootstrap/Nav";
import Image from 'react-bootstrap/Image';

const Header = () => {
  const sectionActive = useSelector(state => state.sectionActive);
  const dispatch = useDispatch();

  const handleSetSections = section => {
    dispatch(setSection(section));
  };

  return (
    <Nav className="justify-content-center">
      <Image fluid src={Logo} className="float-end" variant="circle" width="200" height="100"/>
      <Nav.Item>
        <Nav.Link onClick={()=>handleSetSections("Pokemon")}
          className={`${sectionActive==="Pokemon" ?"active":""}`} href="/">
      Pokemon</Nav.Link>
     
      </Nav.Item>
      <Nav.Item>
      <Nav.Link onClick={()=>handleSetSections("WichList")}
          className={`${sectionActive==="WichList" ?"active":""}`} href="/pokemonwichlist">
      WichList</Nav.Link>
     
      </Nav.Item>
    </Nav>
  );
};

export default Header;
