import React from 'react';
import styled, {keyframes} from 'styled-components'

import Earth from './Earth';
import Moon from './Moon';
import Sun from './Sun';

function Component() {
  return (
    <svg width="100%" height="100%">
      <Sun />

      <Earth />
    </svg>
  );
}

export default Component;
