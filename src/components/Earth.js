import React, {useEffect, useState} from 'react';
import styled, {keyframes} from 'styled-components'

import {Sizes, Distances} from './Config';

const Earth = styled.div`
  font-size: ${Sizes.Earth}em;

  position: absolute;
  top: 50%;
  left: 0;
`;

function Component() {
  const DELAY = 270

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

  return (
    <Earth>
      {IMAGES[currentImgIdx]}
    </Earth>
  );
}

export default Component;
