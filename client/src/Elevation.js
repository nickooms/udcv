import React from 'react';

import '../node_modules/@material/elevation/dist/mdc.elevation.css';

const Elevation = ({ children, z = 1 }) => <div className={`mdc-elevation--z${z}`}>{children}</div>;

export default Elevation;
