'use client';

import React, { useState, useEffect, useRef } from 'react';

interface PhotoPlaceholderProps {
  id: string;
  defaultSrc?: string;
  caption?: string;
  width?: number | string;
  height?: number | string;
  rotate?: number;
  className?: string;
}

export function PhotoPlaceholder({
  id,
  defaultSrc,
  caption,
  width = 120,
  height = 135,
  rotate = 0,
  className = '',
}: PhotoPlaceholderProps) {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [hasError, setHasError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fallbackPath = defaultSrc || `/photos/${id}.jpg`;

  useEffect(() => {
    // Check localStorage for saved custom upload
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
            // localStorage quota may be reached, continue with in-memory state
          }
          setPhotoUrl(result);
          setHasError(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={`polaroid-frame ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`Photo frame: ${caption || id}. Click to select or change photo.`}
      style={{
        width,
        height,
        backgroundColor: '#FFFEFC',
        border: '1px solid rgba(51, 42, 43, 0.12)',
        borderRadius: '6px',
        padding: '6px 6px 16px 6px',
        boxShadow: '0 4px 14px rgba(51, 42, 43, 0.08), 0 1px 3px rgba(0,0,0,0.04)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        transform: `rotate(${rotate}deg)`,
        transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease',
        cursor: 'pointer',
        position: 'relative',
        userSelect: 'none',
      }}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {/* Photo inner area */}
      <div
        style={{
          width: '100%',
          flex: 1,
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
              gap: '4px',
              padding: '8px',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '18px', opacity: 0.7 }}>📷</span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '9.5px',
                color: 'var(--color-muted-ink)',
                lineHeight: 1.15,
                fontWeight: 600,
              }}
            >
              tap to add pic
            </span>
          </div>
        )}
      </div>

      {/* Polaroid bottom caption */}
      <div
        style={{
          marginTop: '4px',
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
