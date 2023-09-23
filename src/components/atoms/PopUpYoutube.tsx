import "./popupYoutube.css";

const PopupVideo = ({ videoIds, onClose }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoIds}`;

  return (
    <div className="popup-video-overlay">
      <div className="popup-video-content">
        <iframe
          title="YouTube Video"
          width="800"
          height="500"
          src={embedUrl}
          frameBorder="2"
          allowFullScreen
          className="iframe-popup"
        ></iframe>
        <button
          onClick={onClose}
          className="text-sm text-black absolute right-0 top-0 -me-20 p-2 rounded-lg bg-slate-300"
        >
          close
        </button>
      </div>
    </div>
  );
};

export default PopupVideo;
