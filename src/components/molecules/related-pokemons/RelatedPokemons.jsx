import PokemonCards from 'components/atoms/pokemons-cards/PokemonsCards';
import React from 'react';
import './RelatedPokemons.css';

const RelatedPokemons = () => (
  <section className='m-related-pokemons'>
    <h2 className='m-related-pokemons__title'>Evolution Chain</h2>
    <PokemonCards />
  </section>
);

export default RelatedPokemons;
