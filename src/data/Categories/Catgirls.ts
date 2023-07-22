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
      'Nyanners is a gentle, sensitive, and often energetic catgirl with a good sense of humor. However, her claims of being "seiso" or pure are offset by a tendency to use toilet jokes and reference adult, and often vastly obscure, topics. This contrast between pure and crude is considered by fans to be a defining aspect of Nyan\'s appeal. ',
    language: 'English',
    colorScheme: rgb(174, 96, 193),
    social_media: [
      {
        icon: faYoutube,
        url: 'https://www.youtube.com/nyanners',
      },
      {
        icon: faTwitch,
        url: 'https://www.twitch.tv/nyanners',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/NyanNyanners',
      },
      {
        icon: faDiscord,
        url: 'https://discord.com/invite/nyakuza',
      },
    ],
  },
  {
    name: 'Nekomata Okayu',
    username: 'nekomataokayu',
    description:
      'Okayu is typically very relaxed, free-spirited, and also somewhat of a playboy or prankster. She sometimes flirts openly with other hololive members just to see their reactions and is also known for impulsively swiping food. She typically likes to talk a lot and through many streams likes to talk about daily activities and old stories.',
    language: 'English',
    affiliation: 'Hololive Gamers',
    affiliationURL: 'https://hololive.hololivepro.com/en/talents?gp=gamers',
    colorScheme: rgb(177, 144, 252),
    social_media: [
      {
        icon: faYoutube,
        url: 'https://www.youtube.com/channel/UCvaTdHTWBGv3MKj3KVqJVCw',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/nekomataokayu',
      },
    ],
  },
]
