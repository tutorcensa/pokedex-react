import React, { useState, useEffect } from 'react';
import DefaultLayout from 'components/templates/default-layout/DefaultLayout';
import { useParams } from 'react-router-dom';
import { fetchPokemon } from 'assets/js/pokeapi-handler';
import PokemonView from 'components/molecules/pokemon-view/PokemonView';
import loadingImage from 'assets/img/loading.gif';
import RelatedPokemons from 'components/molecules/related-pokemons/RelatedPokemons';

/**
 * Pokemon details component
 * @returns
 */
const PokemonDetails = () => {
  const { name: pokemonName } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    const fetchData = async () =>
      setPokemonData(await fetchPokemon(pokemonName));
    fetchData();
  }, [pokemonName]);
  return (
    <DefaultLayout title='Detalle'>
      {pokemonData ? (
        <>
          <PokemonView name={pokemonData.name} image={pokemonData.image} />
          <RelatedPokemons />
        </>
      ) : (
        <img src={loadingImage} alt='Cargando pokemon...' />
      )}
    </DefaultLayout>
  );
};

export default PokemonDetails;
