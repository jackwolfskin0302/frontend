import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { window } from 'global';

const StyledVideo = styled.video({
  width: '100%',
  height: 'auto',
});

interface Prop {
  src: string;
  shouldChangeSize: boolean;
  alt: PropTypes.string;
}

const Video: FunctionComponent<Prop> = ({ src, shouldChangeSize = false, alt, ...props }) => {
  const videoSize = shouldChangeSize && window.innerWidth < 600 ? 'sm' : 'lg';
  const videoSrc = videoSize === 'sm' ? src.replace('lg', 'sm') : src;

  return (
    <StyledVideo autoPlay muted loop playsInline alt={alt} {...props}>
      <source src={videoSrc} type="video/mp4" />
    </StyledVideo>
  );
};

export default Video;
