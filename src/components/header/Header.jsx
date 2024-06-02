import React, { useState } from "react";
import "./Header.css";
import useMedia from "../../hook/useMedia";

const Header = () => {
  const { pc, tablet, phone } = useMedia();

  const [isHovering, setIsHovering] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`header-container ${
          pc ? "pc" : tablet ? "tablet" : phone ? "phone" : ""
        }`}
      >
        {pc ? (
          <>
            <div className="header_nav1">
              <a href="/">
                <img
                  className="logo_img"
                  src={require("../../img/battleLogo.jpg")}
                  alt="logo"
                />
              </a>

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
              <a href="/login">로그인</a>
              <div>&#124;</div>
              <div className="playButton"></div>
            </div>
          </>
        ) : (
          <>
            <a href="/" className="log">
              <img
                className="logo_img2"
                src={require("../../img/battleLogo.jpg")}
                alt="logo"
              />
            </a>

            <div className="hamburger-menu" onClick={toggleMenu}>
              <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
              <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
              <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
            </div>
            {isMenuOpen && (
              <div className="mobile-menu">
                <ul className="basic-info">
                  기본 사항
                  <ul className="submenu">
                    <li>
                      <a href="/">맵</a>
                    </li>
                    <li>
                      <a href="/">무기</a>
                    </li>
                  </ul>
                </ul>
                <ul>
                  <a href="/">이벤트</a>
                </ul>
                <ul>
                  <a href="/">커뮤니티</a>
                </ul>
                <ul>
                  <a href="/">고객지원</a>
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Header;
