import React, {useState, useEffect} from 'react';
import axios from "axios";
import Pokemon from "./Pokemon";
import Error from "./Error";
import Loader from "./Loader";
import "../assets/style/PokemonList.scss"

const PokemonList = () => {
    const [result, setResult] = useState([]);
    const [poke, setPoke] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


     const arr = [];

    useEffect(()=>{
      getPoke();
        
        
    },[]);

    const getPoke=()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
        .then((response) => response.json())
        .then((data) => setResult(
          data.results.map((item) => {
            fetch(item.url)
              .then((response) => response.json())
              .then((allpokemon) => arr.push(allpokemon));
              setPoke(arr);
              setLoading(false);
              setError(false);
          })
         
        ))
       
         .catch((err)=>console.log(err),
        setLoading(false),
        setError(true)
       ); 

    };

   console.log({poke});

  return (
    <div className='pokemonList'>
        {loading ? (
            <Loader/>
        ): error ? (
            <Error/>
        ) : (
            poke.map((pokemon)=>(
                <Pokemon key={pokemon.id}  poke={pokemon} />
            ))
        )}
    </div>
  );
};

export default PokemonList;