import React from 'react'
import Head from 'next/head';

import { Layout } from '../layout/layout';
import AllProjects from '../components/projects/moreprojects';

const Resume = () => {
  return (
    <>
      <Head>
        <title>DeviousLab Projects</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <AllProjects />
      </Layout>
    </>
  )
}

export default Resume