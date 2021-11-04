import aboutSectionStyles from "../../styles/About/AboutSection.module.css";
import { achievements } from "../../data";
import Achievements from "./achievements";

const AboutSection = () => {
  const achSize = achievements.length;

  return (
    <div className={aboutSectionStyles.container}>
      <div className={aboutSectionStyles.head}>
        <h1>About Me</h1>
        <div className={aboutSectionStyles.line}></div>
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
      <h2 className={aboutSectionStyles.achiev}>Achievements</h2>
      <div className={aboutSectionStyles.achievContainer}>
        {achievements.map((achievement) => (
          <Achievements
            len={achSize}
            key={achievement.id}
            date={achievement.date}
            title={achievement.title}
            description={achievement.description}
            position={achievement.positionKey}
          />
        ))}
      </div>
      <div className={aboutSectionStyles.skillsContainer}>
        <h2>Skill set</h2>
        <div className={aboutSectionStyles.skills}>
          <div className={aboutSectionStyles.skillCard}>
            <img
              src="../../logos/HTML.png"
              alt=""
              className={aboutSectionStyles.logo}
            />
            <p>HTML5</p>
          </div>
          <div className={aboutSectionStyles.skillCard}>
            <img
              src="../../logos/CSS.png"
              alt=""
              className={aboutSectionStyles.logo}
            />
            <p>CSS3</p>
          </div>
          <div className={aboutSectionStyles.skillCard}>
            <img
              src="../../logos/JavaScript.png"
              alt=""
              className={aboutSectionStyles.logo}
            />
            <p>JAVASCRIPT</p>
          </div>
          <div className={aboutSectionStyles.skillCard}>
            <img
              src="../../logos/React.png"
              alt=""
              className={aboutSectionStyles.logo}
            />
            <p>REACTJS</p>
          </div>
          <div className={aboutSectionStyles.skillCard}>
            <img
              src="../../logos/NextJs.png"
              alt=""
              className={aboutSectionStyles.logo}
            />
            <p>NEXTJS</p>
          </div>
          <div className={aboutSectionStyles.skillCard}>
            <img
              src="../../logos/Tail.png"
              alt=""
              className={aboutSectionStyles.logo}
            />
            <p>TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
