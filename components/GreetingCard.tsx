'use client';

import React from 'react';
import { StoryTrack } from './StoryTrack';
import { PaperTexture } from './doodles/Doodles';

export function GreetingCard() {
  return (
    <div className="stage-wrapper">
      <div className="stage-frame">
        <PaperTexture />
        <StoryTrack />
      </div>
    </div>
  );
}
