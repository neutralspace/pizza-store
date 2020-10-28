import React, { memo } from 'react';
import './Logo.scss';

/**
 * Logo component.
 *
 * @returns {JSX} - logo component.
 */
const Logo = (): JSX.Element => {
  return (
    <a href="/" className="logo">
      Cool Pizzas store
    </a>
  );
}

export default memo(Logo);
