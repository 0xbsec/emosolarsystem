import React, {useEffect, useState, useRef} from 'react';
import styled, {keyframes} from 'styled-components'

import {Sizes} from './Config';
import {circlePath, useWindowSize, useRotation} from './AnimationHelpers';

const Shine = keyframes`
  to {
    transform: scale(2);
  }
`;

const rand = (n) => Math.floor(Math.random() * n)

function Component() {
  const size = useWindowSize()

  const IMAGES = ['⭐', '🌟']
  const STAR = IMAGES[rand(IMAGES.length)]

  const x = rand(size.width)
  const y = rand(size.height)

  const Star = styled.text`
    // animation: ${Shine} 1s infinite alternate;
    font-size: ${rand(10)}px;
    opacity: .${rand(5)};
  `;

  return (
    <Star x={x} y={y}>
      <animateMotion
        dur="1.2s"
        repeatCount="indefinite"
      />
      {STAR}
    </Star>
  );
}

export default Component;
