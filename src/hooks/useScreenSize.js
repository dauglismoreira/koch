"use client"

import { useState, useEffect } from 'react';

function useScreenSize(breakpoint) {
  const [screenSize, setScreenSize] = useState({
    isLargeScreen: true,
    width: 1920,
  });

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setScreenSize({
        isLargeScreen: newWidth > breakpoint,
        width: newWidth,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return screenSize;
}

export default useScreenSize;