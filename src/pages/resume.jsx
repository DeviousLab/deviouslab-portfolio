import React from 'react'
import Head from 'next/head';

import { Layout } from '../layout/layout';
import dynamic from 'next/dynamic';
const ResumeDisplay = dynamic(import('../components/resume/resume-display'), { ssr: false });

const Resume = () => {
  return (
    <>
      <Head>
        <title>DeviousLab Résumé</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <ResumeDisplay />
      </Layout>
    </>
  )
}

export default Resume