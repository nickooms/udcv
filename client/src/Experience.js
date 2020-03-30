import React, { Fragment } from 'react';

import List, { Item, Divider, Image, Text, Primary, Secondary, Meta } from './List';
import workExperience from './data/work-experience';

const Experience = () => (
  <List twoLine>
    {workExperience.map(({ id, image, name, period, role }, index) => (
      <Fragment key={index}>
        {index !== 0 && <Divider />}
        <Item href={`/experience/${id}`}>
          <Image>{image}</Image>
          <Text>
            <Primary>{name}</Primary>
            <Secondary>{role}</Secondary>
          </Text>
          <Meta>chevron_right</Meta>
        </Item>
      </Fragment>
    ))}
  </List>
);

export default Experience;
