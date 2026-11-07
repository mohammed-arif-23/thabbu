'use client';

import React, { useState } from 'react';
import { spawnParticles } from './FloatingParticles';

interface EnvelopeEntranceProps {
  onOpen: () => void;
}

export function EnvelopeEntrance({ onOpen }: EnvelopeEntranceProps) {
  const [stage, setStage] = useState<'sealed' | 'opening' | 'opened'>('sealed');

  const handleBreakSeal = (e?: React.MouseEvent) => {
    if (stage !== 'sealed') return;
    if (e) {
      spawnParticles(e, ['💌', '✨', '🍅', '❤️', '🌸']);
    }
    setStage('opening');
    setTimeout(() => {
      setStage('opened');
      setTimeout(onOpen, 400);
    }, 750);
  };

  if (stage === 'opened') {
    return null;
  }

  return (
    <div
      className={`envelope-stage ${stage === 'opening' ? 'is-opening' : ''}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: '#F5ECE3',
        backgroundImage: 'radial-gradient(#E5D5C5 0.75px, transparent 0.75px)',
        backgroundSize: '24px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        transition: 'opacity 0.4s ease',
        opacity: stage === 'opening' ? 0.95 : 1,
      }}
    >
      {/* Decorative Washi Tape at Top */}
      <div
        style={{
          width: 140,
          height: 24,
          backgroundColor: '#F7E7A9',
          transform: 'rotate(-2deg)',
          opacity: 0.9,
          boxShadow: '0 2px 6px rgba(51, 42, 43, 0.1)',
          clipPath: 'polygon(0% 12%, 4% 0%, 96% 0%, 100% 10%, 98% 90%, 94% 100%, 2% 100%, 0% 88%)',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: '#554749',
            textTransform: 'uppercase',
          }}
        >
          SPECIAL DELIVERY 💌
        </span>
      </div>

      {/* Physical Envelope Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '340px',
          height: '240px',
          backgroundColor: '#FFF9F3',
          borderRadius: '12px',
          boxShadow: '0 20px 45px -10px rgba(51, 42, 43, 0.22), 0 0 0 1px rgba(201, 78, 104, 0.15)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          perspective: '1000px',
        }}
      >
        {/* Envelope Flap Fold Lines */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            border: '1px solid rgba(201, 78, 104, 0.12)',
            borderRadius: '12px',
            pointerEvents: 'none',
          }}
        />

        {/* Envelope Triangular Top Flap */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '120px',
            backgroundColor: '#FFF1E2',
            clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
            boxShadow: '0 4px 12px rgba(51, 42, 43, 0.08)',
            transformOrigin: 'top center',
            transition: 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: stage === 'opening' ? 'rotateX(180deg)' : 'rotateX(0deg)',
            zIndex: 2,
          }}
        />

        {/* Diagonal Envelope Bottom Folds */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '140px',
            backgroundColor: '#FFFAF5',
            clipPath: 'polygon(0% 100%, 50% 30%, 100% 100%)',
            borderTop: '1px solid rgba(201, 78, 104, 0.08)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {/* Handwritten Recipient Note */}
        <div
          style={{
            textAlign: 'center',
            zIndex: 3,
            padding: '0 20px',
            marginTop: '30px',
            transition: 'transform 0.5s ease',
            transform: stage === 'opening' ? 'translateY(-20px)' : 'translateY(0)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-cursive)',
              fontSize: '25px',
              color: 'var(--color-ink)',
              display: 'block',
              lineHeight: 1.2,
              fontWeight: 700,
            }}
          >
            For Thabbu 🍅
          </span>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--color-muted-ink)',
              display: 'block',
              marginTop: '4px',
              fontWeight: 600,
            }}
          >
            CONFIDENTIAL · PERSONAL KEEPSAKE
          </span>
        </div>

        {/* Wax Seal Button (Centered on the envelope flap) */}
        <div
          style={{
            position: 'absolute',
            top: '88px',
            zIndex: 5,
            transition: 'all 0.4s ease',
            transform: stage === 'opening' ? 'scale(1.2) translateY(-20px)' : 'scale(1)',
          }}
        >
          <button
            type="button"
            onClick={(e) => handleBreakSeal(e)}
            aria-label="Tap to break wax seal and open greeting card"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <div
              style={{
                width: 66,
                height: 66,
                borderRadius: '50%',
                backgroundColor: 'var(--color-cherry)',
                boxShadow:
                  '0 8px 20px rgba(201, 78, 104, 0.4), inset 0 -2px 6px rgba(0,0,0,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                animation: stage === 'sealed' ? 'sealPulse 2.2s infinite' : 'none',
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
                }}
              >
                T
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Tap Guidance Prompt */}
      <div
        style={{
          marginTop: '28px',
          textAlign: 'center',
          animation: 'fadeIn 0.5s ease',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-cursive)',
            fontSize: '18px',
            color: 'var(--color-cherry)',
            fontWeight: 700,
            display: 'block',
          }}
        >
          {stage === 'opening' ? 'Breaking seal...' : 'tap the wax seal to open 🍅'}
        </span>
        <button
          type="button"
          onClick={() => onOpen()}
          style={{
            background: 'none',
            border: 'none',
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--color-muted-ink)',
            cursor: 'pointer',
            marginTop: '8px',
            textDecoration: 'underline',
          }}
        >
          skip to card →
        </button>
      </div>
    </div>
  );
}
