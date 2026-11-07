import React from 'react';

export function PaperTexture() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 50,
        opacity: 0.045,
        backgroundImage: `radial-gradient(#332a2b 0.75px, transparent 0.75px), radial-gradient(#807176 0.5px, #fff9f3 0.5px)`,
        backgroundSize: '24px 24px',
        backgroundPosition: '0 0, 12px 12px',
        mixBlendMode: 'multiply',
      }}
    />
  );
}

export function TomatoStamp({
  size = 48,
  className = '',
  rotate = -6,
  interactive = false,
  onClick,
}: {
  size?: number;
  className?: string;
  rotate?: number;
  interactive?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={(e) => {
        if (interactive && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick?.();
        }
      }}
      aria-label={interactive ? 'Interactive tomato stamp' : undefined}
      className={`tomato-stamp ${interactive ? 'interactive' : ''} ${className}`}
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: interactive ? 'pointer' : 'default',
        userSelect: 'none',
      }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Tomato base with stamped uneven ink effect */}
        <ellipse
          cx="50"
          cy="58"
          rx="40"
          ry="34"
          fill="#C94E68"
          fillOpacity="0.88"
        />
        {/* Subtle shadow contour */}
        <ellipse
          cx="47"
          cy="60"
          rx="34"
          ry="28"
          fill="#B63E56"
          fillOpacity="0.3"
        />
        {/* Highlight sheen */}
        <path
          d="M 30 46 C 26 52 26 62 31 68"
          stroke="#FFF9F3"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeOpacity="0.55"
        />
        {/* Stem calyx (leaves) */}
        <path
          d="M 50 32 L 49 18 M 50 30 C 44 26 36 28 32 30 M 50 30 C 56 26 64 28 68 30 M 50 31 C 45 35 39 37 36 41 M 50 31 C 55 35 61 37 64 41"
          stroke="#4F6D48"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="30" r="3.5" fill="#4F6D48" />
        {/* Stamped texture ring */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="#C94E68"
          strokeWidth="1.2"
          strokeDasharray="4 3"
          strokeOpacity="0.4"
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
  style,
}: {
  width?: number;
  height?: number;
  angle?: number;
  color?: string;
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
        opacity: 0.85,
        boxShadow: '0 1px 3px rgba(51, 42, 43, 0.08)',
        clipPath:
          'polygon(0% 12%, 4% 0%, 96% 0%, 100% 10%, 98% 90%, 94% 100%, 2% 100%, 0% 88%)',
        position: 'relative',
        ...style,
      }}
    />
  );
}

export function EnvelopeSeal({
  opened = false,
  onClick,
}: {
  opened?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`envelope-seal-btn ${opened ? 'opened' : ''}`}
      aria-label="Wax seal - click to reveal"
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          backgroundColor: '#C94E68',
          boxShadow: opened
            ? '0 2px 6px rgba(201, 78, 104, 0.2)'
            : '0 4px 12px rgba(201, 78, 104, 0.35), inset 0 -2px 4px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          transition: 'all 0.3s ease',
          transform: opened ? 'scale(0.92) rotate(15deg)' : 'scale(1)',
        }}
      >
        {/* Seal decorative border */}
        <div
          style={{
            position: 'absolute',
            inset: 3,
            borderRadius: '50%',
            border: '1.5px dashed rgba(255, 249, 243, 0.55)',
          }}
        />
        <span
          style={{
            color: '#FFF9F3',
            fontFamily: 'var(--font-serif)',
            fontSize: '22px',
            fontWeight: 700,
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          {opened ? '✓' : 'T'}
        </span>
      </div>
      <span
        style={{
          fontFamily: 'var(--font-hand)',
          fontSize: '13px',
          color: '#807176',
          letterSpacing: '0.02em',
        }}
      >
        {opened ? 'seal broken' : 'tap seal'}
      </span>
    </button>
  );
}

