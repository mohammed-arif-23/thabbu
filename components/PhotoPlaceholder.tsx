'use client';

import React, { useState, useEffect, useRef } from 'react';
import { spawnParticles } from './FloatingParticles';

interface PhotoPlaceholderProps {
  id: string;
  defaultSrc?: string;
  caption?: string;
  width?: number | string;
  rotate?: number;
  aspectRatio?: string;
  className?: string;
}

export function PhotoPlaceholder({
  id,
  defaultSrc,
  caption,
  width = 96,
  rotate = 0,
  aspectRatio = '9 / 16',
  className = '',
}: PhotoPlaceholderProps) {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);
  const [isWiggling, setIsWiggling] = useState(false);

  const fallbackPath = defaultSrc || `/photos/${id}.jpg`;

  useEffect(() => {
    const saved = localStorage.getItem(`dear_tamatarr_photo_${id}`);
    if (saved) {
      setPhotoUrl(saved);
    } else {
      setPhotoUrl(fallbackPath);
    }
  }, [id, fallbackPath]);

  const handleClick = (e: React.MouseEvent) => {
    setIsWiggling(true);
    spawnParticles(e, ['✨', '🌸', '💖']);
    setTimeout(() => setIsWiggling(false), 550);
  };

  return (
    <div
      className={`polaroid-frame polaroid-idle ${isWiggling ? 'is-wiggling' : ''} ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick(e as unknown as React.MouseEvent);
        }
      }}
      aria-label={`Photo: ${caption || id}`}
      style={{
        width,
        backgroundColor: '#FFFEFC',
        border: '1px solid rgba(51, 42, 43, 0.12)',
        borderRadius: '5px',
        padding: '5px 5px 12px 5px',
        boxShadow: '0 4px 14px rgba(51, 42, 43, 0.08), 0 1px 3px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transform: `rotate(${rotate}deg)`,
        transition: 'box-shadow 0.2s ease',
        cursor: 'pointer',
        position: 'relative',
        userSelect: 'none',
        flexShrink: 0,
        // pass base rotate to CSS for wiggle keyframe
        ['--base-rotate' as string]: `${rotate}deg`,
      }}
    >
      {/* Decorative Washi Tape Tab */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: -6,
          width: 30,
          height: 10,
          backgroundColor: '#F7E7A9',
          opacity: 0.85,
          borderRadius: '1px',
          boxShadow: '0 1px 3px rgba(51, 42, 43, 0.08)',
          transform: `rotate(${rotate > 0 ? -2 : 3}deg)`,
          zIndex: 4,
          pointerEvents: 'none',
        }}
      />

      {/* Photo Container */}
      <div
        style={{
          width: '100%',
          aspectRatio,
          backgroundColor: '#F5ECE5',
          borderRadius: '3px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {photoUrl && !hasError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photoUrl}
            alt={caption || 'Photo'}
            onError={() => setHasError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2px',
              padding: '4px',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '15px', opacity: 0.75 }}>📷</span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '9px',
                color: 'var(--color-muted-ink)',
                lineHeight: 1.1,
                fontWeight: 600,
              }}
            >
              9:16 pic
            </span>
          </div>
        )}
      </div>

      {/* Polaroid bottom caption */}
      <div
        style={{
          marginTop: '3px',
          width: '100%',
          textAlign: 'center',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-cursive)',
            fontSize: '11px',
            color: 'var(--color-cherry)',
            fontWeight: 700,
          }}
        >
          {caption || 'Thabbu 💗'}
        </span>
      </div>
    </div>
  );
}
