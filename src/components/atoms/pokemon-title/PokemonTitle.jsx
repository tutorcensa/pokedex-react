import React from 'react';
import './PokemonTitle.css';

/**
 * Pokemon title component
 * @returns {JSX.Element}
 */
const PokemonTitle = () => (
  <div className='a-pokemon-title'>
    <div className='a-pokemon-title__image-mask'>
      <img
        className='a-pokemon-title__image'
        src=''
        alt='Imagen del tipo de elemento al cual pertenece el pokemon'
      />
    </div>
    <h1 className='a-pokemon-title__name'>Nombre del Pokemon</h1>
  </div>
);

export default PokemonTitle;
