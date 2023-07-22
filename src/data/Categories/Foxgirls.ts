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

export const Foxgirls: IVTuber[] = [
  {
    name: 'anny',
    username: 'anny',
    description:
      'Anny is a comfy fox girl. She can vary from soft-spoken to quite the opposite, especially when laughing or when having pain, usually causing her to make loud noises',
    language: 'English',
    colorScheme: rgb(230, 185, 186),
    social_media: [
      {
        icon: faTwitch,
        url: 'https://www.twitch.tv/anny',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/annytf',
      },
      {
        icon: faDiscord,
        url: 'http://discord.gg/anny',
      },
      {
        icon: faInstagram,
        url: 'https://www.instagram.com/anyuu.art',
      },
    ],
  },
  {
    name: 'Shirakami Fubuki',
    username: 'shirakamifubuki',
    description:
      'Fubuki is usually always cheerful and excited, singing little songs and making many in-jokes. She is shy when confronted with new circumstances, and when embarrassed she "hides" at the bottom of the screen with only her fox ears peeking up. She becomes enthralled in games and has cute conversations with scripted game characters, or voice acts as characters while making effects.',
    language: 'Japanese',
    affiliation: 'Hololive Gamers',
    affiliationURL: 'https://hololive.hololivepro.com/en/talents?gp=gamers',
    colorScheme: rgb(125, 184, 217),
    social_media: [
      {
        icon: faYoutube,
        url: 'https://www.youtube.com/@ShirakamiFubuki',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/shirakamifubuki',
      },
    ],
  },
  {
    name: 'Kotonoha Yukino',
    username: 'kotonoha_yukino',
    description:
      'No description provided.',
    language: 'Japanese',
    colorScheme: rgb(192, 161, 210),
    social_media: [
      {
        icon: faYoutube,
        url: 'https://www.youtube.com/@kokuri_kurune',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/kotonoha_yukino',
      },
    ],
  },
  {
    name: 'Kokuri Kurune',
    username: 'kokuri_kurune',
    description:
      'No description provided.',
    language: 'Japanese',
    colorScheme: rgb(213, 157, 212),
    social_media: [
      {
        icon: faYoutube,
        url: 'https://www.youtube.com/@kokuri_kurune',
      },
      {
        icon: faTwitch,
        url: 'https://www.twitch.tv/kurunekokuri',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/kokuri_kurune',
      },
    ],
  },
  {
    name: 'Kokuto',
    username: 'kokuto',
    description:
      'No description provided.',
    language: 'Japanese',
    colorScheme: rgb(213, 134, 187),
    social_media: [
      {
        icon: faYoutube,
        url: 'https://www.youtube.com/channel/UCTVGMlWoGUHRaFs-bJ3Hl7g',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/kokuto_vtuber1',
      },
    ],
  },
]
