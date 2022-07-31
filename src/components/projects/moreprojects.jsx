import React from 'react';
import { GoLinkExternal, GoCode } from 'react-icons/go';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './projects.styles';
import { Section, SectionTitle } from '../../styles/global-components/app.styles';
import { allProjects } from '../../constants/constants';

const AllProjects = () => (
  <Section nopadding >
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {allProjects.map(({ id, title, image, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image} alt={title} />
          <TitleContent>
            <HeaderThree title="true">{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <div>
            <TitleContent>
              <strong>Stack</strong>
            </TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={source} target="_blank"><GoCode /> <span>Source</span></ExternalLinks>
            <ExternalLinks href={visit} target="_blank"><GoLinkExternal /> <span>Visit</span></ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default AllProjects;