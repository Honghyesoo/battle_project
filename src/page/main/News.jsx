import React from "react";
import "./News.css";

const News = () => {
  return (
    <>
      <div className="new_title ">New Report</div>
      <div className="news_layout ">
        <div>
          <img
            className="new_img"
            src="https://wstatic-prod-boc.krafton.com/common/content/news/20240424/rJKFXgSp_thumb.jpg"
            alt=""
          />
          <div className="new_text">
            <div className="new_pc">
              <div className="new_pc1 ">PC</div>
              <div className="new_pc2 ">콘솔</div>
            </div>
            <h2>에란겔 클랙식의 귀환</h2>
          </div>
          <p></p>
        </div>

        <div>
          <img
            className="new_img"
            src="https://wstatic-prod-boc.krafton.com/common/content/news/20240507/o6GCDVfG_thumb.png"
            alt=""
          />
          <div className="new_text">
            <div className="new_pc">
              <div className="new_pc1 ">PC</div>
              <div className="new_pc2 ">콘솔</div>
            </div>

            <h2 className="new_h2">2024년 5월 상점 안내</h2>
            <p className="new_p ">
              2024년 5월 상점 안내에 오신 것을 환영합니다!
            </p>
          </div>
        </div>

        <div>
          <img
            className="new_img"
            src="https://wstatic-prod-boc.krafton.com/common/content/news/20240309/0Y3ppxlm_thumb.jpg"
            alt=""
          />
          <div className="new_text">
            <div className="new_pc">
              <div className="new_pc1 ">PC</div>
              <div className="new_pc2 ">콘솔</div>
            </div>
            <h2>PUBG: 배틀그라운드 2024 로드맵</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
