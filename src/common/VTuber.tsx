"use client"

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Tooltip, red } from "@nextui-org/react";

import Icon from '../common/Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuildingUser,
  faStar,
} from '@fortawesome/free-solid-svg-icons'

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
  affiliation?: string
  affiliationURL?: string
  featured?: boolean
  colorScheme?: string
  social_media: ISocial[]
}

export const VTuber = (props: IProps) => {
  const {
    name,
    username,
    description,
    language,
    affiliation = 'Independent',
    affiliationURL,
    featured = false,
    colorScheme = '45, 44, 63',
    social_media,
  } = props

  return (
    <div className="vtuber"
      style={{
        background: `linear-gradient(45deg, rgba(${colorScheme}, 0.2) 0%,rgba(255, 255, 255, 0.15) 100%),rgb(45, 44, 63)`,
      }}
    >
      <div className="header">
        <img src={`/img/header/${username}.webp`} alt={username} loading="lazy" />
      </div>

      <div className="avatar">
        <img src={`/img/avatar/${username}.webp`} alt={username} loading="lazy" />
      </div>

      <div className="badges">
        <div className="language"
          style={{
            backgroundColor: `rgba(${colorScheme}, 1)`,
          }}
        >
          {language}
        </div>
          <div className="featured"
            style={{
              backgroundColor: `rgba(${colorScheme}, 1)`,
            }}
          >
            <Tooltip content={"Featured"}
                animated={true}
                hideArrow={false}
                trigger="hover"
                color={'invert'}
                placement="top"
            >
              {featured ? (
                <>
                  <FontAwesomeIcon icon={faStar} width={25} height={25} color='white' />
                </>
              ) : null}
            </Tooltip>
          </div>
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
