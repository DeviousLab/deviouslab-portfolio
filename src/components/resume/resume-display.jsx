import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';

import { Section } from '../../styles/global-components/app.styles';
import { ResumeContainer } from './resume-display.styles';

export default function ResumeDisplay() {
  return (
    <Section>
      <ResumeContainer>
      <Document file={'/pdfs/HimeshResume.pdf'}>
        <Page pageNumber={1} />
      </Document>
      </ResumeContainer>
    </Section>
  )
}
