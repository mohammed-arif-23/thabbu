'use client';

import React, { useState } from 'react';
import { StoryTrack } from './StoryTrack';
import { PaperTexture } from './doodles/Doodles';
import { EnvelopeEntrance } from './EnvelopeEntrance';
import { FloatingParticles } from './FloatingParticles';

export function GreetingCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="stage-wrapper">
      <FloatingParticles />
      <div className="stage-frame">
        <PaperTexture />
        <StoryTrack />
      </div>
      {!isOpen && <EnvelopeEntrance onOpen={() => setIsOpen(true)} />}
    </div>
  );
}
