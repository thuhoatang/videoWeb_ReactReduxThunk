import React from 'react';
import { connect, useDispatch } from 'react-redux';
import VideoItem from './VideoItem';
import { selectVideo } from '../actions';

const VideoList = ({ videos }) => {
  const dispatch = useDispatch();
  const onSelectVideo = (video) => {
    console.log('onSelectVideo ', video);
    dispatch(selectVideo(video));
  };

  const renderList = videos.map((video) => {
    return <VideoItem key={video.id.videoId} onVideoSelect={onSelectVideo} video={video} />;
  });

  return <div className="ui relaxed divided list">{renderList}</div>;
};

const mapStateToProps = (state) => {
  return {
    videos: state.video.videos,
  };
};

export default connect(mapStateToProps)(VideoList);
