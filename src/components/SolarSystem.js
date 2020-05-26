import React from 'react';
import styled from 'styled-components'

import Earth from './Earth';
import Moon from './Moon';
import Sun from './Sun';


const SolarSystem = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
`;

function Component() {
  return (
    <SolarSystem>
      <Sun />

      <Earth />

      <Moon />
    </SolarSystem>
  );
}

export default Component;
