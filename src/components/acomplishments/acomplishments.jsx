import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/global-components/app.styles';
import { Box, Boxes, BoxNum, BoxText } from './acomplishments.styles';
import { AccomplishmentData } from '../../constants/constants';

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle>Accomplishments</SectionTitle>
    <Boxes>
      {AccomplishmentData.map((item, index) => (
        <Box key={index}>
          <BoxNum>{item.number}+</BoxNum>
          <BoxText>{item.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;

//Should make this pull data from GitHub API eventually