import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type Social = {
  icon: IconProp
  url: string
}

export type IVTuber = {
  name: string
  username: string
  description: string
  language: string
  affiliation?: string
  affiliationURL?: string
  colorScheme?: string
  featured?: boolean
  social_media: Social[]
}
