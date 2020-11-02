import React, { memo } from 'react';
import PizzasListContainer from '@containers/PizzasListContainer';
import Title, { TITLE_SIZES } from '@components/common/Title/Title';

/**
 * Main page.
 *
 * @returns {JSX} - main page component.
 */
const MainPage = (): JSX.Element => {
  return (
    <section>
      <Title tag="h1" size={TITLE_SIZES.LG}>
        Choose one of our cool pizzas
      </Title>
      <PizzasListContainer />
    </section>
  );
}

export default memo(MainPage);
