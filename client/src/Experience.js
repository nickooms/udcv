import React, { Fragment } from 'react';

import List, { Item, Divider, Image, Text, Primary, Secondary, Meta } from './List';
import employers from './data/employers';

const Experience = () => (
  <List twoLine>
    {employers.map(({ id, image, name, period }, index) => (
      <Fragment key={index}>
        {index !== 0 && <Divider />}
        <Item href={`/experience/${id}`}>
          <Image>{image}</Image>
          <Text>
            <Primary>{name}</Primary>
            <Secondary>{period}</Secondary>
          </Text>
          <Meta>chevron_right</Meta>
        </Item>
      </Fragment>
    ))}
  </List>
);

export default Experience;
