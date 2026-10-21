// Project facts and links. Add your own copy to description and images here.
export const projects = [
  {
    slug: 'pic-peck', title: 'Pic Peck', number: '01', category: 'Direction & design',
    roles: ['Director', 'Lead Designer', 'Producer', 'Lead Engineer'],
    homeRole: 'Director & Lead Designer',
    team: '5 people', period: 'April 2026–present', status: 'In development',
    release: 'In development', description: 'A digital collectable card game based on identifying and taking pictures of birds in the wild.',
    images: [{ src: 'assets/games/pic-peck.png', alt: 'Pic Peck gameplay: a hexagonal board, bird cards, and player decks', width: 733, height: 1303, kind: 'portrait' }], links: []
  },
  {
    slug: 'voidwatch', title: 'Voidwatch', number: '02', category: 'Production',
    roles: ['Lead Producer'], team: '10+ people', period: 'Joined 2025',
    homeRole: 'Lead Producer',
    status: 'Demo available', release: 'Early Access planned · February 2027', description: 'A silky-smooth space shooter roguelike.',
    images: [{ src: 'assets/games/voidwatch.jpg', alt: 'Voidwatch title artwork with a starship facing a vast creature in space', width: 460, height: 215, kind: 'header' }],
    links: [{ label: 'Play the Steam demo', url: 'https://store.steampowered.com/app/3764010/Voidwatch/' }]
  },
  {
    slug: 'expendables', title: 'Expendables', number: '03', category: 'Direction & writing',
    roles: ['Director', 'Designer', 'Writer', 'Additional Programming'],
    homeRole: 'Director, Designer & Writer',
    team: '4 people + 2 voice actors', period: 'January 2026', status: 'Play in browser',
    release: 'Available on itch.io', description: 'Create and test gas masks against ever-changing chemical warfare.',
    images: [{ src: 'assets/games/expendables.png', alt: 'Expendables title artwork showing a figure holding a radiation-marked helmet', width: 315, height: 250, kind: 'logo' }],
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
    links: [{ label: 'Visit the game website', url: 'https://www.quarterlifepounder.com/' }]
  }
];

// Additional selected games appear on /games/, keeping the four homepage features above.
// Use the same fields as a featured project; number is optional.
export const additionalProjects = [];
