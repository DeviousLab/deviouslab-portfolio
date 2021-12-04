import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

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
          <Slogan>Moving forward</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com'>
            <AiFillGithub size={30} />
          </SocialIcons>
          <SocialIcons href='https://linkedin.com'>
            <AiFillLinkedin size={30} />
          </SocialIcons>
          <SocialIcons href='https://instagram.com'>
            <AiFillInstagram size={30} />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
