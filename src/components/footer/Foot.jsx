import React from "react";
import "./Foot.css";
const Foot = () => {
  return (
    <>
      <img
        src="https://t1.kakaocdn.net/gamepub/pub/battlegrounds/images/bg_piece2.png"
        alt=""
      />
      <div className="footcolor">
        <div className="foot_layout ">
          <div className="snsBox">
            <img
              className="foot_icon1"
              src={require("../../img/instagram.png")}
              alt="instagram"
            />
            <img
              className="foot_icon"
              src={require("../../img/facebook.png")}
              alt="facebook"
            />
          </div>
          <img
            className="foot_img"
            src="https://wstatic-prod.pubg.com/web/live/main_5416b6b/img/83a6979.png"
            alt=""
          />
          <p>
            게임정보 처리방침 &nbsp; &#124; &nbsp; 서비스 이용약관 &nbsp; &#124;
            &nbsp; 운영정책 &nbsp; &#124; 쿠키설정
          </p>
        </div>
      </div>
    </>
  );
};

export default Foot;
