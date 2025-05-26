import { useRef, useEffect } from 'react';

const LetterGlitch = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const context = useRef(null);

  const glitchChars = 'PAYMEWELL$!@#%^AKLJFKDL<ZZNCM<VNMVFDSL:OPR{D'.split('');
  const charSize = 14;

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = context.current;
    if (!canvas || !ctx) return;

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    ctx.font = `${charSize}px monospace`;
    ctx.textBaseline = 'top';

    for (let y = 0; y < height; y += charSize) {
      for (let x = 0; x < width; x += charSize) {
        const char = glitchChars[Math.floor(Math.random() * glitchChars.length)];
        const color = `hsl(${Math.random() * 360}, 90%, 50%)`;
        ctx.fillStyle = color;
        ctx.fillText(char, x, y);
      }
    }
  };

  const animate = () => {
    const now = Date.now();
    const fps = 30; // 👈 Set your desired animation FPS here
    const interval = 1000 / fps;

    let then = now;

    const loop = () => {
      const now = Date.now();
      const delta = now - then;

      if (delta > interval) {
        then = now - (delta % interval);
        draw();
      }

      animationRef.current = requestAnimationFrame(loop);
    };

    loop();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    context.current = ctx;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative w-[100%] h-[80vh] bg-black overflow-hidden">
      {/* Ghosted Text Behind */}
      <h1 className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-40 text-[14vw] lg:text-[7vw] font-bold pointer-events-none select-none">
        paymewell
      </h1>

      {/* Glitch Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute z-10  mix-blend-lighten opacity-90 pointer-events-none"
      />
    </div>
  );
};

export default LetterGlitch;
