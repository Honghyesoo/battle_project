import React from "react";
import YouTube from "react-youtube";
import useMedia from "../../hook/useMedia";
import "./ModalOne.css";

const ModalPath = ({ setModaltwo }) => {
  const { pc, tablet } = useMedia();

  const videoWidth = pc ? "860" : tablet ? "650" : "400";

  return (
    <div className="modal-overlay" onClick={() => setModaltwo(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <YouTube
          videoId={"vLnocwYj4uE"}
          opts={{
            width: videoWidth,
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
