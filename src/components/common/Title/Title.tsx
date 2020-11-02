import React, { memo } from 'react';
import './Title.scss';

export enum TITLE_SIZES {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}

export interface TitleProps {
  size?: TITLE_SIZES;
  tag?: string;
  className?: string;
}


/**
 * Title.
 *
 * @returns {JSX} - Title component.
 */
const Title = (props: TitleProps): JSX.Element => {
  const { tag = 'p', size = 'md', className: classNameFromProps, children } = props;
  const className = `${classNameFromProps ? `${classNameFromProps} `: ''}title title-${size}`;

  return React.createElement(tag, { className }, children);
}

export default memo(Title);
