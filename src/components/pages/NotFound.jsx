import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

/**
 * Not found component
 * @returns {JSX.Element}
 */
export const NotFound = () => (
  <DefaultLayout title='404'>
    <h1>Not found page</h1>
  </DefaultLayout>
);

export default NotFound;
