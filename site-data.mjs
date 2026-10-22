// Project facts and links. Add your own copy to description and images here.
export const projects = [
  {
    slug: 'pic-peck', title: 'Pic Peck', number: '01', category: 'Direction & design',
    roles: ['Director', 'Lead Designer', 'Producer', 'Lead Engineer'],
    homeRole: 'Director & Lead Designer',
    team: '5 people', period: 'April 2026–present', status: 'In development',
    release: 'In development', description: 'A digital collectable card game based on identifying and taking pictures of birds in the wild.',
    images: [{ src: 'assets/games/pic-peck.png', alt: 'Pic Peck gameplay: a hexagonal board, bird cards, and player decks', width: 733, height: 1303, kind: 'portrait' }],
    screenshots: [
      { file: 'pic-peck-1.webp', alt: 'Pic Peck Little Blue Heron card', width: 207, height: 273 },
      { file: 'pic-peck-2.webp', alt: 'Six Pic Peck bird cards, including Common Swift, Western Barn Owl, and Common Ostrich', width: 673, height: 579 }
    ], links: []
  },
  {
    slug: 'voidwatch', title: 'Voidwatch', number: '02', category: 'Production',
    roles: ['Lead Producer'], team: '10+ people', period: 'Joined 2025',
    homeRole: 'Lead Producer',
    status: 'Demo available', release: 'Early Access planned · February 2027', description: 'A silky-smooth space shooter roguelike.',
    images: [{ src: 'assets/games/voidwatch.jpg', alt: 'Voidwatch title artwork with a starship facing a vast creature in space', width: 460, height: 215, kind: 'header' }],
    screenshots: [
      { file: 'voidwatch-1.webp', alt: 'Voidwatch star map with the Salacia planet selected', width: 1920, height: 1080 },
      { file: 'voidwatch-2.webp', alt: 'Voidwatch spacecraft maneuvering through enemy fire', width: 1920, height: 1067 },
      { file: 'voidwatch-3.webp', alt: 'Voidwatch planet-cleared screen offering upgrades or scrap', width: 1920, height: 1080 },
      { file: 'voidwatch-4.webp', alt: 'Voidwatch battle against a vast winged space creature', width: 1920, height: 1073 },
      { file: 'voidwatch-5.webp', alt: 'Voidwatch boss encounter with a many-tentacled creature firing projectiles', width: 1920, height: 1080 }
    ],
    links: [{ label: 'Play the Steam demo', url: 'https://store.steampowered.com/app/3764010/Voidwatch/' }]
  },
  {
    slug: 'expendables', title: 'Expendables', number: '03', category: 'Direction & writing',
    roles: ['Director', 'Designer', 'Writer', 'Additional Programming'],
    homeRole: 'Director, Designer & Writer',
    team: '4 people + 2 voice actors', period: 'January 2026', status: 'Play in browser',
    release: 'Available on itch.io', description: 'Create and test gas masks against ever-changing chemical warfare.',
    images: [{ src: 'assets/games/expendables.png', alt: 'Expendables title artwork showing a figure holding a radiation-marked helmet', width: 315, height: 250, kind: 'logo' }],
    screenshots: [
      { file: 'expendables-1.webp', alt: 'Expendables gas-mask testing interface with a test subject and component controls', width: 1569, height: 880 },
      { file: 'expendables-2.webp', alt: 'Expendables game-over screen on a cracked testing monitor', width: 1198, height: 661 },
      { file: 'expendables-3.webp', alt: 'Expendables landscape with a winding road and bare trees under a gray sky', width: 2048, height: 1152 }
    ],
    links: [
      { label: 'Play in browser', url: 'https://alexio-games.itch.io/expendables' },
      { label: 'Watch the video', url: 'https://www.youtube.com/watch?v=TCUi0HnhWWY' }
    ]
  },
  {
    slug: 'quarter-life-pounder', title: 'Quarter Life Pounder', number: '04', category: 'Production',
    roles: ['Associate Producer'], team: '45+ people', period: 'Joined May 2026',
    homeRole: 'Associate Producer',
    status: 'In development', release: 'Release planned · May 2027', description: 'A narrative restaurant simulator about an Asian immigrant running a burger diner.',
    images: [{ src: 'assets/games/quarter-life-pounder.png', alt: 'Quarter Life Pounder logo styled as a burger-shaped neon sign', width: 1579, height: 1047, kind: 'logo' }],
    screenshots: [
      { file: 'quarter-life-pounder-1.webp', alt: 'Quarter Life Pounder diner scene with customers talking beside booths and tables', width: 1615, height: 853 }
    ],
    links: [{ label: 'Visit the game website', url: 'https://www.quarterlifepounder.com/' }]
  }
];

