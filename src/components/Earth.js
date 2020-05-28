import React, {useEffect, useState} from 'react';
import styled, {keyframes} from 'styled-components'

import {Sizes, Distances} from './Config';
import Moon from './Moon';
import {circlePath, useWindowSize} from './AnimationHelpers';

const Earth = styled.text`
  font-size: ${Sizes.Earth}px;
`;

function Component() {
  const DELAY = 150
  const size = useWindowSize()

  const IMAGES = [
    '🌍',
    '🌎',
    '🌏',
  ]

  const [currentImgIdx, setCurrentImgIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      let nextIndex = currentImgIdx + 1;

      if (nextIndex >= IMAGES.length) {
        nextIndex = 0;
      }
      setCurrentImgIdx(nextIndex)
    }, DELAY);
    return () => clearInterval(timer);
  }, [currentImgIdx]);

// {IMAGES[currentImgIdx]}

  return (
      <g id="earth-moon">
        <Earth x={(size.width - Sizes.Earth) / 2} y={(size.height + Sizes.Earth) / 2}>
          {IMAGES[currentImgIdx]}
        </Earth>

        <animateMotion
          dur="10s"
          repeatCount="indefinite"
          path={circlePath(300)}
        />

        <Moon />
      </g>
  );
}

export default Component;
