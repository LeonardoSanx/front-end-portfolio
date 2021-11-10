import homeSectionStyles from "../styles/HomeSection.module.css";

const HomeSection = () => {
  return (
    <div className={homeSectionStyles.container}>
      <div className={homeSectionStyles.textContainer}>
        <h1 className={homeSectionStyles.title}>
          Front-end <br />
          Web Developer
        </h1>
        <p className={homeSectionStyles.text}>
          conding beautiful and simple things.
        </p>
      </div>
    </div>
  );
};

export default HomeSection;
