import React, {useEffect, useState} from 'react';
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

  return (
    <Sun x={(size.width - Sizes.Sun) / 2} y={(size.height + Sizes.Sun) / 2}>
      ☀️
    </Sun>
  );
}

export default Component;
