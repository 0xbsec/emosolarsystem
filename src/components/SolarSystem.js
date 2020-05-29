import React from 'react';
import styled from 'styled-components'

import Earth from './Earth';
import Sun from './Sun';
import Stars from './Stars';

const SolarSystem = styled.svg`
  background: black;
`;

function Component() {
  return (
    <SolarSystem width="100%" height="100%">
      <Stars />

      <Sun />

      <Earth />
    </SolarSystem>
  );
}

export default Component;
