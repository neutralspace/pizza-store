import React, { memo } from 'react';
import Container from 'react-bootstrap/Container';
import Logo from '@components/common/Logo/Logo';
import './Header.scss';

/**
 * Main header.
 *
 * @returns {JSX} - header component.
 */
const Header = (): JSX.Element => {
  return (
    <header className="header">
      <Container>
        <div className="header-content">
          <Logo />

          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-list-item">
                <a href="#" className="nav-link">
                  Sign in
                </a>
              </li>
              <li className="nav-list-item">
                <a href="#" className="nav-link">
                  Cart
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default memo(Header);
