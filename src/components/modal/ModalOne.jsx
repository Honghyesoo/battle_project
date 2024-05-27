import React from "react";
import YouTube from "react-youtube";
import "./ModalOne.css";

const ModalOne = ({ videoId, setModalOne }) => {
  return (
    <div className="modal-overlay" onClick={() => setModalOne(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <YouTube
          videoId={videoId}
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

export default ModalOne;
