import React, { useState } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { setWishList, deleteWishList } from "../actions";
import PokemonDetail from "../components/PokemonDetail";
import Modal from "../components/Modal";
import { ReactComponent as Cora } from "../assets/icons/heart.svg";


import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge'
import { useEffect } from "react";
import "../assets/style/Pokemon.scss";

const Pokemon = (props) => {
  const [modal, setModal] = useState(false);
  const [wichlist, setWichList] = useState(false);

  const { poke, wichlistPokemons } = props;
  const { id, sprites, name, base_experience,abilities, weight, moves } = poke;
    
  const handleCloseModal = () => {
    setModal(false);
  };

  const handleOpenModal = () => {
    setModal(true);
  };
  const handleSetWichList = () => {
    props.setWishList( poke );
    setWishList(true);
  };
 
    const isFavorite = () => {
    const result = wichlistPokemons.filter(
      (wichlistPokemon) => wichlistPokemon.poke.id === id
    );
    if (result.lenth) {
      setWichList(true);
    }
  };  

  const handleDeleteWichList = itemId =>{
    props.deleteWishList(itemId);
    setWichList(false);
  }

  useEffect(() => {
    
     isFavorite(); 
  }, []);
 


  return (
  
    <Card className="pokemon" style={{ width: '18rem' }}>
    <Card.Img className="pokemon_img" variant="right" src={sprites.other.dream_world.front_default} />
    <Card.Body>
      <Card.Title className="pokemon_title">{name}</Card.Title>
      <Card.Text>
      Base experience: {base_experience}
      </Card.Text>
      <Card.Text>
      Weigth: {weight}gr
      </Card.Text>

      <Badge bg="primary">Moves 1: {moves[0].move.name}<br></br></Badge>
       <Badge bg="warning">Moves 2: {moves[1].move.name}<br></br></Badge>
       <Badge bg="success">Moves 3: {moves[2].move.name}<br></br></Badge>
       <Badge bg="danger">Moves 4: {moves[3].move.name}<br></br></Badge>
       
        {wichlist ? 
        <Cora
        onClick={handleDeleteWichList}
        className="pokemon_details-start wichlist"
        />
        :<Cora
         onClick={handleSetWichList}
        className="pokemon_details-start noWichlist"
        
        />

       } 
      
    </Card.Body>
   
  </Card>
    

    

  );
};

const mapStateToProps = state => {
  return {
    wichlistPokemons: state.wichlistPokemons,
  };
};

const mapDispactchProps = {
  setWishList,
  deleteWishList
};

export default connect(mapStateToProps, mapDispactchProps)(Pokemon);
