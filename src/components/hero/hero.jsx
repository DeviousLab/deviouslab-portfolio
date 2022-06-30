import React from 'react';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

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
        A <RoughNotation type="underline" color="red" show={true} order="1">software developer</RoughNotation> from Sri Lanka based in Dubai.
      </SectionText>
      <SectionText>
        I have an interest in <RoughNotation type="highlight" color="rgba(255, 255, 100, 0.3)" animationDuration={2000} show={true} order="2">Full-Stack Development</RoughNotation> and <RoughNotation type="highlight" color="rgba(255, 255, 100, 0.3)" animationDuration={2000} show={true} order="3">DevOps.</RoughNotation>
      </SectionText>
      <Button onClick={props.handleClick}>Résumé</Button>
    </LeftSection>
  </Section>
);

export default Hero;