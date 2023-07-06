import { IVTuber } from './Types'

import { Doggirls } from './Doggirls'
import { Test } from './Test'

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
        type: 'test',
        name: 'Experimental',
        list: Test,
    },
]

export const Global: Global = {
    list: [...Doggirls, ...Test],
}
