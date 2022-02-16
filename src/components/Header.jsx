import React from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSection } from "../actions";


const Header = () => {
  const sectionActive = useSelector(state => state.sectionActive);
  const dispatch = useDispatch();

  const handleSetSections = (section) => {
    dispatch(setSection(section));
  };

  return (
    <header className="">
    <figure className="">
      <img
        className=""
        src={Logo}
        alt="o"
      />
    </figure>
    <nav className="header__nav">
      <ul className="header__nav__options">
        <li
          onClick={()=>handleSetSections("Pokemon")}
          className={`${sectionActive==="Pokemons" ?"active":""}`}
        >
          <Link to="/">Pokemons</Link>
        </li>
        <li
          onClick={()=>handleSetSections("WichList")}
          className={`${sectionActive==="WichList" ?"active":""}`}
        >
          <Link to="/pokemonwichlist">WichList</Link>
        </li>
      </ul>
    </nav>
  </header>





    
  );
};

export default Header;
