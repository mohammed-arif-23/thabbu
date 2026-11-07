'use client';

import React from 'react';

interface TinyNavigationProps {
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onJump: (index: number) => void;
}

export function TinyNavigation({
  currentIndex,
  total,
  onPrev,
  onNext,
  onJump,
}: TinyNavigationProps) {
  return (
    <nav className="nav-overlay" aria-label="Card scenes navigation">
      <div className="nav-pill">
        <button
          type="button"
          onClick={onPrev}
          disabled={currentIndex === 0}
          aria-label="Previous scene"
          className="nav-arrow-btn"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M 10 3 L 5 8 L 10 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* 17 subtle dots */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
          role="tablist"
          aria-label="Scene progress"
        >
          {Array.from({ length: total }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={idx === currentIndex}
              aria-label={`Go to scene ${idx + 1}`}
              onClick={() => onJump(idx)}
              className={`nav-dot ${idx === currentIndex ? 'active' : ''}`}
              style={{
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        <span className="nav-counter" aria-live="polite">
          {String(currentIndex + 1).padStart(2, '0')}&thinsp;/&thinsp;{total}
        </span>

        <button
          type="button"
          onClick={onNext}
          disabled={currentIndex === total - 1}
          aria-label="Next scene"
          className="nav-arrow-btn"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M 6 3 L 11 8 L 6 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
