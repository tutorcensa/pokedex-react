import React from 'react';
import PokemonTitle from 'components/atoms/pokemon-title/PokemonTitle';
import PokemonImageContainer from 'components/atoms/pokemon-image-container/PokemonImageContainer';
import PokemonStats from 'components/atoms/pokemon-stats/PokemonStats';
import './PokemonView.css';

const PokemonView = (props) => (
  <section className='m-pokemon-view'>
    <PokemonTitle />
    <PokemonImageContainer />
    <PokemonStats />
  </section>
);

export default PokemonView;
