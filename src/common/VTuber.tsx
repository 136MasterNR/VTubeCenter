import { IconProp } from '@fortawesome/fontawesome-svg-core'

import Icon from '../common/Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingUser } from '@fortawesome/free-solid-svg-icons'

import { Noto_Sans_JP } from 'next/font/google'
const fontJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

interface ISocial {
  icon: IconProp
  url: string
}

interface IProps {
  name: string
  username: string
  description: string
  language: string
  affiliation: string
  affiliationURL?: string
  social_media: ISocial[]
  colorScheme?: string
}

export const VTuber = (props: IProps) => {
  const {
    name,
    username,
    description,
    language,
    affiliation = 'Independent',
    affiliationURL,
    social_media,
    colorScheme = '45, 44, 63',
  } = props

  return (
    <div
      className="vtuber"
      style={{
        background: `linear-gradient(45deg, rgba(${colorScheme}, 0.15) 0%,rgba(255, 255, 255, 0.15) 100%),rgb(45, 44, 63)`,
      }}
    >
      <div className="header">
        <img src={`/img/header/${username}.webp`} alt={username} loading="lazy" />
      </div>

      <div className="avatar">
        <img src={`/img/avatar/${username}.webp`} alt={username} loading="lazy" />
      </div>

      <div
        className="language"
        style={{
          backgroundColor: `rgba(${colorScheme}, 1)`,
        }}
      >
        {language}
      </div>

      <div className="social_media">
        {social_media.map((media, index) => (
          <Icon key={index} icon={media.icon} remote={media.url} size={26} />
        ))}
      </div>

      <div className={`name ${fontJP.className}`}>{name}</div>

      <div className={`affiliation ${fontJP.className}`}>
        {affiliation !== 'Independent' ? (
          <a href={affiliationURL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faBuildingUser} width={24} height={24} />
            {affiliation}
          </a>
        ) : null}
      </div>

      <div className="description">{description}</div>
    </div>
  )
}
