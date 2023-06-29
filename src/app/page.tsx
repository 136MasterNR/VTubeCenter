import '../scss/home.scss'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import VTubers from '../data/vtubers'

import Image from 'next/image'
import Icon from '../common/Icon'

interface ISocial {
  icon: IconProp
  url: string
}

interface IVtuberProps {
  name: string
  username: string
  description: string
  language: string
  social_media: ISocial[]
}

function CreateVtuber(props: IVtuberProps) {
  const {
    name,
    username,
    description = 'No description provided.',
    language,
    social_media,
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
    </div>
  )
}

export default function Home(): JSX.Element {
  return (
    <div>
      <h1 className="title">Virtual Doggirls</h1>
      <main className="list">
        {VTubers.map(({ name, username, description, language, social_media }) => (
          <CreateVtuber
            key={username}
            username={username}
            name={name}
            description={description}
            language={language}
            social_media={social_media}
          />
        ))}
      </main>
    </div>
  )
}
