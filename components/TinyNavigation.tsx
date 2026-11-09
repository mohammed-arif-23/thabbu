'use client';

import React from 'react';

interface TinyNavigationProps {
  currentIndex: number;
  total: number;
  displayNumber?: number | null;
  onPrev: () => void;
  onNext: () => void;
  onJump: (index: number) => void;
}

export function TinyNavigation({
  currentIndex,
  total,
  displayNumber,
  onPrev,
  onNext,
  onJump,
}: TinyNavigationProps) {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  React.useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    document.addEventListener('webkitfullscreenchange', handleFsChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      document.removeEventListener('webkitfullscreenchange', handleFsChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && !(document as any).webkitFullscreenElement) {
      const elem = document.documentElement as any;
      if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(() => {});
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if ((document as any).webkitExitFullscreen) {
        (document as any).webkitExitFullscreen();
      }
    }
  };

  const isDarkScene = currentIndex < 14;
  const progressPercent = Math.round(((currentIndex + 1) / total) * 100);

  return (
    <nav className="nav-overlay" aria-label="Card scenes navigation">
      <div
        className="nav-pill"
        style={{
          backgroundColor: isDarkScene ? 'rgba(25, 20, 23, 0.92)' : 'rgba(255, 254, 252, 0.95)',
          borderColor: isDarkScene ? 'rgba(201, 78, 104, 0.45)' : 'rgba(201, 78, 104, 0.25)',
          color: isDarkScene ? '#F7EBEF' : 'var(--color-ink)',
          boxShadow: isDarkScene
            ? '0 6px 20px rgba(0, 0, 0, 0.5), 0 0 12px rgba(201, 78, 104, 0.2)'
            : '0 4px 16px rgba(51, 42, 43, 0.1)',
          transition: 'all 0.3s ease',
        }}
      >
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

        {/* Sleek Mini Progress Bar (Chapter text removed) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '48px',
            cursor: 'pointer',
          }}
          title={displayNumber ? `Page ${displayNumber} of ${total}` : 'Special Screen'}
        >
          <div
            style={{
              width: '100%',
              height: '4px',
              backgroundColor: isDarkScene ? 'rgba(255, 255, 255, 0.12)' : 'rgba(51, 42, 43, 0.08)',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progressPercent}%`,
                height: '100%',
                backgroundColor: isDarkScene ? '#FF5C80' : 'var(--color-cherry)',
                borderRadius: '2px',
                transition: 'width 0.25s ease',
              }}
            />
          </div>
        </div>

        <span
          className="nav-counter"
          aria-live="polite"
          style={{
            color: isDarkScene ? '#FFF' : 'var(--color-cherry)',
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '0.02em',
          }}
        >
          {displayNumber === null || displayNumber === undefined
            ? '🌙 MOON'
            : `${String(displayNumber).padStart(2, '0')}\u2009/\u2009${total}`}
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

        {/* Fullscreen Toggle */}
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          className="nav-arrow-btn"
          style={{ marginLeft: '2px' }}
        >
          {isFullscreen ? (
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path
                d="M 6 2 L 6 6 L 2 6 M 10 2 L 10 6 L 14 6 M 6 14 L 6 10 L 2 10 M 10 14 L 10 10 L 14 10"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path
                d="M 2 6 L 2 2 L 6 2 M 14 6 L 14 2 L 10 2 M 2 10 L 2 14 L 6 14 M 14 10 L 14 14 L 10 14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
