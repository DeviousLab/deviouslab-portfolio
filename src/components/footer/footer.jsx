import React from 'react';
import { SiGithub, SiLinkedin, SiPolywork } from 'react-icons/si';

import { SocialIcons } from '../header/header.styles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './footer.styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            Email
          </LinkTitle>
          <LinkItem href='mailto:deviouslab@gmail.com'>
            deviouslab@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>-First reactions are important</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/DeviousLab'>
            <SiGithub size={30} />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/himeshsamara/'>
            <SiLinkedin size={30} />
          </SocialIcons>
          <SocialIcons href='https://www.polywork.com/devious'>
            <SiPolywork size={30} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
