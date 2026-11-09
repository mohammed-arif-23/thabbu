import React, { useState } from 'react';

export function PaperTexture() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 50,
        opacity: 0.05,
        backgroundImage: `
          radial-gradient(#332a2b 0.65px, transparent 0.65px),
          radial-gradient(#807176 0.45px, transparent 0.45px)
        `,
        backgroundSize: '20px 20px, 34px 34px',
        backgroundPosition: '0 0, 10px 10px',
        mixBlendMode: 'multiply',
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
