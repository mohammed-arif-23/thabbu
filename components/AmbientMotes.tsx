'use client';

import React from 'react';

export function AmbientMotes() {
  const motes = [
    { glyph: '✦', top: '15%', left: '8%', delay: '0s', dur: '7s', color: 'rgba(233, 170, 185, 0.45)', size: 11 },
    { glyph: '⋆', top: '35%', right: '9%', delay: '1.8s', dur: '8.5s', color: 'rgba(247, 231, 169, 0.5)', size: 14 },
    { glyph: '✧', top: '60%', left: '7%', delay: '3.2s', dur: '7.8s', color: 'rgba(201, 78, 104, 0.35)', size: 10 },
    { glyph: '⋆', top: '80%', right: '12%', delay: '0.9s', dur: '9s', color: 'rgba(233, 170, 185, 0.4)', size: 12 },
    { glyph: '•', top: '25%', right: '22%', delay: '2.5s', dur: '6.5s', color: 'rgba(247, 231, 169, 0.45)', size: 8 },
  ];

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      {motes.map((m, idx) => (
        <span
          key={idx}
          className="stardust-particle"
          style={{
            top: m.top,
            left: m.left,
            right: m.right,
            fontSize: `${m.size}px`,
            color: m.color,
            animationDelay: m.delay,
            animationDuration: m.dur,
          }}
        >
          {m.glyph}
        </span>
      ))}
    </div>
  );
}
