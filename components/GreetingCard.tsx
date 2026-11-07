'use client';

import React from 'react';
import { StoryTrack } from './StoryTrack';
import { PaperTexture } from './doodles/Doodles';
import { FloatingParticles } from './FloatingParticles';

export function GreetingCard() {
  return (
    <div className="stage-wrapper">
      <FloatingParticles />
      <div className="stage-frame">
        <PaperTexture />
        <StoryTrack />
      </div>
    </div>
  );
}
