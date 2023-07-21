import { IVTuber } from './Types'

import { Doggirls } from './Doggirls'
import { Catgirls } from './Catgirls'

interface Category {
  type: string
  name: string
  list?: IVTuber[]
}

interface Global {
  list?: IVTuber[]
}

export const Categories: Category[] = [
  {
    type: 'doggirls',
    name: 'Doggirls',
    list: Doggirls,
  },
  {
    type: 'catgirls',
    name: 'Catgirls',
    list: Catgirls,
  },
]

export const Global: Global = {
  list: [...Doggirls, ...Catgirls],
}
