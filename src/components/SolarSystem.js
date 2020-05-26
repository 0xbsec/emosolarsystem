import React from 'react';
import styled, {keyframes} from 'styled-components'

import Earth from './Earth';
import Moon from './Moon';
import Sun from './Sun';


const SolarSystem = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`;

const Rotation = keyframes`
  from {transform: rotate(0);}
  to {transform: rotate(360deg);} 
`;

const EarthOrbit = styled.div`
  border: solid 1px Red;
  height: 600px;
  width: 600px;
  position: absolute;
  animation: ${Rotation} 30s linear infinite;
`;

const MoonOrbit = styled.div`
  border: solid 1px green;
  height: 120px;
  width: 120px;
  position: absolute;
  top: 50%;
  left: -30px;
  animation: ${Rotation} 5s linear infinite reverse;
`;

function Component() {
  return (
    <SolarSystem>
      <Sun />

      <EarthOrbit>
        <Earth />

        <MoonOrbit>
          <Moon />
        </MoonOrbit>
      </EarthOrbit>
    </SolarSystem>
  );
}

export default Component;
