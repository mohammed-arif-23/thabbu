export interface StoryScreen {
  id: string;
  index: number;
  eyebrow?: string;
  headline: string;
  punchline?: string;
  copy: string;
  copy2?: string;
  microNote?: string;
  artVariant:
    | 'breakup'
    | 'twist'
    | 'request'
    | 'nicknames'
    | 'details'
    | 'smiles'
    | 'mirror'
    | 'coffee'
    | 'handhold'
    | 'timer'
    | 'checkins'
    | 'games'
    | 'nonsense'
    | 'newthings'
    | 'caring'
    | 'bench'
    | 'closing';
  bgVariant?: 'paper' | 'warmWhite' | 'blushTint';
  tags?: string[];
  myWish?: string;
  yourWish?: string;
  closing?: string;
  interaction?: {
    type: 'seal' | 'note' | 'sticker' | 'finalStamp';
    prompt?: string;
    revealedText?: string;
  };
}

export const storyScreens: StoryScreen[] = [
  {
    id: '01',
    index: 1,
    eyebrow: 'CONFIDENTIAL · DO NOT FORWARD',
    headline: "I'M DONE WITH YOU, TAMATAR. 🍅",
    copy: 'Seriously, idhuku mela ennala mudila jii. Pathutu reply eh panna maatengra… verum “Mm”, “Hmm”, “Mm okayy” nu dry ah thatti vidura. Seri. Let’s end this right here.',
    artVariant: 'breakup',
    bgVariant: 'paper',
    interaction: {
      type: 'seal',
      prompt: 'tap seal to break agreement',
      revealedText: 'WAIT A SECOND…',
    },
  },
  {
    id: '02',
    index: 2,
    eyebrow: 'PLOT TWIST',
    headline: 'HAHAHA, U THINK I DO?',
    punchline: 'VAAIPE ILA PO! 🤭',
    copy: 'Ada loosuuu! Unna vittu porathaa? Naa apdi irupena neeye sollu! This isn’t a breakup book. It’s proof that I remember way too many little things about you, madam.',
    artVariant: 'twist',
    bgVariant: 'warmWhite',
    interaction: {
      type: 'sticker',
      prompt: 'tap the tomato',
      revealedText: '🍅 Boop! Never letting go.',
    },
  },
  {
    id: '03',
    index: 3,
    eyebrow: 'DAY ZERO',
    headline: 'ONE ACCEPTED REQUEST. SO MANY MEMORIES.',
    copy: 'Accepting your Insta request became one of my favourite decisions. Namma start pannapo “Na ungaluku yaru?” nu ketta… “Best friends” nu sonna odane rules um potuta! 🤭 My very first reel belongs to you now.',
    microNote: '“The best accidental yes.”',
    artVariant: 'request',
    bgVariant: 'paper',
  },
  {
    id: '04',
    index: 4,
    eyebrow: 'FILE NO. 04 — CODENAMES',
    headline: 'ONE GIRL. TOO MANY NAMES.',
    copy: 'Panda girl 🐼 · Bamboo bear 🐻 · Meri teddy 🧸 · Tamatarrr 🍅 · Wonder woman · Baddie · Unromantic girl · Red flag.',
    copy2: 'And you gave me… DEEWANA DOLA. You even wrote it on the chemistry lab last bench. Kelavi, priorities! 😂',
    artVariant: 'nicknames',
    bgVariant: 'warmWhite',
  },
  {
    id: '05',
    index: 5,
    eyebrow: 'OBSERVATIONS',
    headline: "THINGS YOU DON'T EVEN NOTICE.",
    copy: 'Antha small dots and mole below your eye. Your eyelashes when you blink. That nose scrunch I still can’t explain. And those soft cheeks… first cheek pinch of my life, madam. 🤭',
    microNote: '“A small, stubborn universe.”',
    artVariant: 'details',
    bgVariant: 'paper',
  },
  {
    id: '06',
    index: 6,
    eyebrow: 'SPECTRUM',
    headline: 'TWO SMILES. ONE TUBELIGHT.',
    copy: 'Pallu theriraa mari full-ah sirikkura smile… and that quiet little smile with the look in your eyes. One makes me smile. The other makes me forget what I was saying. 🫠',
    artVariant: 'smiles',
    bgVariant: 'blushTint',
  },
  {
    id: '07',
    index: 7,
    eyebrow: 'MEMORY · 7 ARTS',
    headline: '7 ARTS. TWO MIRRORS. ONE FRAGRANCE.',
    copy: 'Nee 7 Arts ta vandha odane, your fragrance caught me off guard. Naa munnadi pona, side mirror la un cutu little reactions. Nee munnadi pona, un face in the mirror. Veetuku thirumbi 20–30 speed la vandha oru loosu paiyan. 🤭',
    microNote: '“Slow ride home.”',
    artVariant: 'mirror',
    bgVariant: 'paper',
  },
  {
    id: '08',
    index: 8,
    eyebrow: 'STILL LIFE',
    headline: 'THE MOST PRECIOUS COFFEE.',
    copy: 'Same coffee cup. You drank first; I drank after. I was drinking so slowly, and you know why. Un taste made it the most PRECIOUS coffee. 🤭',
    microNote: '“Deal is a deal, panda girl. UPI share pending.”',
    artVariant: 'coffee',
    bgVariant: 'warmWhite',
  },
  {
    id: '09',
    index: 9,
    eyebrow: 'PRINCIPAL’S OFFICE',
    headline: 'MY LITTLE CHEAT CODE.',
    copy: 'That principal’s call, sitting so close, me going nervous and olara-ing. And the way we held hands… ennala un kaiya vida ve mudiyala. For a moment, every problem went quiet. 💗',
    artVariant: 'handhold',
    bgVariant: 'paper',
  },
  {
    id: '10',
    index: 10,
    eyebrow: 'TIMESTAMP',
    headline: 'JUST 00:05.',
    copy: 'You held my hand with both your hands and rested your head on my shoulder for 3–5 seconds. That’s all. You said you don’t remember. I do, Thabbu. I do. 🫂',
    artVariant: 'timer',
    bgVariant: 'warmWhite',
  },
  {
    id: '11',
    index: 11,
    eyebrow: 'DAILY ROUTINE',
    headline: 'THE LITTLE CHECK-INS.',
    copy: '“Saptingala?” · “Enna pandringa jii?” · “Bathrama ponga.” · “Good morninggg.” · “Sweet dreams.” · “Miss u more jii.”',
    copy2: 'Ordinary messages. Not-so-ordinary place in my day.',
    artVariant: 'checkins',
    bgVariant: 'paper',
  },
  {
    id: '12',
    index: 12,
    eyebrow: 'ARCADE',
    headline: 'TWO FULL-TIME LOOSUS.',
    copy: 'Truth or Dare. Would u rather. No-compliments task. Green flag / red flag questions. “One day full ah ooru suthanum.” Mettur Park plans. And your “better luck next time” boyfriend prank. 😂',
    microNote: '“Score: 0 - 0 (Both disqualified for cheating)”',
    artVariant: 'games',
    bgVariant: 'warmWhite',
  },
  {
    id: '13',
    index: 13,
    eyebrow: 'TRANSCRIPT',
    headline: 'OUR VERY SERIOUS NONSENSE.',
    copy: 'The legendary Nole–Matten–Ok spam. The harmless teasing. The little mood-offs. The “seri, let’s start fresh” moments. Sometimes we argue like professionals and make up like absolute loosus. 🤭',
    artVariant: 'nonsense',
    bgVariant: 'paper',
  },
  {
    id: '14',
    index: 14,
    eyebrow: 'UPGRADES',
    headline: 'YOU MADE A TUBELIGHT DO NEW THINGS.',
    copy: 'First voice notes in my life, just to explain song meanings. Sending compliments even when you banned them. Saying “I miss u” without knowing how to act normal after. 😭',
    microNote: '“Track 01 · 0:42 · Recorded for you”',
    artVariant: 'newthings',
    bgVariant: 'warmWhite',
  },
  {
    id: '15',
    index: 15,
    eyebrow: 'SANCTUARY',
    headline: 'THE WAY YOU SHOW UP.',
    copy: 'The “See na iruken epovumey” reassurance. The “Vanga inga oru hug vangikonga” message. The way you said this friendship is precious and shouldn’t be given up over misunderstandings.',
    microNote: '“Uff, you fixed me. 🫂”',
    artVariant: 'caring',
    bgVariant: 'blushTint',
  },
  {
    id: '16',
    index: 16,
    eyebrow: 'CHEMISTRY LAB · LAST BENCH',
    headline: 'DEEWANA DOLA, WRITTEN IN THE LAB.',
    copy: 'You wrote “deewana dola” on the chemistry lab last bench. You imagined a full day of meeting and roaming around. You said bus-la as you wish. Some plans are still waiting for their day. 🤭',
    microNote: '“Destination: anywhere with you.”',
    artVariant: 'bench',
    bgVariant: 'paper',
  },
  {
    id: '17',
    index: 17,
    eyebrow: 'STATIONERY FINALE',
    headline: '11:11 💗',
    myWish: '“I wanna be always with this heart.”',
    yourWish: '“Yen deewana dola vahh nalla pathukanum, avana aluga vida kudathu, so yenga Kula distance vandhuda kudathu…”',
    closing: 'So no, I’m not done with you, meri deewani dolii. Hate u soo soo sooo much, Thabbu jii! 💗🫂✨',
    copy: '',
    artVariant: 'closing',
    bgVariant: 'blushTint',
    interaction: {
      type: 'finalStamp',
      prompt: 'Hate u more jii 🤭',
      revealedText: 'Stamp: Received & sealed forever 🍅💌',
    },
  },
];
