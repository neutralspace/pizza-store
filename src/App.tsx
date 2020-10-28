import React from 'react';
import '@scss/style.scss';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        Pizzas!
      </main>
      <Footer />
    </>
  );
}

export default App;
