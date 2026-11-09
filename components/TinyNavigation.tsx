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
