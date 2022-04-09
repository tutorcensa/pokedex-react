import React from 'react';
import PokemonTitle from 'components/atoms/pokemon-title/PokemonTitle';
import PokemonImageContainer from 'components/atoms/pokemon-image-container/PokemonImageContainer';
import PokemonStats from 'components/atoms/pokemon-stats/PokemonStats';
import './PokemonView.css';

const PokemonView = (props) => {
  const { pokemon } = props;
  return (
    <section className='m-pokemon-view'>
      <PokemonTitle name={pokemon.name} type={pokemon.type} />
      <PokemonImageContainer image={pokemon.image} />
      <PokemonStats stats={pokemon.stats} />
    </section>
  );
};

export default PokemonView;
