'use client';

import React, { useState, useEffect, useRef } from 'react';
import { spawnParticles } from './FloatingParticles';

interface PhotoPlaceholderProps {
  id: string;
  defaultSrc?: string;
  caption?: string;
  width?: number | string;
  rotate?: number;
  className?: string;
}

export function PhotoPlaceholder({
  id,
  defaultSrc,
  caption,
  width = 96,
  rotate = 0,
  className = '',
}: PhotoPlaceholderProps) {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);
  const [isWiggling, setIsWiggling] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fallbackPath = defaultSrc || `/photos/${id}.jpg`;

  useEffect(() => {
    const saved = localStorage.getItem(`dear_tamatarr_photo_${id}`);
    if (saved) {
      setPhotoUrl(saved);
    } else {
      setPhotoUrl(fallbackPath);
    }
  }, [id, fallbackPath]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          try {
            localStorage.setItem(`dear_tamatarr_photo_${id}`, result);
          } catch {
            // localStorage quota
          }
          setPhotoUrl(result);
          setHasError(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    setIsWiggling(true);
    spawnParticles(e, ['✨', '🌸', '💖']);
    setTimeout(() => setIsWiggling(false), 550);
    fileInputRef.current?.click();
  };

  return (
    <div
      className={`polaroid-frame ${isWiggling ? 'is-wiggling' : ''} ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick(e as unknown as React.MouseEvent);
        }
      }}
      aria-label={`Photo frame 9:16: ${caption || id}. Click to select photo.`}
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
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {/* 9:16 Vertical Photo Container */}
      <div
        style={{
          width: '100%',
          aspectRatio: '9 / 16',
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
