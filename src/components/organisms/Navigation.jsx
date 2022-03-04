import React from 'react';
import NavBrand from '../molecules/NavBrand';
import NavItems from '../molecules/NavItems';

/**
 * Navigation component.
 * @returns {JSX.Element}
 */
export const Navigation = () => (
  <nav>
    <NavBrand />
    <NavItems />
  </nav>
);

export default Navigation;
