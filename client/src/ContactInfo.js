import React from 'react';

import List, { Item, Text, Primary, Secondary, Divider } from './List';

// import Twitter from './images/twitter.png';

const ContactInfo = () => (
  <List twoLine>
    <Item icon="home_work">
      <Text>
        <Primary>Markt 19 - 2940 Hoevenen</Primary>
        <Secondary>Antwerp, Belgium</Secondary>
      </Text>
    </Item>
    <Divider />
    <Item icon="contact_phone">
      <Text>
        <Primary>Cell Phone</Primary>
        <Secondary>
          <a href="tel:+32470033921">+32 470 03 39 21</a>
        </Secondary>
      </Text>
    </Item>
    <Divider />
    <Item icon="contact_mail">
      <Text>
        <Primary>Email Address</Primary>
        <Secondary>
          <a href="mailto:oomsni@gmail.com">oomsni@gmail.com</a>
        </Secondary>
      </Text>
    </Item>
    <Divider />
    <Item faIcon="fab fa-twitter">
      <Text>
        <Primary>Twitter</Primary>
        <Secondary>
          <a href="https://twitter.com/nickooms">twitter.com/nickooms</a>
        </Secondary>
      </Text>
    </Item>
    <Divider />
    <Item faIcon="fab fa-linkedin-in">
      <Text>
        <Primary>LinkedIn</Primary>
        <Secondary>
          <a href="https://linkedin.com/in/oomsnick">linkedin.com/in/oomsnick</a>
        </Secondary>
      </Text>
    </Item>
    <Divider />
    <Item faIcon="fab fa-github">
      <Text>
        <Primary>GitHub</Primary>
        <Secondary>
          <a href="https://github.com/nickooms">github.com/nickooms</a>
        </Secondary>
      </Text>
    </Item>
  </List>
);

export default ContactInfo;
