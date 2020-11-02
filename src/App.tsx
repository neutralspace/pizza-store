import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import MainPage from '@pages/MainPage/MainPage';
import CheckoutPage from '@pages/CheckoutPage/CheckoutPage';
import { SessionType } from '@reducers/session-reducer';
import AuthRegModal from './components/AuthRegModal/AuthRegModal';
import OrdersHistoryPage from '@pages/OrderHistoryPage/OrdersHistoryPage';
import '@scss/style.scss';

interface AppProps {
  session: SessionType;
  getSessionData: Function;
  changeCurrency: Function;
}

const App = (props: AppProps): JSX.Element => {
  const { session, user, getSessionData, changeCurrency, getUserData }= props;
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  useEffect(() => {
    if (getSessionData) {
      getSessionData();
    }
    if (getUserData) {
      getUserData();
    }
  }, []);

  const closeModal = (): void => {
    setIsModalOpen(false);
  }

  const openModal = (): void => {
    setIsModalOpen(true);
  }

  return (
    <Router>
      <Header user={user}
              chosenCurrency={session.currency}
              cartItemsQty={session.cart.totalQty}
              changeCurrency={changeCurrency}
              openAuthModalHandler={openModal} />
      <main>
        <Container>
          <Route exact path="/" component={MainPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/order-history" component={OrdersHistoryPage} />
        </Container>
      </main>
      <Footer />

      <AuthRegModal isModalOpen={isModalOpen && !user?.id}
                    onHideHandler={closeModal}/>
    </Router>
  );
}

export default App;
