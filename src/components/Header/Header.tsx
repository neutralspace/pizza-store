import React, { memo } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Logo from '@components/common/Logo/Logo';
import './Header.scss';

export interface HeaderProps {
  openAuthModalHandler: Function;
}

/**
 * Main header.
 *
 * @returns {JSX} - header component.
 */
const Header = (props: HeaderProps): JSX.Element => {
  const { user, openAuthModalHandler } = props;
  const isUserAuthorized = Boolean(user.id);

  return (
    <header className="header">
      <Container>
        <div className="header-content">
          <Logo />

          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-list-item">
                {
                  isUserAuthorized ?
                    <Link to="order-history" className="nav-link">
                      Order history
                    </Link>
                    :
                    <a href="#" className="nav-link" onClick={openAuthModalHandler}>
                      Sign in
                    </a>
                }
              </li>
              <li className="nav-list-item">
                <Link to="/checkout" className="nav-link">
                  Cart
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
