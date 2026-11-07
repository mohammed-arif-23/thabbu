export interface StoryScreen {
  id: string;
  index: number;
  eyebrow: string;
  headline: string;
  subheadline?: string;
  punchline?: string;
  paragraphs: string[];
  quotes?: { speaker?: string; text: string }[];
  bulletPoints?: string[];
  microNote?: string;
  artVariant:
  | 'notice'
  | 'waiting'
  | 'selectiveMemory'
  | 'collegeStart'
  | 'giftThreeWeeks'
  | 'turningPointPhotos'
  | 'nicknamesTubelight'
  | 'blueShirt'
  | 'nosePin'
  | 'mirrorFragrance'
  | 'detailsNotice'
  | 'coffeePlan'
  | 'principalFiveSeconds'
  | 'gamesRules'
  | 'voiceRecording'
  | 'careIceCream'
  | 'savedLetter'
  | 'finale1111';
  bgVariant?: 'paper' | 'warmWhite' | 'blushTint';
  interaction?: {
    type: 'seal' | 'sticker' | 'waveform' | 'finalStamp';
    prompt?: string;
    revealedText?: string;
  };
}

export const storyScreens: StoryScreen[] = [
  {
    id: '01',
    index: 1,
    eyebrow: 'Hey - OFFICIAL NOTICE!',
    headline: "I'M DONE WITH YOU, TAMATARR.",
    paragraphs: [
      'Jiii.',
      '“Reply eh panla neenga pathutuu.”',
      'Your reply?',
      '“Mm okayy”',
      'Naa “Hate u” nu solliten.',
      'Apram dhaan solra:',
      '“Inga dha iruken unga v2 tu pakkathula.”',
      '😭😭😭',
      'Pakkathulaye irundhutu “Mm okayy” ah?',
      'Enna justice idhu, Thabbu?',
    ],
    punchline: "I have officially decided that I can't deal with you anymore. Podhummmm",
    artVariant: 'notice',
    bgVariant: 'paper',
    interaction: {
      type: 'seal',
      prompt: 'tap seal to break agreement',
      revealedText: 'Next page ponga →',
    },
  },
  {
    id: '02',
    index: 2,
    eyebrow: 'THE WAITING PERIOD',
    headline: 'THREE MORE DAYS. SERIOUSLY?',
    paragraphs: [
      '“Inu oru 3 days wait pannunga aprm namba nalla cl lahh pesalam ok vahh.”',
      'Seri. Wait panren.',
      'Then your explanation:',
      '“Na thunga 3 mani aagiduchi.”',
      '“Ellarum pesitu irundhanga so apdiye tym ponadhey theriyala.”',
      'And finally:',
      '“Achooo miss u more jii 🫂💗”',
      'Ippo naan enna panradhu?',
      'Kovapadanuma? Illa miss u more nu thiruppi sollanuma?',
    ],
    punchline: 'You make waiting very difficult, madam. 🤦🏻‍♂️',
    artVariant: 'waiting',
    bgVariant: 'warmWhite',
    interaction: {
      type: 'sticker',
      prompt: 'tap tomato to boop',
      revealedText: '🍅 Boop! Wait time reduced to 0.',
    },
  },
  {
    id: '03',
    index: 3,
    eyebrow: 'SELECTIVE MEMORY SYNDROME',
    headline: 'YOUR MEMORY NEEDS AN UPDATE. 😭',
    paragraphs: [
      'Question 1:',
      '“Tdy naa potutu vandha shirt clr sluu.”',
      'Your answer: “Na marandhuten 😅”',
      'Question 2: Those 5 seconds on my shoulder.',
      '“Na epo apdi panna?”',
      '“Yenaku neybagam irundha dhana marakurathuku.”',
      '“Ambulance ku cl pannata?”',
      '“Illa illa na mohan senior ku cl pandra 🤭”',
      'Question 3: Pending deliveries.',
    ],
    bulletPoints: ['Rathima video.', 'Selfie.', 'Bicep heart.'],
    microNote: 'And your defence? “Enna pandradhu vayasu aagudhu lahh.” Aiyooo pehh, naa veruthutenn.',
    punchline: 'Enna romba wait panna vekuraa 🤭',
    artVariant: 'selectiveMemory',
    bgVariant: 'paper',
  },
  {
    id: '04',
    index: 4,
    eyebrow: 'PWHERE IT ACTUALLY STARTED',
    headline: '“SENIOR INIKU CLG VARALAYA NEEENGA?”',
    paragraphs: [
      '21 September 2026.',
      'Your first message:',
      '“Senior iniku clg varalaya neenga”',
      'And then:',
      '“Class bore adikudhu adha ph pathutu iruken.”',
      'Suma class bore adikudhu nu phone paathutu irundha conversation dhaan.',
      'September 25:',
      '“Inu evlo naal clg ku varuvinga..”',
      '“Avlo sekurama vahhh..”',
      'I remember these because this was how it started.',
      'Nothing dramatic.',
      'Just you asking whether I was coming to college.',
    ],
    artVariant: 'collegeStart',
    bgVariant: 'warmWhite',
  },
  {
    id: '05',
    index: 5,
    eyebrow: 'THE GIFT YOU PLANNED THREE WEEKS EARLIER',
    headline: 'YOU HAD ALREADY THOUGHT ABOUT IT.',
    paragraphs: [
      'You told me:',
      '“Na 3 weeks ku munadiye vangi vaichiten.”',
      '“Epdi kudukanum nuhh think pannitu irundha.”',
      'You came to know from my classmates that the 7th was my last day.',
      'Then:',
      '“Adha sari request kudukalam nuhh neynacha but neenga follow back Pannuvinga nuhh expect pannala.”',
      'And when I asked whether you would have given the gift even if we weren’t talking properly, you said:',
      '“Illa apovum kuduthurupen.”',
      'This part stayed with me.',
      'You had already bought it. Already thought about how to give it.',
      'I was only finding out about it later.',
    ],
    punchline: 'Three weeks, Thabbu. You were planning it three weeks before. 🥹',
    artVariant: 'giftThreeWeeks',
    bgVariant: 'paper',
  },
  {
    id: '06',
    index: 6,
    eyebrow: 'THE MOMENT EVERYTHING CHANGED',
    headline: 'Hehehehhehehheheeee',
    paragraphs: [
      'You had already bought that gift three weeks before.',
      'Already thought about how to give it, even if we were not on speaking terms.',
      'That was the exact moment everything shifted.',
      'So tell me, Thabbu jii...',
    ],
    punchline: 'Enna aanaalum unna vittu porathilla, madam. 💗',
    microNote: '“Forever certified best friends.”',
    artVariant: 'turningPointPhotos',
    bgVariant: 'blushTint',
  },
  {
    id: '07',
    index: 7,
    eyebrow: 'THE NICKNAMES GOT OUT OF HAND',
    headline: 'TUBELIGHT × TAMATAR 🍅',
    paragraphs: [
      'You started calling me:',
      '“Tubelight.”',
      'And on October 3, you officially set my nickname to:',
      '“Tubelight yaar 😁”',
      'My contribution?',
      '“Moti tamatarrr 🍅”',
      'Then came: “Bamboobear 👀”',
      'And on October 16, I officially changed your nickname to: “Bamboo-bear 💗”',
      'Now look at us.',
      '“Gud mrng tubelight.” · “Gud nyt bamboobear.”',
      '“Hate u tamatarr.” · “Hate u tooo tubelight.”',
    ],
    punchline: 'At this point, even our names are confused. 😂',
    artVariant: 'nicknamesTubelight',
    bgVariant: 'warmWhite',
  },
  {
    id: '08',
    index: 8,
    eyebrow: 'BLUE SHIRT LA BULB',
    headline: "I DIDN'T EXPECT YOU TO NOTE THIS.",
    paragraphs: [
      'During Truth or Dare, I asked:',
      '“Tell me one random thing, that I did as an idiot but it stays all in ur mind. And u never said to me.”',
      'You remembered the blue colour shirt.',
      'Your explanation:',
      '“Oru tym neenga blue colour gen shirt pottu clg ku vandhurundhinga...”',
      'You even remembered Indhu mam asking me why I wore that shirt, how I kept explaining while she wasn’t listening, and how she finally just said okay.',
      'Then you added: “Apo ponnunga ellam pathu sirichanga that’s why I remembered that.”',
      'And this: “Ana andha shirt ungaluku romba nalla irundhuchi aniku neenga class lahh irukumodhu ungala dha pathutey irundha cute ahh irundhinga apo.”',
      'Thabbu...',
    ],
    punchline: 'You noticed that too? 🤭',
    artVariant: 'blueShirt',
    bgVariant: 'paper',
  },
  {
    id: '09',
    index: 9,
    eyebrow: 'YOUR NOSE PIN',
    headline: 'MY FIRST COMPLIMENT. ACCORDING TO YOU. 😭',
    paragraphs: [
      'October 2.',
      'I asked: “Nosepin podura laa. Antha idea unaku epdi vandhuchu”',
      'You explained how your Patti took you and got it pierced.',
      'I said: “Take it as a compliment 👀”',
      'And your reply:',
      '“Ahhh apahh first tym unga kitta irundhu oru compliment 😌”',
      'HAHAHA.',
      'One compliment and you immediately noticed that it was my first.',
    ],
    artVariant: 'nosePin',
    bgVariant: 'warmWhite',
  },
  {
    id: '10',
    index: 10,
    eyebrow: '7 ARTS. THE SIDE MIRROR EEEEEE. YOUR FRAGRANCE. HEHHEHE',
    headline: 'I HAVE ACTUAL REASONS FOR REMEMBERING THAT RIDE.',
    paragraphs: [
      'I wrote this to you the next morning:',
      '“Nee 7 arts ta vandha odane, literally ur fragrance enna thookiduchu.”',
      'When I rode in front:',
      '“Ur cutu little reactions ah side mirror la papen.”',
      'When you rode in front:',
      '“Ur cutu little reactions (un side mirror la perfect ah un face therinjidhu) and ur fragrance.”',
      'And after dropping you, I went to the hospital and returned home. I told you:',
      '“I was smiling, driving in speed of 20-30, recalling everything.”',
      'You replied: “Loosu aagitinga pola 😂”',
      'I even told you how many times I smelled my shirt shoulder because your fragrance was still there.',
      'Your reaction? “Ada looseyyyy 😂”',
    ],
    punchline: 'Yes, madam. Loosu aakiten pola. 🤭',
    artVariant: 'mirrorFragrance',
    bgVariant: 'paper',
  },
  {
    id: '11',
    index: 11,
    eyebrow: 'I NOTICED THESE TOO.',
    headline: "THE LITTLE THINGS YOU DON'T EVEN REALISE.",
    paragraphs: [
      'I actually sent you this whole list after meeting you.',
      'Your cheeks: “Never pinched a cheeks of girl, and I’m proud that i first pinched urs.”',
      'Those tiny dots and the mole below your eye: “Antha small dots and mole below ur eye, aiyee I stare at it for hours.”',
      'Your eyelashes: “Your eye lashes are most attaching me yaar.”',
      'Your smile: “Pallu theriraa mari sirichita na literally I’m out of control.”',
      'And that little nose expression: “Un nose ah nee oru mari epavume veppiye, literally I can’t explain it 🤣”',
      'I sent all of this in one go. And you?',
      '“Aiyooooo evlo compliments 🤭🫠”',
      '“Yaar neenga evlo note pannuvinga nuhh neynaichi kuda pakkala 🫢”',
      '“Mothama kottitinga jii 🫣”',
    ],
    punchline: 'Yes. I notice. A lot. Because I think it is worthy to stare and admire you.',
    artVariant: 'detailsNotice',
    bgVariant: 'warmWhite',
  },
  {
    id: '12',
    index: 12,
    eyebrow: 'THE COFFEE PLAN',
    headline: '“EEEE Plan pannama entered into Sera Cafe”',
    paragraphs: [
      'Anga the most unforgettable. The same coffee. After you drank from it, I drank from the same cup.',
      'I even told you the next morning:',
      'Something too magical, Its me craving for that coffee u drank jii',
      '“My reason for drinking slow is bcoz of u 🤗🤭”',
      '“Ur taste makes it a PRECIOUS coffee ever i drink.”',
      'Yosichi paru. I could explain everything in detail, but when it came to this coffee, I literally said: “I can’t describe this in words viduuu.”',
    ],
    punchline: 'That coffee. That’s the whole memory. ☕💗',
    artVariant: 'coffeePlan',
    bgVariant: 'paper',
  },
  {
    id: '13',
    index: 13,
    eyebrow: 'THE PRINCIPAL’S CALL JIII',
    headline: 'ALSO THE PART YOU SAY YOU DON’T REMEMBER.',
    paragraphs: [
      'That principal’s call. We were sitting so close.',
      'I was anxious, and neee olara vechitta. I wrote in chat jii:',
      '“U made me madly anxious, never a girl I have been this much close with her 😭”',
      'Then there was the hand-holding:',
      '“Haann ennala un kaiya vida ve mudiyalaa. They literally made me forget all my problems.”',
      '"And suddenly antha 5 seconds, you slept on my shoulder, I’m dead and blessed at same time jii. En heart ah stop pannitinga thabbuu"',
      'And after coffee, when we were sitting simply... You held my hand with both your hands and rested your head on my shoulder. Just about 5 seconds.',
      'I told you: “En kanla thanniye vandhurum happiness la. Ivlo happy ya irundhu months aiduchu thabbuu jii 💗✨”',
    ],
    punchline: 'You may not remember those seconds. I do.',
    artVariant: 'principalFiveSeconds',
    bgVariant: 'blushTint',
  },
  {
    id: '14',
    index: 14,
    eyebrow: 'OUR GAMES. OUR RULES. OUR LOOSU MOMENTS.',
    headline: 'TRUTH OR DARE WAS NEVER JUST ONE ROUND. 🤭',
    paragraphs: [
      '“Truth or dare velayadalama?”',
      'Your response: “Mm ok velayadalam.”',
      'Then I asked who should start. You: “Periyavanga neenga apo neenga dha first start pannanum.” CHEATING. 😂',
      'Some questions I still remember:',
      '“Have u ever lied to me? If yes, tell me the last one 😂”',
      'And your question to me: “Neenga yenkitta sollanum nuhh neynachi sollama irundhurukingala”',
      'We played Truth or Dare on multiple nights. Then the accidental keyboard spam: “Nope” ↔ “Matten” ↔ endless “Ok Ok Ok Ok”.',
      'You: “Idhuku ethana ok”',
      'And our little arguments, teasing, mood-offs and the way we’d eventually start talking normally again.',
    ],
    punchline: 'Rendu perum sometimes semma loosu dhaan. 🤦🏻‍♂️😂',
    artVariant: 'gamesRules',
    bgVariant: 'warmWhite',
  },
  {
    id: '15',
    index: 15,
    eyebrow: 'YOUR FIRST VOICE RECORDING',
    headline: '“IT’S BEEN A YEAR...”',
    paragraphs: [
      'October 12.',
      'You sent an audio. Then wrote:',
      '“It’s been a year... and this is my very first voice recording 😁”',
      'I replied: “You made my day. Romba nalla irukkuu. Soo cute.”',
      'Seriously sometimes, I hear it which makes me feel too gud jii'
    ],
    punchline: 'One little audio from you. Is Enough to make me fall for u!',
    artVariant: 'voiceRecording',
    bgVariant: 'paper',
    interaction: {
      type: 'waveform',
      prompt: 'play memo',
    },
  },
  {
    id: '16',
    index: 16,
    eyebrow: 'THE LITTLE WAYS WE LOOKED AFTER EACH OTHER',
    headline: 'NOT EVERY MEMORY NEEDS A SPECIAL DAY.',
    paragraphs: [
      'Your regular messages:',
      '“Saptingala?” · “Enna pandringa jii” · “Free ahh irundha aprm cl pannunga na Suma dha irupen.” · “Edha pathiyum yosichitu thungama irukadhinga.”',
      'And when you saw me sad:',
      '“Achoo sari vanga oru hug vangikonga 🫂” · “Vanga vanga 🤗🤗” · “Neenga sad ahh irukuradha yenaku pakka pudikala. Adhuku dhana frnd nuhh na iruken kuda 🫂”',
      'Then my ice cream line: “Neraya ice cream nee saptu enna Mooka thodaika vei, sad aayi kanna thodaika vekkatha 🤭”',
      'And: “My shoulders and shirt is always available for it 😊” You replied: “Wow 🤌🏻💗🫶🏻🫂”',
      'And you said several times, Enaku ooti vidura nu, but it is still a dream for me jii.',

    ],
    punchline: 'See? These are the things I remember.',
    artVariant: 'careIceCream',
    bgVariant: 'warmWhite',
  },
  {
    id: '17',
    index: 17,
    eyebrow: 'YOUR MESSAGE. I SAVED EVERY WORD MERI YAAR.',
    headline: 'DEAR ARIF JII nu start panna💗🫂',
    paragraphs: [
      'Mudikkum bodhu enna konnutta jii nee',
      'You once sent me that long message. Some lines deserve their own page.',
      '“You’re one of the most special people in my life.”',
      '“Sometimes neenga solra chinna compliments kooda en face la smile vara vechurum.”',
      '“I don’t think you realise how much happiness you give me through these little things.”',
      '“I will never replace you no matter what happens. Your place in my life is different and nobody can be you.”',
      '“I love being your friend I love teasing you I love our conversations and I love the comfort I feel when I talk to you.”',
      '“I love you as my friend, as my favourite person, and as someone whose happiness genuinely matters to me.”',
      'Thabbu... I read all of it. I remember how I reacted. I remember the happiest tears.',
      'And I remember telling you: “I’m being as me, bcoz it’s a new me when I meet this silly tomato yarr 😭🫂”',
    ],
    artVariant: 'savedLetter',
    bgVariant: 'blushTint',
  },
  {
    id: '18',
    index: 18,
    eyebrow: '11:11 💗',
    headline: 'TWO WISHES. ONE LITTLE CODE.',
    paragraphs: [
      'November 5. You sent: “11:11💗”',
      'My wish: “I wanna be always with this heart.”',
      'Your wish: “Yen deewana dola vahh nalla pathukanum avana aluga vida kudathu so yenga Kula distance vandhuda kudathu nuhh wish panna....”',
      'And you told me something else. You had written “Deewana Dola” on the last bench in your chemistry lab. 🤭',
      'I don’t know how many more nicknames, games, silly fights, random calls, coffee plans and “Saptingala?” messages we still have left. But I know I don’t want to forget these.',
      'So, Thabbu... This was supposed to be a breakup letter. I tried listing your mistakes for three whole pages. But I ended up writing 15 more pages about why I remember you.',
    ],
    punchline: 'HATE U SOO SOO SOOO MUCH, THABBU JII! 💗🫂 You are not an ideal Yaar, You are always MERI PYAARI YAAR!',
    microNote: 'And you know what you’re supposed to say.',
    artVariant: 'finale1111',
    bgVariant: 'paper',
    interaction: {
      type: 'finalStamp',
      prompt: '🤭 No chance for breakup!',
      revealedText: '“Hate u more jii” · Received & sealed forever 🍅💌',
    },
  },
];
