import React from 'react';
import styled from 'styled-components';

interface VideoPlayerProps {
  videoSource: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSource }) => {
  return (
    <StyledVideoPlayer controls>
      <source src={videoSource} type="video/mp4" />
    </StyledVideoPlayer>
  );
};

const StyledVideoPlayer = styled.video`
  width: 100%;
  max-width: 100%;
  height: auto;
  padding:10px 20px 0;

  @media(max-width:768px){
      padding:10px 10px 30px;
  }
`;