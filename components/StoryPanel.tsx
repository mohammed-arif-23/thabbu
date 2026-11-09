'use client';

import React, { useState, useRef, useEffect } from 'react';
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
  TruthOrDareBulbArt,
  PattiJewelryBoxArt,
  ScooterGoldenHourRideArt,
} from './doodles/Doodles';

interface StoryPanelProps {
  screen: StoryScreen;
  isFirst: boolean;
  isLast: boolean;
  isConfirmedPlotTwistNo?: boolean;
  onConfirmPlotTwistNo?: () => void;
  onAdvance?: () => void;
  isActive?: boolean;
  isAdjacent?: boolean;
}

export function StoryPanel({
  screen,
  isFirst,
  isLast,
  isConfirmedPlotTwistNo = false,
  onConfirmPlotTwistNo,
  onAdvance,
  isActive = false,
  isAdjacent = false,
}: StoryPanelProps) {
  const [sealBroken, setSealBroken] = useState(false);
  const [stampRevealed, setStampRevealed] = useState(false);
  const [boopCount, setBoopCount] = useState(0);
  const [activeNickIndex, setActiveNickIndex] = useState<number | null>(null);

  // Runaway button physics for Page 14 "Sign Breakup Papers"
  const [runawayOffset, setRunawayOffset] = useState({ x: 0, y: 0 });
  const [runawayAttempts, setRunawayAttempts] = useState(0);
  const [breakupSigned, setBreakupSigned] = useState(false);

  // Plot Twist on Page 15: Choice State ('unselected' | 'yes' | 'no')
  const [plotChoice, setPlotChoice] = useState<'unselected' | 'yes' | 'no'>(
    isConfirmedPlotTwistNo ? 'no' : 'unselected'
  );

  // Sensory Interaction: Page 26 Heartbeat 5-Second Hold
  const [heartbeatHeldSeconds, setHeartbeatHeldSeconds] = useState(0);
  const [isHoldingHeartbeat, setIsHoldingHeartbeat] = useState(false);
  const [heartbeatCompleted, setHeartbeatCompleted] = useState(false);
  const holdIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Sensory Interaction: Page 25 Shared Coffee 2-Sips
  const [coffeeSipCount, setCoffeeSipCount] = useState(0);

  // Sensory Interaction: Page 27 Chat Replay Spam
  const [typingReplayIndex, setTypingReplayIndex] = useState(0);

  // Sensory Interaction: Page 23 Cheek Pinch Squish
  const [isCheekPinched, setIsCheekPinched] = useState(false);

  const isPage15 = screen.artVariant === 'plotTwistSwitch';
  const isPage15Locked = isPage15 && !isConfirmedPlotTwistNo;
  const isDarkBreakup = screen.index <= 14 || isPage15Locked;

  const handleConfirmNo = () => {
    setPlotChoice('no');
    onConfirmPlotTwistNo?.();
    fireHeartConfettiRain();
  };

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

      fire(0.25, { spread: 26, startVelocity: 45, colors: ['#C94E68', '#FFA5BA', '#F7E7A9'] });
      fire(0.2, { spread: 60, colors: ['#FFB3C4', '#FFF9F3'] });
      fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    } catch {
      // fallback gracefully if canvas blocked
    }
  };

  // Heartbeat Hold Mechanics (Page 26)
  const startHeartbeatHold = () => {
    if (heartbeatCompleted) return;
    setIsHoldingHeartbeat(true);
    setHeartbeatHeldSeconds(0);

    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate([100, 150, 100, 150]);
      } catch { }
    }

    holdIntervalRef.current = setInterval(() => {
      setHeartbeatHeldSeconds((prev) => {
        const next = Math.round((prev + 0.1) * 10) / 10;
        if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
          try {
            navigator.vibrate(60);
          } catch { }
        }
        if (next >= 5.0) {
          if (holdIntervalRef.current) clearInterval(holdIntervalRef.current);
          setIsHoldingHeartbeat(false);
          setHeartbeatCompleted(true);
          fireHeartConfettiRain();
          return 5.0;
        }
        return next;
      });
    }, 100);
  };

  const endHeartbeatHold = () => {
    if (!heartbeatCompleted) {
      setIsHoldingHeartbeat(false);
      if (holdIntervalRef.current) clearInterval(holdIntervalRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (holdIntervalRef.current) clearInterval(holdIntervalRef.current);
    };
  }, []);

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

  const chatSpams = [
    'Arif 💡: Nole ↔ Nole ↔ Nole (Anxious spam 😭)',
    'Arif 💡: Matten',
    'Arif 💡: Ok Ok Ok Ok Ok Ok Ok',
    'Arif 💡: “Aiyoooo anxious aagi type pannumodhu theriyama touch aagiduchi 😂”',
    'thabu 🤍: “Idhuku ethana ok jii? 🤭”',
  ];

  const isWideScreen =
    screen.artVariant === 'moonPolaroids' ||
    screen.artVariant === 'mirrorFragrance' ||
    screen.artVariant === 'blueShirt' ||
    screen.artVariant === 'nosePin' ||
    screen.artVariant === 'detailsNotice';

  return (
    <section
      id={`panel-${screen.id}`}
      className={`story-panel ${getBgClass()} ${isDarkBreakup ? 'theme-dark-breakup' : ''} ${isActive ? 'is-active' : ''} ${isAdjacent ? 'is-adjacent' : ''}`}
      aria-label={`Panel ${screen.index}: ${screen.headline}`}
    >
      {/* Floating Stardust Sky on Finale */}
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

      <div className={`card-sheet ${isWideScreen ? 'card-sheet-wide' : ''} ${plotChoice === 'no' ? 'romantic-glow-burst' : ''}`}>
        {/* Rainy Atmospheric Overlay for Dark Breakup Dossier */}
        {isDarkBreakup && <div className="rain-overlay" aria-hidden="true" />}

        {/* Luxury Folded Corner Tab */}
        <div className="page-dogear" aria-hidden="true" />

        {/* Top Header Section */}
        <header className="stagger-header" style={{ position: 'relative', zIndex: 3 }}>
          {isPage15Locked ? (
            <>
              <div style={{ marginBottom: '8px' }}>
                <span className="text-eyebrow">💔 ONE CRITICAL QUESTION JII...</span>
              </div>
              <h2 className="text-headline">“Nejama breakup paniduven nu nenaikuriya?”</h2>
            </>
          ) : (
            <>
              {screen.eyebrow && (
                <div style={{ marginBottom: '8px' }}>
                  <span className="text-eyebrow">{screen.eyebrow}</span>
                </div>
              )}
              <h2 className="text-headline">{screen.headline}</h2>
            </>
          )}
        </header>

        {/* Center Artwork / Specific Composition */}
        <div
          className="stagger-art"
          style={{
            position: 'relative',
            margin: '8px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '110px',
            zIndex: 2,
          }}
        >
          {/* ================================================================== */}
          {/* PART 1: COMPLAINT DOODLES (PAGES 01–14)                            */}
          {/* ================================================================== */}

          {/* PAGE 01: Breakup Foil / Official Notice */}
          {screen.artVariant === 'notice' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '100%' }}>
              <WashiTape width={160} height={22} angle={-2} color="#5A1A26" label="OFFICIAL COMPLAINT DOSSIER" />
              <div
                style={{
                  position: 'relative',
                  padding: '14px 20px',
                  backgroundColor: '#261B20',
                  border: '1.5px solid #C94E68',
                  borderRadius: '14px',
                  textAlign: 'center',
                  maxWidth: '300px',
                  width: '100%',
                }}
              >
                <div style={{ position: 'absolute', top: -10, right: -8 }}>
                  <TomatoStamp size={44} rotate={8} />
                </div>
                <EnvelopeSeal
                  opened={sealBroken}
                  onClick={(e) => {
                    setSealBroken(!sealBroken);
                    spawnParticles(e, ['💔', '🌧️', '🍅', '⚡']);
                    if (!sealBroken && onAdvance) setTimeout(onAdvance, 500);
                  }}
                />
              </div>
              {sealBroken && (
                <span className="text-hand" style={{ color: '#FFA5BA', fontSize: '15.5px', animation: 'fadeIn 0.3s ease' }}>
                  13 more charges loading... swipe next →
                </span>
              )}
            </div>
          )}

          {/* PAGE 02: Waiting Period */}
          {screen.artVariant === 'waiting' && (
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CuteTomatoMascot
                size={88}
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
                  padding: '6px 18px',
                  marginTop: '10px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span style={{ fontSize: '14px' }}>⚡</span>
                <span className="text-hand" style={{ color: '#FFA5BA', fontSize: '15px', fontWeight: 700 }}>
                  {boopPhrases[Math.min(boopCount, boopPhrases.length - 1)]}
                </span>
              </div>
            </div>
          )}

          {/* PAGE 03: Missed Calls / Vanishing Acts */}
          {screen.artVariant === 'missedCalls' && <MissedCallsDoodle />}

          {/* PAGE 04: Dry Replies & Stone Heart */}
          {screen.artVariant === 'dryReplies' && <DryRepliesDoodle />}

          {/* PAGE 05: Selective Memory Part 1 */}
          {screen.artVariant === 'selectiveMemory' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{ filter: 'grayscale(0.7) contrast(1.2)' }}>
                <BlueShirtDoodle size={68} />
              </div>
              <div style={{ backgroundColor: '#261C20', border: '1px solid #7D4C5B', borderRadius: '14px', padding: '5px 16px' }}>
                <span style={{ fontFamily: 'var(--font-hand)', color: '#FFA5BA', fontSize: '14px' }}>
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

          {/* PAGE 10: Cruel Punishments */}
          {screen.artVariant === 'noComplimentsTrap' && <NoComplimentsTrapDoodle />}

          {/* PAGE 11: Jealousy & Double Standards */}
          {screen.artVariant === 'jealousyTrials' && <JealousyTrialsDoodle />}

          {/* PAGE 12: Stubborn Pills */}
          {screen.artVariant === 'stubbornPills' && <StubbornPillsDoodle />}

          {/* PAGE 13: 20 Days Away */}
          {screen.artVariant === 'twentyDaysAway' && <TwentyDaysAwayDoodle />}

          {/* PAGE 14: Final Straw / Runaway Button */}
          {screen.artVariant === 'unromanticRedFlag' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
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
                    padding: '9px 22px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {runawayAttempts === 0 && 'tap to sign breakup papers 📑'}
                  {runawayAttempts === 1 && 'Hey wait, think again! 🏃‍♂️💨'}
                  {runawayAttempts === 2 && "Can't touch this! 😜"}
                  {runawayAttempts >= 3 && 'Vaaipe illa! Stuck with me! 😂'}
                </button>
              </div>
              {breakupSigned && (
                <span style={{ color: '#FFA5BA', fontFamily: 'var(--font-hand)', fontSize: '15px', animation: 'fadeIn 0.3s ease' }}>
                  ERROR 404: Breakup Impossible. Next page ponga →
                </span>
              )}
            </div>
          )}

          {/* ================================================================== */}
          {/* PART 2: PAGE 15 — THE MOVIE PLOT TWIST (THE CLIMAX MOMENT)         */}
          {/* ================================================================== */}
          {screen.artVariant === 'plotTwistSwitch' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', width: '100%', maxWidth: '340px' }}>
              {isPage15Locked && plotChoice === 'unselected' && (
                <div
                  style={{
                    backgroundColor: '#261B20',
                    border: '1.5px solid #C94E68',
                    borderRadius: '16px',
                    padding: '22px 18px',
                    textAlign: 'center',
                    width: '100%',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-cursive)', fontSize: '24px', color: '#FFA5BA', fontWeight: 700, margin: '0 0 16px 0' }}>
                    “Unakku en mela avlo dhana nambikkai?”
                  </p>
                  <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                    <button
                      type="button"
                      onClick={() => setPlotChoice('yes')}
                      style={{
                        backgroundColor: '#351F27',
                        border: '1.2px solid #C94E68',
                        color: '#FFA5BA',
                        borderRadius: '24px',
                        padding: '10px 22px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '14px',
                        fontWeight: 600,
                        cursor: 'pointer',
                      }}
                    >
                      Aama / Yes 💔
                    </button>
                    <button
                      type="button"
                      onClick={handleConfirmNo}
                      style={{
                        backgroundColor: 'var(--color-cherry)',
                        border: 'none',
                        color: '#FFF',
                        borderRadius: '24px',
                        padding: '10px 24px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '14px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(201, 78, 104, 0.45)',
                      }}
                    >
                      Illa / No 💗
                    </button>
                  </div>
                </div>
              )}

              {/* IF SHE SELECTED YES: SILLY CRYING SCOLD */}
              {isPage15Locked && plotChoice === 'yes' && (
                <div
                  className="cry-shake"
                  style={{
                    backgroundColor: '#2A1A22',
                    border: '1.5px solid #FF4D6D',
                    borderRadius: '16px',
                    padding: '18px 20px',
                    textAlign: 'center',
                    width: '100%',
                  }}
                >
                  <div style={{ fontSize: '38px', marginBottom: '8px' }}>😭💔</div>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', color: '#FFB3C4', lineHeight: 1.5, margin: '0 0 14px 0', fontWeight: 600 }}>
                    “Nee enna purinjikave ila innum kuda... 😭💔 Unna vittu poga mudiyuma ennala? Pehh! Ada looseyyyy!”
                  </p>
                  <button
                    type="button"
                    onClick={handleConfirmNo}
                    style={{
                      backgroundColor: 'var(--color-cherry)',
                      color: '#FFF',
                      border: 'none',
                      borderRadius: '24px',
                      padding: '10px 24px',
                      fontSize: '14px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(201, 78, 104, 0.4)',
                    }}
                  >
                    Thirumba Yosichiten: ILLA / NO! 💗
                  </button>
                </div>
              )}

              {/* IF CONFIRMED NO: CINEMATIC LOVE EXPLOSION */}
              {!isPage15Locked && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center', margin: '2px 0 8px 0' }}>
                  <OrigamiHeartDoodle size={64} />
                  <span
                    style={{
                      color: 'var(--color-cherry)',
                      fontSize: '12.5px',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    ✨ Unlimited Love Mode Activated ✨
                  </span>
                </div>
              )}
            </div>
          )}

          {/* ================================================================== */}
          {/* UNCOUNTED SPECIAL SCREEN: See, This is the moon! (4 Polaroids)     */}
          {/* ================================================================== */}
          {screen.artVariant === 'moonPolaroids' && (
            <div className="moon-polaroids-board">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '10px' }}>
                <span style={{ fontSize: '26px' }}>🌙</span>
                <span style={{ fontFamily: 'var(--font-cursive)', fontSize: '26px', color: 'var(--color-cherry)', fontWeight: 700 }}>
                  my favourite moon
                </span>
                <span style={{ fontSize: '20px' }}>✨</span>
              </div>

              {/* 4 Polaroids Responsive Grid (Wide 4-in-a-row on desktop, 2x2 on mobile) */}
              <div className="moon-polaroids-grid">
                <PhotoPlaceholder id="turning-point-1" caption="panda 🐼" width="100%" rotate={-2} />
                <PhotoPlaceholder id="turning-point-2" caption="bamboo bear 🐻" width="100%" rotate={2} />
                <PhotoPlaceholder id="turning-point-3" caption="meri teddy 🧸" width="100%" rotate={-1.5} />
                <PhotoPlaceholder id="turning-point-4" caption="green flag 🌱" width="100%" rotate={2.5} />
              </div>

              <div style={{ marginTop: '12px', textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--font-hand)', fontSize: '13px', color: 'var(--color-muted-ink)' }}>
                  tap any polaroid for little sparks ✨
                </span>
              </div>
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
                borderRadius: '12px',
                padding: '14px 20px',
                width: '100%',
                maxWidth: '300px',
                position: 'relative',
                textAlign: 'center',
              }}
            >
              <WashiTape width={95} height={18} angle={2} label="SEPTEMBER 2026" style={{ position: 'absolute', top: -8, left: 18 }} />
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', fontStyle: 'italic', color: 'var(--color-cherry)', margin: '4px 0', fontWeight: 600 }}>
                “Senior iniku clg varalaya neenga”
              </div>
              <div style={{ fontFamily: 'var(--font-hand)', fontSize: '14px', color: 'var(--color-muted-ink)' }}>
                21 Sep · Just class bore adikudhu
              </div>
            </div>
          )}

          {/* PAGE 17: The Gift Planned Three Weeks Earlier */}
          {screen.artVariant === 'giftThreeWeeks' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <GiftBoxDoodle size={68} />
              <div style={{ fontFamily: 'var(--font-hand)', fontSize: '15.5px', color: 'var(--color-cherry)', fontWeight: 600 }}>
                3 weeks before... secretly kept ready 🎁
              </div>
            </div>
          )}

          {/* PAGE 18: Possessive Rules */}
          {screen.artVariant === 'possessiveRules' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <PossessiveRadarDoodle />
              <div style={{ backgroundColor: 'var(--color-warm-white)', border: '1.2px solid var(--color-petal)', borderRadius: '12px', padding: '10px 16px' }}>
                <div style={{ color: 'var(--color-cherry)', fontWeight: 700, fontSize: '14px' }}>
                  “Yaru kuda? Ava kudaya?” 🧐
                </div>
                <div style={{ fontSize: '12px', color: 'var(--color-muted-ink)', marginTop: '2px' }}>
                  A tasty, gorgeous tomato detected 🍅
                </div>
              </div>
            </div>
          )}

          {/* PAGE 19: Tubelight x Tamatar x Bamboobear & Single Photo */}
          {screen.artVariant === 'nicknamesTubelight' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <TubelightDoodle size={44} />
                <span style={{ fontSize: '18px' }}>⚡</span>
                <TomatoStamp size={40} rotate={6} />
                <span style={{ fontSize: '18px' }}>🐼</span>
              </div>

              {/* Single Photo */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '4px 0' }}>
                <PhotoPlaceholder
                  id="four-in-one"
                  defaultSrc="/photos/four-in-one.jpg"
                  caption="bamboo bear 🐼💗"
                  width={130}
                  aspectRatio="1 / 1"
                  rotate={-1.5}
                />
              </div>

              {/* Nickname Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center', maxWidth: '340px', marginTop: '4px' }}>
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
                      borderRadius: '8px',
                      padding: '4px 10px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11.5px',
                      fontWeight: 700,
                      color: 'var(--color-ink)',
                      transform: activeNickIndex === idx ? 'scale(1.08)' : 'scale(1)',
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

          {/* PAGE 20: Blue Shirt La Bulb (Classroom Truth & Dare Memory Art) */}
          {screen.artVariant === 'blueShirt' && (
            <TruthOrDareBulbArt />
          )}

          {/* PAGE 21: Nose Pin (Patti's Royal Velvet Jewelry Presentation Case) */}
          {screen.artVariant === 'nosePin' && (
            <PattiJewelryBoxArt />
          )}

          {/* PAGE 22: 7 Arts · Side Mirror · Golden Hour Scooter Ride & Fragrance */}
          {screen.artVariant === 'mirrorFragrance' && (
            <ScooterGoldenHourRideArt />
          )}

          {/* PAGE 23: Every Micro-Detail I Admire (Her Photo ALONE · Normal Horizontal Image + Cheek Pinch Squish Physics) */}
          {screen.artVariant === 'detailsNotice' && (
            <div
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', margin: '4px 0' }}
              onClick={(e) => {
                setIsCheekPinched(true);
                spawnParticles(e, ['🥰', '🌸', '🤏', '💗', '✨']);
                setTimeout(() => setIsCheekPinched(false), 350);
              }}
            >
              <div style={{ transform: isCheekPinched ? 'scale(1.12, 0.88)' : 'scale(1)', transition: 'transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1)', cursor: 'pointer' }}>
                <PhotoPlaceholder
                  id="her-details"
                  caption="tap to pinch cheeks 🤏🫠"
                  width={185}
                  aspectRatio="4 / 3"
                  rotate={-1}
                />
              </div>
              <span style={{ fontFamily: 'var(--font-hand)', fontSize: '13.5px', color: 'var(--color-cherry)', marginTop: '6px', fontWeight: 600 }}>
                {isCheekPinched ? 'Aiyooo cheeks pinched! Too soft 🤭' : 'tap photo to pinch her cheeks 🤏'}
              </span>
            </div>
          )}

          {/* PAGE 24: Two Smiles & Princess */}
          {screen.artVariant === 'twoSmiles' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '30px' }}>👑</span>
              <TwoSmilesDoodle />
            </div>
          )}

          {/* PAGE 25: Sera Cafe · Shared Coffee (Interactive 2-Sip Counter) */}
          {screen.artVariant === 'coffeePlan' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', width: '100%' }}>
                <div
                  onClick={(e) => {
                    setCoffeeSipCount((prev) => (prev + 1) % 3);
                    spawnParticles(e, ['☕', '💗', '✨', '😋']);
                  }}
                  style={{ cursor: 'pointer', textAlign: 'center' }}
                  title="Tap coffee to sip"
                >
                  <CoffeeCup />
                </div>
                <PhotoPlaceholder id="coffee" caption="the same coffee ☕💗" width={94} rotate={-2} />
              </div>
              <div
                style={{
                  backgroundColor: 'var(--color-warm-white)',
                  border: '1.2px solid var(--color-petal)',
                  borderRadius: '14px',
                  padding: '4px 14px',
                  fontSize: '13px',
                  fontFamily: 'var(--font-hand)',
                  color: 'var(--color-cherry)',
                  fontWeight: 600,
                }}
              >
                {coffeeSipCount === 0 && 'tap cup to drink shared coffee ☕'}
                {coffeeSipCount === 1 && 'Thabbu took a sip! Now Arif drinks from same cup 😋'}
                {coffeeSipCount === 2 && '“Ur taste makes it a precious coffee ever!” ☕💗'}
              </div>
            </div>
          )}

          {/* PAGE 26: Principal's Call & 5 Seconds (Sensory Heartbeat 5s Hold) */}
          {screen.artVariant === 'principalFiveSeconds' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '100%' }}>
              <StopwatchDoodle size={76} />
              <button
                type="button"
                onMouseDown={startHeartbeatHold}
                onMouseUp={endHeartbeatHold}
                onTouchStart={startHeartbeatHold}
                onTouchEnd={endHeartbeatHold}
                style={{
                  backgroundColor: isHoldingHeartbeat ? 'var(--color-cherry)' : 'var(--color-warm-white)',
                  color: isHoldingHeartbeat ? '#FFF' : 'var(--color-cherry)',
                  border: '1.5px solid var(--color-cherry)',
                  borderRadius: '24px',
                  padding: '8px 22px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: isHoldingHeartbeat ? '0 0 20px rgba(201, 78, 104, 0.6)' : '0 2px 8px rgba(51, 42, 43, 0.05)',
                  transform: isHoldingHeartbeat ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.15s ease',
                  userSelect: 'none',
                }}
              >
                {heartbeatCompleted
                  ? '💗 5 Seconds Completed: Heart Stopped!'
                  : isHoldingHeartbeat
                    ? `Holding: ${heartbeatHeldSeconds.toFixed(1)}s / 5.0s 💓`
                    : 'Press & Hold for 5 seconds 🫠'}
              </button>
            </div>
          )}

          {/* PAGE 27: Voice Recording & Live Chat Replay Spam */}
          {screen.artVariant === 'voiceRecording' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '100%' }}>
              {/* Live Chat Replay Bubble */}
              <div
                onClick={() => setTypingReplayIndex((prev) => (prev + 1) % chatSpams.length)}
                style={{
                  backgroundColor: '#FFF8FA',
                  border: '1.2px solid var(--color-petal)',
                  borderRadius: '16px',
                  padding: '6px 14px',
                  fontSize: '13px',
                  fontFamily: 'monospace',
                  color: 'var(--color-cherry)',
                  cursor: 'pointer',
                  maxWidth: '300px',
                  textAlign: 'center',
                }}
                title="Tap for next spam message"
              >
                {chatSpams[typingReplayIndex]}
              </div>
              <RetroCassetteDoodle size={124} />
              {/* Dynamic Equalizer Spectrum Bars */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '32px', padding: '0 8px' }}>
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

          {/* PAGE 28: Care & Ice Cream (Doodle alone, image container removed) */}
          {screen.artVariant === 'careIceCream' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <IceCreamDoodle size={64} />
              <span style={{ fontFamily: 'var(--font-hand)', fontSize: '14px', color: 'var(--color-cherry)', fontWeight: 600 }}>
                “hug vangikonga 🫂”
              </span>
            </div>
          )}

          {/* PAGE 29: Saved Letter */}
          {screen.artVariant === 'savedLetter' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '100%' }}>
              <OrigamiHeartDoodle size={68} />
              <div
                style={{
                  backgroundColor: 'var(--color-warm-white)',
                  border: '1.2px solid var(--color-petal)',
                  borderRadius: '12px',
                  padding: '12px 18px',
                  position: 'relative',
                  boxShadow: '0 6px 18px rgba(201, 78, 104, 0.08)',
                  maxWidth: '320px',
                  width: '100%',
                }}
              >
                <PaperClip style={{ position: 'absolute', top: -14, right: 18 }} />
                <p
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '15.5px',
                    color: 'var(--color-cherry)',
                    lineHeight: 1.45,
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
          {isPage15Locked ? (
            <div style={{ textAlign: 'center', padding: '16px 8px' }}>
              <p style={{ fontFamily: 'var(--font-hand)', fontSize: '16px', color: '#FFA5BA', margin: 0, fontWeight: 600 }}>
                Answer the question above to unlock the truth... 👆
              </p>
            </div>
          ) : (
            <>
              {screen.paragraphs && screen.paragraphs.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                          fontSize: isQuote ? '17px' : '16px',
                          fontWeight: isQuote ? 600 : 500,
                          color: isQuote
                            ? isDarkBreakup
                              ? '#FFA5BA'
                              : 'var(--color-cherry)'
                            : isDarkBreakup
                              ? '#E2D3D8'
                              : 'var(--color-ink)',
                          lineHeight: 1.6,
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
                <ul style={{ margin: '10px 0 0 0', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {screen.bulletPoints.map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '15.5px',
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
                    marginTop: '10px',
                    fontFamily: 'var(--font-hand)',
                    fontSize: '15px',
                    fontWeight: 600,
                    lineHeight: 1.4,
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
                    marginTop: '12px',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    fontSize: '17px',
                    lineHeight: 1.4,
                  }}
                >
                  {screen.punchline}
                </div>
              )}

              {isPage15 && (
                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                  <button
                    type="button"
                    onClick={onAdvance}
                    style={{
                      backgroundColor: 'var(--color-cherry)',
                      color: '#FFF',
                      border: 'none',
                      borderRadius: '24px',
                      padding: '10px 26px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14.5px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(201, 78, 104, 0.35)',
                    }}
                  >
                    See my happiest chapter of life → IT'S U
                  </button>
                </div>
              )}
            </>
          )}

          {/* Screen 30: Official Dual-Ring Rubber Stamp */}
          {screen.interaction?.type === 'finalStamp' && (
            <div
              style={{
                marginTop: '14px',
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
                    padding: '9px 24px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14.5px',
                    fontWeight: 700,
                    color: 'var(--color-cherry)',
                    cursor: 'pointer',
                    boxShadow: '0 3px 12px rgba(201, 78, 104, 0.2)',
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
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--color-cherry)', textTransform: 'uppercase' }}>
                    ★ TUBELIGHT & TAMATAR ★
                  </span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '15px', fontWeight: 700, color: 'var(--color-cherry)', lineHeight: 1.1, margin: '4px 0 2px 0', letterSpacing: '0.04em' }}>
                    BEST FRIENDS
                  </span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', fontWeight: 600, color: 'var(--color-cherry)', lineHeight: 1, letterSpacing: '0.08em' }}>
                    EST. 2026
                  </span>
                  <span style={{ fontFamily: 'var(--font-hand)', fontSize: '12px', color: 'var(--color-ink)', marginTop: '6px', lineHeight: 1 }}>
                    “Hate u more jii 🤭”
                  </span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '8px', letterSpacing: '0.1em', color: 'var(--color-muted-ink)', marginTop: '3px' }}>
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
