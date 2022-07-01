import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { HiDocumentDownload } from 'react-icons/hi';
import Link from 'next/link';

import { Section } from '../../styles/global-components/app.styles';
import { ResumeWrapper, ResumeContainer, ResumeBottom } from './resume-display.styles';

export default function ResumeDisplay() {
  return (
    <Section style={{ overflow: 'visible' }}>
      <ResumeWrapper>
        <ResumeContainer>
          <Document file={'/pdfs/HimeshResume.pdf'}>
            <Page pageNumber={1} />
          </Document>
        </ResumeContainer>
        <Link href='/pdfs/HimeshResume.pdf'>
          <ResumeBottom>
            <span>Download</span> <HiDocumentDownload />
          </ResumeBottom>
        </Link>
      </ResumeWrapper>
    </Section>
  )
}
