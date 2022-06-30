import React from 'react'

import { Layout } from '../layout/layout';
import dynamic from 'next/dynamic';
const ResumeDisplay = dynamic(import('../components/resume/resume-display'), { ssr: false });

const Resume = () => {
  return (
    <Layout>
      <ResumeDisplay />
    </Layout>
  )
}

export default Resume