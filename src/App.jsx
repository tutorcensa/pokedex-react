import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'components/pages/home/Home';
import About from 'components/pages/about/About';
import PokemonDetails from 'components/pages/pokemon-details/PokemonDetails';
import NotFound from 'components/pages/not-found/NotFound';

/**
 * App component
 * @returns {JSX.Element}
 */
export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/pokemon/:name' element={<PokemonDetails />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
