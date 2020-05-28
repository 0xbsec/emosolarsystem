import React, {useEffect, useState, useRef} from 'react';
import styled, {keyframes} from 'styled-components'

import {Sizes} from './Config';
import {circlePath, useWindowSize, useRotation} from './AnimationHelpers';

const rand = (n) => Math.floor(Math.random() * n)

function Component() {
  const size = useWindowSize()

  const IMAGES = ['⭐', '🌟']
  const STAR = IMAGES[rand(IMAGES.length)]

  const x = rand(size.width)
  const y = rand(size.height)

  const Star = styled.text`
    font-size: ${rand(10)}px;
    opacity: .${rand(5)};
  `;

  return (
    <Star x={x} y={y}>
      <animateMotion
        attributeName="transform" 
        attributeType="XML"
        type="rotate"
        from="0 75 75"
        to="100 75 75" 
        dur="30s"
        repeatCount="indefinite"
      />
      {STAR}
    </Star>
  );
}

export default Component;