export function HandDrawnHeart({
  size = 24,
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
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
    >
      <path
        d="M 16 27 C 12 23 4 17 4 10 C 4 5.5 7.5 2.5 12 2.5 C 14.5 2.5 15.5 3.8 16 4.8 C 16.5 3.8 17.5 2.5 20 2.5 C 24.5 2.5 28 5.5 28 10 C 28 17 20 23 16 27 Z"
        fill={color}
        fillOpacity="0.22"
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
      style={{ display: 'inline-block', ...style }}
    >
      <path
        d="M 12 2 L 12 22 M 2 12 L 22 12 M 5 5 L 19 19 M 5 19 L 19 5"
        stroke={color}
        strokeWidth="1.5"
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
      width="44"
      height="26"
      viewBox="0 0 50 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
      {/* Faint coffee ring stain */}
      <svg
        viewBox="0 0 140 140"
        width="130"
        height="130"
        style={{
          position: 'absolute',
          inset: -5,
          opacity: 0.32,
          pointerEvents: 'none',
        }}
      >
        <circle
          cx="70"
          cy="70"
          r="54"
          fill="none"
          stroke="#A67B5B"
          strokeWidth="3.5"
          strokeDasharray="60 12 25 8"
          strokeLinecap="round"
        />
        <circle
          cx="72"
          cy="68"
          r="50"
          fill="none"
          stroke="#A67B5B"
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />
      </svg>
      {/* Cup top-down ceramic view */}
      <svg
        viewBox="0 0 100 100"
        width="88"
        height="88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ zIndex: 1 }}
      >
        {/* Saucer */}
        <circle cx="50" cy="50" r="44" fill="#FFFEFC" stroke="#807176" strokeWidth="1.5" />
        {/* Cup Rim */}
        <circle cx="50" cy="50" r="32" fill="#EADBC8" stroke="#332A2B" strokeWidth="1.8" />
        {/* Coffee surface */}
        <circle cx="50" cy="50" r="28" fill="#6F4E37" />
        {/* Latte art heart */}
        <path
          d="M 50 56 C 47 52 42 47 42 43 C 42 40 45 38 48 38 C 49.5 38 50 39 50 39.5 C 50 39 50.5 38 52 38 C 55 38 58 40 58 43 C 58 47 53 52 50 56 Z"
          fill="#FFF9F3"
          fillOpacity="0.85"
        />
        {/* Handle */}
        <path
          d="M 82 42 C 90 42 92 58 82 58"
          stroke="#332A2B"
          strokeWidth="2.5"
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
      style={{
        position: 'relative',
        width: 130,
        height: 90,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        viewBox="0 0 140 100"
        width="130"
        height="90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Mirror mount arm */}
        <path
          d="M 12 75 L 34 55"
          stroke="#332A2B"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Mirror frame (rounded polygon) */}
        <rect
          x="32"
          y="18"
          width="94"
          height="62"
          rx="18"
          fill="#FFFEFC"
          stroke="#332A2B"
          strokeWidth="2.2"
        />
        {/* Glass reflection */}
        <path
          d="M 44 26 L 114 26 C 118 26 120 28 120 32 L 120 66 C 120 70 118 72 114 72 L 44 72 C 40 72 38 70 38 66 L 38 32 C 38 28 40 26 44 26 Z"
          fill="#DDD6EF"
          fillOpacity="0.25"
        />
        {/* Curved reflection stripes */}
        <path
          d="M 46 64 L 62 26 M 66 64 L 82 26"
          stroke="#FFF9F3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />
        {/* Little cute eye/smile reaction sketched in mirror */}
        <circle cx="88" cy="46" r="1.8" fill="#C94E68" />
        <circle cx="100" cy="46" r="1.8" fill="#C94E68" />
        <path
          d="M 91 52 C 94 54 96 54 98 52"
          stroke="#C94E68"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        {/* Scent trail ripples */}
        <path
          d="M 10 32 C 18 28 20 36 28 30"
          stroke="#E9AAB9"
          strokeWidth="1.6"
          strokeDasharray="3 3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function SmileMarks() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '32px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Smile 1: Big laugh with visible teeth */}
      <div style={{ textAlign: 'center' }}>
        <svg width="74" height="48" viewBox="0 0 80 50" fill="none">
          {/* Eyes */}
          <path
            d="M 18 16 Q 25 10 32 16"
            stroke="#332A2B"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M 48 16 Q 55 10 62 16"
            stroke="#332A2B"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Wide open mouth with teeth */}
          <path
            d="M 16 26 C 22 44 58 44 64 26 Z"
            fill="#F5DCE2"
            stroke="#332A2B"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M 22 26 L 22 30 C 22 32 30 34 40 34 C 50 34 58 32 58 30 L 58 26 Z"
            fill="#FFFEFC"
            stroke="#332A2B"
            strokeWidth="1.4"
          />
        </svg>
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-hand)',
            fontSize: '13px',
            color: '#807176',
            marginTop: '4px',
          }}
        >
          full pallu smile
        </span>
      </div>

      <div
        style={{
          width: '1px',
          height: '42px',
          backgroundColor: '#E9AAB9',
          opacity: 0.5,
        }}
      />

      {/* Smile 2: Soft quiet look */}
      <div style={{ textAlign: 'center' }}>
        <svg width="74" height="48" viewBox="0 0 80 50" fill="none">
          {/* Gentle eyes */}
          <circle cx="26" cy="18" r="2.2" fill="#332A2B" />
          <circle cx="54" cy="18" r="2.2" fill="#332A2B" />
          <path
            d="M 22 13 Q 26 11 30 13"
            stroke="#807176"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M 50 13 Q 54 11 58 13"
            stroke="#807176"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Soft shy smile curve */}
          <path
            d="M 30 30 Q 40 37 50 30"
            stroke="#C94E68"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Tiny cheek blush */}
          <circle cx="18" cy="28" r="4.5" fill="#E9AAB9" fillOpacity="0.45" />
          <circle cx="62" cy="28" r="4.5" fill="#E9AAB9" fillOpacity="0.45" />
        </svg>
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-hand)',
            fontSize: '13px',
            color: '#C94E68',
            marginTop: '4px',
          }}
        >
          that quiet look 🫠
        </span>
      </div>
    </div>
  );
}

export function WaveformDoodle() {
  const heights = [14, 22, 34, 18, 42, 28, 48, 36, 20, 38, 52, 40, 24, 32, 16];
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: '10px 18px',
        backgroundColor: '#FFFEFC',
        border: '1.2px solid #E9AAB9',
        borderRadius: '30px',
        boxShadow: '0 2px 8px rgba(51, 42, 43, 0.04)',
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
          marginRight: '6px',
        }}
      >
        ▶
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '3px',
          height: '36px',
        }}
      >
        {heights.map((h, i) => (
          <div
            key={i}
            style={{
              width: '2.5px',
              height: `${(h / 52) * 28}px`,
              backgroundColor: i % 2 === 0 ? '#C94E68' : '#E9AAB9',
              borderRadius: '2px',
            }}
          />
        ))}
      </div>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '11px',
          color: '#807176',
          marginLeft: '8px',
          letterSpacing: '0.04em',
        }}
      >
        0:42
      </span>
    </div>
  );
}

export function PaperClip({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      width="18"
      height="38"
      viewBox="0 0 20 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', ...style }}
    >
      <path
        d="M 6 12 L 6 34 C 6 38 14 38 14 34 L 14 8 C 14 2 2 2 2 8 L 2 36 C 2 43 18 43 18 36 L 18 16"
        stroke="#807176"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
