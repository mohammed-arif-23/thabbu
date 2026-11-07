'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { storyScreens } from '../content/story';
import { StoryPanel } from './StoryPanel';
import { TinyNavigation } from './TinyNavigation';

export function StoryTrack() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToScreen = useCallback((index: number) => {
    if (!trackRef.current) return;
    const boundedIndex = Math.max(0, Math.min(index, storyScreens.length - 1));
    const panels = trackRef.current.children;
    if (panels[boundedIndex]) {
      const targetPanel = panels[boundedIndex] as HTMLElement;
      trackRef.current.scrollTo({
        left: targetPanel.offsetLeft,
        behavior: 'smooth',
      });
      setCurrentIndex(boundedIndex);
    }
  }, []);

  const handleNext = useCallback(() => {
    scrollToScreen(currentIndex + 1);
  }, [currentIndex, scrollToScreen]);

  const handlePrev = useCallback(() => {
    scrollToScreen(currentIndex - 1);
  }, [currentIndex, scrollToScreen]);

  // Keyboard navigation (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToScreen(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToScreen(storyScreens.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, scrollToScreen]);

  // Synchronize active panel using IntersectionObserver
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const panelId = entry.target.id.replace('panel-', '');
            const index = storyScreens.findIndex((s) => s.id === panelId);
            if (index !== -1) {
              setCurrentIndex(index);
            }
          }
        });
      },
      {
        root: track,
        threshold: 0.6,
      }
    );

    const panels = track.querySelectorAll('.story-panel');
    panels.forEach((p) => observer.observe(p));

    return () => {
      panels.forEach((p) => observer.unobserve(p));
    };
  }, []);

  return (
    <>
      <main
        ref={trackRef}
        className="story-track"
        tabIndex={0}
        aria-label="Story narrative carousel"
      >
        {storyScreens.map((screen, index) => (
          <StoryPanel
            key={screen.id}
            screen={screen}
            isFirst={index === 0}
            isLast={index === storyScreens.length - 1}
            onAdvance={() => scrollToScreen(index + 1)}
          />
        ))}
      </main>

      <TinyNavigation
        currentIndex={currentIndex}
        total={storyScreens.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onJump={scrollToScreen}
      />
    </>
  );
}
