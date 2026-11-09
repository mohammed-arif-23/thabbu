'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
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
  CuteTomatoMascot,
  StopwatchDoodle,
  RetroCassetteDoodle,
  TwoSmilesDoodle,
  OrigamiHeartDoodle,
  MissedCallsDoodle,
  DryRepliesDoodle,
  ShoulderDenialDoodle,
  BrokenPromisesDoodle,
  SecretThoughtsDoodle,
  WhiteHeartMysteryDoodle,
  NoComplimentsTrapDoodle,
  JealousyTrialsDoodle,
  StubbornPillsDoodle,
  TwentyDaysAwayDoodle,
  UnromanticRedFlagDoodle,
  PossessiveRadarDoodle,
  DeewanaDolaBenchDoodle,
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

  // Easter Egg: Page 07 Broken Promises Checklist
  const [deliveredItems, setDeliveredItems] = useState<Record<number, boolean>>({});

  // Easter Egg: Page 27 "OK" spam multiplier
  const [okSpamCount, setOkSpamCount] = useState(0);

  // Runaway button physics for Page 14 "Sign Breakup Papers"
  const [runawayOffset, setRunawayOffset] = useState({ x: 0, y: 0 });
  const [runawayAttempts, setRunawayAttempts] = useState(0);
  const [breakupSigned, setBreakupSigned] = useState(false);

  // Plot Twist on Page 15: Choice State
  const [plotChoice, setPlotChoice] = useState<'unselected' | 'yes' | 'no'>('unselected');

  const isDarkBreakup = screen.index <= 14;

  const handleRunawayDodge = () => {
    if (runawayAttempts < 3) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 70 + Math.random() * 50;
      setRunawayOffset({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
      });
      setRunawayAttempts((prev) => prev + 1);
    }
  };

  const fireHeartConfettiRain = () => {
    try {
      const count = 70;
      const defaults = { origin: { y: 0.6 } };

      const fire = (particleRatio: number, opts: confetti.Options) => {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio),
        });
      };

      // Layer 1: Emoji shapes
      confetti({
        particleCount: 50,
        spread: 90,
        origin: { y: 0.6 },
        shapes: [
          confetti.shapeFromText({ text: '🍅' }),
          confetti.shapeFromText({ text: '💗' }),
          confetti.shapeFromText({ text: '🐼' }),
          confetti.shapeFromText({ text: '🫂' }),
          confetti.shapeFromText({ text: '✨' }),
        ],
        scalar: 2.2,
      });

      // Layer 2: Pastel sparks
      fire(0.25, { spread: 26, startVelocity: 45, colors: ['#C94E68', '#FFA5BA', '#F7E7A9'] });
      fire(0.2, { spread: 60, colors: ['#FFB3C4', '#FFF9F3'] });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    } catch {
      // fallback gracefully if canvas is blocked
    }
  };

  const getBgClass = () => {
    if (isDarkBreakup) return 'bg-dark-paper';
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
    'Still mad at you though! 😤',
  ];

  return (
    <section
      id={`panel-${screen.id}`}
      className={`story-panel ${getBgClass()} ${isDarkBreakup ? 'theme-dark-breakup' : ''}`}
      aria-label={`Panel ${screen.index} of 30: ${screen.headline}`}
    >
      {/* Page 30 Floating Stardust Sky */}
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

      <div className={`card-sheet ${plotChoice === 'no' ? 'romantic-glow-burst' : ''}`}>
        {/* Rainy Atmospheric Overlay for Dark Breakup Dossier */}
        {isDarkBreakup && <div className="rain-overlay" aria-hidden="true" />}

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
            minHeight: '105px',
            zIndex: 2,
          }}
        >
          {/* ================================================================== */}
          {/* PART 1: COMPLAINT DOODLES (PAGES 01–14)                            */}
          {/* ================================================================== */}

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
                width={150}
                height={20}
                angle={-2}
                color="#5A1A26"
                label="OFFICIAL COMPLAINT DOSSIER"
              />
              <div
                style={{
                  position: 'relative',
                  padding: '12px 18px',
                  backgroundColor: '#261B20',
                  border: '1.2px solid #C94E68',
                  borderRadius: '12px',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.45)',
                  textAlign: 'center',
                  maxWidth: '280px',
                  width: '100%',
                }}
              >
                <div style={{ position: 'absolute', top: -10, right: -8 }}>
                  <TomatoStamp size={42} rotate={8} />
                </div>
                <EnvelopeSeal
                  opened={sealBroken}
                  onClick={(e) => {
                    setSealBroken(!sealBroken);
                    spawnParticles(e, ['💔', '🌧️', '🍅', '⚡']);
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
                    color: '#FFA5BA',
                    fontSize: '15px',
                    animation: 'fadeIn 0.3s ease',
                  }}
                >
                  13 more charges loading... swipe next →
                </span>
              )}
            </div>
          )}

          {/* PAGE 02: Waiting Period (Cute Pouting Tomato Mascot) */}
          {screen.artVariant === 'waiting' && (
            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <CuteTomatoMascot
                size={84}
                onClick={(e) => {
                  setBoopCount((c) => c + 1);
                  spawnParticles(e, ['🍅', '💔', '⚡', '😤', '✨']);
                }}
              />
              <div
                style={{
                  backgroundColor: '#261C21',
                  border: '1.2px solid #C94E68',
                  borderRadius: '16px',
                  padding: '5px 16px',
                  marginTop: '8px',
                  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.35)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '14px' }}>⚡</span>
                <span
                  className="text-hand"
                  style={{
                    color: '#FFA5BA',
                    fontSize: '14.5px',
                    fontWeight: 700,
                  }}
                >
                  {boopPhrases[Math.min(boopCount, boopPhrases.length - 1)]}
                </span>
              </div>
            </div>
          )}

          {/* PAGE 03: Missed Calls / Vanishing Acts */}
          {screen.artVariant === 'missedCalls' && <MissedCallsDoodle />}

          {/* PAGE 04: Dry Replies & Stone Heart */}
          {screen.artVariant === 'dryReplies' && <DryRepliesDoodle />}

          {/* PAGE 05: Selective Memory Part 1 (Shirt color) */}
          {screen.artVariant === 'selectiveMemory' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ filter: 'grayscale(0.7) contrast(1.2)' }}>
                <BlueShirtDoodle size={64} />
              </div>
              <div
                style={{
                  backgroundColor: '#261C20',
                  border: '1px solid #7D4C5B',
                  borderRadius: '14px',
                  padding: '4px 14px',
                }}
              >
                <span style={{ fontFamily: 'var(--font-hand)', color: '#FFA5BA', fontSize: '13.5px' }}>
                  “Na marandhuten... vayasu aagudhu lahh 👵”
                </span>
              </div>
            </div>
          )}

          {/* PAGE 06: Shoulder Denial */}
          {screen.artVariant === 'shoulderDenial' && <ShoulderDenialDoodle />}

          {/* PAGE 07: Broken Promises Checklist */}
          {screen.artVariant === 'pendingDeliveries' && <BrokenPromisesDoodle />}

          {/* PAGE 08: Cliffhangers & Secret Thoughts */}
          {screen.artVariant === 'secretThoughts' && <SecretThoughtsDoodle />}

          {/* PAGE 09: The White Heart Mystery */}
          {screen.artVariant === 'whiteHeartMystery' && <WhiteHeartMysteryDoodle />}

          {/* PAGE 10: Cruel Punishments (No Compliments) */}
          {screen.artVariant === 'noComplimentsTrap' && <NoComplimentsTrapDoodle />}

          {/* PAGE 11: Jealousy & Double Standards */}
          {screen.artVariant === 'jealousyTrials' && <JealousyTrialsDoodle />}

          {/* PAGE 12: Stubborn Pills & Skipping Dinner */}
          {screen.artVariant === 'stubbornPills' && <StubbornPillsDoodle />}

          {/* PAGE 13: 20 Days Away / Holiday Shocks */}
          {screen.artVariant === 'twentyDaysAway' && <TwentyDaysAwayDoodle />}

          {/* PAGE 14: Final Straw / Unromantic Red Flag & Runaway Button */}
          {screen.artVariant === 'unromanticRedFlag' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
              <UnromanticRedFlagDoodle />
              <div
                style={{
                  transform: `translate(${runawayOffset.x}px, ${runawayOffset.y}px)`,
                  transition: 'transform 0.18s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  position: 'relative',
                  zIndex: 10,
                }}
                onMouseEnter={handleRunawayDodge}
                onTouchStart={handleRunawayDodge}
              >
                <button
                  type="button"
                  onClick={(e) => {
                    if (runawayAttempts < 3) {
                      handleRunawayDodge();
                    } else {
                      setBreakupSigned(true);
                      spawnParticles(e, ['💔', '🏃‍♂️', '💨', '🤣']);
                      if (onAdvance) setTimeout(onAdvance, 700);
                    }
                  }}
                  style={{
                    backgroundColor: '#B63E56',
                    color: '#FFF',
                    border: '1.5px solid #FF7B95',
                    borderRadius: '24px',
                    padding: '8px 20px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.5)',
                  }}
                >
                  {runawayAttempts === 0 && 'tap to sign breakup papers 📑'}
                  {runawayAttempts === 1 && 'Hey wait, think again! 🏃‍♂️💨'}
                  {runawayAttempts === 2 && "Can't touch this! 😜"}
                  {runawayAttempts >= 3 && 'Vaaipe illa! Stuck with me! 😂'}
                </button>
              </div>
              {breakupSigned && (
                <span
                  style={{
                    color: '#FFA5BA',
                    fontFamily: 'var(--font-hand)',
                    fontSize: '14.5px',
                    animation: 'fadeIn 0.3s ease',
                  }}
                >
                  ERROR 404: Breakup Impossible. Next page ponga →
                </span>
              )}
            </div>
          )}

          {/* ================================================================== */}
          {/* PART 2: PAGE 15 — THE MOVIE PLOT TWIST (THE CLIMAX MOMENT)         */}
          {/* ================================================================== */}
          {screen.artVariant === 'plotTwistSwitch' && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                width: '100%',
                maxWidth: '320px',
              }}
            >
              {plotChoice === 'unselected' && (
                <div
                  style={{
                    backgroundColor: '#FFFDF9',
                    border: '1.5px solid var(--color-cherry)',
                    borderRadius: '16px',
                    padding: '16px 14px',
                    textAlign: 'center',
                    boxShadow: '0 8px 24px rgba(201, 78, 104, 0.15)',
                    width: '100%',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-cursive)',
                      fontSize: '22px',
                      color: 'var(--color-cherry)',
                      fontWeight: 700,
                      margin: '0 0 14px 0',
                    }}
                  >
                    “Nejama breakup paniduven nu nenaikuriya?”
                  </p>
                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button
                      type="button"
                      onClick={() => setPlotChoice('yes')}
                      style={{
                        backgroundColor: '#FFF2F5',
                        border: '1.2px solid #C94E68',
                        color: '#C94E68',
                        borderRadius: '20px',
                        padding: '8px 18px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Aama / Yes 💔
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setPlotChoice('no');
                        fireHeartConfettiRain();
                      }}
                      style={{
                        backgroundColor: 'var(--color-cherry)',
                        border: 'none',
                        color: '#FFF',
                        borderRadius: '20px',
                        padding: '8px 20px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '13.5px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(201, 78, 104, 0.35)',
                      }}
                    >
                      Illa / No 💗
                    </button>
                  </div>
                </div>
              )}

              {/* IF SHE SELECTED YES: SILLY CRYING SCOLD */}
              {plotChoice === 'yes' && (
                <div
                  className="cry-shake"
                  style={{
                    backgroundColor: '#FFF4F6',
                    border: '1.5px solid #FF4D6D',
                    borderRadius: '16px',
                    padding: '14px 16px',
                    textAlign: 'center',
                    width: '100%',
                  }}
                >
                  <div style={{ fontSize: '32px', marginBottom: '6px' }}>😭💔</div>
                  <p
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '14.5px',
                      color: '#C94E68',
                      lineHeight: 1.4,
                      margin: '0 0 10px 0',
                    }}
                  >
                    “Nee enna purinjikave ila innum kuda... 😭 Unna vittu poga mudiyuma ennala? Pehh! Ada looseyyyy!”
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setPlotChoice('no');
                      fireHeartConfettiRain();
                    }}
                    style={{
                      backgroundColor: 'var(--color-cherry)',
                      color: '#FFF',
                      border: 'none',
                      borderRadius: '18px',
                      padding: '7px 16px',
                      fontSize: '12.5px',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    Thirumba Sollu: Illa / No! 💗
                  </button>
                </div>
              )}

              {/* IF SHE SELECTED NO: CINEMATIC LOVE EXPLOSION */}
              {plotChoice === 'no' && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'var(--color-cherry)',
                      color: '#FFF',
                      borderRadius: '50px',
                      padding: '6px 18px',
                      fontSize: '14px',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      boxShadow: '0 4px 15px rgba(201, 78, 104, 0.4)',
                    }}
                  >
                    🎉 VAAIPE ILA PO! UNLIMITED LOVE ACTIVATED! 💗
                  </div>
                  <OrigamiHeartDoodle size={68} />
                </div>
              )}
            </div>
          )}

          {/* ================================================================== */}
          {/* PART 3: SWEET MEMORIES & ROMANTIC SAGA (PAGES 16–30)               */}
          {/* ================================================================== */}

          {/* PAGE 16: Where it Actually Started (College) */}
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
                width={90}
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
              <div style={{ fontFamily: 'var(--font-hand)', fontSize: '13px', color: 'var(--color-muted-ink)' }}>
                21 Sep · Just class bore adikudhu
              </div>
            </div>
          )}

          {/* PAGE 17: The Gift Planned Three Weeks Earlier */}
          {screen.artVariant === 'giftThreeWeeks' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <GiftBoxDoodle size={64} />
              <div
                style={{
                  fontFamily: 'var(--font-hand)',
                  fontSize: '14.5px',
                  color: 'var(--color-cherry)',
                  fontWeight: 600,
                }}
              >
                3 weeks before... secretly kept ready 🎁
              </div>
            </div>
          )}

          {/* PAGE 18: Possessive Rules */}
          {screen.artVariant === 'possessiveRules' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <PossessiveRadarDoodle />
              <div
                style={{
                  backgroundColor: 'var(--color-warm-white)',
                  border: '1.2px solid var(--color-petal)',
                  borderRadius: '12px',
                  padding: '8px 14px',
                }}
              >
                <div style={{ color: 'var(--color-cherry)', fontWeight: 700, fontSize: '13px' }}>
                  “Yaru kuda? Ava kudaya?” 🧐
                </div>
                <div style={{ fontSize: '11px', color: 'var(--color-muted-ink)' }}>
                  A tasty, gorgeous tomato detected 🍅
                </div>
              </div>
            </div>
          )}

          {/* PAGE 19: Tubelight x Tamatar x Bamboobear */}
          {screen.artVariant === 'nicknamesTubelight' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <TubelightDoodle size={58} />
                <span style={{ fontSize: '18px' }}>⚡</span>
                <TomatoStamp size={48} rotate={6} />
                <span style={{ fontSize: '18px' }}>🐼</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center', maxWidth: '300px' }}>
                {[
                  { name: 'Tubelight yaar 😁', bg: '#F7E7A9' },
                  { name: 'Moti tamatarrr 🍅', bg: '#FAF0F2' },
                  { name: 'Bamboobear 👀', bg: '#DCE6D8' },
                  { name: 'Meri deewani dolii 💗', bg: '#F5DCE2' },
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
                      fontWeight: 600,
                      color: 'var(--color-ink)',
                      transform: activeNickIndex === idx ? 'scale(1.12)' : 'scale(1)',
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

          {/* PAGE 20: Blue Shirt La Bulb */}
          {screen.artVariant === 'blueShirt' && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', width: '100%' }}>
              <BlueShirtDoodle size={64} />
              <PhotoPlaceholder id="2" caption="indha shirt dhaan 🤭" width={86} rotate={-3} />
            </div>
          )}

          {/* PAGE 21: Nose Pin */}
          {screen.artVariant === 'nosePin' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <NosePinDoodle size={56} />
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--color-warm-white)',
                  padding: '3px 14px',
                  borderRadius: '14px',
                  border: '1px solid var(--color-petal)',
                }}
              >
                <span style={{ fontSize: '13px' }}>✨</span>
                <span style={{ fontFamily: 'var(--font-hand)', fontSize: '13.5px', color: 'var(--color-cherry)' }}>
                  1st Compliment Ever: Pierced by Patti 😌
                </span>
              </div>
            </div>
          )}

          {/* PAGE 22: 7 Arts · Side Mirror · Fragrance */}
          {screen.artVariant === 'mirrorFragrance' && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', width: '100%' }}>
              <SideMirror />
              <PhotoPlaceholder id="3" caption="20-30 km/h smiling 🫠" width={88} rotate={3} />
            </div>
          )}

          {/* PAGE 23: Every Micro-Detail I Admire */}
          {screen.artVariant === 'detailsNotice' && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', width: '100%' }}>
              <PhotoPlaceholder id="her-details" caption="those smiles 🫠" width={84} rotate={-2} />
              <TwoSmilesDoodle />
            </div>
          )}

          {/* PAGE 24: Two Smiles & Princess */}
          {screen.artVariant === 'twoSmiles' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '28px' }}>👑</span>
              <TwoSmilesDoodle />
            </div>
          )}

          {/* PAGE 25: Sera Cafe · Shared Coffee */}
          {screen.artVariant === 'coffeePlan' && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', width: '100%' }}>
              <CoffeeCup />
              <PhotoPlaceholder id="coffee" caption="the same coffee ☕💗" width={90} rotate={-2} />
            </div>
          )}

          {/* PAGE 26: Principal's Call & 5 Seconds */}
          {screen.artVariant === 'principalFiveSeconds' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <StopwatchDoodle size={76} />
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--color-warm-white)',
                  padding: '4px 14px',
                  borderRadius: '16px',
                  border: '1.2px solid var(--color-petal)',
                  boxShadow: '0 2px 8px rgba(51, 42, 43, 0.05)',
                }}
              >
                <HandDrawnHeart size={16} />
                <span style={{ fontFamily: 'var(--font-hand)', fontSize: '14px', color: 'var(--color-cherry)', fontWeight: 600 }}>
                  5 seconds · head on shoulder 🫠
                </span>
              </div>
            </div>
          )}

          {/* PAGE 27: Voice Recording & Bouncing Equalizer Bars */}
          {screen.artVariant === 'voiceRecording' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <RetroCassetteDoodle size={124} />
              {/* Dynamic Equalizer Spectrum Bars */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '34px', padding: '0 8px' }}>
                {[1, 2, 3, 4, 1, 3, 2, 4, 2, 1, 3, 4].map((bar, i) => (
                  <span
                    key={i}
                    className={`eq-bar-${bar}`}
                    style={{
                      width: '4px',
                      backgroundColor: i % 2 === 0 ? 'var(--color-cherry)' : '#F7E7A9',
                      borderRadius: '2px',
                    }}
                  />
                ))}
              </div>
              <WaveformDoodle interactive={true} />
            </div>
          )}

          {/* PAGE 28: Care & Ice Cream */}
          {screen.artVariant === 'careIceCream' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <IceCreamDoodle size={52} />
              <PhotoPlaceholder id="4" caption="hug vangikonga 🫂" width={86} rotate={2} />
            </div>
          )}

          {/* PAGE 29: Saved Letter */}
          {screen.artVariant === 'savedLetter' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '100%' }}>
              <OrigamiHeartDoodle size={62} />
              <div
                style={{
                  backgroundColor: 'var(--color-warm-white)',
                  border: '1.2px solid var(--color-petal)',
                  borderRadius: '10px',
                  padding: '10px 16px',
                  position: 'relative',
                  boxShadow: '0 6px 18px rgba(201, 78, 104, 0.08)',
                  maxWidth: '290px',
                  width: '100%',
                }}
              >
                <PaperClip style={{ position: 'absolute', top: -14, right: 18 }} />
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '14.5px',
                    color: 'var(--color-cherry)',
                    lineHeight: 1.4,
                    margin: 0,
                    textAlign: 'center',
                    fontWeight: 600,
                  }}
                >
                  “I will never replace you no matter what happens.” 🫂
                </p>
              </div>
            </div>
          )}

          {/* PAGE 30: Finale 11:11 & Chemistry Lab Bench Carving */}
          {screen.artVariant === 'finale1111' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '100%' }}>
              <DeewanaDolaBenchDoodle />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Starburst size={18} color="var(--color-cherry)" />
                <span
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '22px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: 'var(--color-cherry)',
                  }}
                >
                  11:11 💗
                </span>
                <Starburst size={18} color="var(--color-cherry)" />
              </div>
            </div>
          )}
        </div>

        {/* Bottom Copy / Dialogue Section */}
        <footer className="stagger-body" style={{ position: 'relative', zIndex: 3 }}>
          {screen.paragraphs && screen.paragraphs.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {screen.paragraphs.map((p, idx) => {
                const isQuote = p.startsWith('“') || p.startsWith('"');
                return (
                  <p
                    key={idx}
                    className="text-body"
                    style={{
                      margin: 0,
                      fontFamily: isQuote ? 'var(--font-serif)' : 'var(--font-sans)',
                      fontStyle: isQuote ? 'italic' : 'normal',
                      fontSize: isQuote ? '14.5px' : '13.5px',
                      color: isQuote
                        ? isDarkBreakup
                          ? '#FFA5BA'
                          : 'var(--color-cherry)'
                        : isDarkBreakup
                        ? '#E2D3D8'
                        : 'var(--color-ink)',
                      lineHeight: 1.45,
                    }}
                  >
                    {p}
                  </p>
                );
              })}
            </div>
          )}

          {/* Bullet Points */}
          {screen.bulletPoints && (
            <ul
              style={{
                margin: '8px 0 0 0',
                paddingLeft: '18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}
            >
              {screen.bulletPoints.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '13.5px',
                    color: isDarkBreakup ? '#FFB3C4' : 'var(--color-cherry)',
                    fontWeight: 600,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* MicroNote */}
          {screen.microNote && (
            <div
              className="text-micronote"
              style={{
                marginTop: '8px',
                fontFamily: 'var(--font-hand)',
                fontSize: '13.5px',
              }}
            >
              {screen.microNote}
            </div>
          )}

          {/* Punchline */}
          {screen.punchline && (
            <div
              className="text-punchline"
              style={{
                marginTop: '10px',
                fontFamily: 'var(--font-serif)',
                fontWeight: 600,
                fontSize: '14.5px',
                lineHeight: 1.35,
              }}
            >
              {screen.punchline}
            </div>
          )}

          {/* Screen 30: Official Dual-Ring Rubber Stamp */}
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
                    fireHeartConfettiRain();
                    spawnParticles(e, ['💖', '🍅', '✨', '💌', '🌸', '⭐', '🎉', '🫂', '💡', '🥂']);
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
                    e.currentTarget.style.backgroundColor = 'var(--color-warm-white)';
                  }}
                >
                  {screen.interaction.prompt}
                </button>
              ) : (
                <div
                  className="official-rubber-stamp"
                  onClick={(e) => {
                    fireHeartConfettiRain();
                    spawnParticles(e, ['💖', '🍅', '✨', '💌', '🌸', '⭐', '🎉', '🫂', '💡']);
                  }}
                  role="button"
                  tabIndex={0}
                  style={{ cursor: 'pointer' }}
                  title="Click to celebrate again! 🎉"
                >
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
