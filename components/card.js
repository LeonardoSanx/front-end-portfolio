import React from "react";
import cardStyles from "../styles/Card.module.css";
import { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";

const Card = ({ title, card_video, phone_video, link }) => {
  console.log(isMobile);
  const video = useRef(null);
  const iphone_video = useRef(null);
  useEffect(() => {
    video.current.defaultMuted = true;
    iphone_video.current.defaultMuted = true;
  });

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
          {isMobile ? (
            <video
              loop
              muted
              controls
              autoPlay
              ref={video}
              src={`../videos/${card_video}.mp4`}
              type="video/mp4"
              className={cardStyles.video}
            ></video>
          ) : (
            <video
              loop
              muted
              ref={video}
              src={`../videos/${card_video}.mp4`}
              type="video/mp4"
              className={cardStyles.video}
            ></video>
          )}
        </div>
        <div className={cardStyles.videoPhoneContainer}>
          <video
            loop
            muted
            controls
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
