import React, {useEffect, useState, useRef} from 'react';
import styled, {keyframes} from 'styled-components'

import {Sizes} from './Config';
import {useWindowSize} from './AnimationHelpers';

const Shine = keyframes`
  to {
    transform: scale(1.01);
  }
 `;

const Sun = styled.text`
  font-size: ${Sizes.Sun}vmin;

  animation: ${Shine} 4s infinite alternate;
`;

function Component() {
  const size = useWindowSize()
  const planetRef = useRef(null)
  const [x, setX] = useState(size.width / 2)
  const [y, setY] = useState(size.height / 2)

  useEffect(() => {
    let bbox = planetRef.current.getBBox()

    setX((size.width - bbox.width) / 2)
    // setY((size.height + bbox.height) / 2)
  }, [size]);

  return (
    <Sun ref={planetRef} x={x} y={y}>
      ☀️
    </Sun>
  );
}

export default Component;
