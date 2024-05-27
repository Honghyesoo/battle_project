import React from "react";
import YouTube from "react-youtube";
import "./ModalOne.css";
const ModalPath = ({ setModaltwo }) => {
  return (
    <div className="modal-overlay" onClick={() => setModaltwo(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <YouTube
          videoId={"vLnocwYj4uE"}
          opts={{
            width: "860",
            height: "515",
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      </div>
    </div>
  );
};

export default ModalPath;
