import React from 'react';
import { Link } from 'react-router-dom';

import { H2, H3 } from './H';
import Elevation from './Elevation';
import Button from './Button';

const Home = () => (
  <div style={{ margin: 32 }}>
    <Elevation z="16">
      <div style={{ padding: 32, paddingTop: 16 }}>
        <H2>Nick Ooms</H2>
        <H3>Senior Full-Stack JavaScript Developer</H3>
        <Link to="/contact-info">
          <Button raised>Contact Info</Button>
        </Link>
        {/* <ul>
          <li>Markt 19, 2940 Hoevenen (Antwerp), Belgium</li>
          <li>(+32) 470 033 921</li>
          <li>oomsni@gmail.com</li>
          <li>twitter.com/nickooms</li>
          <li>linkedin.com/in/oomsnick</li>
          <li>github.com/nickooms</li>
        </ul> */}
      </div>
    </Elevation>
  </div>
);

export default Home;
