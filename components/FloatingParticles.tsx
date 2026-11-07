'use client';

import React, { useState, useEffect, useCallback } from 'react';

interface ParticleItem {
  id: number;
  x: number;
  y: number;
  emoji: string;
  vx: number;
  vy: number;
  rotate: number;
}

export function spawnParticles(e: React.MouseEvent | MouseEvent | { clientX: number; clientY: number }, customEmojis?: string[]) {
  if (typeof window === 'undefined') return;
  const x = 'clientX' in e ? e.clientX : (window.innerWidth / 2);
  const y = 'clientY' in e ? e.clientY : (window.innerHeight / 2);
  
  const emojis = customEmojis || ['❤️', '🍅', '✨', '🌸', '💫'];
  
  window.dispatchEvent(
    new CustomEvent('card-particle-burst', {
      detail: { x, y, emojis },
    })
  );
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<ParticleItem[]>([]);

  const addBurst = useCallback((e: CustomEvent<{ x: number; y: number; emojis: string[] }>) => {
    const { x, y, emojis } = e.detail;
    const count = 7;
    const newItems: ParticleItem[] = [];

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 40 + Math.random() * 50;
      newItems.push({
        id: Date.now() + Math.random(),
        x,
        y,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        vx: Math.cos(angle) * speed,
        vy: -Math.abs(Math.sin(angle) * speed) - 30, // upward bias
        rotate: (Math.random() - 0.5) * 60,
      });
    }

    setParticles((prev) => [...prev, ...newItems]);

    // Cleanup after animation completes
    setTimeout(() => {
      const idsToRemove = new Set(newItems.map((p) => p.id));
      setParticles((prev) => prev.filter((p) => !idsToRemove.has(p.id)));
    }, 950);
  }, []);

  useEffect(() => {
    const handler = (e: Event) => addBurst(e as CustomEvent);
    window.addEventListener('card-particle-burst', handler);
    return () => window.removeEventListener('card-particle-burst', handler);
  }, [addBurst]);

  if (particles.length === 0) return null;

  return (
    <div
      className="particle-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="floating-particle"
          style={
            {
              left: p.x,
              top: p.y,
              '--p-vx': `${p.vx}px`,
              '--p-vy': `${p.vy}px`,
              '--p-rot': `${p.rotate}deg`,
            } as React.CSSProperties
          }
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
