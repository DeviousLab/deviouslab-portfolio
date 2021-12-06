import React from 'react';
import { DiFirebase, DiReact, DiGit } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/global-components/app.styles';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './technologies.styles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
      Languages, libraries and frameworks I work with:
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={40} />
        <ListContainer>
          <ListTitle>
            Frontend
          </ListTitle>
          <ListParagraph>
            HTML, CSS, JavaScript, Bootstrap 5, Sass, React, Styled Components, Tailwind
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size={40} />
        <ListContainer>
          <ListTitle>
            Backend
          </ListTitle>
          <ListParagraph>
            Python, Go, Firebase, Mongo DB, PostgreSQL, Node.js 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size={40} />
        <ListContainer>
          <ListTitle>
            Other
          </ListTitle>
          <ListParagraph>
            AWS, Git, Docker, Kubernetes, Jest, Technical SEO
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
