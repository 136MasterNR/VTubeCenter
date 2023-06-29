import '../scss/home.scss'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import VTubers from '../data/vtubers'

import Image from 'next/image'
import Icon from '../common/Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuildingUser,
} from '@fortawesome/free-solid-svg-icons'

import { Poppins } from 'next/font/google'
import { Noto_Sans_JP } from 'next/font/google'
const fontPoppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
const fontJP = Noto_Sans_JP({ subsets: ['latin'], weight: ["400"] })

interface ISocial {
  icon: IconProp
  url: string
}

interface IVtuberProps {
  name: string
  username: string
  description: string
  language: string
  affiliation: string
  affiliationURL?: string
  social_media: ISocial[]
}

function CreateVtuber(props: IVtuberProps) {
  const {
    name,
    username,
    description,
    language,
    affiliation,
    social_media,
    affiliationURL,
  } = props

  return (
    <div className="vtuber">
      <div className="banner">
        <img src={`/img/header/${username}.webp`} alt={username}/>
      </div>

      <div className="avatar">
        <img src={`/img/avatar/${username}.webp`} alt={username}/>
      </div>

      <div className="language">
        {language}
      </div>

      <div className="social_media">
        {social_media.map((media, index) => (
          <Icon key={index} icon={media.icon} remote={media.url} size={26} />
        ))}
      </div>

      <div className="name">
        {name}
      </div>

      <div className={`affiliation ${fontJP.className}`}>
        {affiliation !== 'Independent' ? (
          <a href={affiliationURL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faBuildingUser}/> {affiliation}
          </a>
        ) : null}
      </div>

      <div className="description">
       {description}
      </div>
    </div>
  )
}

export default function Home(): JSX.Element {
  return (
    <div>
      <h1 className="title">Virtual Doggirls</h1>

      <main className="list">
        {VTubers.map(({
          name,
          username,
          description,
          language,
          affiliation,
          affiliationURL,
          social_media
        }) => (
          <CreateVtuber
            key={username}
            username={username}
            name={name}
            description={description}
            language={language}
            affiliation={affiliation}
            affiliationURL={affiliationURL}
            social_media={social_media}
          />
        ))}
      </main>
    </div>
  )
}
