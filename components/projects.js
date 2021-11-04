import projectsStyles from "../styles/Project.module.css";
import { projects } from "../data";
import Card from "./card";
import { isMobile } from "react-device-detect";

const Project = () => {
  return (
    <div className={projectsStyles.container}>
      <h1>{isMobile} 6</h1>
      {projects.map((project) => (
        <Card
          key={project.id}
          title={project.title}
          card_video={project.card_video}
          phone_video={project.phone_video}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Project;
