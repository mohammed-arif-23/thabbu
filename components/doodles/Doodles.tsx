import React, { useState } from 'react';
import { spawnParticles } from '../FloatingParticles';

export function PaperTexture() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 50,
        opacity: 0.035,
        backgroundImage: `
          radial-gradient(#332a2b 0.65px, transparent 0.65px),
          radial-gradient(#807176 0.45px, transparent 0.45px)
        `,
        backgroundSize: '20px 20px, 34px 34px',
        backgroundPosition: '0 0, 10px 10px',
      }}
    />
  );
}

export function TomatoStamp({
  size = 54,
  className = '',
  rotate = -6,
  interactive = false,
  onClick,
}: {
  size?: number;
  className?: string;
  rotate?: number;
  interactive?: boolean;
  onClick?: (e?: React.MouseEvent) => void;
}) {
  const [wobble, setWobble] = useState(false);

  const handleClick = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (interactive) {
      setWobble(true);
      setTimeout(() => setWobble(false), 450);
      onClick?.(e as React.MouseEvent);
    }
  };

  return (
    <div
      onClick={handleClick}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={(e) => {
        if (interactive && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={interactive ? 'Tap tomato to boop' : undefined}
      className={`tomato-stamp ${interactive ? 'interactive' : ''} ${className}`}
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotate}deg) ${wobble ? 'scale(1.15) rotate(12deg)' : 'scale(1)'}`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: interactive ? 'pointer' : 'default',
        userSelect: 'none',
        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="50"
          cy="58"
          rx="40"
          ry="34"
          fill="#C94E68"
          fillOpacity="0.9"
        />
        <ellipse
          cx="47"
          cy="60"
          rx="34"
          ry="28"
          fill="#B63E56"
          fillOpacity="0.35"
        />
        <ellipse cx="28" cy="62" rx="4" ry="2.5" fill="#FFA5B5" fillOpacity="0.6" />
        <ellipse cx="72" cy="62" rx="4" ry="2.5" fill="#FFA5B5" fillOpacity="0.6" />
        <path
          d="M 30 46 C 26 52 26 62 31 68"
          stroke="#FFF9F3"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
        <path
          d="M 50 32 L 49 18 M 50 30 C 44 26 36 28 32 30 M 50 30 C 56 26 64 28 68 30 M 50 31 C 45 35 39 37 36 41 M 50 31 C 55 35 61 37 64 41"
          stroke="#4F6D48"
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="30" r="3.5" fill="#4F6D48" />
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="#C94E68"
          strokeWidth="1.2"
          strokeDasharray="4 3"
          strokeOpacity="0.45"
        />
      </svg>
    </div>
  );
}

export function WashiTape({
  width = 110,
  height = 24,
  angle = -3,
  color = '#F7E7A9',
  label,
  style,
}: {
  width?: number;
  height?: number;
  angle?: number;
  color?: string;
  label?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        width,
        height,
        backgroundColor: color,
        transform: `rotate(${angle}deg)`,
        opacity: 0.88,
        boxShadow: '0 1px 4px rgba(51, 42, 43, 0.09)',
        clipPath:
          'polygon(0% 12%, 3% 0%, 97% 0%, 100% 10%, 98% 90%, 95% 100%, 2% 100%, 0% 88%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
        ...style,
      }}
    >
      {label && (
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '9.5px',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#554749',
            opacity: 0.85,
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

export function EnvelopeSeal({
  opened = false,
  onClick,
}: {
  opened?: boolean;
  onClick?: (e?: React.MouseEvent) => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`envelope-seal-btn ${opened ? 'opened' : ''}`}
      aria-label="Wax seal - tap to break agreement"
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      <div
        style={{
          width: 58,
          height: 58,
          borderRadius: '50%',
          backgroundColor: '#C94E68',
          boxShadow: opened
            ? '0 2px 6px rgba(201, 78, 104, 0.2)'
            : '0 6px 16px rgba(201, 78, 104, 0.35), inset 0 -2px 6px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          transform: opened ? 'scale(0.9) rotate(25deg)' : 'scale(1)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 4,
            borderRadius: '50%',
            border: '1.5px dashed rgba(255, 249, 243, 0.6)',
          }}
        />
        <span
          style={{
            color: '#FFF9F3',
            fontFamily: 'var(--font-calligraphy)',
            fontSize: '28px',
            fontWeight: 400,
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          {opened ? '✕' : 'T'}
        </span>
      </div>
      <span
        style={{
          fontFamily: 'var(--font-cursive)',
          fontSize: '16px',
          color: opened ? '#C94E68' : '#807176',
          letterSpacing: '0.02em',
          fontWeight: 700,
        }}
      >
        {opened ? 'agreement void 🤭' : 'tap seal to break'}
      </span>
    </button>
  );
}

export function HandDrawnHeart({
  size = 24,
  color = '#C94E68',
  style,
  animated = true,
}: {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
  animated?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={animated ? 'heart-beat' : ''}
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
    >
      <path
        d="M 16 27 C 12 23 4 17 4 10 C 4 5.5 7.5 2.5 12 2.5 C 14.5 2.5 15.5 3.8 16 4.8 C 16.5 3.8 17.5 2.5 20 2.5 C 24.5 2.5 28 5.5 28 10 C 28 17 20 23 16 27 Z"
        fill={color}
        fillOpacity="0.25"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Starburst({
  size = 20,
  color = '#C94E68',
  style,
}: {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="glint-sparkle"
      style={{ display: 'inline-block', ...style }}
    >
      <path
        d="M 12 2 L 12 22 M 2 12 L 22 12 M 5 5 L 19 19 M 5 19 L 19 5"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HandDrawnArrow({
  style,
}: {
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width="46"
      height="28"
      viewBox="0 0 50 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow-wiggle"
      style={{ display: 'inline-block', ...style }}
    >
      <path
        d="M 4 20 C 18 24 32 18 44 8 M 36 6 L 45 7 L 43 16"
        stroke="#C94E68"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GiftBoxDoodle({ size = 56 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block' }}
    >
      <rect x="12" y="24" width="40" height="32" rx="4" fill="#F5DCE2" stroke="#332A2B" strokeWidth="2" />
      <rect x="8" y="18" width="48" height="8" rx="2" fill="#FFFEFC" stroke="#332A2B" strokeWidth="2" />
      <rect x="29" y="18" width="6" height="38" fill="#C94E68" />
      <path
        d="M 32 18 C 24 10 16 14 26 18 C 22 8 36 8 32 18 C 38 8 46 12 36 18 C 42 12 40 18 32 18"
        fill="#C94E68"
        stroke="#332A2B"
        strokeWidth="1.2"
      />
      <circle cx="44" cy="34" r="5" fill="#F7E7A9" stroke="#332A2B" strokeWidth="1" />
      <path d="M 42 34 L 46 34" stroke="#332A2B" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function TubelightDoodle({ size = 60 }: { size?: number }) {
  return (
    <div className="tubelight-glow" style={{ display: 'inline-flex', alignItems: 'center' }}>
      <svg
        width={size}
        height={size * 0.55}
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'inline-block' }}
      >
        <rect x="16" y="18" width="68" height="14" rx="7" fill="#FFFEFC" stroke="#332A2B" strokeWidth="2.2" />
        <rect x="10" y="20" width="8" height="10" rx="2" fill="#E9AAB9" stroke="#332A2B" strokeWidth="1.5" />
        <rect x="82" y="20" width="8" height="10" rx="2" fill="#E9AAB9" stroke="#332A2B" strokeWidth="1.5" />
        <path d="M 30 8 L 32 14 M 50 6 L 50 13 M 70 8 L 68 14 M 30 42 L 32 36 M 50 44 L 50 37 M 70 42 L 68 36" stroke="#E5B53A" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function BlueShirtDoodle({ size = 52 }: { size?: number }) {
  return (
    <div className="doodle-bob" style={{ display: 'inline-flex' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'inline-block' }}
      >
        <path
          d="M 14 20 L 24 14 L 32 20 L 40 14 L 50 20 L 46 54 L 18 54 Z"
          fill="#BFDBFE"
          stroke="#1E40AF"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M 24 14 L 32 26 L 40 14"
          fill="#93C5FD"
          stroke="#1E40AF"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="32" r="1.5" fill="#1E40AF" />
        <circle cx="32" cy="40" r="1.5" fill="#1E40AF" />
        <circle cx="32" cy="48" r="1.5" fill="#1E40AF" />
        <rect x="36" y="30" width="8" height="9" rx="1.5" fill="none" stroke="#1E40AF" strokeWidth="1.2" />
      </svg>
    </div>
  );
}

export function NosePinDoodle({ size = 46 }: { size?: number }) {
  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="glint-sparkle"
      >
        <circle cx="24" cy="24" r="5" fill="#FFF9F3" stroke="#D97706" strokeWidth="2.2" />
        <circle cx="24" cy="24" r="2.5" fill="#F59E0B" />
        <path d="M 24 6 L 24 15 M 24 33 L 24 42 M 6 24 L 15 24 M 33 24 L 42 24" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M 11 11 L 17 17 M 31 31 L 37 37 M 37 11 L 31 17 M 17 31 L 11 37" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function IceCreamDoodle({ size = 48 }: { size?: number }) {
  return (
    <div className="doodle-float" style={{ display: 'inline-flex' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'inline-block' }}
      >
        <circle cx="24" cy="18" r="10" fill="#F5DCE2" stroke="#332A2B" strokeWidth="1.8" />
        <circle cx="24" cy="7" r="3" fill="#C94E68" />
        <path d="M 24 7 C 26 3 28 3 29 4" stroke="#4F6D48" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 16 23 L 24 42 L 32 23 Z" fill="#F7E7A9" stroke="#332A2B" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M 19 28 L 27 34 M 29 28 L 21 34" stroke="#D97706" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function CoffeeCup() {
  return (
    <div
      style={{
        position: 'relative',
        width: 120,
        height: 120,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Animated steam rising */}
      <svg
        viewBox="0 0 100 40"
        width="80"
        height="32"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
          zIndex: 3,
        }}
      >
        <path
          d="M 40 32 C 37 24 43 16 40 8"
          stroke="#C94E68"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          className="coffee-steam-1"
        />
        <path
          d="M 52 30 C 55 22 49 14 53 6"
          stroke="#C94E68"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          className="coffee-steam-2"
        />
        <path
          d="M 46 28 C 43 20 48 12 45 4"
          stroke="#C94E68"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          className="coffee-steam-3"
        />
      </svg>

      <svg
        viewBox="0 0 140 140"
        width="125"
        height="125"
        style={{
          position: 'absolute',
          inset: -2,
          opacity: 0.38,
          pointerEvents: 'none',
        }}
      >
        <circle
          cx="70"
          cy="70"
          r="56"
          fill="none"
          stroke="#9E6B47"
          strokeWidth="4"
          strokeDasharray="70 14 30 10"
          strokeLinecap="round"
        />
        <circle
          cx="71"
          cy="69"
          r="52"
          fill="none"
          stroke="#9E6B47"
          strokeWidth="1.5"
          strokeOpacity="0.5"
        />
      </svg>
      <svg
        viewBox="0 0 100 100"
        width="86"
        height="86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 1 }}
      >
        <circle cx="50" cy="50" r="44" fill="#FFFEFC" stroke="#807176" strokeWidth="1.6" />
        <circle cx="50" cy="50" r="33" fill="#EBDBC9" stroke="#332A2B" strokeWidth="2" />
        <circle cx="50" cy="50" r="28" fill="#6A462F" />
        <path
          d="M 50 56 C 47 52 42 47 42 43 C 42 40 45 38 48 38 C 49.5 38 50 39 50 39.5 C 50 39 50.5 38 52 38 C 55 38 58 40 58 43 C 58 47 53 52 50 56 Z"
          fill="#FFF9F3"
          fillOpacity="0.9"
        />
        <path
          d="M 83 42 C 92 42 94 58 83 58"
          stroke="#332A2B"
          strokeWidth="2.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

export function SideMirror() {
  return (
    <div
      className="mirror-vibe"
      style={{
        position: 'relative',
        width: 140,
        height: 92,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        viewBox="0 0 150 100"
        width="140"
        height="92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated wind speed streaks */}
        <path
          d="M 140 18 L 105 18"
          stroke="#C94E68"
          strokeWidth="1.6"
          strokeLinecap="round"
          className="wind-streak-1"
        />
        <path
          d="M 145 78 L 115 78"
          stroke="#C94E68"
          strokeWidth="1.6"
          strokeLinecap="round"
          className="wind-streak-2"
        />

        <path
          d="M 12 75 L 34 55"
          stroke="#332A2B"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <rect
          x="32"
          y="16"
          width="96"
          height="64"
          rx="18"
          fill="#FFFEFC"
          stroke="#332A2B"
          strokeWidth="2.4"
        />
        <path
          d="M 44 24 L 116 24 C 120 24 122 26 122 30 L 122 66 C 122 70 120 72 116 72 L 44 72 C 40 72 38 70 38 66 L 38 30 C 38 26 40 24 44 24 Z"
          fill="#DDD6EF"
          fillOpacity="0.3"
        />
        <path
          d="M 46 64 L 62 26 M 66 64 L 82 26"
          stroke="#FFF9F3"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeOpacity="0.85"
        />
        <circle cx="92" cy="45" r="2" fill="#C94E68" />
        <circle cx="104" cy="45" r="2" fill="#C94E68" />
        <path
          d="M 95 51 C 98 54 101 54 103 51"
          stroke="#C94E68"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        {/* Animated fragrance scent trail */}
        <path
          d="M 8 32 C 16 24 20 38 30 28"
          stroke="#E9AAB9"
          strokeWidth="2"
          strokeLinecap="round"
          className="scent-trail"
        />
      </svg>
    </div>
  );
}

export function WaveformDoodle({ interactive = true }: { interactive?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const baseHeights = [14, 22, 34, 18, 42, 28, 48, 36, 20, 38, 52, 40, 24, 32, 16];

  const togglePlay = () => {
    if (!interactive) return;
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      type="button"
      onClick={togglePlay}
      aria-label="Play song explanation voice memo"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '8px 16px',
        backgroundColor: '#FFFEFC',
        border: '1.4px solid #E9AAB9',
        borderRadius: '30px',
        boxShadow: '0 3px 10px rgba(51, 42, 43, 0.05)',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: '50%',
          backgroundColor: '#C94E68',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFF9F3',
          fontSize: '9px',
          marginRight: '4px',
        }}
      >
        {isPlaying ? '⏸' : '▶'}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '3px',
          height: '30px',
        }}
      >
        {baseHeights.map((h, i) => (
          <div
            key={i}
            className={isPlaying ? 'wave-bar-anim' : ''}
            style={{
              width: '2.5px',
              height: `${(h / 52) * 24}px`,
              backgroundColor: i % 2 === 0 ? '#C94E68' : '#E9AAB9',
              borderRadius: '2px',
              animationDelay: `${(i % 5) * 0.1}s`,
              transition: 'height 0.2s ease',
            }}
          />
        ))}
      </div>
      <span
        style={{
          fontFamily: 'var(--font-cursive)',
          fontSize: '14px',
          fontWeight: 700,
          color: '#807176',
          marginLeft: '6px',
          letterSpacing: '0.04em',
        }}
      >
        {isPlaying ? 'playing memo…' : '0:42'}
      </span>
    </button>
  );
}

export function PaperClip({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      width="20"
      height="40"
      viewBox="0 0 20 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', ...style }}
    >
      <path
        d="M 6 12 L 6 34 C 6 38 14 38 14 34 L 14 8 C 14 2 2 2 2 8 L 2 36 C 2 43 18 43 18 36 L 18 16"
        stroke="#807176"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* 1. Animated Expressive Tamatar Character Mascot */
export function CuteTomatoMascot({
  size = 80,
  onClick,
}: {
  size?: number;
  onClick?: (e?: React.MouseEvent) => void;
}) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label="Cute Tamatar Mascot - tap to boop"
      className="mascot-squish"
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
      }}
    >
      <svg
        viewBox="0 0 84 84"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft Drop Shadow */}
        <ellipse cx="42" cy="74" rx="26" ry="6" fill="rgba(51, 42, 43, 0.12)" />

        {/* Tomato Red Body */}
        <path
          d="M 42 16 C 24 16 12 28 12 45 C 12 62 26 72 42 72 C 58 72 72 62 72 45 C 72 28 60 16 42 16 Z"
          fill="url(#tomatoMascotGrad)"
          stroke="#C94E68"
          strokeWidth="2"
        />

        {/* Subtle Specular Highlight */}
        <ellipse cx="26" cy="30" rx="6" ry="3.5" transform="rotate(-30 26 30)" fill="#FFF" fillOpacity="0.55" />

        {/* Green Leaf Stem that Waggles */}
        <g className="leaf-waggle">
          <path
            d="M 42 16 C 42 9 40 4 36 2 C 39 3 43 6 44 14 Z"
            fill="#4F6D48"
            stroke="#2F4F24"
            strokeWidth="1.2"
          />
          <path
            d="M 42 16 C 36 12 30 14 26 18 C 32 17 38 18 42 16 Z"
            fill="#658B5C"
            stroke="#2F4F24"
            strokeWidth="1.2"
          />
          <path
            d="M 42 16 C 48 11 55 13 58 17 C 52 17 46 18 42 16 Z"
            fill="#658B5C"
            stroke="#2F4F24"
            strokeWidth="1.2"
          />
          <circle cx="42" cy="16" r="3" fill="#4F6D48" />
        </g>

        {/* Blushing Rosy Cheeks */}
        <circle cx="23" cy="50" r="5" fill="#FFA5BA" fillOpacity="0.8" className="cheek-glow" />
        <circle cx="61" cy="50" r="5" fill="#FFA5BA" fillOpacity="0.8" className="cheek-glow" />

        {/* Big Sparkly Anime Eyes */}
        <ellipse cx="32" cy="42" rx="4.5" ry="6" fill="#332A2B" />
        <circle cx="30.5" cy="40" r="2" fill="#FFF" />
        <circle cx="34" cy="44.5" r="1" fill="#FFF" />

        <ellipse cx="52" cy="42" rx="4.5" ry="6" fill="#332A2B" />
        <circle cx="50.5" cy="40" r="2" fill="#FFF" />
        <circle cx="54" cy="44.5" r="1" fill="#FFF" />

        {/* Sweet Smile */}
        <path
          d="M 38 51 C 40 55 44 55 46 51"
          stroke="#332A2B"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        <defs>
          <radialGradient id="tomatoMascotGrad" cx="34" cy="32" r="38" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FA6878" />
            <stop offset="70%" stopColor="#DE3B52" />
            <stop offset="100%" stopColor="#B31B32" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

/* 2. Vintage Pocket Stopwatch with Ticking Hand */
export function StopwatchDoodle({ size = 68 }: { size?: number }) {
  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
      }}
    >
      <svg
        viewBox="0 0 64 68"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top Button and Ring */}
        <path d="M 27 6 L 37 6 L 37 10 L 27 10 Z" fill="#D97706" stroke="#332A2B" strokeWidth="1.5" />
        <path d="M 23 8 C 23 2 41 2 41 8" stroke="#D97706" strokeWidth="2.4" strokeLinecap="round" />

        {/* Stopwatch Body */}
        <circle cx="32" cy="38" r="26" fill="#FFFEFC" stroke="#332A2B" strokeWidth="2.4" />
        <circle cx="32" cy="38" r="22" fill="#FFF9F3" stroke="#D97706" strokeWidth="1.2" strokeOpacity="0.4" />

        {/* Dial Ticks */}
        <line x1="32" y1="18" x2="32" y2="22" stroke="#332A2B" strokeWidth="2" strokeLinecap="round" />
        <line x1="52" y1="38" x2="48" y2="38" stroke="#332A2B" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="58" x2="32" y2="54" stroke="#332A2B" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="38" x2="16" y2="38" stroke="#332A2B" strokeWidth="2" strokeLinecap="round" />

        {/* Ticking Red Second Hand */}
        <g className="stopwatch-hand">
          <line x1="32" y1="38" x2="32" y2="20" stroke="#C94E68" strokeWidth="2" strokeLinecap="round" />
          <circle cx="32" cy="38" r="3" fill="#C94E68" />
        </g>

        {/* Radiating Motion Lines */}
        <path d="M 8 20 L 4 16 M 56 20 L 60 16 M 6 48 L 2 52" stroke="#C94E68" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
      </svg>
    </div>
  );
}

/* 3. Retro Cassette Tape Player with Spinning Spools & Floating Musical Notes */
export function RetroCassetteDoodle({
  size = 110,
  isPlaying = true,
}: {
  size?: number;
  isPlaying?: boolean;
}) {
  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Floating Animated Musical Notes */}
      <span
        aria-hidden="true"
        className="music-note-1"
        style={{
          position: 'absolute',
          top: -8,
          left: 20,
          color: '#C94E68',
          fontSize: '15px',
          fontWeight: 'bold',
          pointerEvents: 'none',
        }}
      >
        ♪
      </span>
      <span
        aria-hidden="true"
        className="music-note-2"
        style={{
          position: 'absolute',
          top: -12,
          right: 22,
          color: '#D97706',
          fontSize: '17px',
          fontWeight: 'bold',
          pointerEvents: 'none',
        }}
      >
        ♫
      </span>
      <span
        aria-hidden="true"
        className="music-note-3"
        style={{
          position: 'absolute',
          top: -16,
          left: 50,
          color: '#C94E68',
          fontSize: '14px',
          fontWeight: 'bold',
          pointerEvents: 'none',
        }}
      >
        ♬
      </span>

      <svg
        viewBox="0 0 114 74"
        width={size}
        height={(size * 74) / 114}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cassette Outer Shell */}
        <rect x="3" y="3" width="108" height="68" rx="8" fill="#FDF6F0" stroke="#332A2B" strokeWidth="2.4" />
        <rect x="7" y="7" width="100" height="60" rx="6" fill="#F5DCE2" />

        {/* Vintage Label */}
        <rect x="14" y="11" width="86" height="34" rx="4" fill="#FFFEFC" stroke="#C94E68" strokeWidth="1.4" />
        <text x="20" y="22" fill="#C94E68" fontSize="8" fontFamily="var(--font-sans)" fontWeight="bold">
          42s VOICE MEMO 📼
        </text>

        {/* Center Transparent Window */}
        <rect x="25" y="27" width="64" height="26" rx="4" fill="#E8D5CE" stroke="#332A2B" strokeWidth="1.6" />

        {/* Left Spool */}
        <g className={isPlaying ? 'tape-spool-spin' : ''} style={{ transformOrigin: '40px 40px' }}>
          <circle cx="40" cy="40" r="9" fill="#FFFEFC" stroke="#332A2B" strokeWidth="1.6" />
          <path d="M 40 33 L 40 47 M 33 40 L 47 40" stroke="#332A2B" strokeWidth="1.6" />
          <circle cx="40" cy="40" r="3" fill="#332A2B" />
        </g>

        {/* Right Spool */}
        <g className={isPlaying ? 'tape-spool-spin' : ''} style={{ transformOrigin: '74px 40px' }}>
          <circle cx="74" cy="40" r="9" fill="#FFFEFC" stroke="#332A2B" strokeWidth="1.6" />
          <path d="M 74 33 L 74 47 M 67 40 L 81 40" stroke="#332A2B" strokeWidth="1.6" />
          <circle cx="74" cy="40" r="3" fill="#332A2B" />
        </g>

        {/* Bottom Trapezoid Lip */}
        <path d="M 24 67 L 34 54 L 80 54 L 90 67 Z" fill="#EAD8CE" stroke="#332A2B" strokeWidth="1.8" />
        <circle cx="44" cy="61" r="2.5" fill="#FFFEFC" stroke="#332A2B" strokeWidth="1" />
        <circle cx="70" cy="61" r="2.5" fill="#FFFEFC" stroke="#332A2B" strokeWidth="1" />
      </svg>
    </div>
  );
}

/* 4. Two Smiles Animated Illustration Card */
export function TwoSmilesDoodle() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        width: '100%',
        maxWidth: '300px',
        padding: '6px 0',
      }}
    >
      {/* 1. Full Radiant Smile with Rotating Sunbeams */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#FFFEFC',
          borderRadius: '14px',
          border: '1.2px solid #F7E7A9',
          padding: '10px 14px',
          boxShadow: '0 4px 12px rgba(51, 42, 43, 0.05)',
        }}
      >
        <div style={{ position: 'relative', width: 64, height: 64 }}>
          {/* Rotating Sunbeams */}
          <svg viewBox="0 0 80 80" width="64" height="64" className="sunbeam-spin" style={{ position: 'absolute', inset: 0 }}>
            <g stroke="#F7E7A9" strokeWidth="2" strokeLinecap="round">
              <line x1="40" y1="6" x2="40" y2="14" />
              <line x1="40" y1="66" x2="40" y2="74" />
              <line x1="6" y1="40" x2="14" y2="40" />
              <line x1="66" y1="40" x2="74" y2="40" />
              <line x1="16" y1="16" x2="22" y2="22" />
              <line x1="58" y1="58" x2="64" y2="64" />
              <line x1="16" y1="64" x2="22" y2="58" />
              <line x1="58" y1="22" x2="64" y2="16" />
            </g>
          </svg>

          {/* Happy Radiant Face */}
          <svg viewBox="0 0 64 64" width="64" height="64" style={{ position: 'relative', zIndex: 1 }}>
            <circle cx="32" cy="32" r="22" fill="#FFF9F3" stroke="#332A2B" strokeWidth="2" />
            {/* Happy Eyes ^ ^ */}
            <path d="M 23 27 C 24 23 28 23 29 27" stroke="#332A2B" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M 35 27 C 36 23 40 23 41 27" stroke="#332A2B" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            {/* Rosy Cheeks */}
            <circle cx="20" cy="35" r="3.5" fill="#FFA5BA" opacity="0.8" />
            <circle cx="44" cy="35" r="3.5" fill="#FFA5BA" opacity="0.8" />
            {/* Big Toothy Grin */}
            <path d="M 24 35 C 24 45 40 45 40 35 Z" fill="#C94E68" stroke="#332A2B" strokeWidth="1.8" />
            <path d="M 26 35 C 28 39 36 39 38 35 Z" fill="#FFF" stroke="#332A2B" strokeWidth="1" />
          </svg>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-cursive)',
            fontSize: '13px',
            color: 'var(--color-cherry)',
            fontWeight: 700,
            marginTop: '4px',
          }}
        >
          Full-ah sirikkura smile ✨
        </span>
      </div>

      {/* 2. Quiet Little Look Smile */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#FFFEFC',
          borderRadius: '14px',
          border: '1.2px solid #E9AAB9',
          padding: '10px 14px',
          boxShadow: '0 4px 12px rgba(51, 42, 43, 0.05)',
        }}
      >
        <div style={{ position: 'relative', width: 64, height: 64 }}>
          {/* Floating Heart Above */}
          <span
            className="heart-beat"
            style={{
              position: 'absolute',
              top: -6,
              right: 6,
              fontSize: '14px',
              zIndex: 2,
            }}
          >
            💗
          </span>

          <svg viewBox="0 0 64 64" width="64" height="64" style={{ position: 'relative', zIndex: 1 }}>
            <circle cx="32" cy="32" r="22" fill="#FFF9F3" stroke="#332A2B" strokeWidth="2" />
            {/* Looking sideways shy eyes */}
            <circle cx="26" cy="28" r="3.5" fill="#332A2B" />
            <circle cx="25" cy="27" r="1.2" fill="#FFF" />
            <path d="M 22 23 C 24 22 28 22 30 23" stroke="#332A2B" strokeWidth="1.5" strokeLinecap="round" />

            <circle cx="38" cy="28" r="3.5" fill="#332A2B" />
            <circle cx="37" cy="27" r="1.2" fill="#FFF" />
            <path d="M 34 23 C 36 22 40 22 42 23" stroke="#332A2B" strokeWidth="1.5" strokeLinecap="round" />

            {/* Rosy Blushing Cheeks */}
            <circle cx="20" cy="36" r="4.5" fill="#FFA5BA" opacity="0.9" className="cheek-glow" />
            <circle cx="44" cy="36" r="4.5" fill="#FFA5BA" opacity="0.9" className="cheek-glow" />

            {/* Quiet gentle curved smile */}
            <path d="M 28 38 C 31 41 33 41 36 38" stroke="#332A2B" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-cursive)',
            fontSize: '13px',
            color: 'var(--color-ink)',
            fontWeight: 700,
            marginTop: '4px',
          }}
        >
          That quiet look… 🫠
        </span>
      </div>
    </div>
  );
}

/* 5. Origami Folded Heart Love Letter */
export function OrigamiHeartDoodle({ size = 68 }: { size?: number }) {
  return (
    <div
      className="doodle-float"
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
      }}
    >
      <svg
        viewBox="0 0 68 68"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft Drop Shadow */}
        <ellipse cx="34" cy="62" rx="22" ry="5" fill="rgba(51, 42, 43, 0.1)" />

        {/* Origami Heart Geometry */}
        <path d="M 34 56 L 14 36 C 8 30 8 18 18 12 C 27 6 34 16 34 16 Z" fill="#FCE7EC" stroke="#C94E68" strokeWidth="1.8" />
        <path d="M 34 56 L 54 36 C 60 30 60 18 50 12 C 41 6 34 16 34 16 Z" fill="#F8D3DC" stroke="#C94E68" strokeWidth="1.8" />

        {/* Paper fold facet lines */}
        <line x1="34" y1="16" x2="34" y2="56" stroke="#C94E68" strokeWidth="1.4" strokeDasharray="2 2" />
        <line x1="14" y1="36" x2="34" y2="36" stroke="#C94E68" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="54" y1="36" x2="34" y2="36" stroke="#C94E68" strokeWidth="1" strokeOpacity="0.5" />

        {/* Gold Wax Seal Stamp in the Center */}
        <circle cx="34" cy="34" r="8" fill="#F7E7A9" stroke="#D97706" strokeWidth="1.4" />
        <circle cx="34" cy="34" r="6" fill="none" stroke="#D97706" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
        <text x="34" y="37" fill="#D97706" fontSize="9" fontFamily="var(--font-cursive)" fontWeight="bold" textAnchor="middle">
          T
        </text>
      </svg>
    </div>
  );
}

/* ============================================================================
   NEW MOVIE DOODLES FOR 30-PAGE SAGA
   ============================================================================ */

/* 6. Missed Calls / Vanishing Act Doodle */
export function MissedCallsDoodle({ size = 100 }: { size?: number }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        maxWidth: '280px',
        width: '100%',
      }}
    >
      <div
        className="doodle-bob"
        style={{
          backgroundColor: 'rgba(201, 78, 104, 0.12)',
          border: '1px solid rgba(201, 78, 104, 0.25)',
          borderRadius: '16px',
          padding: '10px 14px',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundColor: '#C94E68',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '19px',
          }}
        >
          📵
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ color: '#FFB3C4', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Call Cut by Thabbu
          </div>
          <div style={{ color: '#FFF', fontSize: '13.5px', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
            “Nani vantanga jii...”
          </div>
        </div>
        <span style={{ fontSize: '11px', color: '#B8A6AC', fontFamily: 'monospace' }}>1s ago</span>
      </div>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          color: '#FFA5BA',
          fontSize: '12px',
          fontWeight: 600,
          padding: '2px 8px',
        }}
      >
        ⚠️ 4 Missed Calls from Tubelight
      </div>
    </div>
  );
}

/* 7. Dry Replies / Stone Heart Doodle */
export function DryRepliesDoodle() {
  const replies = ['Mmm.', 'Hmm.', 'Nope.', 'Illaye.'];
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        width: '100%',
        maxWidth: '280px',
      }}
    >
      <div
        className="shiver-ice"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'center',
          padding: '10px 14px',
          backgroundColor: 'rgba(25, 20, 24, 0.85)',
          borderRadius: '14px',
          border: '1.2px solid #5A4850',
          boxShadow: 'inset 0 0 15px rgba(100, 160, 220, 0.15)',
        }}
      >
        {replies.map((r, i) => (
          <span
            key={i}
            style={{
              backgroundColor: '#2F242A',
              border: '1px solid #7D4C5B',
              borderRadius: '8px',
              padding: '4px 10px',
              fontFamily: 'monospace',
              fontSize: '13px',
              color: '#B0D8FF',
              textShadow: '0 0 6px rgba(176, 216, 255, 0.5)',
            }}
          >
            ❄️ {r}
          </span>
        ))}
      </div>
      <span style={{ fontFamily: 'var(--font-cursive)', fontSize: '13.5px', color: '#FFA5BA' }}>
        Antarctica weather detected in chat 🥶
      </span>
    </div>
  );
}

/* 8. Shoulder Denial Doodle */
export function ShoulderDenialDoodle() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#241B1F',
          border: '1.2px solid #C94E68',
          borderRadius: '12px',
          padding: '8px 14px',
        }}
      >
        <span style={{ fontSize: '20px' }}>🚑</span>
        <div style={{ textAlign: 'left' }}>
          <div style={{ color: '#FFB3C4', fontSize: '11px', fontWeight: 700 }}>AMBULANCE vs MOHAN SENIOR</div>
          <div style={{ color: '#FFF', fontSize: '13px', fontFamily: 'var(--font-hand)' }}>
            “Illa illa na mohan senior ku cl pandra 🤭”
          </div>
        </div>
      </div>
      <span style={{ color: '#B8A6AC', fontSize: '11.5px', fontStyle: 'italic' }}>
        Actual event: 5 precious seconds on shoulder 🫠
      </span>
    </div>
  );
}

/* 9. Broken Promises Checklist Doodle */
export function BrokenPromisesDoodle() {
  const items = [
    { title: 'Rathima video', status: 'PENDING ❌' },
    { title: 'Proper Selfie', status: 'PENDING ❌' },
    { title: 'Bicep Heart', status: 'PENDING ❌' },
  ];
  return (
    <div
      style={{
        backgroundColor: '#201A1E',
        border: '1.2px solid #C94E68',
        borderRadius: '12px',
        padding: '10px 16px',
        maxWidth: '280px',
        width: '100%',
        boxShadow: '0 6px 18px rgba(0,0,0,0.4)',
      }}
    >
      <div style={{ color: '#FFA5BA', fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '8px' }}>
        📋 SHIPMENT STATUS · OVERDUE
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {items.map((it, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#2D1F25',
              padding: '5px 10px',
              borderRadius: '6px',
            }}
          >
            <span style={{ color: '#F7EBEF', fontSize: '13px', fontFamily: 'var(--font-serif)' }}>{it.title}</span>
            <span style={{ color: '#FF4D6D', fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.06em' }}>{it.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 10. Secret Thoughts / Cliffhanger Doodle */
export function SecretThoughtsDoodle() {
  return (
    <div
      className="doodle-bob"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        backgroundColor: '#22191D',
        border: '1.2px solid #C94E68',
        borderRadius: '14px',
        padding: '10px 16px',
        maxWidth: '280px',
      }}
    >
      <div style={{ fontSize: '28px' }}>🔒</div>
      <div style={{ textAlign: 'left' }}>
        <div style={{ color: '#FFA5BA', fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.08em' }}>TOP SECRET FILE</div>
        <div style={{ color: '#FFF', fontSize: '13.5px', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
          “Iruku na cl lahh solluren... Mudiyadhu.”
        </div>
      </div>
    </div>
  );
}

/* 11. White Heart Mystery Doodle */
export function WhiteHeartMysteryDoodle() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: 70,
          height: 70,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          className="heart-beat"
          style={{
            fontSize: '44px',
            filter: 'drop-shadow(0 0 14px rgba(255, 255, 255, 0.7))',
          }}
        >
          🤍
        </span>
        <span
          style={{
            position: 'absolute',
            bottom: -2,
            right: 0,
            fontSize: '22px',
          }}
        >
          🔍
        </span>
      </div>
      <div
        style={{
          backgroundColor: '#261C20',
          border: '1px solid #C94E68',
          borderRadius: '16px',
          padding: '4px 14px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span style={{ fontSize: '12px' }}>👀</span>
        <span style={{ color: '#FFA5BA', fontSize: '12px', fontWeight: 600 }}>
          Investigation: “thabu 🤍” — Who is that?
        </span>
      </div>
    </div>
  );
}

/* 12. No Compliments Trap Doodle */
export function NoComplimentsTrapDoodle() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        maxWidth: '280px',
      }}
    >
      <div
        style={{
          backgroundColor: '#261B20',
          border: '1.2px solid #FF4D6D',
          borderRadius: '14px',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          boxShadow: '0 0 16px rgba(255, 77, 109, 0.2)',
        }}
      >
        <span style={{ fontSize: '26px' }}>🚫</span>
        <div>
          <div style={{ color: '#FF7B95', fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em' }}>
            BAN IMPOSED BY THABBU
          </div>
          <div style={{ color: '#FFF', fontSize: '13px', fontFamily: 'monospace' }}>
            NO COMPLIMENTS ALLOWED 🤐
          </div>
        </div>
      </div>
      <span style={{ color: '#FFA5BA', fontSize: '11px', fontStyle: 'italic' }}>
        Penalty: Ban extended to next day! 😭
      </span>
    </div>
  );
}

/* 13. Jealousy Trials Doodle */
export function JealousyTrialsDoodle() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        maxWidth: '290px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#251A1E',
          border: '1.2px solid #C94E68',
          borderRadius: '12px',
          padding: '8px 12px',
          width: '100%',
        }}
      >
        <span style={{ fontSize: '24px' }}>🌶️</span>
        <div style={{ textAlign: 'left', flex: 1 }}>
          <div style={{ color: '#FF9EAE', fontSize: '10.5px', fontWeight: 700 }}>DOUBLE STANDARD METER: 100°C</div>
          <div style={{ color: '#FFF', fontSize: '13px', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
            “Yaru kuda? Ava kudaya? 🧐”
          </div>
        </div>
      </div>
      <span style={{ color: '#FFA5BA', fontSize: '11.5px', fontFamily: 'var(--font-cursive)' }}>
        Unaku thakkali chutney, enakku ratham ah! 😂
      </span>
    </div>
  );
}

/* 14. Stubborn Pills & Skipped Dinner Doodle */
export function StubbornPillsDoodle() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        maxWidth: '280px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: '#241A1E',
          border: '1.2px solid #C94E68',
          borderRadius: '12px',
          padding: '8px 14px',
          width: '100%',
        }}
      >
        <span style={{ fontSize: '24px' }}>💊</span>
        <div style={{ textAlign: 'left' }}>
          <div style={{ color: '#FF9EAE', fontSize: '10.5px', fontWeight: 700 }}>SKIPPING DINNER + PILLS</div>
          <div style={{ color: '#FFF', fontSize: '12.5px', fontFamily: 'monospace' }}>
            “FORBIDDEN WORD: SRY ⚠️”
          </div>
        </div>
      </div>
      <span style={{ color: '#FF7B95', fontSize: '11px', fontWeight: 600 }}>
        Heyy konruven una again sry use pannina! 😤
      </span>
    </div>
  );
}

/* 15. Twenty Days Away Doodle */
export function TwentyDaysAwayDoodle() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        maxWidth: '280px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          backgroundColor: '#261C20',
          border: '1.2px solid #C94E68',
          borderRadius: '12px',
          padding: '8px 14px',
          width: '100%',
        }}
      >
        <span style={{ fontSize: '28px' }}>✈️</span>
        <div style={{ textAlign: 'left' }}>
          <div style={{ color: '#FFA5BA', fontSize: '10.5px', fontWeight: 700 }}>20 DAYS OORU TRIP + YERCAUD</div>
          <div style={{ color: '#FFF', fontSize: '12.5px', fontFamily: 'var(--font-serif)' }}>
            “Monday govt holiday jii! 💡”
          </div>
        </div>
      </div>
      <span style={{ color: '#B8A6AC', fontSize: '11px', fontStyle: 'italic' }}>
        Always giving tubelight moment to Arif 🤦🏻‍♂️
      </span>
    </div>
  );
}

/* 16. Unromantic Red Flag Doodle */
export function UnromanticRedFlagDoodle() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <div
        className="doodle-float"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#2D1B22',
          border: '1.5px solid #FF4D6D',
          borderRadius: '20px',
          padding: '6px 16px',
          boxShadow: '0 0 18px rgba(255, 77, 109, 0.3)',
        }}
      >
        <span style={{ fontSize: '22px' }}>🚩</span>
        <span style={{ color: '#FFF', fontSize: '13px', fontWeight: 700, letterSpacing: '0.04em' }}>
          HELLO RED FLAG · HELLO UNROMANTIC GIRL
        </span>
      </div>
      <span style={{ color: '#FFA5BA', fontSize: '12px', fontFamily: 'var(--font-cursive)' }}>
        I need to modify ur gender! 😭😂
      </span>
    </div>
  );
}

/* 17. Possessive Radar Doodle */
export function PossessiveRadarDoodle() {
  return (
    <div
      style={{
        position: 'relative',
        width: 72,
        height: 72,
        borderRadius: '50%',
        border: '1.5px solid #C94E68',
        backgroundColor: '#FFF8FA',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(201, 78, 104, 0.15)',
      }}
    >
      <div
        className="radar-sweep-arm"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'conic-gradient(from 0deg, rgba(201, 78, 104, 0.4) 0deg, transparent 60deg)',
          borderRadius: '50%',
        }}
      />
      <span style={{ fontSize: '20px', position: 'relative', zIndex: 2 }}>🧐</span>
    </div>
  );
}

/* 18. Wooden Chemistry Lab Desk Carving "deewana dola" Doodle (Page 30) */
export function DeewanaDolaBenchDoodle() {
  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: '#3E2723',
        backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 16px)',
        border: '2px solid #5D4037',
        borderRadius: '10px',
        padding: '12px 18px',
        boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.6), 0 6px 16px rgba(0,0,0,0.25)',
        textAlign: 'center',
        maxWidth: '300px',
        width: '100%',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: -8,
          left: 14,
          backgroundColor: '#F7E7A9',
          color: '#554749',
          fontSize: '9px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          padding: '2px 8px',
          borderRadius: '2px',
          transform: 'rotate(-2deg)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        }}
      >
        CHEMISTRY LAB · LAST BENCH
      </div>

      <div style={{ marginTop: '4px' }}>
        <svg viewBox="0 0 220 50" width="220" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Wood Carving Shadow */}
          <text
            x="110"
            y="35"
            fontFamily="var(--font-cursive)"
            fontSize="26"
            fontWeight="bold"
            fill="#271815"
            textAnchor="middle"
          >
            deewana dola 💗
          </text>
          {/* Hand Carved Animated Chalky Pink Stroke */}
          <text
            x="110"
            y="34"
            fontFamily="var(--font-cursive)"
            fontSize="26"
            fontWeight="bold"
            fill="none"
            stroke="#FFA5BA"
            strokeWidth="1.6"
            className="carve-handwriting"
            textAnchor="middle"
          >
            deewana dola 💗
          </text>
        </svg>
      </div>
      <div style={{ color: '#D7CCC8', fontSize: '10px', letterSpacing: '0.08em', marginTop: '2px' }}>
        carved forever into history 🤭
      </div>
    </div>
  );
}

/* ============================================================================
   PAGE 20: TRUTH OR DARE ILLUMINATED BULB & BLUE SHIRT KEEPSAKE ART
   ============================================================================ */
export function TruthOrDareBulbArt() {
  const [isBulbLit, setIsBulbLit] = useState(true);

  const handleBulbToggle = (e: React.MouseEvent) => {
    setIsBulbLit(!isBulbLit);
    spawnParticles(e, ['💡', '✨', '👔', '💖', '⭐']);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '560px',
        margin: '6px auto',
        position: 'relative',
      }}
    >
      {/* Blackboard & Classroom Memory Frame */}
      <div
        style={{
          width: '100%',
          background: 'linear-gradient(145deg, #F8FAFD 0%, #EEF4FA 100%)',
          border: '1.5px solid #BDD5EA',
          borderRadius: '20px',
          padding: '18px 20px',
          boxShadow: isBulbLit
            ? '0 12px 36px rgba(74, 144, 226, 0.16), 0 0 28px rgba(255, 214, 112, 0.25)'
            : '0 6px 20px rgba(51, 42, 43, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          position: 'relative',
          transition: 'box-shadow 0.35s ease',
        }}
      >
        {/* Hanging Vintage Edison Bulb with Ambient Light Beam */}
        <div
          onClick={handleBulbToggle}
          style={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
            userSelect: 'none',
          }}
          title="Tap bulb to toggle classroom spotlight"
        >
          {/* Hanging Cord */}
          <div style={{ width: 2, height: 18, backgroundColor: '#807176' }} />
          {/* Brass Socket */}
          <div style={{ width: 20, height: 10, backgroundColor: '#C8A97E', borderRadius: '3px 3px 0 0', border: '1px solid #9D7C4D' }} />
          {/* Bulb Glass */}
          <div
            style={{
              width: 58,
              height: 68,
              borderRadius: '50% 50% 42% 42%',
              backgroundColor: isBulbLit ? '#FFF8D6' : 'rgba(235, 238, 242, 0.7)',
              border: '2px solid rgba(200, 169, 126, 0.7)',
              boxShadow: isBulbLit
                ? '0 0 30px rgba(255, 214, 112, 0.95), 0 0 60px rgba(247, 231, 169, 0.7), inset 0 0 16px #FFE17D'
                : 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              transition: 'all 0.35s ease',
            }}
          >
            {/* Realistic Edison Filament */}
            <svg width="28" height="36" viewBox="0 0 28 36" fill="none">
              <path
                d="M 7 32 L 10 16 C 10 9 18 9 18 16 L 21 32 M 10 16 L 18 16"
                stroke={isBulbLit ? '#FF6B00' : '#8A959E'}
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <span style={{ fontSize: '11.5px', color: 'var(--color-cherry)', fontFamily: 'var(--font-hand)', marginTop: '4px', fontWeight: 700 }}>
            {isBulbLit ? '💡 “andha shirt la bulb mari irundhinga”' : 'tap bulb to switch on 💡'}
          </span>
        </div>

        {/* Oxford Blue Shirt Art + Classroom Reaction Cluster */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            width: '100%',
          }}
        >
          {/* Blue Shirt Vector Illustration */}
          <div
            onClick={(e) => spawnParticles(e, ['👔', '✨', '💙', '🍅'])}
            style={{
              width: 100,
              height: 104,
              backgroundColor: '#35669E',
              backgroundImage: 'linear-gradient(145deg, #417BB8 0%, #295180 100%)',
              borderRadius: '16px 16px 8px 8px',
              border: '1.5px solid #1B365D',
              boxShadow: '0 6px 18px rgba(27, 54, 93, 0.22)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: '6px',
              cursor: 'pointer',
              flexShrink: 0,
            }}
            title="Arif's Blue Oxford Shirt"
          >
            {/* White Collar Wings */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                position: 'relative',
                top: -8,
              }}
            >
              <div style={{ width: 26, height: 16, backgroundColor: '#EBF4FC', border: '1px solid #BDD5EA', transform: 'rotate(-25deg)', borderRadius: '3px' }} />
              <div style={{ width: 26, height: 16, backgroundColor: '#EBF4FC', border: '1px solid #BDD5EA', transform: 'rotate(25deg)', borderRadius: '3px' }} />
            </div>
            {/* Button Placket */}
            <div style={{ width: 14, height: 60, backgroundColor: '#2E5B8E', borderLeft: '1px solid rgba(255,255,255,0.2)', borderRight: '1px solid rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', padding: '4px 0' }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#EBF4FC' }} />
              <div style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#EBF4FC' }} />
              <div style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#EBF4FC' }} />
            </div>
            {/* Breast Pocket with Pen */}
            <div style={{ position: 'absolute', top: 32, right: 12, width: 24, height: 26, border: '1.2px dashed rgba(255,255,255,0.4)', borderRadius: '2px 2px 6px 6px' }}>
              <div style={{ position: 'absolute', top: -6, left: 6, width: 3, height: 10, backgroundColor: '#C8A97E', borderRadius: '1px' }} />
            </div>
          </div>

          {/* Teacher Calling & Girls Laughing Dialog Callout */}
          <div
            style={{
              flex: '1 1 240px',
              backgroundColor: '#FFFFFF',
              border: '1.2px solid #BDD5EA',
              borderRadius: '14px',
              padding: '10px 14px',
              boxShadow: '0 2px 8px rgba(74, 144, 226, 0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#C94E68', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                CLASSROOM TRUTH OR DARE
              </span>
              <span style={{ fontSize: '14px' }}>🤭</span>
            </div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '13.5px', color: '#1B365D', fontStyle: 'italic', lineHeight: 1.35 }}>
              “Indhu Mam asked why I wore that shirt... I kept explaining while all the girls laughed...”
            </div>
            <div style={{ fontFamily: 'var(--font-cursive)', fontSize: '15px', color: '#C94E68', fontWeight: 700, marginTop: '2px' }}>
              “Ana neenga class la irukumodhu ungala dha pathutey irundha... cute ah irundhinga apo.” 🙈
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   PAGE 21: PATTI'S HEIRLOOM VELVET JEWELRY BOX & NOSE PIN
   ============================================================================ */
export function PattiJewelryBoxArt() {
  const handleSparkle = (e: React.MouseEvent) => {
    spawnParticles(e, ['💎', '✨', '💍', '🌸', '⭐']);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '560px',
        margin: '6px auto',
      }}
    >
      {/* Royal Burgundy Velvet Presentation Case */}
      <div
        onClick={handleSparkle}
        style={{
          width: '100%',
          backgroundColor: '#350E17',
          backgroundImage: 'radial-gradient(circle at 50% 35%, #581C28 0%, #22080E 100%)',
          borderRadius: '22px',
          padding: '20px 22px',
          border: '2px solid #E5C378',
          boxShadow: '0 14px 40px rgba(34, 8, 14, 0.35), inset 0 0 24px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          position: 'relative',
          cursor: 'pointer',
          overflow: 'hidden',
        }}
        title="Tap velvet case to polish the silver stud"
      >
        {/* Antique Gold Filigree Ornaments */}
        <div style={{ position: 'absolute', top: 8, left: 10, color: '#E5C378', fontSize: '18px', opacity: 0.85 }}>⚜️</div>
        <div style={{ position: 'absolute', top: 8, right: 10, color: '#E5C378', fontSize: '18px', opacity: 0.85 }}>⚜️</div>
        <div style={{ position: 'absolute', bottom: 8, left: 10, color: '#E5C378', fontSize: '18px', opacity: 0.85 }}>⚜️</div>
        <div style={{ position: 'absolute', bottom: 8, right: 10, color: '#E5C378', fontSize: '18px', opacity: 0.85 }}>⚜️</div>

        {/* Dedication Header Plaque */}
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '10.5px', fontWeight: 800, color: '#E5C378', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            ★ OCTOBER 2 · FIRST COMPLIMENT EVER RECORDED ★
          </span>
        </div>

        {/* Centerpiece: Silver Nose Pin Stud on Velvet Cushion */}
        <div
          style={{
            position: 'relative',
            width: 100,
            height: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Velvet Cushion Indentation */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 0, 0, 0.35)',
              border: '1.5px dashed rgba(229, 195, 120, 0.45)',
              boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.6)',
            }}
          />

          {/* Faceted Silver Diamond Nose Pin SVG */}
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            {/* Drop Shadow */}
            <circle cx="40" cy="44" r="26" fill="rgba(0,0,0,0.4)" filter="blur(4px)" />
            {/* Silver Outer Ring */}
            <circle cx="40" cy="40" r="26" stroke="url(#silverGradLg)" strokeWidth="4" fill="#1C090D" />
            {/* 8 Prongs */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
              <circle
                key={i}
                cx={40 + Math.cos((ang * Math.PI) / 180) * 24}
                cy={40 + Math.sin((ang * Math.PI) / 180) * 24}
                r="3"
                fill="#F0F4F8"
                stroke="#8A959E"
                strokeWidth="0.8"
              />
            ))}
            {/* Center Solitaire Brilliant Gem */}
            <circle cx="40" cy="40" r="17" fill="url(#gemGradLg)" />
            <polygon points="40,26 51,35 45,51 35,51 29,35" fill="rgba(255,255,255,0.5)" />
            {/* Diamond Glint Star */}
            <path d="M 40 28 L 43 37 L 52 40 L 43 43 L 40 52 L 37 43 L 28 40 L 37 37 Z" fill="#FFFFFF" />
            <defs>
              <linearGradient id="silverGradLg" x1="0" y1="0" x2="80" y2="80">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#D2D9DF" />
                <stop offset="100%" stopColor="#7F8C97" />
              </linearGradient>
              <radialGradient id="gemGradLg" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="40%" stopColor="#E2F1F8" />
                <stop offset="100%" stopColor="#8FC2DE" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Patti & Thabbu Keepsake Plaque */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(229, 195, 120, 0.35)',
            borderRadius: '12px',
            padding: '10px 16px',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <div style={{ color: '#F7E7A9', fontFamily: 'var(--font-cursive)', fontSize: '18px', fontWeight: 700 }}>
            “Patti dhaan pierce pannanga... romba valichudhu!”
          </div>
          <div style={{ color: '#FFFFFF', fontFamily: 'var(--font-serif)', fontSize: '13.5px', fontStyle: 'italic', marginTop: '4px' }}>
            “Ahhh apahh first tym unga kitta irundhu oru compliment 😌”
          </div>
        </div>

        <span style={{ fontFamily: 'var(--font-hand)', fontSize: '13px', color: '#F7E7A9', fontWeight: 600 }}>
          tap velvet case to polish the silver diamond stud ✨
        </span>
      </div>
    </div>
  );
}

/* ============================================================================
   PAGE 22: 7 ARTS SCOOTER RIDE & SCENT OF JASMINE HAIR WIND
   ============================================================================ */
export function ScooterGoldenHourRideArt() {
  const [speed, setSpeed] = useState(25);
  const [isBreezeActive, setIsBreezeActive] = useState(false);

  const handleCruise = (e: React.MouseEvent) => {
    setIsBreezeActive(true);
    setSpeed((s) => (s === 25 ? 20 : 25));
    spawnParticles(e, ['🌸', '✨', '💨', '🌹', '🪻', '🛵']);
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try { navigator.vibrate([50, 30, 50]); } catch {}
    }
    setTimeout(() => setIsBreezeActive(false), 900);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '560px',
        margin: '6px auto',
      }}
    >
      {/* Sunset Twilight Road Trip Dashboard Box */}
      <div
        style={{
          width: '100%',
          background: 'linear-gradient(135deg, #FFF6EE 0%, #FBE9E2 50%, #F5DEE7 100%)',
          border: '1.5px solid rgba(201, 78, 104, 0.28)',
          borderRadius: '22px',
          padding: '18px 20px',
          boxShadow: '0 10px 30px rgba(201, 78, 104, 0.12)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Windstreaks in background */}
        <div style={{ position: 'absolute', top: 16, left: 12, width: 70, height: 2, backgroundColor: 'rgba(201, 78, 104, 0.25)', borderRadius: 2 }} />
        <div style={{ position: 'absolute', top: 38, right: 16, width: 95, height: 2, backgroundColor: 'rgba(233, 170, 185, 0.4)', borderRadius: 2 }} />
        <div style={{ position: 'absolute', bottom: 22, left: 30, width: 80, height: 2, backgroundColor: 'rgba(201, 78, 104, 0.2)', borderRadius: 2 }} />

        {/* Road Milestone Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '13px' }}>🛵</span>
          <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--color-cherry)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            7 ARTS JUNCTION ➔ HOSPITAL ➔ HOME
          </span>
          <span style={{ fontSize: '13px' }}>🌅</span>
        </div>

        {/* Center Mirror & Speedometer Cluster */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', width: '100%' }}>
          {/* Side Mirror */}
          <div
            onClick={handleCruise}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
            title="Her reflection in side mirror"
          >
            <SideMirror />
            <span style={{ fontSize: '10.5px', fontFamily: 'monospace', color: 'var(--color-muted-ink)', fontWeight: 600 }}>
              REAR VIEW MIRROR 🪞
            </span>
          </div>

          {/* Retro Speedometer */}
          <div
            onClick={handleCruise}
            style={{
              width: 90,
              height: 90,
              borderRadius: '50%',
              backgroundColor: '#1E1518',
              border: '3.5px solid #C8A97E',
              boxShadow: '0 6px 18px rgba(0,0,0,0.22)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'relative',
              userSelect: 'none',
            }}
            title="Tap to throttle speed"
          >
            <span style={{ fontSize: '9px', fontWeight: 800, color: '#C8A97E', letterSpacing: '0.08em' }}>CRUISE</span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 800, color: '#FFF', lineHeight: 1 }}>
              {speed}
            </span>
            <span style={{ fontSize: '9px', color: '#FFA5BA', fontWeight: 600 }}>km/h</span>
            {/* Speed Dial Needle */}
            <div
              style={{
                position: 'absolute',
                bottom: '45px',
                left: '44px',
                width: '2px',
                height: '24px',
                backgroundColor: '#FF4D6D',
                transformOrigin: 'bottom center',
                transform: `rotate(${speed === 25 ? 25 : -15}deg)`,
                transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            />
          </div>
        </div>

        {/* Scent & Wind Atmosphere Ribbon */}
        <div
          onClick={handleCruise}
          style={{
            backgroundColor: 'rgba(201, 78, 104, 0.1)',
            border: '1px solid rgba(201, 78, 104, 0.2)',
            borderRadius: '24px',
            padding: '8px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
          }}
        >
          <span style={{ fontSize: '16px' }}>🌸</span>
          <span style={{ fontFamily: 'var(--font-cursive)', fontSize: '16px', color: 'var(--color-cherry)', fontWeight: 700 }}>
            {isBreezeActive ? '“Drove slower so this ride wouldn’t end...” 🌸' : 'Tap to slow down to 20 km/h · Feel her jasmine hair scent 💨✨'}
          </span>
        </div>
      </div>
    </div>
  );
}

