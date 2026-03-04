export interface Project {
  id: number;
  title: string;
  description: string;
  stack: string[];
  live?: string;
  github?: string;
  appStore?: string;
  googlePlay?: string;
  image?: string;
  mobileScreenshot?: boolean;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Remind",
    description:
      "Als lead frontend developer gebouwd: een Flutter app die via slimme API-integraties korte metingen van spraak, geheugen en gedrag omzet naar inzicht in hoe je breingezondheid zich over tijd ontwikkelt.",
    stack: ["Flutter", "Dart", "REST APIs"],
    live: "https://www.remindbrainhealth.com/",
    appStore: "https://apps.apple.com/nl/app/remind-brain-health/id6751235505",
    googlePlay: "https://play.google.com/store/apps/details?id=remind.app",
    image: "/projects/remind.avif",
    mobileScreenshot: true,
    featured: true,
  },
  {
    id: 2,
    title: "Waar blijft mijn tijd?",
    description:
      "Solo gebouwd voor MantelzorgNL: een interactieve Next.js website die mantelzorgers helpt inzicht te krijgen in hun tijdsbesteding. Met vloeiende animaties als kern van de gebruikerservaring.",
    stack: ["Next.js", "TypeScript", "Framer Motion"],
    live: "https://waarblijftmijntijd.mantelzorg.nl/",
    image: "/projects/mantelzorg.png",
  },
  {
    id: 3,
    title: "Cue2Walk",
    description:
      "Onderdeel van een groter developersteam: een Flutter app waarmee Parkinson-patiënten hun Cue2Walk-apparaat volledig zelf kunnen personaliseren via Bluetooth — zonder tussenkomst van een behandelaar.",
    stack: ["Flutter", "Dart", "Bluetooth BLE"],
    live: "https://cue2walk.nl/",
    appStore: "https://apps.apple.com/nl/app/cue2walk/id6470810709",
    googlePlay:
      "https://play.google.com/store/apps/details?id=nl.cue2walk.app.prod&hl=nl",
    image: "/projects/cue2walk.png",
    mobileScreenshot: true,
  },
];
