import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Custom hook to run GSAP staggered fade-in animations on mount
 */
export function useGsapStagger(selector, stagger = 0.1, delay = 0.2) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        selector,
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger,
          delay,
          ease: 'power3.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [selector, stagger, delay]);

  return containerRef;
}

/**
 * Custom hook to add a subtle floating animation to an element with GSAP
 */
export function useGsapFloat(yDelta = 12, duration = 3.5) {
  const elementRef = useRef(null);

  useEffect(() => {
    if (!elementRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(elementRef.current, {
        y: `-=${yDelta}`,
        duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    return () => ctx.revert();
  }, [yDelta, duration]);

  return elementRef;
}
