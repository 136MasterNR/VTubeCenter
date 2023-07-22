import { IVTuber } from './Types'

import { Doggirls } from './Doggirls'
import { Catgirls } from './Catgirls'
import { Foxgirls } from './Foxgirls'

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
    name: 'Doggirls',
    list: Doggirls,
    featured: 'inugami_korone',
    colorScheme: '244, 170, 73',
  },
  {
    type: 'catgirls',
    name: 'Catgirls',
    list: Catgirls,
    featured: 'NyanNyanners',
    colorScheme: '174, 96, 193',
  },
  {
    type: 'foxgirls',
    name: 'Foxgirls',
    list: Foxgirls,
    featured: 'anny',
    colorScheme: '230, 185, 186',
  },
]

export const Global: Global = {
  list: [...Doggirls, ...Catgirls],
}
