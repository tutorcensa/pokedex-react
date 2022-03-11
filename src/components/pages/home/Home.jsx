import React from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from 'components/templates/default-layout/DefaultLayout';

/**
 * Home component.
 * @returns {JSX.Element}
 */
const Home = () => (
  <DefaultLayout title='Home'>
    <h1>Página Inicial</h1>
    <Link to='/pokemon/1'>Enlace dummy de acceso a detalles de pokemon</Link>
  </DefaultLayout>
);

export default Home;
