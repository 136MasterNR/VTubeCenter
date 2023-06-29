import { IconProp } from '@fortawesome/fontawesome-svg-core'
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

type Social = {
  icon: IconProp
  url: string
}

type VTuber = {
  featured?: boolean
  name: string
  username: string
  description: string
  language: string
  affiliation: string
  affiliationURL?: string
  social_media: Social[]
}

const VTubers: VTuber[] = [
  {
    name: 'Inugami Korone',
    username: 'inugami_korone',
    description: 'Korone has a sweet and goofy personality comparable to that of an actual dog. She often kisses other hololive members for no reason, and has a high-pitched laugh that resembles the cry of a screeching seagull.',
    language: 'Japanese',
    affiliation: 'Hololive Gamers', affiliationURL: 'https://hololive.hololivepro.com/en/talents?gp=gamers',
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
  {
    name: 'Yuniiho',
    username: 'yuniiho',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Vyugen', affiliationURL: 'https://mobile.twitter.com/vyugenofficial',
    social_media: [
      {
        icon: faYoutube,
        url: 'https://www.youtube.com/c/Yuniiho',
      },
      {
        icon: faTwitch,
        url: 'https://www.twitch.tv/yuniiho',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/yuniihoe',
      },
      {
        icon: faDiscord,
        url: 'https://discord.gg/3UHQ953aHj',
      },
      {
        icon: faInstagram,
        url: 'https://www.instagram.com/yuniiho',
      },
      {
        icon: faFacebook,
        url: 'https://www.facebook.com/Yuniiho/',
      },
    ],
  },
  {
    name: 'Shiki Miyoshino',
    username: 'shiki_miyoshino',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [
      {
        icon: faYoutube,
        url: 'https://www.youtube.com/c/shikimiyoshino',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/ShikiMiyoshino',
      },
      {
        icon: faTiktok,
        url: 'https://www.tiktok.com/@shikimiyoshino',
      },
    ],
  },
  {
    name: 'Rui Seshima',
    username: 'rui_seshima',
    description: 'No description provided.',
    language: 'Japanese',
    affiliation: 'Independent',
    social_media: [
      {
        icon: faYoutube,
        url: 'https://www.youtube.com/channel/UC_WOBIopwUih0rytRnr_1Ag',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/Rui_Seshima',
      },
    ],
  },
  {
    name: 'Hunikin',
    username: 'hunikinn',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [
      {
        icon: faYoutube,
        url: 'https://www.youtube.com/channel/UCfcVgQ0mKaEwzVqmGYTMayA',
      },
      {
        icon: faTwitch,
        url: 'https://www.twitch.tv/hunikinn',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/hunikinn',
      },
      {
        icon: faDiscord,
        url: 'https://discord.com/invite/7ch9rVJZua',
      },
    ],
  },
  {
    name: 'Pochi Wanmaru',
    username: 'pochi_wanmaru',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [
      {
        icon: faYoutube,
        url: 'https://www.youtube.com/channel/UCP0csSl19lOSNwJGCFsJqAQ',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/PochiWanmaru',
      },
      {
        icon: faTiktok,
        url: 'https://www.tiktok.com/@pochiwanmaru',
      },
    ],
  },
  {
    name: 'Inui Toko',
    username: 'inui_toko',
    description: 'No description provided.',
    language: 'Japanese',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Feef',
    username: 'feefch',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Meika',
    username: 'meikapuppy',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Enocinoco',
    username: 'enocinoco',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Inukai Purin',
    username: 'inukai_purin',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Kore',
    username: 'shibakore',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Chibi',
    username: 'chibichinu',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Kyundere',
    username: 'kyundere',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Inunaka Akari',
    username: 'inunaka_akari',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Sino Shinomiya',
    username: 'sino_shinomiya',
    description: 'No description provided.',
    language: 'Japanese',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'BuffPup',
    username: 'buffpup',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Cece',
    username: 'cece',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Cobalt Puppy',
    username: 'cobalt_puppy',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Lunpai',
    username: 'lunpai',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Mai',
    username: 'mai',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Tayto',
    username: 'tayto',
    description: 'No description provided.',
    language: 'Japanese',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    featured: true,
    name: 'Klaire Fluffle',
    username: 'klaire_fluffle',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Mango',
    username: 'mango',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Kimicchi',
    username: 'kimicchi_ch',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Nadeshiko Komae',
    username: 'nadeshiko_komae',
    description: 'No description provided.',
    language: 'Japanese',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: '小柴起司',
    username: '小柴起司',
    description: 'No description provided.',
    language: 'Chinese',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Jiya',
    username: 'jiya',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Lynna',
    username: 'lynna_vt',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Nora Shitagai',
    username: 'norashitagai',
    description: 'No description provided.',
    language: 'Japanese',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Yuyu',
    username: 'ywumaru',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Art',
    username: 'artstudebt',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Poyon',
    username: 'puppypoyon',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Nene',
    username: '2dpupy',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Kuromi Kate',
    username: 'kuromikate',
    description: 'No description provided.',
    language: 'Japanese',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'AQtiee',
    username: 'aqtiee_ttv',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Samwich',
    username: 'imasamwich',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Ribbon',
    username: 'ribbonfemale',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'PopRoxy',
    username: 'PopRoxy4',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
  {
    name: 'Miffy',
    username: 'miffygeist',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    social_media: [],
  },
]

export default VTubers
