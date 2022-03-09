import React from 'react';
import { useSelector } from 'react-redux';
import './VideoDetail.css';

const VideoDetail = () => {
  const video = useSelector((state) => state.video.selectedVideo);
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} />
      </div>
      <div className="contentVideo ui segement">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
