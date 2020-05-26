import React, {useEffect, useState} from 'react';
import styled, {keyframes} from 'styled-components'

import {Sizes} from './Config';

const Shine = keyframes`
  to {
    transform: scale(1.1);
  }
 `;

const Sun = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -100px;

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
