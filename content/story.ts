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
  isUncounted?: boolean;
  artVariant:
  | 'notice'
  | 'waiting'
  | 'missedCalls'
  | 'dryReplies'
  | 'selectiveMemory'
  | 'shoulderDenial'
  | 'pendingDeliveries'
  | 'secretThoughts'
  | 'whiteHeartMystery'
  | 'noComplimentsTrap'
  | 'jealousyTrials'
  | 'stubbornPills'
  | 'twentyDaysAway'
  | 'unromanticRedFlag'
  | 'plotTwistSwitch'
  | 'moonPolaroids'
  | 'collegeStart'
  | 'giftThreeWeeks'
  | 'possessiveRules'
  | 'nicknamesTubelight'
  | 'blueShirt'
  | 'nosePin'
  | 'mirrorFragrance'
  | 'detailsNotice'
  | 'twoSmiles'
  | 'coffeePlan'
  | 'principalFiveSeconds'
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
  // ============================================================================
  // PART 1: PAGES 01–14 — THE COMPLAINTS, DISAPPOINTMENTS & "BREAKUP" CASE
  // (DARK, SAD, RAINY, ANGRY THEME)
  // ============================================================================
  {
    id: '01',
    index: 1,
    eyebrow: 'HEY - OFFICIAL NOTICE!',
    headline: "I'M DONE WITH YOU, TAMATARR.",
    paragraphs: [
      'Jiii.',
      '“Reply eh panla neenga pathutuu.”',
      'Your reply?',
      '“Mm okayy”',
      'Naa kadupagi “Hate u” nu solliten.',
      'Kandukave mata, Naa ketuta',
      '“Na ketutaa nee odane casually summa nu react panra”',
      'Nejama you are giving too dry replies. 😭😭😭',
      'Oru msg potutu 5-10mins or hours kanakula disappeared.',
      'Enna justice idhu, Thabbu?',
    ],
    punchline: "Munna nee ipdi ila, So I have officially decided that I can't deal with you anymore. Podhummmm.",
    artVariant: 'notice',
    bgVariant: 'paper',
    interaction: {
      type: 'seal',
      prompt: 'tap seal to read the charges',
      revealedText: '13 more complaints loading →',
    },
  },
  {
    id: '02',
    index: 2,
    eyebrow: 'COMPLAINT #01 · THE WAITING PERIOD',
    headline: 'Nee pesave matengira seriya',
    paragraphs: [
      'Promise ah nee romba change aita. Honestly thabbu. I felt it alot.',
      'But epavume Seri. Na Wait panren.',
      'Night proper ah gud night kuda sollala, keta naa semma mood off la thoongiten jii nu solra.',
      'Morning vandhu ketta your explanation:',
      '“Na thunga 3 mani aagiduchi.”',
      '“Ellarum pesitu irundhanga so apdiye tym ponadhey theriyala.”',
      'Achoo avlo neram ellarum kuda pesitu, last la enakku oru:',
      '“Achooo miss u more jii 🫂💗”',
      'Ippo naan enna panradhu? Kovapadanuma illa uruganuma?',
    ],
    punchline: 'You make waiting very difficult, madam. 🤦🏻‍♂️',
    artVariant: 'waiting',
    bgVariant: 'warmWhite',
    interaction: {
      type: 'sticker',
      prompt: 'tap tomato to boop',
      revealedText: '🍅 Boop! Still mad at you though.',
    },
  },
  {
    id: '03',
    index: 3,
    eyebrow: 'COMPLAINT #02 · VANISHING ACTS',
    headline: 'WAITING ALL DAY FOR ONE SINGLE TEXT.',
    paragraphs: [
      '“Nethu night la irundhu nee pesama irundhathu en mind ku oru mari irundhuchu, athaan tdy call pannite irundhen.”',
      'Naa pesite irupen and nee call cut pannitu: “Nani vantanga jii, adha cut panniten..., etachu reasons solite iruka”',
      'Aana nee matum “Cl panna eduka mattingala jii” nu keppa!',
      'Aniku full ah unga kita irundhu oru msg kuda vandhuratha nu wait panitu irundhen jii.',
      'And your casual excuse after disappearing?',
      '“Na veliya poiten illana cl pesirupen.”',
    ],
    punchline: 'Enakku mattum epdi dhaan ipdi wait panna vekkuriyo. 😭',
    artVariant: 'missedCalls',
    bgVariant: 'paper',
  },
  {
    id: '04',
    index: 4,
    eyebrow: 'COMPLAINT #03 · DRY REPLIES & STONE HEART',
    headline: 'IS THIS EVEN THABBU TALKING TO ME?',
    paragraphs: [
      'Sometimes instantly maaridura.',
      '“Mmm.” · “Hmm.” · “Nope.” · “Illaye.” · “Mm sari.”',
      '“Nee epayum pola pesala... Enaku ennamo enta pesurathu thabbu ahh nu doubt ah iruku.”',
      '“Mood off! I’m right? Unaku ipo ethachu aiduchu thane?”',
      'Keta mattum: “Illa jii na epovum pola dha iruken.”',
      '“Nee kuda strong hearted mari iruppa 🤭 ennala mudila.. enakku neraya naa una disturb paniten mari feel.”',
    ],
    punchline: 'Enaku oru mari iruku neenga ipdi dry ah pesurathe jii. 😒',
    artVariant: 'dryReplies',
    bgVariant: 'warmWhite',
  },
  {
    id: '05',
    index: 5,
    eyebrow: 'COMPLAINT #04 · SELECTIVE MEMORY PART 1',
    headline: 'YOU FORGOT MY SHIRT COLOUR THE SAME DAY. 😭',
    paragraphs: [
      'Just hours after we met, I asked one simple question:',
      '“Heyy tdy naa potutu vandha shirt clr sluu.”',
      'Your immediate answer?',
      '“Na marandhuten 😅”',
      'Nejama?! And when I called you out:',
      '“Pehh u will always forget.”',
      'Your legendary defence:',
      '“Enna pandradhu vayasu aagudhu lahh 😁😅”',
    ],
    microNote: 'Epdi mari enakku puriyave ila',
    punchline: 'Kelavi mari pesitu shirt colour ah marandhuta la! 🤦🏻‍♂️',
    artVariant: 'selectiveMemory',
    bgVariant: 'paper',
  },
  {
    id: '06',
    index: 6,
    eyebrow: 'COMPLAINT #05 · SELECTIVE MEMORY PART 2',
    headline: 'PRETENDING THOSE 5 SECONDS NEVER HAPPENED.',
    paragraphs: [
      'After coffee, nee en hand ah unoda two hands la hold panni, en shoulder la paduthuta. About 5 seconds.',
      'Night adha pathi ketta, full acting:',
      '“Na epo apdi panna?”',
      '“Na padukavey illa. Na neenga pesura cl dha kettutu irundha.”',
      '“Yenaku neybagam irundha dhana marakurathuku.”',
      'And when I said my heartbeat literally stopped:',
      '“Ambulance ku cl pannata?”',
      '“Illa illa na mohan senior ku cl pandra 🤭”',
    ],
    punchline: 'En usura poga vechitu, madam ku nyabagam kuda illayam! 😭',
    artVariant: 'shoulderDenial',
    bgVariant: 'warmWhite',
  },
  {
    id: '07',
    index: 7,
    eyebrow: 'COMPLAINT #06 · BROKEN PROMISES',
    headline: 'STILL WAITING FOR MY PENDING DELIVERIES.',
    paragraphs: [
      'Fairlands poitu vandhu neeye sonna:',
      '“Nanga Suma oru video eduthom na dha pesuna adha pakuringala nalla irukadhu paravalaya.”',
      'Naa உடனே சொன்னேன்: “Nee nalla irukathu nu lam solatha. Enmela unaku pasam irundha Enakku nee Idhu lam kekama anupanum!”',
      'And look at the pending list till today:',
      '“Ik, athaan nee inu rathima anupala... Selfie anupala, and bicep heart anupala.”',
    ],
    bulletPoints: [
      'Rathima video — Pending.',
      'Proper Selfie — Pending.',
      'Fit checks - Pending',
      'Bicep Heart — Pending.',
    ],
    punchline: 'Aasaya nee nalla iruka nu thane kekuren...🤨',
    artVariant: 'pendingDeliveries',
    bgVariant: 'paper',
  },
  {
    id: '08',
    index: 8,
    eyebrow: 'COMPLAINT #07 · CLIFFHANGERS & SECRETS',
    headline: '“CL LAHH SOLLUREN” — AND THEN NEVER TELLING.',
    paragraphs: [
      'Every time something is running in your mind:',
      '“Iruku na cl lahh solluren.”',
      'Naa “Paravala ji short ah slunga, enaku oru mari iruku” nu kenjina:',
      '“Mudiyadhu.”',
      'Practicals apo kuda mandaila edho oditu irundhuchi nu solluva, aana enna nu matum solla matta.',
      '“Naa en problem solren la, namma sendhu thane discuss panrom. Pathiya nee matum maraikuraa!”',
    ],
    punchline: 'Ipdi suspense vechi enna saavadika enna tha sandhoshamohh! 😤',
    artVariant: 'secretThoughts',
    bgVariant: 'warmWhite',
  },
  {
    id: '09',
    index: 9,
    eyebrow: 'COMPLAINT #08 · THE WHITE HEART MYSTERY',
    headline: 'WHO IS THAT WHITE HEART IN YOUR NAME? 👀',
    paragraphs: [
      'Your display name: “thabu 🤍”',
      'I asked you point-blank:',
      '“Someone is ur white heart 👀”',
      '“Yeahh ik, nee maraikura, who is thatt jii?”',
      '“Keta ethuvum illa nu solluva. But white heart always 👀 Something phishy.”',
      'And your reply every single time?',
      '“Maraika ellam onu illa jii neenga vera 🫂”',
      'But yaro irukanga, always too picked lines of notes.'
    ],
    punchline: 'Onnum illa na aprm edhuku antha white heart anga ukandhuruku?! 👀',
    artVariant: 'whiteHeartMystery',
    bgVariant: 'paper',
  },
  {
    id: '10',
    index: 10,
    eyebrow: 'COMPLAINT #09 · CRUEL PUNISHMENTS',
    headline: 'BANNING ME FROM GIVING COMPLIMENTS. 🫡',
    paragraphs: [
      'One fine day, madam decided to torture me:',
      '“No compliments!”',
      'And why did you even start that task?',
      '“Suma ungala verupu yetha sona adha neenga vena nuhh solluvinga nuhh neynaicha.”',
      '“Tdy evlo control ah irundhen nu theriyumaa?”',
      'Even at night, when my mouth was leading to a compliment, you extended the ban to the next day: “Sari apo onu pannalam nalaiku indha countinue pannalam.”',
      '“Seriously is there any limitations for emojis also tmrw? 😭”',
    ],
    punchline: 'Unna paathutu epdi compliment pannama vaaya mooditu irukkuradhu?! 🫠',
    artVariant: 'noComplimentsTrap',
    bgVariant: 'warmWhite',
  },
  {
    id: '11',
    index: 11,
    eyebrow: 'COMPLAINT #10 · JEALOUSY & DOUBLE STANDARDS',
    headline: 'ARUL FROM CHENNAI & “ANNA VAH ANNA NU DHANA SOLLUVANGA”.',
    paragraphs: [
      'Morning coffee kudichitu casual ah бом போடுற:',
      '“Aprm yen frnd arul Chennai lahh irundhu vandhurukan Avan kuda veliya ponum.”',
      'Keta “Yen frnd oda frnd uhh” nu solra!',
      '“Athuku neenga epdi mam avan kuda povinga? Unga frd thane ponum 🫣”',
      'Adhu mattum illama, Rahima enna “bhaiya” nu sollita nu sonna, mock panra:',
      '“Anna vahh anna nu dhana solluvanga! Haahaaa”',
      'Aana naa summa “Naanum committed aagalam nu nenache” nu sonna matum odane: “Yaru kuda? Ava kudaya? 🧐”',
    ],
    punchline: 'Unaku vandha thakkali chutney, enakku vandha rathammahh ah madam? 😂',
    artVariant: 'jealousyTrials',
    bgVariant: 'paper',
  },
  {
    id: '12',
    index: 12,
    eyebrow: 'COMPLAINT #11 · ZERO LISTENING SKILLS',
    headline: 'SLEEPING PILLS, SKIPPING DINNER & SAYING “SRY”.',
    paragraphs: [
      'Night saptingala nu keta: “Illa yenaku sapdavey thonala.”',
      'Sleeping tablet pic kaatu na:',
      '“Theriyameyy.” · “Mudiyadheyy.” · “Adhu onu illa vidunga.”',
      'Daily 3 pills, 2 pills nu podura, PCOS pills vera!',
      'Adhuku mela, late reply pannitu forbidden word use panra:',
      '“Inga amma ph pesitu irukanga adha fast ahh reply panna mudiyala jii sry.”',
      '“Heyy konruven una again sry use pannina!”',
    ],
    punchline: 'Oru pechu kuda kekkuradhu illa! 😤',
    artVariant: 'stubbornPills',
    bgVariant: 'warmWhite',
  },
  {
    id: '13',
    index: 13,
    eyebrow: 'COMPLAINT #12 · SUDDEN DISAPPEARANCES',
    headline: 'Again solren, Nee maaritaa',
    paragraphs: [
      'Munna laam, daily nalla pesuva, calls panuva and enakkum time kuduppa',
      'Epdi neeye un frds kuda irundhalum text or call panuva',
      '"Un wife ta kuda pesama enta pesuva"',
      'Enamo thabbu lost interest mari irukku',
      'Namma chat paathale sad ah iruku theriyuma.',
      'Main ahh "Oru reel aasaya anupuna, react panitu vitudura, convo kaga thane anupuren.."'
    ],
    punchline: 'Ellathulayum enna bulb vaanga vekkuradhe unaku velaya pochu! 💡😭',
    artVariant: 'twentyDaysAway',
    bgVariant: 'paper',
  },
  {
    id: '14',
    index: 14,
    eyebrow: 'COMPLAINT #13 · THE FINAL STRAW',
    headline: 'Last ah solren',
    paragraphs: [
      'Naa evlo neram heart ah open panni pesinalum, sometimes you hold back:',
      '“Onu sollanum... Ipo vena. Theriyala.”',
      '“Yenaku onum sollurathuku illaye 🤷🏻‍♀️🤐”',
      '“Avlothaanaa??” nu naa enna ketalum nee solla matengira',
      'Unmaiya sollanum na, enakku bayam munna vandhuruchu: “Incase any issue, or anything else la namma pesama poitom na epdi irukum nu...”',
      'But ipo its like happening.'
    ],
    punchline: 'So yes. 15 pages of proof. I am officially done with you, Tamatarr.',
    artVariant: 'unromanticRedFlag',
    bgVariant: 'warmWhite',
    interaction: {
      type: 'seal',
      prompt: 'tap to sign breakup papers',
      revealedText: 'ERROR 404: Breakup impossible. Flip page →',
    },
  },

  // ============================================================================
  // PART 2: PAGE 15 — THE THEME SWITCH / PLOT TWIST
  // (THE TURNING POINT: BREAKUP? VAAIPE ILA PO!)
  // ============================================================================
  {
    id: '15',
    index: 15,
    eyebrow: 'WAIT A SECOND...!',
    headline: 'HAHA, U THINK I CAN LEAVE YOU?!',
    paragraphs: [
      'Unna vittu poga mudiyuma ennala?',
      '15 pages ah complaint eludhinaalum, Enala una vida mudila.',
      '“If the thing is about u, naa ethuvume marakka maten doli.”',
      '"Im writing this with tears, happy and sad both. Konjoo inum irukku ketutu po.”',
    ],
    punchline: 'Enna aanaalum unna vittu kuduka maten, madam.💖✨',
    artVariant: 'plotTwistSwitch',
    bgVariant: 'blushTint',
    interaction: {
      type: 'sticker',
      prompt: 'tap to unlock the real book 💗',
      revealedText: '💗 Heyy Channduuu!',
    },
  },

  // ============================================================================
  // UNCOUNTED SPECIAL SCREEN — THE MOON & 4 POLAROIDS (AFTER ACCEPTANCE)
  // ============================================================================
  {
    id: 'moon',
    index: 15.5,
    isUncounted: true,
    eyebrow: 'A SPECIAL SECRET FOR YOU',
    headline: 'See, This is the moon!',
    paragraphs: [
      'You know, and I Know I did right!',
      'Moon oda pics la therira dark craters mari than un face moles nu compare pannathu🥹💗',
    ],
    punchline: 'Always my favourite moon, Thabbu. 🌙✨',
    artVariant: 'moonPolaroids',
    bgVariant: 'warmWhite',
  },

  // ============================================================================
  // PART 3: PAGES 16–30 — EVERY SWEET MEMORY, UNLIMITED LOVE & BEST FRIENDS
  // (WARM, ROMANTIC, GLOWING LIGHT THEME)
  // ============================================================================
  {
    id: '16',
    index: 16,
    eyebrow: 'WHERE IT ACTUALLY STARTED',
    headline: '“SENIOR INIKU CLG VARALAYA NEEENGA?”',
    paragraphs: [
      '21 September 2026.',
      'Your very first message:',
      '“Senior iniku clg varalaya neenga”',
      'And then:',
      '“Class bore adikudhu adha ph pathutu iruken.”',
      'Suma class bore adikudhu nu phone paathutu irundha சாதாரண conversation dhaan.',
      'Then on September 25:',
      '“Inu evlo naal clg ku varuvinga.. Avlo sekurama vahhh..”',
      'Nothing dramatic. Just you asking whether I was coming to college.',
      'And today: “U made me realize that the best decision is accepting ur insta request 😭 making unforgettable moments in my life.”',
    ],
    punchline: 'One random bored text changed my whole year. 🥹',
    artVariant: 'collegeStart',
    bgVariant: 'warmWhite',
  },
  {
    id: '17',
    index: 17,
    eyebrow: 'THE GIFT YOU PLANNED THREE WEEKS EARLIER',
    headline: 'YOU HAD ALREADY THOUGHT ABOUT IT.',
    paragraphs: [
      'You told me:',
      '“Na 3 weeks ku munadiye vangi vaichiten. Epdi kudukanum nuhh think pannitu irundha.”',
      'You came to know from my classmates that the 7th was my last day.',
      '“Adha sari request kudukalam nuhh neynacha but neenga follow back Pannuvinga nuhh expect pannala.”',
      'And when I asked whether you would have given the gift even if we weren’t talking properly, you said:',
      '“Illa apovum kuduthurupen.”',
      'This part stayed with me forever. You had already bought it and planned it before I even knew.',
    ],
    punchline: 'Three weeks, Thabbu. You were planning it three weeks before. 🥹💗',
    artVariant: 'giftThreeWeeks',
    bgVariant: 'paper',
  },
  {
    id: '18',
    index: 18,
    eyebrow: 'YOUR LOWKEY POSSESSIVENESS',
    headline: '“YARU KUDA? AVA KUDAYA?” 🧐',
    paragraphs: [
      'Velila cool ah “Anna vahh anna nu dhana solluvanga” nu sirichitu, oru “🧐” emoji poduva.',
      'Aana naa summa “Naanum committed aagalam nu nenache” nu sonna next second eh:',
      '“Yaru kuda Ava kudaya” nu udane investigation start aagidum!',
      'Naa “Ila ilaa summa sonen 😂” nu sonna aprm dhaan madam calm aava.',
      'Un wife kuda possessive.',
      '“Mainly U got possessive, but nee katika matengira.. konjoma kaatura.”',
      'I didnt remember all things you got, but i remember ur reactions ji, when u confess.'
    ],
    punchline: 'Velila kaatikama irundhalum, antha cute possessiveness ellame enaku theriyum madam! 🤭💗',
    artVariant: 'possessiveRules',
    bgVariant: 'warmWhite',
  },
  {
    id: '19',
    index: 19,
    eyebrow: 'THE NICKNAMES GOT OUT OF HAND',
    headline: 'TUBELIGHT × TAMATAR × BAMBOOBEAR 🍅🐼',
    paragraphs: [
      'On October 3, you set my nickname: “Tubelight yaar 😁”',
      'And in return: “Moti tamatarrr 🍅” · “Bamboobear 🐼” · “Meri teddy 🧸”',
      'Our signature code every night:',
      '“Hate u soo muchh jiii 🫂💗” ↔ “Hate u more jii 💗🫂”',
    ],
    punchline: 'At this point, even our real names feel like strangers. 😂💗',
    artVariant: 'nicknamesTubelight',
    bgVariant: 'paper',
  },
  {
    id: '20',
    index: 20,
    eyebrow: 'BLUE SHIRT LA BULB',
    headline: "I DIDN'T EXPECT YOU TO NOTICE ME LIKE THAT.",
    paragraphs: [
      'During Truth or Dare, I asked:',
      '“Tell me one random thing, that I did as an idiot but it stays all in ur mind. And u never said to me.”',
      'You remembered the blue colour gen shirt I wore to college.',
      'You even remembered Indhu mam asking me why I wore that shirt, how I kept explaining while she wasn’t listening, and how all the girls laughed.',
      'And then you dropped the line that made my heart skip:',
      '“Ana andha shirt ungaluku romba nalla irundhuchi aniku neenga class lahh irukumodhu ungala dha pathutey irundha cute ahh irundhinga apo.” nee sonna, but really how much happy i got nu enakku tha theriyum jii.',
    ],
    punchline: 'Class la irukumbodhu enna dhaan paathute irundhiya, Thabbu? 🤭💗',
    artVariant: 'blueShirt',
    bgVariant: 'warmWhite',
  },
  {
    id: '21',
    index: 21,
    eyebrow: 'OCTOBER 2 · YOUR NOSE PIN',
    headline: 'MY FIRST COMPLIMENT. ACCORDING TO YOU. 😭',
    paragraphs: [
      'I asked you casually:',
      '“Nosepin podura laa. Antha idea unaku epdi vandhuchu?”',
      'You explained how "yen Patti yena yemathi kuttitu poi kuthi vittanga yaar 🥲"',
      'I said: “Take it as a compliment 👀”',
      'And your reply:',
      '“Ahhh apahh first tym unga kitta irundhu oru compliment 😌”',
      'Back then, one tiny compliment was a rare event. Little did you know that soon I wouldn’t be able to stop complimenting you even if you banned me.',
    ],
    punchline: 'From 1st compliment to 1000+ compliments real quick. ✨',
    artVariant: 'nosePin',
    bgVariant: 'paper',
  },
  {
    id: '22',
    index: 22,
    eyebrow: '7 ARTS · THE SIDE MIRROR · YOUR FRAGRANCE',
    headline: 'DRIVING AT 20–30 KM/H JUST SMILING LIKE A LOOSU.',
    paragraphs: [
      '“Yesterday evening is the best thing ever happened in my life meri yaar ✨😮💨.”',
      '“1. Nee 7 arts ta vandha odane, literally ur fragrance enna thookiduchu.. vandila nee munadi pora, Enakku pinnadi un fragrance smell ilukkudhu.”',
      '“2. Naa munnadi pona, Ur cutu little reactions ah side mirror la papen. Nee munnadi pona 2 things advantage: Ur cutu little reactions (un side mirror la perfect ah un face therinjidhu) and ur fragrance.”',
      'After dropping you at home, driving to the hospital and back home: “I was smiling, driving in speed of 20-30, recalling everything.”',
      '“I smell ur fragrance in my shirt.. naa enoda shoulder kita ethana time smell pani pathe theriyuma 🤭”',
      'Your reaction? “Loosu aagitinga pola 😂 Ada looseyyyy!”',
    ],
    punchline: 'Loosu aakiten pola nu kelu, Thabbu! 🤭💗',
    artVariant: 'mirrorFragrance',
    bgVariant: 'warmWhite',
  },
  {
    id: '23',
    index: 23,
    eyebrow: 'EVERY MICRO-DETAIL I ADMIRE',
    headline: 'THE LITTLE THINGS THAT MADE ME FALL FOR YOU.',
    paragraphs: [
      '“Primarily, ur cheeks. Pinching it makes me fall for u 🤭 never pinched a cheeks of girl, and I’m proud that i first pinched urs. Too soft badly u started cravings for me to do it again.”',
      'And when you pinched mine back: “Haa neenga panningala adha nanum panna.”, my breathe stopped in happieness.',
      '“Ur skin texture is so Prettiest and beautiful, and antha small dots and mole below ur eye, aiyee I stare at it for hours.”',
      '“Your eye lashes are most attaching me yaar.”',
      '“Un nose ah nee oru mari epavume veppiye, literally I can’t explain it 🤣 but adorable and never able to stop looking that cuteness. 🫢”',
    ],
    punchline: 'Every single detail on your face is worth staring at for hours. ✨',
    artVariant: 'detailsNotice',
    bgVariant: 'blushTint',
  },
  {
    id: '24',
    index: 24,
    eyebrow: 'HOW YOU MAKE ME SPEECHLESS',
    headline: 'YOUR TWO SMILES & SITTING NEXT TO A PRINCESS.',
    paragraphs: [
      'You asked me why I suddenly went quiet around you (“En vaayaa mudikita?”). Here is the truth:',
      '“The way u look at me, stare at me.. literally I know, in my damn life, entha girl um apdi smile oda paathadhe ilaa 🤌🏻”',
      '“Your smile, pallu theriraa mari sirichita na literally I’m out of control, avlo alaggahh epdi oruthar irukka mudiyum nu I’m starting to admire 🤭”',
      '“But when u just smile with that look in the eye, u got me, it’s done 😮💨”',
      '“When u attack me with all these at once, and making my mouth literally close, I’m sitting and admiring.. epdi oruthi ivlo paaka romba alaggu perfection ah, panra onu onum heart ah won pannikitu, oru princess mari irukurava enkuda okandhuruka.. 🫠🫂🥹”',
    ],
    punchline: 'Just my heart wishes that I wanna tightly hug u and never leave. 🫂💗',
    artVariant: 'twoSmiles',
    bgVariant: 'warmWhite',
  },
  {
    id: '25',
    index: 25,
    eyebrow: 'SERA CAFE · THE MAIN PLOT',
    headline: 'THE MOST PRECIOUS COFFEE I EVER DRANK.',
    paragraphs: [
      '“Eeeee Plan pannama entered into Sera Cafe.”',
      '“The main plot: I have drinking same coffee after u drink 😋😭😭😭 I can’t describe this in words viduuu.”',
      '“Yosichi paru, ellame detailed ah explain panravan, words illa nu solran...”',
      '“But seriously my reason for drinking slow is bcoz of u 🤗🤭 and ur taste makes it a PRECIOUS coffee ever i drink.”',
      'Even at night before sleeping, I had to remind you one last time:',
      '“Coffee is tasty btw, magic of ur lips jii 🤭🤭”',
    ],
    punchline: 'One cup of coffee. Unforgettable for a lifetime. ☕💗',
    artVariant: 'coffeePlan',
    bgVariant: 'paper',
  },
  {
    id: '26',
    index: 26,
    eyebrow: 'THE PRINCIPAL’S CALL & THOSE 5 SECONDS',
    headline: 'MY LIFE’S CHEAT CODE TO FORGET EVERY PROBLEM.',
    paragraphs: [
      '“And the way, we sitting while that principal is on the call, Nee enna principal ta nalla olara vechitta, u made me madly anxious, never a girl I have been this much close with me 😭”',
      '“The way we hold our hands, Haann ennala un kaiya vida ve mudiyalaa, they literally made me forget all my problems.. seriously I found a cheat code to make me feel that I blessed with most precious girl.”',
      'And then, the moment my heart stopped:',
      '“Promise ah holding hands is meant alot for me, but holding around shoulders and laying on my shoulder, en kanla thanniye vandhurum happiness la.”',
      '“You and ur smile made me the most happiest person ever existed. Ivlo happy ya irundhu months aiduchu thabbuu jii 💗✨”',
    ],
    punchline: 'How can I sleep? Enakku idhu ellame first time, I was dying in happiness. 😭💗',
    artVariant: 'principalFiveSeconds',
    bgVariant: 'blushTint',
  },
  {
    id: '27',
    index: 27,
    eyebrow: 'VOICE NOTES & LATE NIGHT LOOSU GAMES',
    headline: 'DOING THINGS WE NEVER DID FOR ANYONE ELSE.',
    paragraphs: [
      'October 12 — You sent an audio: “It’s been a year... and this is my very first voice recording 😁”',
      'And then I broke my own lifelong rule by sending 5 voice notes in a row explaining song meanings:',
      '“The thing I never did in my life is voice msg 🤣”',
      'From multiple nights of Truth or Dare (“Periyavanga neenga apo neenga dha first start pannanum” — CHEATING 😂) to accidental keyboard spams, nee once panuva, naa spamming:',
      'Lusu mari irundhuchuu : “Nole ↔ Nole ↔ Nole” and “Matten ↔ Ok ↔ Ok ↔ Ok ↔ Ok” (“Aiyoooo type pannumodhu theriyama touch aagiduchi nu nee soluva”).',
      'And me dutifully asking at nights as: “Thabbuuuu may I go to sleep? Unga kita kekanum jii en kadama adhu ❤️”',
    ],
    punchline: 'Rendu perum pesunale pure chaos and happiness dhaan! 🎙️💗',
    artVariant: 'voiceRecording',
    bgVariant: 'paper',
    interaction: {
      type: 'waveform',
      prompt: 'play our voice memo memory',
      revealedText: '🎵 “You made my day. Romba nalla irukkuu. Soo cute.”',
    },
  },
  {
    id: '28',
    index: 28,
    eyebrow: 'HOW A GORGEOUS TOMATO FIXED ME',
    headline: '“UFF U FIXED ME 😭”',
    paragraphs: [
      'Aniku morning la irundhu old thoughts, friends avoid panrathu, family marriage stories lam ketu alundhu vomit aagi, “Thaniya irundha thaan Naanum seri aaven” nu sonnapo, you didn’t let me be alone:',
      '“Mood off nuhh sollirundha na pakka vandhurupen lahhh.”',
      '“Adhu thabu nuhh oru Tomato varama irukura varaikum adha na ipo iruken lahh aprm enna.”',
      '“See na iruken epovumey irupen adhu epdi yena vittu neenga thaniya feel pannalam aprm edhuku frnd nuhh na oruthi kuda iruken. Vanga Inga oru hug vangikonga 🫂 Enga konjama siringa papom 🤌🏻👀”',
      'And this was too much meant to me.',

    ],
    microNote: 'And my promise stands forever: “Neraya ice cream nee saptu enna Mooka thodaika vei, sad aayi kanna thodaika vekkatha 🤭 My shoulders and shirt is always available for it 😊”',
    punchline: 'En ex-b ku kuda ipdi aanathu ila, aana within minutes you fixed my whole soul. ❤️🩹',
    artVariant: 'careIceCream',
    bgVariant: 'warmWhite',
  },
  {
    id: '29',
    index: 29,
    eyebrow: 'YOUR MESSAGE · I SAVED EVERY WORD MERI YAAR',
    headline: '“DEAR ARIF JII” NU START PANNA LETTER 💗🫂',
    paragraphs: [
      'Mudikkum bodhu enna konnutta jii nee. Every line you wrote lives in my head:',
      '“You’re one of the most special people in my life.”',
      '“Sometimes neenga solra chinna compliments kooda en face la smile vara vechurum.”',
      '“I don’t think you realise how much happiness you give me through these little things.”',
      '“I will never replace you no matter what happens. Your place in my life is different and nobody can be you.”',
      '“I love being your friend I love teasing you I love our conversations and I love the comfort I feel when I talk to you.”',
      '“I love you as my friend, as my favourite person, and as someone whose happiness genuinely matters to me.”',
      'I read all of it with the happiest tears and told you: “I’m being as me, bcoz it’s a new me when I meet this silly tomato yarr 😭🫂”',
      'Namma ipo seriya pesama irukalam, maybe anything.. but still Im waiting for your notifications too madly.'
    ],
    punchline: 'Best message I have ever received in my life. 💌',
    artVariant: 'savedLetter',
    bgVariant: 'blushTint',
  },
  {
    id: '30',
    index: 30,
    eyebrow: 'PAGE 30 · 11:11 💗 & CHEMISTRY LAB GRAFFITI',
    headline: 'TWO WISHES. ONE FOREVER BEST FRIEND.',
    paragraphs: [
      'You sent: “11:11💗”',
      'My wish: “11:11 -> 💗 I wanna be always with this heart.”',
      'Your wish: “Yen deewana dola vahh nalla pathukanum avana aluga vida kudathu so yenga Kula distance vandhuda kudathu nuhh wish panna....”',
      'And then you shyly confessed: “Aprm chemistry lab lahh deewana dola nuhh eludhi vaichitu vandha 🤭 Last lahh irukum.”',
      'Look at us, Thabbu. I started this book pretending to write a 14-page breakup notice because of your “Mm okayy”, and ended up pouring out 16 more pages of how deeply, madly, and endlessly I adore every little thing about you.',
      'No matter what happens, I’ll be there for u at everything 🤌🏻❤️🩹—forever my favourite human, my comfort place, and my whole happiness.',
    ],
    punchline: 'HATE U SOO SOO SOOO MUCH, THABBU JII! 💗🫂 You are not just a friend—you are always MERI PYAARI YAAR & MY DEEWANI DOLII!',
    microNote: 'Now stop smiling at the screen and text me “Hate u more jii” right now.',
    artVariant: 'finale1111',
    bgVariant: 'paper',
    interaction: {
      type: 'finalStamp',
      prompt: '🤭 Tap to seal our friendship forever',
      revealedText: '“Hate u more jii 💗🫂” · Best Friends Forever 🍅💌',
    },
  },
];
