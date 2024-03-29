import React from 'react';
import { GoLinkExternal, GoCode } from 'react-icons/go';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, Box, BoxText } from './projects.styles';
import { Section, SectionDivider, SectionTitle } from '../../styles/global-components/app.styles';
import { topProjects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {topProjects.map(({ id, title, image, description, tags, source, visit }) => (
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
    <Box>
      <Link href="/projects">      
      <BoxText>
        View more projects <BsArrowRight />
      </BoxText>
      </Link>
    </Box>
  </Section>
);

export default Projects;