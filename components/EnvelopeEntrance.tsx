'use client';

import React, { useState } from 'react';
import { spawnParticles } from './FloatingParticles';

interface EnvelopeEntranceProps {
  onOpen: () => void;
}

export function EnvelopeEntrance({ onOpen }: EnvelopeEntranceProps) {
  const [isDismissing, setIsDismissing] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  const handleOpen = (e?: React.MouseEvent) => {
    if (isDismissing || isRemoved) return;

    if (e) {
      spawnParticles(e, ['💌', '✨', '🍅', '❤️', '🌸']);
    }

    // 1. Immediately start smooth fade out (300ms)
    setIsDismissing(true);

    // 2. Notify parent and remove from DOM after fade completes
    setTimeout(() => {
      setIsRemoved(true);
      onOpen();
    }, 320);
  };

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRemoved(true);
    onOpen();
  };

  if (isRemoved) {
    return null;
  }

  return (
    <div
      className="envelope-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#FAF4ED',
        backgroundImage: 'radial-gradient(#E8D8CC 0.85px, transparent 0.85px)',
        backgroundSize: '24px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        transition: 'opacity 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
        opacity: isDismissing ? 0 : 1,
        pointerEvents: isDismissing ? 'none' : 'auto',
        willChange: 'opacity',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '320px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '0 auto',
          userSelect: 'none',
        }}
      >
        {/* 1. Header Area — Perfectly Above Envelope */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '22px',
          }}
        >
          {/* Washi Tape */}
          <div
            style={{
              backgroundColor: '#F7E7A9',
              padding: '4px 16px',
              borderRadius: '2px',
              boxShadow: '0 2px 6px rgba(51, 42, 43, 0.08)',
              transform: 'rotate(-1.5deg)',
              marginBottom: '10px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '10.5px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: '#554749',
                textTransform: 'uppercase',
              }}
            >
              SPECIAL DELIVERY 💌
            </span>
          </div>

          {/* Recipient Title */}
          <h1
            style={{
              fontFamily: 'var(--font-cursive)',
              fontSize: '34px',
              color: 'var(--color-ink)',
              margin: '0 0 3px 0',
              lineHeight: 1.15,
              fontWeight: 700,
            }}
          >
            For Thabbu 🍅
          </h1>

          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-muted-ink)',
              fontWeight: 600,
            }}
          >
            CONFIDENTIAL · PERSONAL KEEPSAKE
          </span>
        </div>

        {/* 2. Realistic Stationery Envelope */}
        <div
          onClick={handleOpen}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleOpen();
            }
          }}
          aria-label="Tap wax seal to open letter"
          style={{
            position: 'relative',
            width: '290px',
            height: '185px',
            backgroundColor: '#FFFDF9',
            borderRadius: '12px',
            boxShadow:
              '0 18px 40px -10px rgba(51, 42, 43, 0.15), 0 0 0 1px rgba(201, 78, 104, 0.12)',
            cursor: 'pointer',
            overflow: 'hidden',
          }}
        >
          {/* Envelope Fold Geometry */}
          <svg
            viewBox="0 0 290 185"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
            }}
          >
            {/* Left diagonal fold */}
            <path d="M0 0 L145 100 L0 185 Z" fill="#FFF6EE" opacity="0.85" />
            {/* Right diagonal fold */}
            <path d="M290 0 L145 100 L290 185 Z" fill="#FFF3E8" opacity="0.85" />
            {/* Bottom pocket */}
            <path d="M0 185 L145 100 L290 185 Z" fill="#FFF9F3" />
            <path
              d="M0 185 L145 100 L290 185"
              stroke="rgba(201, 78, 104, 0.12)"
              strokeWidth="1"
            />
            {/* Top flap */}
            <path d="M0 0 L145 95 L290 0 Z" fill="#FFF1E4" />
            <path
              d="M0 0 L145 95 L290 0"
              stroke="rgba(201, 78, 104, 0.15)"
              strokeWidth="1"
            />
          </svg>

          {/* Center Wax Seal Stamp Button */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                backgroundColor: 'var(--color-cherry)',
                boxShadow:
                  '0 8px 20px rgba(201, 78, 104, 0.45), inset 0 -2px 6px rgba(0,0,0,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                animation: isDismissing ? 'none' : 'sealPulse 2.4s infinite ease-in-out',
                transform: isDismissing ? 'scale(0.92)' : 'scale(1)',
                transition: 'transform 0.15s ease-out',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 5,
                  borderRadius: '50%',
                  border: '1.5px dashed rgba(255, 249, 243, 0.65)',
                }}
              />
              <span
                style={{
                  color: '#FFF9F3',
                  fontFamily: 'var(--font-calligraphy)',
                  fontSize: '30px',
                  lineHeight: 1,
                  userSelect: 'none',
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                }}
              >
                T
              </span>
            </div>
          </div>
        </div>

        {/* 3. Bottom Guidance & Skip */}
        <div
          style={{
            marginTop: '22px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-cursive)',
              fontSize: '20px',
              color: 'var(--color-cherry)',
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {isDismissing ? 'Opening letter...' : 'tap the wax seal to open 🍅'}
          </span>

          <button
            type="button"
            onClick={handleSkip}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-muted-ink)',
              cursor: 'pointer',
              padding: '6px 12px',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              opacity: 0.85,
            }}
          >
            skip to card →
          </button>
        </div>
      </div>
    </div>
  );
}
