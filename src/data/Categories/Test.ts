import { IVTuber } from './Types'

import { rgb } from 'polished'

import { faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons'

export const Test: IVTuber[] = [
    {
        name: 'Ren Inu',
        username: 'kawaiinuren',
        description: 'No description provided.',
        language: 'English',
        colorScheme: rgb(254, 173, 172),
        social_media: [
            {
                icon: faTwitch,
                url: 'https://www.twitch.tv/kawaiinuren',
            },
            {
                icon: faTwitter,
                url: 'https://twitter.com/kawaiinuren',
            },
        ],
    },
    {
        name: 'Ren Inu (Test)',
        username: 'kawaiinuren',
        description: 'No description provided.',
        language: 'English',
        colorScheme: rgb(254, 173, 172),
        social_media: [
            {
                icon: faTwitch,
                url: 'https://www.twitch.tv/kawaiinuren',
            },
            {
                icon: faTwitter,
                url: 'https://twitter.com/kawaiinuren',
            },
        ],
    },
]
