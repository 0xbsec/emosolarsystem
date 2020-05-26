import React, {useEffect, useState} from 'react';
import styled, {keyframes} from 'styled-components'

import {Sizes, Distances} from './Config';

const Orbit = keyframes`
  from { transform: rotate(0deg) translateX(${Distances.Moon}em) rotate(0deg); }
  to   { transform: rotate(360deg) translateX(${Distances.Moon}em) rotate(-360deg); }
 `;


const Moon = styled.div`
  font-size: ${Sizes.Moon}em;
  position: absolute;
  /*animation: ${Orbit} 10s linear infinite;*/
`;

function Component() {
  const DELAY = 270

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
    <Moon>
      {IMAGES[currentImgIdx]}
    </Moon>
  );
}

export default Component;
