import React from 'react';
import styled from 'styled-components'

import {useWindowSize, rand} from './AnimationHelpers';

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
