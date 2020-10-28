import React, { memo } from 'react';
import './Footer.scss';

/**
 * Main footer.
 *
 * @returns {JSX} - footer component.
 */
const Footer = (): JSX.Element => {

  return (
    <footer className="footer fixed-bottom">
      Cool pizzas store
    </footer>
  );
}

export default memo(Footer);
