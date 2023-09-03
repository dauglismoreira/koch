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
  padding:0 20px;
`;