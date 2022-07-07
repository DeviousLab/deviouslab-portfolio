import Head from 'next/head';

import Acomplishments from '../components/acomplishments/acomplishments';
import BackgroundAnimation from '../components/background-animation/background-animation';
import Hero from '../components/hero/hero';
import Projects from '../components/projects/projects';
import Technologies from '../components/technologies/technologies';
import Timeline from '../components/timeline/timeline';
import { Layout } from '../layout/layout';
import { Section } from '../styles/global-components/app.styles';

const Home = () => {
  return (
    <>
      <Head>
        <title>DeviousLab Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="DeviousLab Portfolio" />
        <meta name="description" content="Full-stack developer with an emphasis on React, Python and GoLang." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://deviouslab.dev/" />
        <meta property="og:title" content="DeviousLab Portfolio" />
        <meta property="og:description" content="Full-stack developer with an emphasis on React, Python and GoLang." />
        <meta property="og:image" content='/images/metatags.png' />

        <meta property="twitter:card" content="summary_large_image" /> /
        <meta property="twitter:url" content="https://deviouslab.dev/" />
        <meta property="twitter:title" content="DeviousLab Portfolio" />
        <meta property="twitter:description" content="Full-stack developer with an emphasis on React, Python and GoLang." />
        <meta property="twitter:image" content='/images/metatags.png' />
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          <BackgroundAnimation />
        </Section>
        <Timeline />
        <Technologies />
        <Projects />
        <Acomplishments />
      </Layout>
    </>
  );
};

export default Home;
