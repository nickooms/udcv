import React from 'react';

import '../node_modules/@material/top-app-bar/dist/mdc.top-app-bar.css';
import '../node_modules/@material/icon-button/dist/mdc.icon-button.css';

export const Title = ({ children }) => (
  <span className="mdc-top-app-bar__title">{children}</span>
);

export const Row = ({ children }) => (
  <div className="mdc-top-app-bar__row">{children}</div>
);

export const Start = ({ children }) => (
  <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
    {children}
  </section>
);

export const End = ({ children }) => (
  <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
    {children}
  </section>
);

export const NavIcon = ({ children }) => (
  <button className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">
    {children}
  </button>
);

const TopAppBar = ({ children }) => (
  <header className="mdc-top-app-bar">{children}</header>
);

export default TopAppBar;
