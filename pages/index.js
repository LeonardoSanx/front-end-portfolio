import Head from "next/head";
import Image from "next/image";
import homeStyles from "../styles/Home.module.css";
import Header from "../components/header";
import React from "react";
import { Section } from "../components/styledComponents";
import Project from "../components/projects";
import HomeSection from "../components/homeSection";

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
          {/* <div className={homeStyles.homeContainer}></div> */}
          <HomeSection />
        </Section>
        <Section id="about">
          <div className={homeStyles.aboutContainer}></div>
        </Section>

        <Section id="projects">
          <div className={homeStyles.projectsContainer}>
            <Project />
          </div>
        </Section>

        <Section id="contact">
          <div className={homeStyles.contactContainer}></div>
        </Section>
      </div>
    </div>
  );
}
// pos={window.scrollY}
