import Head from "next/head";
import homeStyles from "../styles/Home.module.css";
import Header from "../components/header";
import { React, useEffect, useState } from "react";
import { Section } from "../components/styledComponents";
import ProjectsSection from "../components/projectsSection";
import HomeSection from "../components/homeSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

export default function Home({ service, template, user }) {
  const [offset, setoffset] = useState(0);
  const [shouldPlay, setshouldPlay] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setoffset(window.pageYOffset);
      window.pageYOffset > 1800
        ? window.pageYOffset < 3600
          ? setshouldPlay(true)
          : setshouldPlay(false)
        : setshouldPlay(false);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>FrontEnd Portfolio</title>
        <meta name="keywords" content="frontend portfolio" />
      </Head>
      <Header offset={offset} />
      <div className={homeStyles.container}>
        <Section id="home">
          <HomeSection />
        </Section>
        <Section id="about">
          <AboutSection />
        </Section>

        <Section id="projects">
          <ProjectsSection />
        </Section>

        <Section id="contact">
          <ContactSection
            shouldPlay={shouldPlay}
            service={service}
            template={template}
            user={user}
          />
        </Section>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const service = process.env.REACT_APP_SERVICE_ID;
  const template = process.env.REACT_APP_TEMPLATE_ID;
  const user = process.env.REACT_APP_USER_ID;

  return {
    props: {
      service,
      template,
      user,
    },
  };
}
