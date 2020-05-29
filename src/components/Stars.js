import React from 'react';

import {useWindowSize} from './AnimationHelpers';
import Star from './Star';

function Component() {
  const size = useWindowSize()

  const stars = [...Array(Math.floor(size.width / 9)).keys()].map((i) => <Star key={i}/>)

  return (
    <g id="stars">
      {stars}
    </g>
  );
}

export default Component;
