import { useProgress } from '@react-three/drei';
import { useEffect, useState } from 'react';

export const CustomLoader = () => {
  const { progress } = useProgress();
  const [mounted, setMounted] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setIsInitialLoad(false);
    }
  }, [progress]);

  // ✅ Prevent rendering on server
  if (!mounted || !isInitialLoad) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#090909',
        zIndex: 9999,
        opacity: progress < 100 ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        pointerEvents: progress < 100 ? 'auto' : 'none',
      }}>
      <div
        style={{
          marginTop: '24px',
          width: '220px',
          height: '20px',
          borderRadius: '9999px',
          overflow: 'hidden',
          background: 'rgba(255,255,255,0.1)',
        }}>
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(to right, #FF0080, #56ff01)',
            transition: 'width 0.5s ease-in-out',
          }}
        />
      </div>
      <p style={{ marginTop: '16px', color: 'white', fontWeight: 'bold', fontSize: '18px' }}>
        {Math.round(progress)}%
      </p>
    </div>
  );
};
