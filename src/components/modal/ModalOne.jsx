import React from "react";
import YouTube from "react-youtube";
import "./ModalOne.css";
import useMedia from "../../hook/useMedia";

const ModalOne = ({ videoId, setModalOne }) => {
  const { pc, tablet } = useMedia();

  const videoWidth = pc ? "860" : tablet ? "650" : "400";

  return (
    <div className="modal-overlay" onClick={() => setModalOne(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <YouTube
          videoId={videoId}
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

export default ModalOne;
