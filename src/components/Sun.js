import React, {useEffect, useState} from 'react';
import styled, {keyframes} from 'styled-components'

import {Sizes} from './Config';

const Shine = keyframes`
  to {
    transform: scale(1.1);
  }
 `;

const Sun = styled.div`
  position: absolute;

  font-size: ${Sizes.Sun}em;

  animation: ${Shine} 4s infinite alternate;
`;

function Component() {
  return (
    <Sun>
       ☀️
    </Sun>
  );
}

export default Component;
