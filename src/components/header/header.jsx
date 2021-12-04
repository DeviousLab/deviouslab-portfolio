import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './header.styles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}}>
          <DiCssdeck size={30} /> <Span>Portfolio</Span>
        </a>
      </Link>  
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#technologies'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com'>
        <AiFillGithub size={30} />
      </SocialIcons>
      <SocialIcons href='https://linkedin.com'>
        <AiFillLinkedin size={30} />
      </SocialIcons>
      <SocialIcons href='https://instagram.com'>
        <AiFillInstagram size={30} />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
