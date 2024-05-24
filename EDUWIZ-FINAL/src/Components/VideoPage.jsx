import React from 'react';
import ReactPlayer from 'react-player/lazy';

const VideoPage = (props) => {
  const divStyle = {
    display: 'flex',
    justifyContent: 'space-between', 
    padding: '50px',
    width: '100%', 
    margin: '0 auto', 
  };

  return (
    <section style={divStyle}>
      <div style={{ width: '700px', padding: '30px' }}> {/* Adjust width for each video */}
        <ReactPlayer
          url={props.item.videoId1} 
          controls={true}
          width="100%" 
        />
      </div>
      <div style={{ width: '700px', padding: '30px' }}> {/* Adjust width for each video */}
        <ReactPlayer
          url={props.item.videoId2} 
          controls={true}
          width="100%" 
        />
      </div>
    </section>
  );
};

export default VideoPage;