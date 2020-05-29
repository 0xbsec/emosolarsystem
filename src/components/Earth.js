import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components'

import {Sizes} from './Config';
import Moon from './Moon';
import Rocket from './Rocket';
import {circlePath, useWindowSize, useRotation, rand} from './AnimationHelpers';

const Earth = styled.text`
  font-size: ${Sizes.Earth}vmin;
`;

function Component() {
  const size = useWindowSize()

  const currentImg = useRotation(300, ['🌍', '🌎', '🌏'])

  const planetRef = useRef(null)
  const [x, setX] = useState(size.width / 2)
  const [y, setY] = useState(size.height / 2)
  const [rocketLaunch, setRocketLaunch] = useState(false)
  // tComputedTextLength()

  useEffect(() => {
    let bbox = planetRef.current.getBBox()

    setX((size.width - bbox.width) / 2)
    setY((size.height + bbox.height / 2) / 2)
  }, [size]);

  useEffect(() => {
    if (!rocketLaunch && rand(10) === 5) {
      setRocketLaunch(true)

      const timer = setTimeout(function(){
        setRocketLaunch(false)
      }, 10000)

      return () => clearTimeout(timer);
    }
  }, [currentImg]);


  return (
      <g id="earth-moon">
        <Earth ref={planetRef} x={x} y={y}>
          {currentImg}
        </Earth>

        <animateMotion
          dur="10s"
          repeatCount="indefinite"
          path={circlePath(Math.min(size.width, size.height) / 3)}
        />

        <Moon />

        {rocketLaunch && <Rocket />}
      </g>
  );
}

export default Component;
