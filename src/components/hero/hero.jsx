import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/global-components/app.styles';
import Button from '../../styles/global-components/button';
import { LeftSection } from './hero-styles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to my portfolio
      </SectionTitle>
      <SectionText>
        I'm a software developer based in the UAE. 
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;