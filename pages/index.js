import Head from "next/head";
import homeStyles from "../styles/Home.module.css";
import Header from "../components/header";
import { React, useEffect, useState } from "react";
import { Section } from "../components/styledComponents";
import ProjectsSection from "../components/projectsSection";
import HomeSection from "../components/homeSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
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
  // console.log(offset);

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
          <ProjectsSection shouldPlay={shouldPlay} />
        </Section>

        <Section id="contact">
          <ContactSection />
        </Section>
      </div>
    </div>
  );
}
// pos={window.scrollY}
