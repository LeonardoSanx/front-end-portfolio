import projectsSectionStyles from "../../styles/Projects/ProjectsSection.module.css";
import { projects } from "../../data";
import { useEffect, useState } from "react";
import Card from "./card";

const ProjectsSection = () => {
  const [shouldPlay, setshouldPlay] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      window.pageYOffset > 1800
        ? window.pageYOffset < 3600 && setshouldPlay(true)
        : setshouldPlay(false);
    };
  }, []);

  const projSize = projects.length;
  return (
    <div className={projectsSectionStyles.container}>
      <div className={projectsSectionStyles.head}>
        <h1>Projects</h1>
        <div className={projectsSectionStyles.line}></div>
      </div>
      <div className={projectsSectionStyles.projectsContainer}>
        {projects.map((project) => (
          <Card
            len={projSize}
            key={project.id}
            title={project.title}
            card_video={project.card_video}
            phone_video={project.phone_video}
            link={project.link}
            position={project.positionKey}
            shouldPlay={shouldPlay}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
