import Link from 'next/link';
import React from 'react';
import { SiGithub, SiPolywork, SiLinkedin } from 'react-icons/si';
import { ImLab } from 'react-icons/im';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './header.styles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '13px' }}>
          <ImLab size={20} /> <Span>DeviousLab</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/DeviousLab'>
        <SiGithub size={30} />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/himeshsamara/'>
        <SiLinkedin size={30} />
      </SocialIcons>
      <SocialIcons href='https://www.polywork.com/devious'>
        <SiPolywork size={30} />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
