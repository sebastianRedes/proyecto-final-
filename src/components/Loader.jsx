import React from 'react';
import "../assets/style/Loader.scss";
import pokeball from "../assets/img/pokeball.gif";
const Loader = () => {
  return (
    <div className='loader'>
      <img src={pokeball} alt="Pokeball" />
      <span className='loader-text'> Loading...</span>
    </div>
  )
}

export default Loader;