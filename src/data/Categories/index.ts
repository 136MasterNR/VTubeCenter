import { IVTuber } from './Types'

import { Doggirls } from './Doggirls'
import { Catgirls } from './Catgirls'

interface Category {
  type: string
  name: string
  list?: IVTuber[]
  featured: string
  colorScheme: string
}

interface Global {
  list?: IVTuber[]
}

export const Categories: Category[] = [
  {
    type: 'doggirls',
    name: 'doggirls',
    list: Doggirls,
    featured: 'inugami_korone',
    colorScheme: '244, 170, 73',
  },
  {
    type: 'catgirls',
    name: 'catgirls',
    list: Catgirls,
    featured: 'NyanNyanners',
    colorScheme: '174, 96, 193',
  },
]

export const Global: Global = {
  list: [...Doggirls, ...Catgirls],
}
