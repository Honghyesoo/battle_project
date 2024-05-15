import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <>
      <div className="header-container">
        <div className="header_nav1">
          <img
            className="logo_img"
            src={require("../../img/battleLogo.jpg")}
            alt="logo"
          />

          <div
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
            className="infoBox"
          >
            <a href="/" className="info">
              기본정보
            </a>

            {isHovering && (
              <div className="header_nav1-1">
                <a href="/">맵</a>
                <a href="/">무기</a>
              </div>
            )}
          </div>
          <a href="/">이벤트</a>
          <a href="/">커뮤니티</a>
          <a href="/">고객지원</a>
        </div>
        <div className="loginBox">
          <a href="/">로그인</a>
          <div>&#124;</div>
          <div className="playButton"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
