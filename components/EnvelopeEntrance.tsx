'use client';

import React, { useState } from 'react';
import { spawnParticles } from './FloatingParticles';

interface EnvelopeEntranceProps {
  onOpen: () => void;
}

function enterFullscreen() {
  if (typeof document === 'undefined') return;
  const elem = document.documentElement as any;
  try {
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(() => {});
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  } catch {
    // ignore iframe permissions restrictions
  }
}

export function EnvelopeEntrance({ onOpen }: EnvelopeEntranceProps) {
  const [stage, setStage] = useState<'sealed' | 'opening' | 'opened'>('sealed');

  const handleOpen = (e?: React.MouseEvent) => {
    if (stage !== 'sealed') return;

    enterFullscreen();

    if (e) {
      spawnParticles(e, ['💌', '✨', '🍅', '❤️', '🌸', '💖']);
    }

    setStage('opening');

    // Fast, crisp, butter-smooth sequence (no stutter)
    // 0ms: seal pop & flap opens
    // 350ms: envelope fades out
    // 650ms: fully removed
    setTimeout(() => {
      setStage('opened');
      setTimeout(onOpen, 350);
    }, 350);
  };

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    enterFullscreen();
    onOpen();
  };

  if (stage === 'opened') {
    return null;
  }

  const isOpening = stage === 'opening';

  return (
    <div
      className={`envelope-overlay ${stage}`}
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
        padding: '24px 20px',
        transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isOpening ? 0 : 1,
        transform: isOpening ? 'scale(1.03)' : 'scale(1)',
        pointerEvents: isOpening ? 'none' : 'auto',
        willChange: 'opacity, transform',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '340px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '0 auto',
        }}
      >
        {/* 1. Header Area — Cleanly above the envelope with plenty of space */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '24px',
            userSelect: 'none',
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
              marginBottom: '12px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
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
              fontSize: '36px',
              color: 'var(--color-ink)',
              margin: '0 0 4px 0',
              lineHeight: 1.15,
              fontWeight: 700,
            }}
          >
            For Thabbu jii🍅
          </h1>

          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '10.5px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-muted-ink)',
              fontWeight: 600,
            }}
          >
            with 💗 by Tubelight
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
          aria-label="Tap to open sealed envelope"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '320px',
            height: '210px',
            backgroundColor: '#FFFDF9',
            borderRadius: '12px',
            boxShadow:
              '0 20px 45px -10px rgba(51, 42, 43, 0.15), 0 0 0 1px rgba(201, 78, 104, 0.12)',
            cursor: 'pointer',
            userSelect: 'none',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Diagonal Fold Shadows (Pure SVG for 60fps performance) */}
          <svg
            viewBox="0 0 320 210"
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
            {/* Left fold */}
            <path d="M0 0 L160 115 L0 210 Z" fill="#FFF6EE" opacity="0.9" />
            {/* Right fold */}
            <path d="M320 0 L160 115 L320 210 Z" fill="#FFF4EA" opacity="0.9" />
            {/* Bottom pocket */}
            <path d="M0 210 L160 115 L320 210 Z" fill="#FFF9F3" />
            <path
              d="M0 210 L160 115 L320 210"
              stroke="rgba(201, 78, 104, 0.12)"
              strokeWidth="1"
            />
            {/* Top flap */}
            <path
              d={isOpening ? 'M0 0 L160 -40 L320 0 Z' : 'M0 0 L160 110 L320 0 Z'}
              fill="#FFF0E4"
              style={{
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
            <path
              d={isOpening ? 'M0 0 L160 -40 L320 0' : 'M0 0 L160 110 L320 0'}
              stroke="rgba(201, 78, 104, 0.15)"
              strokeWidth="1"
              style={{
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
          </svg>

          {/* Center Wax Seal Stamp Button */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) ${isOpening ? 'scale(1.2)' : 'scale(1)'}`,
              zIndex: 10,
              transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                backgroundColor: 'var(--color-cherry)',
                boxShadow:
                  '0 8px 20px rgba(201, 78, 104, 0.45), inset 0 -2px 6px rgba(0,0,0,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                animation: isOpening ? 'none' : 'sealPulse 2.4s infinite ease-in-out',
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
                  fontSize: '32px',
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
            marginTop: '26px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            userSelect: 'none',
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
            {isOpening ? 'Opening letter...' : 'tap the seal to open jiii'}
          </span>


        </div>
      </div>
    </div>
  );
}
