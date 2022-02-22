import React from 'react';
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge'
const PokemonDetail = (props) => {

  const { poke } = props;
  const { id, sprites, name, base_experience,abilities, weight, moves } = poke;


  return (
    <Card className="" style={{ width: '18rem' }}>
    <Card.Img className="" variant="top" src={sprites.other.dream_world.front_default} />
    <Card.Body>
      <Card.Title className="">{name}</Card.Title>
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
    </Card.Body>
  
  </Card>
  )
}

export default PokemonDetail;