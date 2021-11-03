import aboutSectionStyles from "../styles/AboutSection.module.css";

const AboutSection = () => {
  return (
    <div className={aboutSectionStyles.container}>
      <div className={aboutSectionStyles.textContainer}>
        <div className={aboutSectionStyles.line}></div>
        <h1 className={aboutSectionStyles.title}>About Me</h1>
        <p className={aboutSectionStyles.text}>
          conding beautiful and simple things.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
