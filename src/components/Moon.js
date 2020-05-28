import React, {useEffect, useState, useRef} from 'react';
import styled, {keyframes} from 'styled-components'

import {Sizes} from './Config';
import {circlePath, useWindowSize, useRotation} from './AnimationHelpers';

const Moon = styled.text`
  font-size: ${Sizes.Moon}vmin;
`;

function Component() {
  const size = useWindowSize()

  const currentImg = useRotation(400, ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘',])

  const planetRef = useRef(null)
  const [x, setX] = useState(size.width / 2)
  const [y, setY] = useState(size.height / 2)

  useEffect(() => {
    let bbox = planetRef.current.getBBox()

    setX((size.width - bbox.width) / 2)
  }, [size]);


  return (
    <Moon ref={planetRef} x={x} y={y}>
      <animateMotion
        dur="1.2s"
        repeatCount="indefinite"
        path={circlePath(Math.min(size.width, size.height) / 10)}
      />
      {currentImg}
    </Moon>
  );
}

export default Component;
