import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '@scss/style.scss';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import MainPage from '@pages/MainPage/MainPage';
import CheckoutPage from '@pages/CheckoutPage/CheckoutPage';
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
    <Router>
      <Header />
      <main>
        <Container>
          <Route exact path="/" component={MainPage} />
          <Route path="/checkout" component={CheckoutPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
