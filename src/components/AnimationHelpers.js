import {useEffect, useState} from 'react';

export const circlePath = (r) => (
  `M 0, 0 m -${r}, 0 a ${r},${r} 0 1,0 ${r * 2},0 a ${r},${r} 0 1,0 -${r * 2},0`
)

export const useWindowSize = () => {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }
    
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export const useRotation = (delay, images) => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      let nextIndex = currentImgIdx + 1;

      if (nextIndex >= images.length) {
        nextIndex = 0;
      }
      setCurrentImgIdx(nextIndex)
    }, delay);
    return () => clearInterval(timer);
  }, [currentImgIdx]);

  return images[currentImgIdx]
}