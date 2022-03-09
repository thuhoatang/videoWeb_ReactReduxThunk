import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

const App = () => {
  return (
    <div>
      <div className="ui container">
        <SearchBar />
        <div className="bodyVideo ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={null} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
