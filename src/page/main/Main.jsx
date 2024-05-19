import React, { useEffect, useRef, useState } from "react";
import "./Main.css";

const Main = () => {
  const artRef = useRef(null);
  const keyLayoutRef = useRef(null);

  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        if (artRef.current) {
          artRef.current.classList.add("visible");
        }
      } else {
        if (artRef.current) {
          artRef.current.classList.remove("visible");
        }
      }

      // if (window.scrollY >= 400) {
      //   const scrollOffset = Math.min(window.scrollY, 500);
      //   if (keyLayoutRef.current) {
      //     keyLayoutRef.current.style.transform = `translateX(-${scrollOffset}px)`;
      //   }
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="backGround" />
      <video className="fullscreen-video" autoPlay loop muted>
        <source src="./video/introVideo.mp4" type="video/mp4"></source>
      </video>

      <div
        className="slideImg"
        style={{ transform: `translateX(-${scrollOffset}px)`, gap: "30px" }}
      >
        {[1, 2, 3, 4].map((index) => (
          <img
            key={index}
            src={require(`../../img/slideimg.png`)}
            alt={`Slide ${index}`}
          />
        ))}
      </div>

      <div ref={artRef} className="art">
        Key Art
      </div>
      <div ref={keyLayoutRef} className="key_layout">
        <img
          className="key_img1 "
          src={require("../../img/Blackpink.jpg")}
          alt=""
        />
        <img
          className="key_img2"
          src={require("../../img/Season.jpg")}
          alt=""
        />
        <img className="key_img3 " src={require("../../img/SON.jpg")} alt="" />
        <img
          className="key_img2 "
          src={require("../../img/Season2.jpg")}
          alt=""
        />
      </div>

      <div style={{ height: "500px" }}></div>
    </>
  );
};

export default Main;
