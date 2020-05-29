import React from 'react';

function Component() {
  return (
    <text x='50%' y='50%'>
      <animateMotion
        dur="10s"
        repeatCount="indefinite"
        path="m 0 0 L 2000, -100"
      />
      🚀
    </text>
  );
}

export default Component;
