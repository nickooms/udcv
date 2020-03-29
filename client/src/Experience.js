import React from 'react';

import List, {
  Item,
  Divider,
  Image,
  Text,
  Primary,
  Secondary,
  Meta
} from './List';

import Neanex from './images/neanex.svg';
import Slickss from './images/slickss3.png';
import Cronos from './images/cronos.jpg';
import ChatLayer from './images/chatlayer.png';
import Porphyrio from './images/porphyrio.png';

const Experience = () => (
  <List twoLine>
    <Item href="/experience/5">
      <Image>{Porphyrio}</Image>
      <Text>
        <Primary>Porphyrio</Primary>
        <Secondary>2019</Secondary>
      </Text>
      <Meta>chevron_right</Meta>
    </Item>
    <Divider />
    <Item href="/experience/4">
      <Image>{ChatLayer}</Image>
      <Text>
        <Primary>ChatLayer.ai</Primary>
        <Secondary>2019</Secondary>
      </Text>
      <Meta>chevron_right</Meta>
    </Item>
    <Divider />
    <Item href="/experience/1">
      <Image>{Neanex}</Image>
      <Text>
        <Primary>Neanex</Primary>
        <Secondary>2018 - 2019</Secondary>
      </Text>
      <Meta>chevron_right</Meta>
    </Item>
    <Divider />
    <Item href="/experience/2">
      <Image>{Slickss}</Image>
      <Text>
        <Primary>Slickss</Primary>
        <Secondary>2017</Secondary>
      </Text>
      <Meta>chevron_right</Meta>
    </Item>
    <Divider />
    <Item href="/experience/3">
      <Image>{Cronos}</Image>
      <Text>
        <Primary>Cronos</Primary>
        <Secondary>1998 - 2016</Secondary>
      </Text>
      <Meta>chevron_right</Meta>
    </Item>
  </List>
);

export default Experience;
