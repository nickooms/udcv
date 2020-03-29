import React from 'react';

import '../node_modules/@material/drawer/dist/mdc.drawer.css';

const Drawer = ({ children }) => (
  <aside className="mdc-drawer mdc-drawer--dismissible">
    <div className="mdc-drawer__content">{children}</div>
  </aside>
);

export default Drawer;
