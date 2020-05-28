import React, {useEffect, useState, useRef} from 'react';
import styled, {keyframes} from 'styled-components'

import {Sizes} from './Config';
import {useWindowSize} from './AnimationHelpers';
import Star from './Star';

function Component() {
  const size = useWindowSize()

  const stars = [...Array(Math.floor(size.width / 9)).keys()].map((i) => <Star key={i}/>)

  return (
    <g id="space">
      {stars}
    </g>
  );
}

export default Component;
