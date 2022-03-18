import React, { useState, useEffect } from 'react';
import DefaultLayout from 'components/templates/default-layout/DefaultLayout';
import { useParams } from 'react-router-dom';
import { fetchPokemon } from 'assets/js/pokeapi-handler';
import PokemonView from 'components/molecules/pokemon-view/PokemonView';

/**
 * Pokemon details component
 * @returns
 */
const PokemonDetails = () => {
  const { name: pokemonName } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(async () => {
    setPokemonData(await fetchPokemon(pokemonName));
  });
  return (
    <DefaultLayout title='Detalle'>
      <div>
        {pokemonData ? (
          <PokemonView name={pokemonData.name} image={pokemonData.image} />
        ) : (
          <span>Pokemon no disponible</span>
        )}
      </div>
    </DefaultLayout>
  );
};

export default PokemonDetails;
