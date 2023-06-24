import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faYoutube,
  faBilibili,
  faTwitch,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

type Social = {
  icon: IconProp;
  url: string;
};

type VTuber = {
  featured?: boolean;
  name: string;
  username: string;
  description: string;
  social_media: Social[];
};

const VTubers: VTuber[] = [
  {
    name: "Inugami Korone",
    username: "inugami_korone",
    description: "No description provided.",
    social_media: [
      {
        icon: faYoutube,
        url: "https://www.youtube.com/channel/UChAnqc_AY5_I3Px5dig3X1Q",
      },
      {
        icon: faBilibili,
        url: "https://space.bilibili.com/412135619",
      },
      {
        icon: faTwitter,
        url: "https://twitter.com/inugamikorone",
      },
    ],
  },
  {
    name: "Yuniiho",
    username: "yuniiho",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Shiki Miyoshino",
    username: "shiki_miyoshino",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Rui Seshima",
    username: "rui_seshima",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Hunikin",
    username: "hunikinn",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Pochi Wanmaru",
    username: "pochi_wanmaru",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Enocinoco",
    username: "enocinoco",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Inukai Purin",
    username: "inukai_purin",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Inui Toko",
    username: "inui_toko",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Kore",
    username: "shibakore",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Chibi",
    username: "chibichinu",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Kyundere",
    username: "kyundere",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Inunaka Akari",
    username: "inunaka_akari",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Feef",
    username: "feef",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Sino Shinomiya",
    username: "sino_shinomiya",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "BuffPup",
    username: "buffpup",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Cece",
    username: "cece",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Cobalt Puppy",
    username: "cobalt_puppy",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Meika",
    username: "meika",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Lunpai",
    username: "lunpai",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Mai",
    username: "mai",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Tayto",
    username: "tayto",
    description: "No description provided.",
    social_media: [],
  },
  {
    featured: true,
    name: "Klaire Fluffle",
    username: "klaire_fluffle",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Mango",
    username: "mango",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Kimicchi",
    username: "kimicchi_ch",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Nadeshiko Komae",
    username: "nadeshiko_komae",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "小柴起司",
    username: "小柴起司",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Jiya",
    username: "jiya",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Lynna",
    username: "lynna_vt",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Nora Shitagai",
    username: "norashitagai",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Yuyu",
    username: "ywumaru",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Art",
    username: "artstudebt",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Poyon",
    username: "puppypoyon",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Nene",
    username: "2dpupy",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Kuromi Kate",
    username: "kuromikate",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "AQtiee",
    username: "aqtiee_ttv",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Samwich",
    username: "imasamwich",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Ribbon",
    username: "ribbonfemale",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "PopRoxy",
    username: "PopRoxy4",
    description: "No description provided.",
    social_media: [],
  },
  {
    name: "Miffy",
    username: "miffygeist",
    description: "No description provided.",
    social_media: [],
  },
];

export default VTubers;
