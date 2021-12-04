import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/global-components/app.styles';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './technologies.styles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
      I have experience with the following technologies:
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size={40} />
        <ListContainer>
          <ListTitle>
            Firebase
          </ListTitle>
          <ListParagraph>
            Firebase is a cloud-based platform for hosting and managing web apps.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size={40} />
        <ListContainer>
          <ListTitle>
            Firebase
          </ListTitle>
          <ListParagraph>
            Firebase is a cloud-based platform for hosting and managing web apps.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size={40} />
        <ListContainer>
          <ListTitle>
            Firebase
          </ListTitle>
          <ListParagraph>
            Firebase is a cloud-based platform for hosting and managing web apps.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
