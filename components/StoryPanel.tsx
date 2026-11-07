'use client';

import React, { useState } from 'react';
import { StoryScreen } from '../content/story';
import { PhotoPlaceholder } from './PhotoPlaceholder';
import { spawnParticles } from './FloatingParticles';
import {
  TomatoStamp,
  WashiTape,
  EnvelopeSeal,
  HandDrawnHeart,
  Starburst,
  HandDrawnArrow,
  GiftBoxDoodle,
  TubelightDoodle,
  BlueShirtDoodle,
  NosePinDoodle,
  IceCreamDoodle,
  CoffeeCup,
  SideMirror,
  WaveformDoodle,
  PaperClip,
} from './doodles/Doodles';

interface StoryPanelProps {
  screen: StoryScreen;
  isFirst: boolean;
  isLast: boolean;
  onAdvance?: () => void;
}

export function StoryPanel({ screen, isFirst, isLast, onAdvance }: StoryPanelProps) {
  const [sealBroken, setSealBroken] = useState(false);
  const [stampRevealed, setStampRevealed] = useState(false);
  const [boopCount, setBoopCount] = useState(0);
  const [activeNickIndex, setActiveNickIndex] = useState<number | null>(null);

  // Easter Egg 1: Page 03 Interactive Delivery Checklist
  const [deliveredItems, setDeliveredItems] = useState<Record<number, boolean>>({});

  // Easter Egg 2: Page 14 "OK" spam multiplier (previously Page 13)
  const [okSpamCount, setOkSpamCount] = useState(0);

  const getBgClass = () => {
    switch (screen.bgVariant) {
      case 'warmWhite':
        return 'bg-warm-white';
      case 'blushTint':
        return 'bg-blush-tint';
      case 'paper':
      default:
        return 'bg-paper';
    }
  };

  const boopPhrases = [
    'tamatarr enna click pannu 🍅',
    'Hey Bamboo-bear 🐻',
    'Hey Meri teddy 🧸',
    'Moti tamatarrr 🍅',
    'Tubelight says hi 💡',
    'Three days over now? 😂',
    'Podhum Valikuthu, Now Forever stuck with me! 🍅',
  ];

  const deliveryBadges = [
    'Pending since Sep ⏳',
    'Awaiting Delivery 📸',
    'Outstanding Order 💪💗',
  ];

  return (
    <section
      id={`panel-${screen.id}`}
      className={`story-panel ${getBgClass()}`}
      aria-label={`Panel ${screen.index} of 18: ${screen.headline}`}
    >
      {/* Page 18 Floating Stardust Sky */}
      {screen.artVariant === 'finale1111' && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          {[
            { top: '8%', left: '12%', delay: '0s', glyph: '✦', size: '14px', color: '#E9AAB9' },
            { top: '15%', right: '15%', delay: '1.2s', glyph: '⋆', size: '18px', color: '#F7E7A9' },
            { top: '35%', left: '8%', delay: '0.8s', glyph: '✧', size: '12px', color: '#C94E68' },
            { top: '48%', right: '10%', delay: '2s', glyph: '✦', size: '16px', color: '#E9AAB9' },
            { top: '70%', left: '14%', delay: '1.5s', glyph: '⋆', size: '20px', color: '#F7E7A9' },
            { top: '82%', right: '18%', delay: '0.4s', glyph: '✧', size: '13px', color: '#C94E68' },
            { top: '22%', left: '45%', delay: '2.5s', glyph: '•', size: '10px', color: '#E9AAB9' },
            { top: '65%', right: '40%', delay: '1.8s', glyph: '✦', size: '15px', color: '#F7E7A9' },
          ].map((star, i) => (
            <span
              key={i}
              className="stardust-particle"
              style={{
                top: star.top,
                left: star.left,
                right: star.right,
                fontSize: star.size,
                color: star.color,
                animationDelay: star.delay,
              }}
            >
              {star.glyph}
            </span>
          ))}
        </div>
      )}

      <div className="card-sheet">
        {/* Luxury Folded Corner Tab */}
        <div className="page-dogear" aria-hidden="true" />

        {/* Top Header Section */}
        <header className="stagger-header" style={{ position: 'relative', zIndex: 3 }}>
          {screen.eyebrow && (
            <div style={{ marginBottom: '6px' }}>
              <span className="text-eyebrow">{screen.eyebrow}</span>
            </div>
          )}

          <h2 className="text-headline">{screen.headline}</h2>
        </header>

        {/* Center Artwork / Specific Composition */}
        <div
          className="stagger-art"
          style={{
            position: 'relative',
            margin: '6px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '110px',
            zIndex: 2,
          }}
        >
          {/* PAGE 01: Breakup Foil / Official Notice */}
          {screen.artVariant === 'notice' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                width: '100%',
              }}
            >
              <WashiTape
                width={140}
                height={20}
                angle={-2}
                color="#F7E7A9"
                label="OFFICIAL NOTICE TO TAMATAR"
              />
              <div
                style={{
                  position: 'relative',
                  padding: '12px 18px',
                  backgroundColor: 'var(--color-warm-white)',
                  border: '1.2px solid rgba(201, 78, 104, 0.25)',
                  borderRadius: '12px',
                  boxShadow: '0 4px 14px rgba(51, 42, 43, 0.05)',
                  textAlign: 'center',
                  maxWidth: '280px',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: -10,
                    right: -8,
                  }}
                >
                  <TomatoStamp size={42} rotate={8} />
                </div>
                <EnvelopeSeal
                  opened={sealBroken}
                  onClick={(e) => {
                    setSealBroken(!sealBroken);
                    spawnParticles(e, ['💌', '✨', '🍅', '❤️']);
                    if (!sealBroken && onAdvance) {
                      setTimeout(onAdvance, 500);
                    }
                  }}
                />
              </div>
              {sealBroken && (
                <span
                  className="text-hand"
                  style={{
                    color: 'var(--color-cherry)',
                    fontSize: '15px',
                    animation: 'fadeIn 0.3s ease',
                  }}
                >
                  Irunga naane swipe panren
                </span>
              )}
            </div>
          )}

          {/* PAGE 02: Waiting Period */}
          {screen.artVariant === 'waiting' && (
            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <HandDrawnArrow
                style={{
                  marginBottom: '6px',
                  transform: 'rotate(-10deg)',
                }}
              />
              <TomatoStamp
                size={74}
                rotate={boopCount % 2 === 0 ? 8 : -8}
                interactive={true}
                onClick={(e) => {
                  setBoopCount((c) => c + 1);
                  spawnParticles(e, ['🍅', '❤️', '💡', '🧸', '✨']);
                }}
              />
              <div
                style={{
                  backgroundColor: 'var(--color-warm-white)',
                  border: '1px solid var(--color-petal)',
                  borderRadius: '16px',
                  padding: '4px 14px',
                  marginTop: '8px',
                  boxShadow: '0 2px 8px rgba(51, 42, 43, 0.04)',
                }}
              >
                <span
                  className="text-hand"
                  style={{
                    color: 'var(--color-cherry)',
                    fontSize: '14.5px',
                    fontWeight: 600,
                  }}
                >
                  {boopPhrases[Math.min(boopCount, boopPhrases.length - 1)]}
                </span>
              </div>
            </div>
          )}

          {/* PAGE 03: Selective Memory Checklist */}
          {screen.artVariant === 'selectiveMemory' && (
            <div
              style={{
                backgroundColor: 'var(--color-warm-white)',
                border: '1.2px solid var(--color-petal)',
                borderRadius: '12px',
                padding: '12px 18px',
                width: '100%',
                maxWidth: '290px',
                position: 'relative',
                boxShadow: '0 4px 14px rgba(51, 42, 43, 0.04)',
              }}
            >
              <WashiTape
                width={70}
                height={16}
                angle={-3}
                label="EVIDENCE"
                style={{ position: 'absolute', top: -8, right: 14 }}
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px',
                }}
              >
                <span style={{ fontSize: '16px' }}>📸</span>
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    fontSize: '12.5px',
                    color: 'var(--color-cherry)',
                    letterSpacing: '0.04em',
                  }}
                >
                  SCREENSHOT ARCHIVE
                </span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '13px',
                  color: 'var(--color-muted-ink)',
                }}
              >
                tap items below to check status 🔎
              </div>
            </div>
          )}

          {/* PAGE 04: Where it Actually Started (College) */}
          {screen.artVariant === 'collegeStart' && (
            <div
              style={{
                backgroundColor: 'var(--color-warm-white)',
                border: '1.2px solid rgba(51, 42, 43, 0.15)',
                borderRadius: '10px',
                padding: '12px 18px',
                width: '100%',
                maxWidth: '280px',
                position: 'relative',
                boxShadow: '0 4px 12px rgba(51, 42, 43, 0.04)',
                textAlign: 'center',
              }}
            >
              <WashiTape
                width={85}
                height={16}
                angle={2}
                label="SEPTEMBER 2026"
                style={{ position: 'absolute', top: -8, left: 18 }}
              />
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '15px',
                  fontStyle: 'italic',
                  color: 'var(--color-cherry)',
                  margin: '4px 0',
                }}
              >
                “Senior iniku clg varalaya neenga”
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '13px',
                  color: 'var(--color-muted-ink)',
                }}
              >
                21 Sep · Just class bore adikudhu
              </div>
            </div>
          )}

          {/* PAGE 05: The Gift Planned Three Weeks Earlier */}
          {screen.artVariant === 'giftThreeWeeks' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <GiftBoxDoodle size={60} />
              <div
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '14px',
                  color: 'var(--color-cherry)',
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                Bought 3 weeks in advance 🥹
              </div>
            </div>
          )}

          {/* PAGE 06: THE TURNING POINT (Centered text + 4 Vertical 9:16 Polaroids) */}
          {screen.artVariant === 'turningPointPhotos' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                gap: '8px',
                padding: '2px 0',
              }}
            >
              {/* Top 2 Vertical 9:16 Polaroids */}
              <div
                style={{
                  display: 'flex',
                  gap: '14px',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <PhotoPlaceholder
                  id="turning-point-1"
                  caption="panda 🐼"
                  width={94}
                  rotate={-3}
                />
                <PhotoPlaceholder
                  id="turning-point-2"
                  caption="bamboo bear 🐻"
                  width={94}
                  rotate={3}
                />
              </div>

              {/* Centered Romantic Quote Box */}
              <div
                style={{
                  textAlign: 'center',
                  padding: '7px 16px',
                  backgroundColor: 'rgba(255, 254, 252, 0.94)',
                  borderRadius: '12px',
                  border: '1.2px solid var(--color-petal)',
                  boxShadow: '0 4px 12px rgba(201, 78, 104, 0.1)',
                  margin: '2px 0',
                }}
              >
                <span
                  className="text-calligraphy"
                  style={{
                    fontSize: '24px',
                    color: 'var(--color-cherry)',
                    display: 'block',
                    lineHeight: 1.15,
                  }}
                >
                  Na una vituduvena
                </span>
                <span
                  className="text-cursive"
                  style={{
                    fontSize: '17px',
                    color: 'var(--color-ink)',
                    display: 'block',
                  }}
                >
                  cutuu little green flag? 😭🌱💗
                </span>
              </div>

              {/* Bottom 2 Vertical 9:16 Polaroids */}
              <div
                style={{
                  display: 'flex',
                  gap: '14px',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <PhotoPlaceholder
                  id="turning-point-3"
                  caption="meri teddy 🧸"
                  width={94}
                  rotate={-2}
                />
                <PhotoPlaceholder
                  id="turning-point-4"
                  caption="green flag 🌱"
                  width={94}
                  rotate={3}
                />
              </div>
            </div>
          )}

          {/* PAGE 07: Tubelight x Tamatar Nicknames */}
          {screen.artVariant === 'nicknamesTubelight' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                width: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <TubelightDoodle size={58} />
                <span style={{ fontSize: '18px' }}>⚡</span>
                <TomatoStamp size={48} rotate={6} />
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px',
                  justifyContent: 'center',
                  maxWidth: '300px',
                }}
              >
                {[
                  { name: 'Tubelight yaar 😁', bg: '#F7E7A9' },
                  { name: 'Moti tamatarrr 🍅', bg: '#FAF0F2' },
                  { name: 'Bamboobear 👀', bg: '#DCE6D8' },
                  { name: 'Bamboo-bear 💗', bg: '#F5DCE2' },
                ].map((tag, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveNickIndex(activeNickIndex === idx ? null : idx)}
                    style={{
                      border: '1px solid rgba(51, 42, 43, 0.12)',
                      backgroundColor: tag.bg,
                      borderRadius: '6px',
                      padding: '4px 10px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11.5px',
                      fontWeight: 500,
                      color: 'var(--color-ink)',
                      transform: activeNickIndex === idx ? 'scale(1.12)' : 'scale(1)',
                      boxShadow: '0 1px 4px rgba(51, 42, 43, 0.05)',
                      cursor: 'pointer',
                      transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                  >
                    {tag.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* PAGE 08: Blue Shirt Swatch (No photo, pure original artwork restored) */}
          {screen.artVariant === 'blueShirt' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <BlueShirtDoodle size={58} />
              <div
                style={{
                  fontFamily: 'var(--font-cursive)',
                  fontSize: '15px',
                  color: 'var(--color-muted-ink)',
                  textAlign: 'center',
                }}
              >
                Indhu mam questioned · girls laughed · Thabbu thought: cute 🤭
              </div>
            </div>
          )}

          {/* PAGE 09: Nose Pin Sparkle */}
          {screen.artVariant === 'nosePin' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <NosePinDoodle size={50} />
              <div
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '14.5px',
                  color: 'var(--color-cherry)',
                  fontWeight: 600,
                }}
              >
                Jii nejama this is the reason i got eager to talk to you 😌
              </div>
            </div>
          )}

          {/* PAGE 10: Motorbike Side Mirror */}
          {screen.artVariant === 'mirrorFragrance' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <SideMirror />
              <div
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '13.5px',
                  color: 'var(--color-muted-ink)',
                  textAlign: 'center',
                }}
              >
                20–30 km/h · smelling shirt shoulder · “Ada looseyyyy 😂”
              </div>
            </div>
          )}

          {/* PAGE 11: Details Notice + 9:16 Vertical Photo Placeholder */}
          {screen.artVariant === 'detailsNotice' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                width: '100%',
              }}
            >
              {/* Loupe & notes */}
              <div
                style={{
                  position: 'relative',
                  width: '140px',
                  height: '110px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    border: '2px solid var(--color-cherry)',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255, 254, 252, 0.75)',
                  }}
                >
                  <div
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-ink)',
                    }}
                  />
                  <span style={{ position: 'absolute', top: -10, right: -8 }}>
                    <Starburst size={16} color="var(--color-cherry)" />
                  </span>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    fontFamily: 'var(--font-hand)',
                    fontSize: '12px',
                    color: 'var(--color-muted-ink)',
                  }}
                >
                  cheek pinch 🤭
                </div>
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    fontFamily: 'var(--font-hand)',
                    fontSize: '12px',
                    color: 'var(--color-muted-ink)',
                  }}
                >
                  mole & lashes ✨
                </div>
              </div>

              {/* 9:16 Vertical Photo */}
              <PhotoPlaceholder
                id="her-details"
                caption="those smiles 🫠"
                width={92}
                rotate={2}
              />
            </div>
          )}

          {/* PAGE 12: The Coffee Plan + 9:16 Vertical Photo Placeholder */}
          {screen.artVariant === 'coffeePlan' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CoffeeCup />
                <WashiTape
                  width={76}
                  height={15}
                  angle={2}
                  label="SAME CUP"
                  style={{ marginTop: '4px' }}
                />
              </div>
              <PhotoPlaceholder
                id="coffee"
                caption="precious coffee ☕"
                width={92}
                rotate={-2}
              />
            </div>
          )}

          {/* PAGE 13: Principal's Call & 5 Seconds */}
          {screen.artVariant === 'principalFiveSeconds' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(38px, 10vw, 54px)',
                  fontWeight: 600,
                  color: 'var(--color-ink)',
                  letterSpacing: '0.04em',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                00:05
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--color-warm-white)',
                  padding: '4px 14px',
                  borderRadius: '16px',
                  border: '1px solid var(--color-petal)',
                }}
              >
                <HandDrawnHeart size={16} />
                <span
                  style={{
                    fontFamily: 'var(--font-hand)',
                    fontSize: '14px',
                    color: 'var(--color-ink)',
                    fontWeight: 600,
                  }}
                >
                  both hands · head on shoulder
                </span>
              </div>
            </div>
          )}

          {/* PAGE 14: Games & Rules (with Interactive "OK" spam multiplier) */}
          {screen.artVariant === 'gamesRules' && (
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
                }}
              >
                <div
                  style={{
                    border: '1.5px solid var(--color-cherry)',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    fontSize: '15px',
                    color: 'var(--color-cherry)',
                    transform: 'rotate(-3deg)',
                  }}
                >
                  Nope
                </div>
                <span style={{ fontSize: '14px', color: 'var(--color-muted-ink)' }}>↔</span>
                <div
                  style={{
                    border: '1.5px solid var(--color-ink)',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    fontSize: '15px',
                    color: 'var(--color-ink)',
                    transform: 'rotate(2deg)',
                  }}
                >
                  MATTEN
                </div>
                <span style={{ fontSize: '14px', color: 'var(--color-muted-ink)' }}>↔</span>
                <button
                  type="button"
                  onClick={(e) => {
                    setOkSpamCount((c) => c + 1);
                    spawnParticles(e, ['🙄', '💅', '✨', '⚡', '🍅']);
                  }}
                  style={{
                    backgroundColor: 'var(--color-butter)',
                    border: '1px solid rgba(51, 42, 43, 0.2)',
                    borderRadius: '6px',
                    padding: '4px 12px',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    fontSize: '15px',
                    color: 'var(--color-ink)',
                    cursor: 'pointer',
                    transform: `rotate(${okSpamCount % 2 === 0 ? -2 : 2}deg) scale(${1 + Math.min(0.2, okSpamCount * 0.03)})`,
                    boxShadow: '0 2px 6px rgba(51, 42, 43, 0.08)',
                    transition: 'all 0.15s ease',
                  }}
                  title="Click to spam OK"
                >
                  (ji click) OK {okSpamCount > 0 ? `× ${okSpamCount + 3}` : ' OK OK'}
                </button>
              </div>

              {okSpamCount >= 3 && (
                <div
                  className="text-hand"
                  style={{
                    color: 'var(--color-cherry)',
                    fontSize: '14px',
                    fontWeight: 600,
                    backgroundColor: 'var(--color-blush)',
                    padding: '3px 12px',
                    borderRadius: '12px',
                    animation: 'fadeIn 0.2s ease',
                  }}
                >
                  {okSpamCount >= 8
                    ? 'Tubelight: endless ok spam unlocked! ♾️'
                    : 'Thabbu jii: Ipo neenga edhukku ithana ok? 😂'}
                </div>
              )}
            </div>
          )}

          {/* PAGE 15: Voice Recording */}
          {screen.artVariant === 'voiceRecording' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <WaveformDoodle interactive={true} />
              <span
                className="text-hand"
                style={{
                  color: 'var(--color-muted-ink)',
                  fontSize: '13.5px',
                }}
              >
                Unga voice vida enna jii nalla irukka poguthuuu...
              </span>
            </div>
          )}

          {/* PAGE 16: Care & Ice Cream */}
          {screen.artVariant === 'careIceCream' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <IceCreamDoodle size={48} />
              <div
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '14px',
                  color: 'var(--color-cherry)',
                  fontWeight: 600,
                  maxWidth: '200px',
                  lineHeight: 1.3,
                }}
              >
                I Wish : “Neraya ice cream nee saptu enna unoda mooka thodaika vei” 🍦
              </div>
            </div>
          )}

          {/* PAGE 17: Saved Letter */}
          {screen.artVariant === 'savedLetter' && (
            <div
              style={{
                backgroundColor: 'var(--color-warm-white)',
                border: '1px solid var(--color-petal)',
                borderRadius: '8px',
                padding: '10px 16px',
                position: 'relative',
                boxShadow: '0 4px 14px rgba(51, 42, 43, 0.05)',
                maxWidth: '290px',
                width: '100%',
              }}
            >
              <PaperClip
                style={{
                  position: 'absolute',
                  top: -14,
                  right: 18,
                }}
              />
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '14px',
                  color: 'var(--color-cherry)',
                  lineHeight: 1.4,
                  margin: 0,
                  textAlign: 'center',
                }}
              >
                “I will never replace you no matter what happens.” 🫂
              </p>
            </div>
          )}

          {/* PAGE 18: Finale 11:11 */}
          {screen.artVariant === 'finale1111' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Starburst size={20} color="var(--color-cherry)" />
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '24px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  color: 'var(--color-cherry)',
                }}
              >
                11:11 💗
              </span>
              <Starburst size={20} color="var(--color-cherry)" />
            </div>
          )}
        </div>

        {/* Bottom Copy / Dialogue Section */}
        <footer className="stagger-body" style={{ position: 'relative', zIndex: 3 }}>
          {screen.paragraphs && screen.paragraphs.length > 0 && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
              }}
            >
              {screen.paragraphs.map((p, idx) => {
                const isQuote = p.startsWith('“') || p.startsWith('"');

                const isPage17Special =
                  screen.id === '17' &&
                  (p.includes('most special people') ||
                    p.includes('never replace you') ||
                    p.includes('love being your friend') ||
                    p.includes('favourite person'));

                return (
                  <p
                    key={idx}
                    className="text-body"
                    style={{
                      margin: 0,
                      fontFamily: isQuote ? 'var(--font-serif)' : 'var(--font-sans)',
                      fontStyle: isQuote ? 'italic' : 'normal',
                      fontSize: isQuote ? '15px' : '14px',
                      color: isQuote ? 'var(--color-cherry)' : 'var(--color-ink)',
                      lineHeight: 1.45,
                    }}
                  >
                    {isPage17Special ? (
                      <span className="stationery-highlight">{p}</span>
                    ) : (
                      p
                    )}
                  </p>
                );
              })}
            </div>
          )}

          {/* Bullet points if any (Page 03 Interactive Delivery Checklist) */}
          {screen.bulletPoints && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                margin: '8px 0',
              }}
            >
              {screen.bulletPoints.map((item, i) => {
                const isChecked = !!deliveredItems[i];
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => {
                      setDeliveredItems((prev) => ({
                        ...prev,
                        [i]: !prev[i],
                      }));
                      spawnParticles(e, ['✅', '🌸', '💖', '✨']);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '5px 10px',
                      backgroundColor: 'var(--color-warm-white)',
                      border: isChecked
                        ? '1.2px solid var(--color-cherry)'
                        : '1px solid rgba(51, 42, 43, 0.15)',
                      borderRadius: '6px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '13px',
                      color: 'var(--color-ink)',
                      cursor: 'pointer',
                      textAlign: 'left',
                      boxShadow: '0 1px 3px rgba(51, 42, 43, 0.03)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span>• {item}</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-hand)',
                        fontSize: '12.5px',
                        fontWeight: 600,
                        color: isChecked ? 'var(--color-cherry)' : 'var(--color-muted-ink)',
                        backgroundColor: isChecked ? 'var(--color-blush)' : 'transparent',
                        padding: '1px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      {isChecked ? `[ ${deliveryBadges[i]} ]` : '[ tap to check ]'}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Punchline */}
          {screen.punchline && (
            <div
              className="text-punchline"
              style={{
                fontSize: '16.5px',
                marginTop: '8px',
                marginBottom: '4px',
              }}
            >
              {screen.punchline}
            </div>
          )}

          {/* MicroNote */}
          {screen.microNote && (
            <div
              className="text-hand"
              style={{
                color: 'var(--color-muted-ink)',
                marginTop: '4px',
                marginBottom: '4px',
                fontSize: '15px',
              }}
            >
              {screen.microNote}
            </div>
          )}

          {/* First screen swipe guidance */}
          {isFirst && (
            <div
              className="text-hand"
              style={{
                color: 'var(--color-cherry)',
                fontSize: '15.5px',
                textAlign: 'center',
                marginTop: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <span>swipe to open</span>
              <span style={{ fontSize: '18px' }}>→</span>
            </div>
          )}

          {/* Screen 18: Official Dual-Ring Rubber Stamp */}
          {screen.interaction?.type === 'finalStamp' && (
            <div
              style={{
                marginTop: '12px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {!stampRevealed ? (
                <button
                  type="button"
                  onClick={(e) => {
                    setStampRevealed(true);
                    spawnParticles(e, ['💖', '🍅', '✨', '💌', '🌸', '⭐']);
                  }}
                  style={{
                    backgroundColor: 'var(--color-warm-white)',
                    border: '1.5px solid var(--color-cherry)',
                    borderRadius: '24px',
                    padding: '8px 22px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--color-cherry)',
                    cursor: 'pointer',
                    boxShadow: '0 3px 12px rgba(201, 78, 104, 0.2)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--color-blush)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      'var(--color-warm-white)';
                  }}
                >
                  {screen.interaction.prompt}
                </button>
              ) : (
                <div className="official-rubber-stamp">
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '8.5px',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      color: 'var(--color-cherry)',
                      textTransform: 'uppercase',
                    }}
                  >
                    ★ TUBELIGHT & TAMATAR ★
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '15px',
                      fontWeight: 700,
                      color: 'var(--color-cherry)',
                      lineHeight: 1.1,
                      margin: '4px 0 2px 0',
                      letterSpacing: '0.04em',
                    }}
                  >
                    BEST FRIENDS
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--color-cherry)',
                      lineHeight: 1,
                      letterSpacing: '0.08em',
                    }}
                  >
                    EST. 2026
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-hand)',
                      fontSize: '12px',
                      color: 'var(--color-ink)',
                      marginTop: '6px',
                      lineHeight: 1,
                    }}
                  >
                    “Hate u more jii 🤭”
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '8px',
                      letterSpacing: '0.1em',
                      color: 'var(--color-muted-ink)',
                      marginTop: '3px',
                    }}
                  >
                    OFFICIALLY SEALED 🍅
                  </span>
                </div>
              )}
            </div>
          )}
        </footer>
      </div>
    </section>
  );
}
