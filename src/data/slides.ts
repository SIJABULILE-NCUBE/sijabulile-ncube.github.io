// "View slides" presentations for every project except Bit by Bit (which has its own demo video).
// Every word here comes from that project's card in content.ts (and PORTFOLIO_CONTENT.md, section 11).
// To edit a deck, change its slides array. Slides with nothing to show are left out rather than invented.
// No em dashes anywhere.
import { alsoBuilt, projects, type Project } from './content';

export type Slide =
  | { kind: 'title'; name: string; pitch: string; award?: string; label?: string }
  | { kind: 'problem'; text: string }
  | { kind: 'solution'; features: string[] }
  | { kind: 'screenshot'; src: string; alt: string }
  | { kind: 'stack'; items: string[] }
  | { kind: 'end'; name: string; live?: string; github?: string; githubLabel?: string };

export type Deck = { id: string; name: string; slides: Slide[] };

/** Builds a deck from a project card, so the slides can never drift from the card. */
function fromCard(p: Project, pitch: string, features: string[]): Deck {
  return {
    id: p.id,
    name: p.name,
    slides: [
      { kind: 'title', name: p.name, pitch, award: p.award, label: p.label },
      { kind: 'problem', text: p.problem },
      { kind: 'solution', features },
      ...(p.images ?? []).map((img) => ({ kind: 'screenshot' as const, ...img })),
      { kind: 'stack', items: p.stack },
      {
        kind: 'end',
        name: p.name,
        live: typeof p.live === 'string' && p.live !== 'none' ? p.live : undefined,
        github: 'url' in p.github ? p.github.url : undefined,
        githubLabel: 'label' in p.github ? p.github.label : undefined,
      },
    ],
  };
}

const card = (id: string) => projects.find((p) => p.id === id)!;
const neighbourLoan = alsoBuilt.find((a) => a.name === 'NeighbourLoan')!;

export const decks: Deck[] = [
  fromCard(card('thembeka'), 'A safer way to send money home to other African countries in USDT.', [
    'Offline KYC pre-check',
    'Scam and money-mule shield',
    'True-cost comparison',
    'Human approval step before any USDT is sent',
  ]),
  fromCard(card('fixmykasi'), "Residents report community faults and track each one until it's confirmed fixed.", [
    'Report a fault with a photo, location and category',
    'AI suggests the category and urgency',
    'AI translates reports',
    "Track each fault until it's confirmed fixed",
  ]),
  fromCard(card('creditwise'), 'A mobile-first credit health and affordability app.', [
    'DTI ratio cards that reference NCA thresholds',
    'Forensic audit-style transaction flagging',
    'Compliance-aware AI insights',
    'Plain-language vehicle finance explanations',
  ]),
  fromCard(card('house-of-laundry'), 'A full 7-page business website for a real Soweto laundry business.', [
    'Cart for service selection',
    'Laundry-themed CSS animations',
    'Dark mode toggle',
    'Client handover package',
  ]),
  fromCard(card('matshiya'), 'A premium landing page for a technology business.', [
    'Space-to-Earth intro animation',
    'Warp-speed starfield',
    'Glowing Earth',
    'Animated wire network',
  ]),
  // NeighbourLoan's card has a one-line description and a screenshot only (no problem or stack), so its deck is shorter.
  {
    id: 'neighbourloan',
    name: neighbourLoan.name,
    slides: [
      { kind: 'title', name: neighbourLoan.name, pitch: 'A neighbourhood tool-lending marketplace.' },
      { kind: 'solution', features: ['Neighbourhood tool-lending marketplace', 'Trust Score designed from credit-risk thinking'] },
      { kind: 'screenshot', ...neighbourLoan.image },
      { kind: 'end', name: neighbourLoan.name, live: neighbourLoan.live, github: neighbourLoan.github },
    ],
  },
];

export const deckFor = (id: string) => decks.find((d) => d.id === id);
