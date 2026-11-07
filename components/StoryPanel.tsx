'use client';

import React, { useState } from 'react';
import { StoryScreen } from '../content/story';
import {
  TomatoStamp,
  WashiTape,
  EnvelopeSeal,
  HandDrawnHeart,
  Starburst,
  HandDrawnArrow,
  CoffeeCup,
  SideMirror,
  SmileMarks,
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

  return (
    <section
      id={`panel-${screen.id}`}
      className={`story-panel ${getBgClass()}`}
      aria-label={`Panel ${screen.index} of 17: ${screen.headline}`}
    >
      <div className="card-sheet">
        {/* Top Header Section */}
        <header style={{ position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '6px',
            }}
          >
            {screen.eyebrow && (
              <span className="text-eyebrow">{screen.eyebrow}</span>
            )}
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '12px',
                color: 'var(--color-muted-ink)',
                letterSpacing: '0.08em',
              }}
            >
              {screen.id} / 17
            </span>
          </div>

          <h2 className="text-headline">{screen.headline}</h2>

          {screen.punchline && (
            <div className="text-punchline">{screen.punchline}</div>
          )}
        </header>

        {/* Center Artwork / Specific Composition */}
        <div
          style={{
            position: 'relative',
            margin: 'auto 0',
            padding: '12px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '140px',
            zIndex: 1,
          }}
        >
          {screen.artVariant === 'breakup' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '14px',
              }}
            >
              <TomatoStamp size={54} rotate={-4} />
              <div
                style={{
                  width: '80px',
                  height: '1px',
                  backgroundColor: 'var(--color-petal)',
                  opacity: 0.6,
                }}
              />
              <EnvelopeSeal
                opened={sealBroken}
                onClick={() => {
                  setSealBroken(!sealBroken);
                  if (!sealBroken && onAdvance) {
                    setTimeout(onAdvance, 450);
                  }
                }}
              />
              {sealBroken && (
                <span
                  className="text-hand"
                  style={{
                    color: 'var(--color-cherry)',
                    fontSize: '15px',
                    animation: 'fadeIn 0.3s ease',
                  }}
                >
                  Agreement void · Keep scrolling →
                </span>
              )}
            </div>
          )}

          {screen.artVariant === 'twist' && (
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
                  marginBottom: '8px',
                  transform: 'rotate(-10deg)',
                }}
              />
              <TomatoStamp
                size={76}
                rotate={boopCount % 2 === 0 ? 8 : -8}
                interactive={true}
                onClick={() => setBoopCount((c) => c + 1)}
              />
              <span
                className="text-hand"
                style={{
                  color: 'var(--color-muted-ink)',
                  fontSize: '14px',
                  marginTop: '8px',
                }}
              >
                {boopCount > 0
                  ? `boop count: ${boopCount} · forever stuck with me`
                  : 'tap tomato to boop'}
              </span>
            </div>
          )}

          {screen.artVariant === 'request' && (
            <div
              style={{
                backgroundColor: 'var(--color-warm-white)',
                border: '1.2px solid var(--color-petal)',
                borderRadius: '12px',
                padding: '16px 20px',
                boxShadow: '0 4px 14px rgba(51, 42, 43, 0.05)',
                width: '100%',
                maxWidth: '300px',
                position: 'relative',
              }}
            >
              <WashiTape
                width={70}
                height={16}
                angle={-4}
                style={{
                  position: 'absolute',
                  top: -8,
                  left: 20,
                  zIndex: 2,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px',
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-blush)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                  }}
                >
                  💌
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: '13px',
                      color: 'var(--color-ink)',
                    }}
                  >
                    Follow Request Accepted
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      color: 'var(--color-muted-ink)',
                    }}
                  >
                    Best Friends Rules applied
                  </div>
                </div>
              </div>
              <div
                style={{
                  borderTop: '1px dashed rgba(233, 170, 185, 0.4)',
                  paddingTop: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '12px',
                    color: 'var(--color-cherry)',
                    fontStyle: 'italic',
                  }}
                >
                  First reel belongs to you
                </span>
                <span style={{ fontSize: '12px' }}>🎬</span>
              </div>
            </div>
          )}

          {screen.artVariant === 'nicknames' && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                justifyContent: 'center',
                maxWidth: '320px',
                position: 'relative',
              }}
            >
              {[
                { name: 'Panda girl 🐼', bg: '#FAF0F2', deg: -2 },
                { name: 'Bamboo bear 🐻', bg: '#F7E7A9', deg: 3 },
                { name: 'Meri teddy 🧸', bg: '#FFF9F3', deg: -1 },
                { name: 'Tamatarrr 🍅', bg: '#F5DCE2', deg: 2 },
                { name: 'Wonder woman', bg: '#FFFEFC', deg: -3 },
                { name: 'Baddie', bg: '#DDD6EF', deg: 1 },
                { name: 'Unromantic girl', bg: '#DCE6D8', deg: -2 },
                { name: 'Red flag', bg: '#FAD2D8', deg: 2 },
              ].map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '12.5px',
                    fontWeight: 500,
                    color: 'var(--color-ink)',
                    backgroundColor: tag.bg,
                    border: '1px solid rgba(51, 42, 43, 0.12)',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    transform: `rotate(${tag.deg}deg)`,
                    boxShadow: '0 1px 3px rgba(51, 42, 43, 0.04)',
                  }}
                >
                  {tag.name}
                </span>
              ))}

              <div
                style={{
                  marginTop: '12px',
                  backgroundColor: 'var(--color-warm-white)',
                  border: '1.5px solid var(--color-cherry)',
                  borderRadius: '6px',
                  padding: '6px 14px',
                  transform: 'rotate(-1deg)',
                  boxShadow: '0 2px 6px rgba(201, 78, 104, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    fontSize: '15px',
                    color: 'var(--color-cherry)',
                    letterSpacing: '0.04em',
                  }}
                >
                  DEEWANA DOLA
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-hand)',
                    fontSize: '12px',
                    color: 'var(--color-muted-ink)',
                  }}
                >
                  (last bench)
                </span>
              </div>
            </div>
          )}

          {screen.artVariant === 'details' && (
            <div
              style={{
                position: 'relative',
                width: '260px',
                height: '140px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Abstract magnifying loupe */}
              <div
                style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '50%',
                  border: '2px solid var(--color-cherry)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 254, 252, 0.65)',
                }}
              >
                <div
                  style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-ink)',
                  }}
                  title="mole"
                />
                <span
                  style={{
                    position: 'absolute',
                    top: -12,
                    right: -10,
                  }}
                >
                  <Starburst size={16} color="var(--color-cherry)" />
                </span>
                {/* Loupe handle */}
                <div
                  style={{
                    position: 'absolute',
                    width: '32px',
                    height: '4px',
                    backgroundColor: 'var(--color-cherry)',
                    borderRadius: '2px',
                    bottom: -10,
                    right: -16,
                    transform: 'rotate(45deg)',
                  }}
                />
              </div>

              {/* Hand-drawn annotation tags */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  fontFamily: 'var(--font-hand)',
                  fontSize: '14px',
                  color: 'var(--color-muted-ink)',
                }}
              >
                eye mole · eyelashes 💫
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: 4,
                  left: 10,
                  fontFamily: 'var(--font-hand)',
                  fontSize: '14px',
                  color: 'var(--color-cherry)',
                }}
              >
                cheek pinch 🤭
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 0,
                  fontFamily: 'var(--font-hand)',
                  fontSize: '14px',
                  color: 'var(--color-muted-ink)',
                }}
              >
                nose scrunch ✨
              </div>
            </div>
          )}

          {screen.artVariant === 'smiles' && <SmileMarks />}

          {screen.artVariant === 'mirror' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <SideMirror />
              <div
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '14px',
                  color: 'var(--color-muted-ink)',
                  textAlign: 'center',
                }}
              >
                20–30 km/h · looking at the mirror
              </div>
            </div>
          )}

          {screen.artVariant === 'coffee' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <CoffeeCup />
              <WashiTape
                width={80}
                height={16}
                angle={2}
                color="#F7E7A9"
                style={{ marginTop: '10px' }}
              />
            </div>
          )}

          {screen.artVariant === 'handhold' && (
            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <svg width="180" height="60" viewBox="0 0 180 60" fill="none">
                {/* Gentle heartbeat pulse settling into calm line */}
                <path
                  d="M 10 30 L 50 30 L 60 14 L 70 46 L 80 22 L 90 35 L 100 30 L 170 30"
                  stroke="var(--color-petal)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="100" cy="30" r="3" fill="var(--color-cherry)" />
              </svg>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'var(--color-warm-white)',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: '1px solid var(--color-petal)',
                }}
              >
                <HandDrawnHeart size={18} />
                <span
                  style={{
                    fontFamily: 'var(--font-hand)',
                    fontSize: '14px',
                    color: 'var(--color-ink)',
                  }}
                >
                  problem: quiet
                </span>
              </div>
            </div>
          )}

          {screen.artVariant === 'timer' && (
            <div
              style={{
                textAlign: 'center',
                padding: '16px 0',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(48px, 14vw, 72px)',
                  fontWeight: 600,
                  color: 'var(--color-ink)',
                  letterSpacing: '0.04em',
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                00:05
              </div>
              <svg
                width="140"
                height="12"
                viewBox="0 0 140 12"
                fill="none"
                style={{ margin: '8px auto 0 auto', display: 'block' }}
              >
                <path
                  d="M 10 6 Q 70 12 130 6"
                  stroke="var(--color-cherry)"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-hand)',
                  fontSize: '15px',
                  color: 'var(--color-muted-ink)',
                  marginTop: '10px',
                }}
              >
                head on my shoulder
              </span>
            </div>
          )}

          {screen.artVariant === 'checkins' && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                justifyContent: 'center',
                maxWidth: '300px',
              }}
            >
              {[
                'Saptingala?',
                'Enna pandringa jii?',
                'Bathrama ponga.',
                'Good morninggg.',
                'Sweet dreams.',
                'Miss u more jii.',
              ].map((msg, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: 'var(--color-warm-white)',
                    border: '1px solid rgba(233, 170, 185, 0.45)',
                    borderRadius: '16px',
                    padding: '6px 12px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '12px',
                    color: 'var(--color-ink)',
                    boxShadow: '0 1px 4px rgba(51, 42, 43, 0.03)',
                    transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
                  }}
                >
                  “{msg}”
                </div>
              ))}
            </div>
          )}

          {screen.artVariant === 'games' && (
            <div
              style={{
                backgroundColor: '#FFFBF2',
                border: '1.5px dashed var(--color-petal)',
                borderRadius: '8px',
                padding: '14px 18px',
                width: '100%',
                maxWidth: '290px',
                position: 'relative',
                boxShadow: '0 3px 10px rgba(51, 42, 43, 0.04)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid #F5DCE2',
                  paddingBottom: '6px',
                  marginBottom: '8px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    fontSize: '12px',
                    color: 'var(--color-cherry)',
                    letterSpacing: '0.08em',
                  }}
                >
                  ADMIT ONE · LOOSU PASS
                </span>
                <span style={{ fontSize: '11px' }}>🎟️</span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11.5px',
                  color: 'var(--color-ink)',
                  lineHeight: 1.45,
                }}
              >
                Truth or Dare · No Compliments · Green / Red Flags · Mettur Park
              </div>
            </div>
          )}

          {screen.artVariant === 'nonsense' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  border: '2px solid var(--color-cherry)',
                  borderRadius: '6px',
                  padding: '6px 14px',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: 'var(--color-cherry)',
                  transform: 'rotate(-4deg)',
                }}
              >
                NOLE
              </div>
              <span style={{ fontSize: '18px' }}>↔</span>
              <div
                style={{
                  border: '2px solid var(--color-ink)',
                  borderRadius: '6px',
                  padding: '6px 14px',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: 'var(--color-ink)',
                  transform: 'rotate(3deg)',
                }}
              >
                MATTEN
              </div>
              <span style={{ fontSize: '18px' }}>↔</span>
              <div
                style={{
                  backgroundColor: 'var(--color-butter)',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: 'var(--color-ink)',
                  transform: 'rotate(-2deg)',
                }}
              >
                OK
              </div>
            </div>
          )}

          {screen.artVariant === 'newthings' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <WaveformDoodle />
              <span
                className="text-hand"
                style={{
                  color: 'var(--color-muted-ink)',
                  fontSize: '14px',
                }}
              >
                explaining songs & failing to act normal
              </span>
            </div>
          )}

          {screen.artVariant === 'caring' && (
            <div
              style={{
                backgroundColor: 'var(--color-warm-white)',
                border: '1px solid var(--color-petal)',
                borderRadius: '8px',
                padding: '16px 20px',
                position: 'relative',
                boxShadow: '0 4px 14px rgba(51, 42, 43, 0.05)',
                maxWidth: '300px',
                width: '100%',
              }}
            >
              <PaperClip
                style={{
                  position: 'absolute',
                  top: -14,
                  right: 22,
                }}
              />
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '15px',
                  color: 'var(--color-ink)',
                  lineHeight: 1.45,
                  margin: 0,
                }}
              >
                “See na iruken epovumey… Vanga inga oru hug vangikonga.”
              </p>
            </div>
          )}

          {screen.artVariant === 'bench' && (
            <div
              style={{
                backgroundColor: '#2D3748',
                backgroundImage:
                  'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
                backgroundSize: '12px 12px',
                borderRadius: '8px',
                padding: '18px 24px',
                boxShadow:
                  'inset 0 2px 4px rgba(0,0,0,0.4), 0 4px 12px rgba(51, 42, 43, 0.15)',
                textAlign: 'center',
                maxWidth: '280px',
                width: '100%',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '24px',
                  color: '#FFF9F3',
                  letterSpacing: '0.04em',
                }}
              >
                deewana dola
              </div>
              <div
                style={{
                  fontSize: '10px',
                  fontFamily: 'var(--font-sans)',
                  color: '#CBD5E0',
                  marginTop: '4px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Chem Lab · Bench 12
              </div>
            </div>
          )}

          {screen.artVariant === 'closing' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '12px',
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
                <Starburst size={18} color="var(--color-cherry)" />
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '15px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: 'var(--color-cherry)',
                  }}
                >
                  THE 11:11 WISH
                </span>
                <Starburst size={18} color="var(--color-cherry)" />
              </div>

              {screen.myWish && (
                <div
                  style={{
                    backgroundColor: 'var(--color-warm-white)',
                    border: '1px solid rgba(233, 170, 185, 0.4)',
                    borderRadius: '10px',
                    padding: '10px 16px',
                    maxWidth: '300px',
                    width: '100%',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'var(--color-muted-ink)',
                      display: 'block',
                      marginBottom: '3px',
                    }}
                  >
                    My wish
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '14.5px',
                      fontStyle: 'italic',
                      color: 'var(--color-ink)',
                    }}
                  >
                    {screen.myWish}
                  </span>
                </div>
              )}

              {screen.yourWish && (
                <div
                  style={{
                    backgroundColor: 'var(--color-warm-white)',
                    border: '1px solid rgba(233, 170, 185, 0.4)',
                    borderRadius: '10px',
                    padding: '10px 16px',
                    maxWidth: '300px',
                    width: '100%',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: 'var(--color-muted-ink)',
                      display: 'block',
                      marginBottom: '3px',
                    }}
                  >
                    Your wish
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '14px',
                      fontStyle: 'italic',
                      color: 'var(--color-ink)',
                    }}
                  >
                    {screen.yourWish}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Copy & Interaction Footer */}
        <footer style={{ position: 'relative', zIndex: 2 }}>
          {screen.copy && <p className="text-body">{screen.copy}</p>}

          {screen.copy2 && (
            <p className="text-body-secondary">{screen.copy2}</p>
          )}

          {screen.closing && (
            <p
              className="text-body"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '16px',
                fontWeight: 600,
                color: 'var(--color-cherry)',
                textAlign: 'center',
                margin: '12px 0 8px 0',
              }}
            >
              {screen.closing}
            </p>
          )}

          {screen.microNote && (
            <div
              className="text-hand"
              style={{
                color: 'var(--color-muted-ink)',
                marginTop: '4px',
                marginBottom: '4px',
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
                fontSize: '16px',
                textAlign: 'center',
                marginTop: '8px',
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

          {/* Screen 17 optional final action stamp */}
          {screen.interaction?.type === 'finalStamp' && (
            <div
              style={{
                marginTop: '12px',
                textAlign: 'center',
              }}
            >
              {!stampRevealed ? (
                <button
                  type="button"
                  onClick={() => setStampRevealed(true)}
                  style={{
                    backgroundColor: 'var(--color-warm-white)',
                    border: '1.5px solid var(--color-cherry)',
                    borderRadius: '24px',
                    padding: '8px 20px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: 'var(--color-cherry)',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(201, 78, 104, 0.15)',
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
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    border: '2px dashed var(--color-cherry)',
                    borderRadius: '8px',
                    padding: '6px 16px',
                    backgroundColor: 'var(--color-blush)',
                    fontFamily: 'var(--font-hand)',
                    fontSize: '16px',
                    color: 'var(--color-cherry)',
                    transform: 'rotate(-2deg)',
                  }}
                >
                  <span>{screen.interaction.revealedText}</span>
                </div>
              )}
            </div>
          )}
        </footer>
      </div>
    </section>
  );
}
