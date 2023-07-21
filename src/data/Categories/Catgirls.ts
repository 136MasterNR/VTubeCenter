import { IVTuber } from './Types'

import { rgb } from 'polished'

import {
  faYoutube,
  faTwitch,
  faBilibili,
  faTwitter,
  faDiscord,
  faInstagram,
  faTiktok,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'

export const Catgirls: IVTuber[] = [
  {
    name: 'Nyatasha Nyanners',
    username: 'NyanNyanners',
    description:
      'Korone has a sweet and goofy personality comparable to that of an actual dog. She often kisses other hololive members for no reason, and has a high-pitched laugh that resembles the cry of a screeching seagull.',
    language: 'English',
    affiliation: 'VShojo',
    affiliationURL: 'https://hololive.hololivepro.com/en/talents?gp=gamers',
    colorScheme: rgb(174, 96, 193),
    social_media: [
      {
        icon: faYoutube,
        url: 'https://www.youtube.com/channel/UChAnqc_AY5_I3Px5dig3X1Q',
      },
      {
        icon: faBilibili,
        url: 'https://space.bilibili.com/412135619',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/inugamikorone',
      },
    ],
  },
]
