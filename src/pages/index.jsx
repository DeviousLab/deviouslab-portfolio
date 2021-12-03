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
    <Layout>
      {/* <Section grid> */}
        <Hero />
        {/* <BgAnimation /> */}
      {/* </Section> */}
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
