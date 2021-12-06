import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/global-components/app.styles';
import Button from '../../styles/global-components/button';
import { LeftSection } from './hero-styles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        👋 Hi, I'm Himesh
      </SectionTitle>
      <SectionText>
        A software developer with a primary focus on Full Stack Development. Interested in fields such as Web3 and Cloud DevOps.
      </SectionText>
      <Button onClick={props.handleClick}>Résumé</Button>
    </LeftSection>
  </Section>
);

export default Hero;