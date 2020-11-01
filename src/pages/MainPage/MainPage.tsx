import React, { memo } from 'react';
import PizzasListContainer from '../../containers/PizzasListContainer';

/**
 * Main page.
 *
 * @returns {JSX} - main page component.
 */
const MainPage = (): JSX.Element => {
  return (
    <section>
      <h1>Choose one of our cool pizzas</h1>
      <PizzasListContainer />
    </section>
  );
}

export default memo(MainPage);
