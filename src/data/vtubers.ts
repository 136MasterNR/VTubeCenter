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
  description?: string;
  social_media: Social[];
};

const VTubers: VTuber[] = [
  {
    name: "Inugami Korone",
    username: "inugami_korone",
    social_media: [
      {
        icon: faYoutube,
        url: "https://hs50.cc",
      },
      {
        icon: faBilibili,
        url: "https://hs50.cc",
      },
      {
        icon: faTwitch,
        url: "https://hs50.cc",
      },
      {
        icon: faTwitter,
        url: "https://hs50.cc",
      },
    ],
  },
  {
    name: "Yuniiho",
    username: "yuniiho",
    social_media: [],
  },
  {
    name: "Shiki Miyoshino",
    username: "shiki_miyoshino",
    social_media: [],
  },
  {
    name: "Rui Seshima",
    username: "rui_seshima",
    social_media: [],
  },
  {
    name: "Hunikin",
    username: "hunikinn",
    social_media: [],
  },
  {
    name: "Pochi Wanmaru",
    username: "pochi_wanmaru",
    social_media: [],
  },
  {
    name: "Enocinoco",
    username: "enocinoco",
    social_media: [],
  },
  {
    name: "Inukai Purin",
    username: "inukai_purin",
    social_media: [],
  },
  {
    name: "Inui Toko",
    username: "inui_toko",
    social_media: [],
  },
  {
    name: "Kore",
    username: "shibakore",
    social_media: [],
  },
  {
    name: "Chibi",
    username: "chibichinu",
    social_media: [],
  },
  {
    name: "Kyundere",
    username: "kyundere",
    social_media: [],
  },
  {
    name: "Inunaka Akari",
    username: "inunaka_akari",
    social_media: [],
  },
  {
    name: "Feef",
    username: "feef",
    social_media: [],
  },
  {
    name: "Sino Shinomiya",
    username: "sino_shinomiya",
    social_media: [],
  },
  {
    name: "BuffPup",
    username: "buffpup",
    social_media: [],
  },
  {
    name: "Cece",
    username: "cece",
    social_media: [],
  },
  {
    name: "Cobalt Puppy",
    username: "cobalt_puppy",
    social_media: [],
  },
  {
    name: "Meika",
    username: "meika",
    social_media: [],
  },
  {
    name: "Lunpai",
    username: "lunpai",
    social_media: [],
  },
  {
    name: "Mai",
    username: "mai",
    social_media: [],
  },
  {
    name: "Tayto",
    username: "tayto",
    social_media: [],
  },
  {
    featured: true,
    name: "Klaire Fluffle",
    username: "klaire_fluffle",
    social_media: [],
  },
  {
    name: "Mango",
    username: "mango",
    social_media: [],
  },
  {
    name: "Kimicchi",
    username: "kimicchi_ch",
    social_media: [],
  },
  {
    name: "Nadeshiko Komae",
    username: "nadeshiko_komae",
    social_media: [],
  },
  {
    name: "小柴起司",
    username: "小柴起司",
    social_media: [],
  },
  {
    name: "Jiya",
    username: "jiya",
    social_media: [],
  },
  {
    name: "Lynna",
    username: "lynna_vt",
    social_media: [],
  },
  {
    name: "Nora Shitagai",
    username: "norashitagai",
    social_media: [],
  },
  {
    name: "Yuyu",
    username: "ywumaru",
    social_media: [],
  },
  {
    name: "Art",
    username: "artstudebt",
    social_media: [],
  },
  {
    name: "Poyon",
    username: "puppypoyon",
    social_media: [],
  },
  {
    name: "Nene",
    username: "2dpupy",
    social_media: [],
  },
  {
    name: "Kuromi Kate",
    username: "kuromikate",
    social_media: [],
  },
  {
    name: "AQtiee",
    username: "aqtiee_ttv",
    social_media: [],
  },
  {
    name: "Samwich",
    username: "imasamwich",
    social_media: [],
  },
  {
    name: "Ribbon",
    username: "ribbonfemale",
    social_media: [],
  },
  {
    name: "PopRoxy",
    username: "PopRoxy4",
    social_media: [],
  },
  {
    name: "Miffy",
    username: "miffygeist",
    social_media: [],
  },
];

export default VTubers;
