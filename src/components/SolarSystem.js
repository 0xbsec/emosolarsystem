import React from 'react';
import styled, {keyframes} from 'styled-components'

import Earth from './Earth';
import Sun from './Sun';
import Junk from './Junk';

const SolarSystem = styled.svg`
  background: black;
`;

function Component() {
  return (
    <SolarSystem width="100%" height="100%">
      <Junk />

      <Sun />

      <Earth />
    </SolarSystem>
  );
}

export default Component;
