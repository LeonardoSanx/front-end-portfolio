import React from "react";
import phoneStyles from "../styles/Phone.module.css";
// import { iphone } from "./Capturar.PNG";

const Phone = ({ phone_video }) => {
  const playVideo = (e) => e.currentTarget.play();
  const stopVideo = (e) => e.currentTarget.pause();

  return (
    <div className={phoneStyles.container}>
      <img src="./iphone.svg" alt="" className={phoneStyles.img} />

      <span></span>
    </div>
  );
};

export default Phone;
