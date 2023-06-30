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
  colorScheme?: string
}

const VTubers: VTuber[] = [
  {
    name: 'Inugami Korone',
    username: 'inugami_korone',
    description: 'Korone has a sweet and goofy personality comparable to that of an actual dog. She often kisses other hololive members for no reason, and has a high-pitched laugh that resembles the cry of a screeching seagull.',
    language: 'Japanese',
    affiliation: 'Hololive Gamers', affiliationURL: 'https://hololive.hololivepro.com/en/talents?gp=gamers',
    colorScheme: "239, 145, 10",
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
    description: 'Yuniiho is very upbeat and excitable, though this may not show when she is focusing on her artwork. During her art streams, her attention often gets tugged between interacting with her chat and working on her commissions, occasionally leading to not much work getting done.',
    language: 'English',
    affiliation: 'Vyugen', affiliationURL: 'https://mobile.twitter.com/vyugenofficial',
    colorScheme: "242, 150, 181",
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
    description: 'Shiki has a tomboyish personality. She is a big fan of anything related to the occult and the unknown. She is also a masochist and likes to grieve.',
    language: 'English',
    affiliation: 'PRISM Project', affiliationURL: 'https://www.prismproject.jp/#section-f_70da0459-0e7a-4af3-b0a1-aee809afdfc8',
    colorScheme: "234, 119, 96",
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
    affiliation: 'AniMare', affiliationURL: 'https://www.774.ai/talent/rui-seshima',
    colorScheme: "225, 164, 133",
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
    description: 'Huni is your chaotic emotional support dog! She has been described as mostly hyper, chaotic, feral, and downright insane, and she loves destruction and murder far too much- but she is mostly a doggo with a heart of gold.',
    language: 'English',
    affiliation: 'Kawa Entertainment', affiliationURL: 'https://kawaentertainment.com/talent/hunikin',
    colorScheme: "116, 178, 240",
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
    description: 'Pochi is lively, caring, and interactive. She reflects a growth mindset with her passion for gaming, showing an interest in various genres.',
    language: 'English',
    affiliation: 'idolEN', affiliationURL: 'https://idol-company.com/pochi/',
    colorScheme: "222, 173, 124",
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
    affiliation: 'Nijisanji', affiliationURL: 'https://www.nijisanji.jp/en/talents/l/toko-inui',
    colorScheme: "178, 93, 54",
    social_media: [
      {
        icon: faYoutube,
        url: 'https://www.youtube.com/channel/UCXRlIK3Cw_TJIQC5kSJJQMg',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/inui_toko',
      },
    ],
  },
  {
    name: 'Feef',
    username: 'feefch',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    colorScheme: "221, 184, 147",
    social_media: [
      {
        icon: faYoutube,
        url: 'https://www.youtube.com/channel/UCgcx0pQsUO9KF2bF-n9MgUQ',
      },
      {
        icon: faTwitch,
        url: 'https://www.twitch.tv/feefch',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/FeefCh',
      },
    ],
  },
  {
    name: 'Meika',
    username: 'meikapuppy',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    colorScheme: "164, 184, 210",
    social_media: [
      {
        icon: faTwitch,
        url: 'https://www.twitch.tv/meikapuppy',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/meikapuppy',
      },
      {
        icon: faDiscord,
        url: 'https://discord.com/invite/aNfCXW6',
      },
      {
        icon: faInstagram,
        url: 'https://www.instagram.com/meikapuff',
      },
    ],
  },
  {
    name: 'Enocinoco',
    username: 'enocinoco',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    colorScheme: "242, 165, 28",
    social_media: [
      {
        icon: faYoutube,
        url: 'https://www.youtube.com/channel/UCyxwxZCebYm6KoxVu154-9g',
      },
      {
        icon: faTwitch,
        url: 'https://www.twitch.tv/enocinoco',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/enocinoco',
      },
      {
        icon: faDiscord,
        url: 'https://discord.gg/SwXxcPE',
      },
      {
        icon: faInstagram,
        url: 'https://www.instagram.com/enocinoco/',
      },
      {
        icon: faTiktok,
        url: 'https://www.tiktok.com/@enocinoco',
      },
    ],
  },
  {
    name: 'Inukai Purin',
    username: 'inukai_purin',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    colorScheme: "151, 114, 117",
    social_media: [
      {
        icon: faYoutube,
        url: 'https://www.youtube.com/channel/UCdrQWcX7XLDSUEh9SAxnyBg',
      },
      {
        icon: faTwitch,
        url: 'https://www.twitch.tv/inukaipurin',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/inukaipurin',
      },
      {
        icon: faDiscord,
        url: 'https://discord.com/invite/purinhub',
      },
    ],
  },
  {
    name: 'Kore',
    username: 'shibakore',
    description: 'No description provided.',
    language: 'English',
    affiliation: 'Independent',
    colorScheme: "245, 166, 167",
    social_media: [
      {
        icon: faYoutube,
        url: 'https://www.youtube.com/c/korech',
      },
      {
        icon: faTwitch,
        url: 'https://www.twitch.tv/shibakore',
      },
      {
        icon: faTwitter,
        url: 'https://twitter.com/ShibaKore',
      },
      {
        icon: faDiscord,
        url: 'https://discord.com/invite/QPdhMAPEHK',
      },
    ],
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
    social_media: [
      {
        icon: faYoutube,
        url: 'https://www.youtube.com/channel/UCX7GV7aCQqytrw_jzuiPCWQ',
      },
      {
        icon: faTwitch,
        url: 'https://www.twitch.tv/kimicchi_ch',
      },
      {
        icon: faTwitter,
        url: 'https://doggirls.pages.dev/#warnModal',
      },
      {
        icon: faDiscord,
        url: 'http://discord.gg/8xbj8yKCdb',
      },
      {
        icon: faTiktok,
        url: 'https://www.tiktok.com/@kimicchi_ch',
      },
    ],
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
