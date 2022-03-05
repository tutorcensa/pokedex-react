import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { Link } from 'react-router-dom';

/**
 * Home component.
 * @returns {JSX.Element}
 */
export const Home = () => (
  <DefaultLayout title='Home'>
    <h1>Página Inicial</h1>
    <Link to='/pokemon/1'>Enlace dummy de acceso a detalles de pokemon</Link>
  </DefaultLayout>
);

export default Home;
