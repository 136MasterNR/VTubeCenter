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
  description?: string
  social_media: ISocial[]
}

function CreateVtuber(props: IVtuberProps) {
  const {
    name,
    username,
    description = 'No description provided.',
    social_media,
  } = props

  return (
    <div className="vtuber">
      <div className="avatar">
        <Image
          src={`/img/avatar/${username}.webp`}
          width={100}
          height={100}
          alt={username}
        />
      </div>
      <div className="details">
        <div className="about">
          <div className="name">{name}</div>
          <div className="description">{description}</div>
        </div>
        <div className="social_media">
          {social_media.map((media, index) => (
            <Icon key={index} icon={media.icon} remote={media.url} size={24} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home(): JSX.Element {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Virtual Doggirls</h1>
      <main className="list">
        {VTubers.map(({ name, username, description, social_media }) => (
          <CreateVtuber
            key={username}
            username={username}
            name={name}
            description={description}
            social_media={social_media}
          />
        ))}
      </main>
    </div>
  )
}
