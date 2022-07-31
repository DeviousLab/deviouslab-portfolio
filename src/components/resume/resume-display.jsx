import React from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import { HiDocumentDownload } from 'react-icons/hi';
import Link from 'next/link';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import { Section } from '../../styles/global-components/app.styles';
import { ResumeWrapper, ResumeContainer, ResumeBottom } from './resume-display.styles';

export default function ResumeDisplay() {
  return (
    <Section style={{ overflow: 'auto' }}>
      <ResumeWrapper>
        <ResumeContainer>
          <Document file={'/pdfs/HimeshResume.pdf'}>
            <Page pageNumber={1} />
          </Document>
        </ResumeContainer>
        <Link href='/pdfs/HimeshResume.pdf'>
          <ResumeBottom>
            <HiDocumentDownload size={30} />
          </ResumeBottom>
        </Link>
      </ResumeWrapper>
    </Section>
  )
}
