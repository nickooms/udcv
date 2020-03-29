import React from 'react';
import { Link } from 'react-router-dom';

import '../node_modules/@material/list/dist/mdc.list.css';

export const Item = ({ children, href = '#', active = false }) => {
  const classNames = ['mdc-list-item'];
  if (active) {
    classNames.push('mdc-list-item--activated');
  }
  return (
    <Link
      className={classNames.join(' ')}
      to={href}
      {...(active && { 'aria-current': 'page' })}
    >
      {children}
    </Link>
  );
};

export const Divider = () => (
  <li className="mdc-list-divider" role="separator"></li>
);

export const SubHeader = ({ children }) => (
  <h3 class="mdc-list-group__subheader">{children}</h3>
);

export const Icon = ({ children }) => (
  <i className="material-icons mdc-list-item__graphic" aria-hidden="true">
    {children}
  </i>
);

export const Meta = ({ children }) => (
  <i className="material-icons mdc-list-item__meta" aria-hidden="true">
    {children}
  </i>
);

export const Image = ({ children }) => (
  <span className="mdc-list-item__graphic" style={{ width: '128px' }}>
    <img src={children} alt="" style={{ width: '128px' }} />
  </span>
);

export const Text = ({ children }) => (
  <span className="mdc-list-item__text">{children}</span>
);

export const Primary = ({ children }) => (
  <span className="mdc-list-item__primary-text">{children}</span>
);

export const Secondary = ({ children }) => (
  <span className="mdc-list-item__secondary-text">{children}</span>
);

const List = ({ children, twoLine = false, avatar = false }) => {
  const classNames = ['mdc-list'];
  if (twoLine) {
    classNames.push('mdc-list--two-line');
  }
  if (avatar) {
    classNames.push('mdc-list--avatar-list');
  }
  return <div className={classNames.join(' ')}>{children}</div>;
};

export default List;
