import { React, useEffect, useState } from "react";
import cardStyles from "../../styles/Projects/Card.module.css";
import { useRef } from "react";
import { isMobile } from "react-device-detect";
import isOdd from "is-odd";

const Card = ({
  len,
  title,
  card_video,
  phone_video,
  link,
  position,
  shouldPlay,
}) => {
  const direction = isOdd(len) === isOdd(position) ? "left" : "right";
  const video = useRef(null);
  const iphone_video = useRef(null);

  useEffect(() => {
    !isMobile &&
      (shouldPlay
        ? (video.current.play(), iphone_video.current.play())
        : (video.current.pause(),
          (video.current.currentTime = 0),
          iphone_video.current.pause(),
          (iphone_video.current.currentTime = 0)));
  }, [shouldPlay]);

  return (
    <a
      className={cardStyles.a}
      id={direction == "left" ? cardStyles.aLeft : cardStyles.aRight}
      href={link}
      target="_blank"
    >
      <div className={cardStyles.container}>
        <h2 id={cardStyles.title}>{title}</h2>
        <div className={cardStyles.videoContainer}>
          {isMobile ? (
            <img
              src={`../images/${card_video}.jpg`}
              alt=""
              className={cardStyles.video}
            />
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
          {isMobile ? (
            <img
              src={`../images/${phone_video}.jpeg`}
              alt=""
              className={cardStyles.phone_video}
            />
          ) : (
            <video
              loop
              muted
              ref={iphone_video}
              src={`../videos/${phone_video}.mp4`}
              type="video/mp4"
              className={cardStyles.phone_video}
            ></video>
          )}
        </div>
        <div className={cardStyles.imageContainer}>
          <img src="./iphone.svg" alt="" className={cardStyles.img} />
        </div>
      </div>
    </a>
  );
};

export default Card;
