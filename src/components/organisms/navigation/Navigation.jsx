import React from 'react';
import NavBrand from '../../molecules/nav-brand/NavBrand';
import NavItems from '../../molecules/nav-items/NavItems';

/**
 * Navigation component.
 * @returns {JSX.Element}
 */
const Navigation = () => (
  <nav>
    <NavBrand />
    <NavItems />
  </nav>
);

export default Navigation;
