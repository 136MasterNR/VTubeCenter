'use client'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import Image from 'next/image'

import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Icon } from './Common/Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingUser, faStar } from '@fortawesome/free-solid-svg-icons'

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
    colorScheme?: string
    featured?: boolean
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
        <div
            className="vtuber"
            style={{
                background: `linear-gradient(45deg, ${colorScheme}30 0%,rgba(255, 255, 255, 0.15) 100%),rgb(45, 44, 63)`,
            }}
        >
            <div className="header">
                <Image
                    src={`/img/header/${username}.webp`}
                    alt={username}
                    loading="lazy"
                    draggable={false}
                    width={435}
                    height={110}
                />
            </div>

            <div className="avatar">
                <Image
                    src={`/img/avatar/${username}.webp`}
                    alt={username}
                    loading="lazy"
                    draggable={false}
                    width={85}
                    height={85}
                />
            </div>

            <div className="badges">
                <div
                    className="language"
                    style={{
                        backgroundColor: `${colorScheme}`,
                    }}
                >
                    {language}
                </div>
                {featured ? (
                    <Tippy content={<>Featured</>} allowHTML={true}>
                        <div
                            className="featured"
                            style={{
                                backgroundColor: `${colorScheme}`,
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faStar}
                                width={19}
                                height={19}
                                color="white"
                            />
                        </div>
                    </Tippy>
                ) : null}
            </div>

            <div className="social_media">
                {social_media.map((media, index) => (
                    <Icon
                        key={index}
                        icon={media.icon}
                        remote={media.url}
                        size={26}
                        aria-label={media.icon}
                    />
                ))}
            </div>

            <div className='name fontSansJP'>{name}</div>

            <div className='affiliation fontSansJP'>
                {affiliation !== 'Independent' ? (
                    <a
                        href={affiliationURL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faBuildingUser}
                            width={19}
                            height={19}
                        />
                        {affiliation}
                    </a>
                ) : null}
            </div>

            <div className="description">{description}</div>
        </div>
    )
}
