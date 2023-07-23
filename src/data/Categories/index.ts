import { IVTuber } from './Types'

import { Doggirls } from './Doggirls'
import { Catgirls } from './Catgirls'
import { Foxgirls } from './Foxgirls'
import { Froggirls } from './Froggirls'
import { Humangirls } from './Humangirls'

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
    colorScheme: '245, 170, 75',
  },
  {
    type: 'catgirls',
    name: 'Catgirls',
    list: Catgirls,
    featured: 'NyanNyanners',
    colorScheme: '175, 110, 200',
  },
  {
    type: 'foxgirls',
    name: 'Foxgirls',
    list: Foxgirls,
    featured: 'anny',
    colorScheme: '230, 180, 180',
  },
  {
    type: 'froggirls',
    name: 'Froggirls',
    list: Froggirls,
    featured: 'amiamami',
    colorScheme: '102, 100, 194',
  },
  {
    type: 'humangirls',
    name: 'Humangirls',
    list: Humangirls,
    featured: '',
    colorScheme: '200, 200, 200',
  },
]

export const Global: Global = {
  list: [...Doggirls, ...Catgirls, ...Foxgirls, ...Froggirls, ...Humangirls],
}
