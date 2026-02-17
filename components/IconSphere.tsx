
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { SiReact, SiNodedotjs, SiTypescript, SiJavascript, SiPython, SiGo, SiRust, SiDocker, SiKubernetes, SiGit, SiTailwindcss, SiVuedotjs, SiAngular, SiSvelte } from 'react-icons/si';

const icons = [
  { Component: SiReact, color: '#61DAFB' },
  { Component: SiNodedotjs, color: '#339933' },
  { Component: SiTypescript, color: '#3178C6' },
  { Component: SiJavascript, color: '#F7DF1E' },
  { Component: SiPython, color: '#3776AB' },
  { Component: SiGo, color: '#00ADD8' },
  { Component: SiRust, color: '#DE3423' },
  { Component: SiDocker, color: '#2496ED' },
  { Component: SiKubernetes, color: '#326CE5' },
  { Component: SiGit, color: '#F05032' },
  { Component: SiTailwindcss, color: '#06B6D4' },
  { Component: SiVuedotjs, color: '#4FC08D' },
  { Component: SiAngular, color: '#DD0031' },
  { Component: SiSvelte, color: '#FF3E00' }
];
const ICON_SIZE = 50;

interface IconPosition {
  x: number;
  y: number;
  z: number;
}

const IconSphere: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<IconPosition[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const radius = useMemo(() => 200, []);

  useEffect(() => {
    const numIcons = icons.length;
    const newPositions: IconPosition[] = [];
    const phi = Math.PI * (3. - Math.sqrt(5.));

    for (let i = 0; i < numIcons; i++) {
      const y = 1 - (i / (numIcons - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      newPositions.push({ x: x * radius, y: y * radius, z: z * radius });
    }
    setPositions(newPositions);
  }, [radius]);

  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());
  
  useEffect(() => {
    let animationFrameId: number;
    
    const animate = () => {
      const now = Date.now();
      const delta = (now - lastTime.current) / 1000;
      lastTime.current = now;

      setRotation(prev => {
        const speedX = mousePos.current.y * 0.005 + 0.1 * delta;
        const speedY = mousePos.current.x * 0.005 + 0.1 * delta;
        return {
          x: prev.x + speedX,
          y: prev.y + speedY
        };
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      mousePos.current = { x, y };
    }
  };

  const handleMouseOut = () => {
    mousePos.current = { x: 0, y: 0 };
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      className="w-full h-full flex items-center justify-center"
      style={{ perspective: '1000px' }}
    >
      <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
        {positions.map((pos, i) => {
          const sinX = Math.sin(rotation.x);
          const cosX = Math.cos(rotation.x);
          const sinY = Math.sin(rotation.y);
          const cosY = Math.cos(rotation.y);

          // Rotate Y
          const rotatedY_X = pos.x * cosY - pos.z * sinY;
          const rotatedY_Z = pos.x * sinY + pos.z * cosY;

          // Rotate X
          const rotatedX_Y = pos.y * cosX - rotatedY_Z * sinX;
          const rotatedX_Z = pos.y * sinX + rotatedY_Z * cosX;

          const z = rotatedX_Z + radius;
          const scale = (z + 200) / (radius * 2.5);
          const opacity = (z + 100) / (radius * 2.5);

          const { Component, color } = icons[i];

          return (
            <div
              key={i}
              className="absolute text-gray-400 transition-colors duration-200 cursor-pointer"
              style={{
                transform: `translate3d(${rotatedY_X - ICON_SIZE / 2}px, ${rotatedX_Y - ICON_SIZE / 2}px, 0) scale(${scale})`,
                opacity: opacity,
                zIndex: Math.floor(z),
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Component
                size={ICON_SIZE}
                style={{ color: hoveredIndex === i ? color : undefined }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconSphere;
