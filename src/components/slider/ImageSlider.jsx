import React, { useState } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "./ImageSlider.css";

const NextArrow = ({ onClick }) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <BsChevronRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
};

const ImageSlider = ({ slidesToShow = 3 }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 600,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="newH1">Breack News</div>
      <Slider {...settings} className="sliderBox">
        <div className={0 === imageIndex ? "activeSlide" : "slide"}>
          <div className="news_lay">
            <img
              className="new_img"
              src={require("../../img/news.1.jpeg")}
              alt=""
            />

            <div className="new_pc">
              <div className="new_pc1 ">PC</div>
              <div className="new_pc2 ">콘솔</div>
            </div>

            <h2 className="news_h">에란겔의 클래식의 귀한</h2>
          </div>
        </div>
        {/* ======= */}
        <div className={1 === imageIndex ? "activeSlide" : "slide"}>
          <div className="news_lay">
            <img
              className="new_img"
              src={require("../../img/news.2.jpeg")}
              alt=""
            />

            <div className="new_pc">
              <div className="new_pc1 ">PC</div>
              <div className="new_pc2 ">콘솔</div>
            </div>

            <h2 className="news_h">2024년 5월 상점안내</h2>
            <div className="news_p">
              2024년 5월 상점 안내에 오신 것을 환영합니다!
            </div>
          </div>
        </div>
        {/* ======== */}
        <div className={2 === imageIndex ? "activeSlide" : "slide"}>
          <div className="news_lay">
            <img
              className="new_img"
              src={require("../../img/news.3.jpeg")}
              alt=""
            />

            <div className="new_pc">
              <div className="new_pc1 ">PC</div>
              <div className="new_pc2 ">콘솔</div>
            </div>

            <h2 className="news_h">PUBG : 베틀그라운드 2024 로드맵</h2>
          </div>
        </div>
        {/* ======= */}
        <div className={3 === imageIndex ? "activeSlide" : "slide"}>
          <div className="news_lay">
            <img
              className="new_img"
              src={require("../../img/news.4.jpeg")}
              alt=""
            />

            <div className="new_pc">
              <div className="new_pc1 ">PC</div>
              <div className="new_pc2 ">콘솔</div>
            </div>

            <h2 className="news_h">PUBG : 두가티 콜라보레이션</h2>
            <div className="news_p">
              PUBG : 베틀그라운드에서 두가티를 만나보세요.
            </div>
          </div>
        </div>
        {/* ======= */}
        <div className={4 === imageIndex ? "activeSlide" : "slide"}>
          <div className="news_lay">
            <img
              className="new_img"
              src={require("../../img/news.5.jpeg")}
              alt=""
            />

            <div className="new_pc">
              <div className="new_pc1 ">PC</div>
              <div className="new_pc2 ">콘솔</div>
            </div>

            <h2 className="news_h">[개발일지] Anti - ESP</h2>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default ImageSlider;
