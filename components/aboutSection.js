import aboutSectionStyles from "../styles/AboutSection.module.css";

const AboutSection = () => {
  return (
    <div className={aboutSectionStyles.container}>
      <div className={aboutSectionStyles.head}>
        <div className={aboutSectionStyles.line}></div>
        <h1>About Me</h1>
      </div>
      <div className={aboutSectionStyles.name}>
        <img src="../face.JPG" alt="" className={aboutSectionStyles.image} />
        <div className={aboutSectionStyles.blur}>
          <div className={aboutSectionStyles.textContainer}>
            <h2>Hi! I'm Leonardo.</h2>
            <p>
              I'm a Data Scientist and Developer. I've been focusing my skills
              in frontend development to create beautiful, practical and
              responsive projects. I'm passionate, disciplined and eager to
              learn.
            </p>
          </div>
        </div>
      </div>
      <div className={aboutSectionStyles.achiev}>
        <h2>Achievements</h2>
        <p>
          I'm here to help you show off food culinary products in a way that
          stops your audience in their tracks, makes them salivate and want what
          they see.
        </p>
      </div>
      <div className={aboutSectionStyles.skills}>
        <h2>Skill set</h2>
        <p>
          I'm here to help you show off food culinary products in a way that
          stops your audience in their tracks, makes them salivate and want what
          they see.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
