import React from "react";
import cardStyles from "../styles/Card.module.css";
import { useRef } from "react";

const Card = ({ title, card_video, phone_video, link }) => {
  const video = useRef(null);
  const iphone_video = useRef(null);
  // const video = document.getElementsByClassName("video");
  // const video_phone = document.getElementsByClassName("phone_video");

  const onMouseOver = () => {
    video.current.play();
    iphone_video.current.play();
  };
  const onMouseOut = () => {
    video.current.pause();
    video.current.currentTime = 0;
    iphone_video.current.pause();
    iphone_video.current.currentTime = 0;
  };

  return (
    <a
      className={cardStyles.a}
      href={link}
      target="_blank"
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <div className={cardStyles.container}>
        <div className={cardStyles.title}>
          <h2>{title}</h2>
        </div>
        <div className={cardStyles.videoContainer}>
          <video
            loop
            muted
            ref={video}
            src={`../videos/${card_video}.mp4`}
            type="video/mp4"
            className={cardStyles.video}
          ></video>
        </div>
        <div className={cardStyles.videoPhoneContainer}>
          <video
            loop
            muted
            ref={iphone_video}
            src={`../videos/${phone_video}.mp4`}
            type="video/mp4"
            className={cardStyles.phone_video}
          ></video>
        </div>
        <div className={cardStyles.imageContainer}>
          <img src="./iphone.svg" alt="" className={cardStyles.img} />
        </div>
      </div>
    </a>
  );
};

export default Card;