import Head from "next/head";
import Image from "next/image";
import homeStyles from "../styles/Home.module.css";
import Header from "../components/header";
import { React } from "react";
import { Section } from "../components/styledComponents";
import ProjectsSection from "../components/projectsSection";
import HomeSection from "../components/homeSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FrontEnd Portfolio</title>
        <meta name="keywords" content="frontend portfolio" />
      </Head>
      <Header />
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
          <ContactSection />
        </Section>
      </div>
    </div>
  );
}
// pos={window.scrollY}
