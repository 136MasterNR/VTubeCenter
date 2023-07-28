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
  faReddit,
} from '@fortawesome/free-brands-svg-icons'

export const Froggirls: IVTuber[] = [
  {
    name: 'Ami Amami',
    username: 'amiamami',
    description:
      'Ami is a very energetic froggo, who likes to pog a lot. She likes to play games on stream and sing song covers.',
    language: 'English',
    affiliation: 'PRISM Project',
    affiliationURL:
      'https://www.prismproject.jp/#section-f_b0c22c12-a785-4865-a83d-2c5a47824202',
    colorScheme: rgb(95, 120, 205),
    social_media: [
      {
        icon: faYoutube,
        url: 'https://www.youtube.com/@AmamiAmi/about',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/itsAmiAmami',
      },
      {
        icon: faTiktok,
        url: 'https://www.tiktok.com/@ami_amami',
      },
      {
        icon: faReddit,
        url: 'https://www.reddit.com/user/itsAmiAmami',
      },
    ],
  },
]
