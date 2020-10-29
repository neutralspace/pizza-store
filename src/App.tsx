import React from 'react';
import '@scss/style.scss';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import PizzasListContainer from './containers/PizzasListContainer';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        Pizzas!
        <PizzasListContainer />
      </main>
      <Footer />
    </>
  );
}

export default App;
