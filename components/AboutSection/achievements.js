import isOdd from "is-odd";
import React from "react";
import achievStyles from "../../styles/About/Achievements.module.css";

const Achievements = ({ len, date, title, description, position }) => {
  const direction = isOdd(len) === isOdd(position) ? "left" : "right";
  return (
    <div
      className={achievStyles.container}
      id={
        direction == "left"
          ? achievStyles.containerLeft
          : achievStyles.containerRight
      }
    >
      <h4>{date}</h4>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Achievements;
