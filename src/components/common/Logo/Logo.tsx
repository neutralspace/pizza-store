import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

/**
 * Logo component.
 *
 * @returns {JSX} - logo component.
 */
const Logo = (): JSX.Element => {
  return (
    <Link to="/pizza-store/" className="logo">
      Cool Pizzas store
    </Link>
  );
}

export default memo(Logo);