// Additional selected games appear on /games/, keeping the four homepage features above.
// Use the same fields as a featured project; number is optional.
export const additionalProjects = [
  {
    slug: 'biome-buyout', title: 'Biome Buyout', category: 'Board game',
    roles: ['Game Designer', 'Director'], team: '4 people', period: 'October–November 2025',
    format: 'Board game', galleryTitle: 'Factions & abilities',
    description: 'A four-player strategy board game where animal real estate factions use unique abilities and tetromino tiles to compete for land.',
    images: [{ src: 'assets/games/biome-buyout.webp', alt: 'Biome Buyout title artwork: a goat real estate agent beside a for-sale sign', width: 2048, height: 1239, kind: 'image' }],
    screenshots: [
      { file: 'biome-buyout-1.webp', alt: 'Summitstone Enterprises goat faction card with Avalanche, Fortify, and Summit abilities', width: 3129, height: 2048 },
      { file: 'biome-buyout-2.webp', alt: 'Dunecrest Holdings camel faction card with Sandstorm, Sand Veil, and Oasis abilities', width: 3129, height: 2048 },
      { file: 'biome-buyout-3.webp', alt: 'Verdant Vale Real Estate squirrel faction card with Rampant Growth, Spore, and Jungle’s Bounty abilities', width: 3129, height: 2048 },
      { file: 'biome-buyout-4.webp', alt: 'Bluefin Developments dolphin faction card with Flood, Dam, and Tide Shift abilities', width: 3129, height: 2048 }
    ], links: []
  },
  {
    slug: 'overdrawn', title: 'Overdrawn', category: 'Board game',
    roles: ['Game Designer', 'Director'], team: '4 people', period: 'December 2025',
    format: 'Board game', galleryTitle: 'Board & components',
    description: 'A board game where graffiti artists compete for territory and infamy through graffiti battles.',
    images: [{ src: 'assets/games/overdrawn.webp', alt: 'Overdrawn rulebook cover with colorful graffiti artwork', width: 1237, height: 1600, kind: 'portrait' }],
    screenshots: [
      {"file": "overdrawn-1.webp", "alt": "The Overdrawn city board with color-coded territories", "width": 2048, "height": 1023},
      {"file": "overdrawn-2.webp", "alt": "Overdrawn City Center territory card", "width": 836, "height": 556},
      {"file": "overdrawn-3.webp", "alt": "Overdrawn Food Market territory card", "width": 433, "height": 288},
      {"file": "overdrawn-4.webp", "alt": "Overdrawn Fashion District territory card", "width": 848, "height": 548},
      {"file": "overdrawn-5.webp", "alt": "Overdrawn Medical District territory card", "width": 832, "height": 534},
      {"file": "overdrawn-6.webp", "alt": "Overdrawn Suburbs territory card", "width": 834, "height": 542},
      {"file": "overdrawn-7.webp", "alt": "Overdrawn illustrated setup and objective rules", "width": 1050, "height": 1350},
      {"file": "overdrawn-8.webp", "alt": "Overdrawn Wall Cards deck artwork", "width": 670, "height": 834},
      {"file": "overdrawn-9.webp", "alt": "Overdrawn teal spray-can token", "width": 145, "height": 145},
      {"file": "overdrawn-10.webp", "alt": "Overdrawn yellow gas-mask token", "width": 145, "height": 145},
    ], links: []
  }
];
