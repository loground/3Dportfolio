import { useEffect, useState } from 'react';
import { useVideoTexture } from '@react-three/drei';

export const useSelectedVideoTexture = (src) => {
  const [videoTexture, setVideoTexture] = useState(null);

  useEffect(() => {
    if (!src) return;

    const texture = useVideoTexture(src, {
      loop: true,
      muted: true,
      start: true,
      autoplay: true,
      crossOrigin: 'anonymous',
    });

    setVideoTexture(texture);
  }, [src]);

  return videoTexture;
};
