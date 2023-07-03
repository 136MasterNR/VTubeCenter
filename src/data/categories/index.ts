import { IVTuber } from "./types"

import { Doggirls } from "./doggirls"
import { Test } from "./test"

interface Category {
  type: string
  name: string
  list?: IVTuber[]
}

export const Categories: Category[] = [
  {
    type: 'doggirls',
    name: 'Doggirls',
    list: Doggirls,
  },
  {
    type: 'test',
    name: 'Experimental',
    list: Test,
  },
]
