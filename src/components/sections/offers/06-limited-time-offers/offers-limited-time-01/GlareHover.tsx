import React, { useEffect, useRef, useState } from 'react';
import './GlareHover.css';

interface GlareHoverProps {
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  borderColor?: string;
  children?: React.ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
  className?: string;
  style?: React.CSSProperties;
  autoAnimateOnScroll?: boolean;
}

export const GlareHover: React.FC<GlareHoverProps> = ({
  width = '100%',
  height = 'auto',
  background = '#000',
  borderRadius = '16px',
  borderColor = '#333',
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.5,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = '',
  style = {},
  autoAnimateOnScroll = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolledIn, setIsScrolledIn] = useState(false);

  const hex = glareColor.replace('#', '');
  let rgba = glareColor;
  if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  } else if (/^[0-9A-Fa-f]{3}$/.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;
  }

  useEffect(() => {
    if (!autoAnimateOnScroll) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger glare sweep when element enters viewport
            setIsScrolledIn(true);
            const timer = setTimeout(() => {
              setIsScrolledIn(false);
            }, transitionDuration + 400);
            return () => clearTimeout(timer);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [autoAnimateOnScroll, transitionDuration]);

  const vars: Record<string, string> = {
    '--gh-width': width,
    '--gh-height': height,
    '--gh-bg': background,
    '--gh-br': borderRadius,
    '--gh-angle': `${glareAngle}deg`,
    '--gh-duration': `${transitionDuration}ms`,
    '--gh-size': `${glareSize}%`,
    '--gh-rgba': rgba,
    '--gh-border': borderColor,
  };

  return (
    <div
      ref={containerRef}
      className={`glare-hover ${playOnce ? 'glare-hover--play-once' : ''} ${
        isScrolledIn ? 'glare-hover--scrolled' : ''
      } ${className}`}
      style={{ ...vars, ...style } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default GlareHover;
