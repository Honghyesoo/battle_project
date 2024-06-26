import React, { useEffect, useRef, useState } from "react";
import "./Main.css";
import ImageSlider from "../../components/slider/ImageSlider";
import ModalOne from "../../components/modal/ModalOne";
import ModalPath from "../../components/modal/ModalPath";

const Main = () => {
  const artRef = useRef(null);
  const keyLayoutRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [modalOne, setModalOne] = useState(false);
  const [modaltwo, setModaltwo] = useState(false);

  const videoIds = ["C69C1m4XtuA", "Oaj2u0ONWgs", "z2uPFxcGaSY", "-W_w3RSCA7Y"];

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        if (artRef.current) {
          artRef.current.classList.add("visible");
        }
      } else {
        if (artRef.current) {
          artRef.current.classList.remove("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const keyLayout = keyLayoutRef.current;
    if (keyLayout) {
      const totalWidth = keyLayout.scrollWidth / 100;

      keyLayout.style.animation = `slide ${totalWidth}s linear infinite`;
    }
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      {/* =========== */}
      <div ref={artRef} className="art">
        Key Art
      </div>
      <div className="slideBox">
        <div ref={keyLayoutRef} className="key_layout">
          <div className="key_img1">
            <div className="key1">
              <div className="key1_text">
                Season 13 BlackPink Collaboration Key Art
              </div>
            </div>
          </div>

          <div className="key_img2">
            <div className="key1">
              <div className="key2_text">
                Season 13 TAEGO Collaboration Key Art
              </div>
            </div>
          </div>

          <div className="key_img3">
            <div className="key1">
              <div className="key3_text">
                Season 13 SON Collaboration Key Art
              </div>
            </div>
          </div>

          <div className="key_img4">
            <div className="key1">
              <div className="key4_text">Season 13 Collaboration Key Art</div>
            </div>
          </div>

          <div className="key_img1">
            <div className="key1">
              <div className="key1_text">
                Season 13 BlackPink Collaboration Key Art
              </div>
            </div>
          </div>

          <div className="key_img2">
            <div className="key1">
              <div className="key2_text">
                Season 13 TAEGO Collaboration Key Art
              </div>
            </div>
          </div>

          <div className="key_img3">
            <div className="key1">
              <div className="key3_text">
                Season 13 SON Collaboration Key Art
              </div>
            </div>
          </div>

          <div className="key_img4">
            <div className="key1">
              <div className="key4_text">Season 13 Collaboration Key Art</div>
            </div>
          </div>

          <div className="key_img1">
            <div className="key1">
              <div className="key1_text">
                Season 13 BlackPink Collaboration Key Art
              </div>
            </div>
          </div>

          <div className="key_img2">
            <div className="key1">
              <div className="key2_text">
                Season 13 TAEGO Collaboration Key Art
              </div>
            </div>
          </div>

          <div className="key_img3">
            <div className="key1">
              <div className="key3_text">
                Season 13 SON Collaboration Key Art
              </div>
            </div>
          </div>

          <div className="key_img4">
            <div className="key1">
              <div className="key4_text">Season 13 Collaboration Key Art</div>
            </div>
          </div>
        </div>
      </div>
      {/* =========== */}

      <div className="youtube_text">Media Strategy</div>
      <div className="backGround2">
        <div className="youtube_layout">
          <div className="youtube_sc">
            {videoIds.map((videoId, index) => (
              <img
                key={index}
                className="youtube_box"
                src={require(`../../img/youtube${index + 1}.png`)}
                alt=""
                onClick={() => setModalOne(videoId)}
              />
            ))}
            {modalOne && (
              <ModalOne videoId={modalOne} setModalOne={setModalOne} />
            )}
          </div>
          {/* ====== */}
          <div className="youtube_sc2">
            <img
              className="youtube_img"
              src={require("../../img/youtube5.png")}
              alt=""
              onClick={() => {
                setModaltwo(true);
              }}
            />
            {modaltwo && <ModalPath setModaltwo={setModaltwo} />}
          </div>
          {/* === */}
        </div>
      </div>
      <ImageSlider />

      <div className="airBox" onClick={toTop}>
        <img
          src={require("../../img/airplane.png")}
          alt="Airplane"
          className="toTopBtn"
        />
      </div>

      <div style={{ height: "200px" }}></div>
    </>
  );
};

export default Main;
