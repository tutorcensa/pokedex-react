import React from 'react';
import DefaultLayout from 'components/templates/default-layout/DefaultLayout';

/**
 * Not found component
 * @returns {JSX.Element}
 */
const NotFound = () => (
  <DefaultLayout title='404'>
    <h1>Not found page</h1>
  </DefaultLayout>
);

export default NotFound;
