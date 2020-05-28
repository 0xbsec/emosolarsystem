import React, {useEffect, useState} from 'react';
import styled, {keyframes} from 'styled-components'

import {Sizes} from './Config';
import {circlePath, useWindowSize} from './AnimationHelpers';

const Moon = styled.text`
  font-size: ${Sizes.Moon}vmin;
`;

function Component() {
  const DELAY = 400
  const size = useWindowSize()

  const IMAGES = [
    '🌑',
    '🌒',
    '🌓',
    '🌔',
    '🌕',
    '🌖',
    '🌗',
    '🌘',
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


  return (
    <Moon x={(size.width - Sizes.Moon) / 2} y={(size.height + Sizes.Moon) / 2}>
      <animateMotion
        dur="1.2s"
        repeatCount="indefinite"
        path={circlePath(Math.min(size.width, size.height) / 10)}
      />
      {IMAGES[currentImgIdx]}
    </Moon>
  );
}

export default Component;
