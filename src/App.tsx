import React, { useEffect } from 'react';
import '@scss/style.scss';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import PizzasListContainer from '@containers/PizzasListContainer';
import { SessionType } from '@reducers/session-reducer';

interface AppProps {
  session: SessionType;
  getSessionData: Function;
}

const App = (props: AppProps): JSX.Element => {
  const { session, getSessionData }= props;

  useEffect(() => {
    if (getSessionData) {
      getSessionData();
    }
  }, []);

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
