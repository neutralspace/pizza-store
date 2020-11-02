import React, { memo } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Logo from '@components/common/Logo/Logo';
import CurrencySign from '@components/common/CurrencySign/CurrencySign';
import { CURRENCY_TYPES } from '@reducers/session-reducer';
import { UserDataType } from '@reducers/user-reducer';
import './Header.scss';

export interface HeaderProps {
  user: UserDataType;
  cartItemsQty: number;
  chosenCurrency: CURRENCY_TYPES;
  changeCurrency: Function;
  openAuthModalHandler: Function;
}

/**
 * Main header.
 *
 * @returns {JSX} - header component.
 */
const Header = (props: HeaderProps): JSX.Element => {
  const { user,
          chosenCurrency,
          cartItemsQty,
          openAuthModalHandler,
          changeCurrency } = props;
  const isUserAuthorized = Boolean(user.id);

  const handleCurrencyChange = (e: React.SyntheticEvent, currencyType: CURRENCY_TYPES): void => {
    e.preventDefault();

    if (chosenCurrency !== currencyType) {
      changeCurrency(currencyType);
    }
  }

  return (
    <header className="header">
      <Container>
        <div className="header-content">
          <Logo />

          <div className="currency-switch">
            <a href="#"
               className={`link${chosenCurrency === CURRENCY_TYPES.EURO ? ' disabled': ''}`}
               role="button"
               onClick={(e) => {
                 handleCurrencyChange(e, CURRENCY_TYPES.EURO);
               }}>
              <CurrencySign type={CURRENCY_TYPES.EURO} />
            </a>
            /
            <a href="#"
               className={`link${chosenCurrency === CURRENCY_TYPES.DOLLAR ? ' disabled': ''}`}
               role="button"
               onClick={(e) => {
                 handleCurrencyChange(e, CURRENCY_TYPES.DOLLAR);
               }}>
              <CurrencySign type={CURRENCY_TYPES.DOLLAR} />
            </a>
          </div>

          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-list-item">
                {
                  isUserAuthorized ?
                    <Link to="/pizza-store/order-history" className="nav-link">
                      Order history
                    </Link>
                    :
                    <a href="#" className="nav-link" onClick={openAuthModalHandler}>
                      Sign in
                    </a>
                }
              </li>
              <li className="nav-list-item">
                <Link to="/pizza-store/checkout" className="nav-link cart-link">
                  Cart
                  {
                    cartItemsQty > 0
                    &&
                    <span className="cart-qty">
                      { cartItemsQty }
                    </span>
                  }
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default memo(Header);
