import React, { useState } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { setWishList, deleteWishList } from "../actions";
import PokemonDetail from "../components/PokemonDetail";
import Modal from "../components/Modal";
import { ReactComponent as Cora } from "../assets/icons/corazon.png";
import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Pokemon = (props) => {
  const [modal, setModal] = useState(false);
  const [wichlist, setWichlist] = useState(false);

  const { poke, wichlistPokemons } = props;
  const { id, sprites, name, base_experience } = poke;
    
  const handleCloseModal = () => {
    setModal(false);
  };

  const handleOpenModal = () => {
    setModal(true);
  };
  const handleSetWichList = () => {
    props.setWichlist({ poke });
    setWichlist(true);
  };
 
    const isFavorite = () => {
    const result = wichlistPokemons.filter(
      (wichlistPokemon) => wichlistPokemon.poke.id === id
    );
    if (result.lenth) {
      setWichlist(true);
    }
  };  

  useEffect(() => {
    console.log({props});
     isFavorite(); 
  }, []);
  console.log("data",poke);


  return (
  <div>
    <p>{name}</p>
  </div>

  );
};

const mapStateToProps = state => {
  return {
    wichlistPokemon: state.wichlistPokemon,
  };
};

const mapDispactchProps = {
  setWishList,
  deleteWishList
};

export default connect(mapStateToProps, mapDispactchProps)(Pokemon);
