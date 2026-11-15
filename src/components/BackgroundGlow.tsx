import React, { useEffect, useState } from 'react';

export const BackgroundGlow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse tracking slightly via requestAnimationFrame
      window.requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Mouse Light */}
      <div
        className="hidden lg:block absolute w-[700px] h-[700px] rounded-full blur-[140px] opacity-15 transition-transform duration-75 ease-out"
        style={{
          background: 'radial-gradient(circle, #38bdf8 0%, #6366f1 40%, transparent 70%)',
          transform: `translate(${mousePosition.x - 350}px, ${mousePosition.y - 350}px)`,
        }}
      />

      {/* Static Atmospheric Gradients */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-sky-500/10 via-indigo-500/5 to-transparent blur-[120px] rounded-full" />
      <div className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/5 blur-[140px] rounded-full" />
      <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/5 blur-[140px] rounded-full" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
};
