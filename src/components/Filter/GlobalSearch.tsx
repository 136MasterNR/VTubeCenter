'use client'

import '@/scss/components/filter/globalsearch.scss'

import React, { useState } from 'react'

import { Categories, Global } from '@/data/Categories/index'

import { IVTuber } from '@/data/Categories/Types'

import { Search } from './Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const GlobalSearch: React.FC = () => {
    const [searchInput, setSearchInput] = useState('')
    const [isFocused, setIsFocused] = useState(false)

    const handleQueryFilter = (query: string) => {
        setSearchInput(query.toLowerCase()) // I forgot to mention this, having it search in lowercase gives more accurate results. great notes for u 136
    }

    const handleInputFocus = () => {
        setIsFocused(true)
    }

    const handleInputBlur = () => {
        setIsFocused(false)
    }

    const filteredResults: IVTuber[] =
        searchInput !== ''
            ? Global.list?.filter((vtuber) =>
                  vtuber.name.toLowerCase().includes(searchInput)
              ) || []
            : []

    const searchResults: IVTuber[] = filteredResults.slice(0, 5)

    return (
        <div className="global-search">
            <div className="search-input">
                <FontAwesomeIcon icon={faMagnifyingGlass} width={12} />
                <Search
                    queryFilter={handleQueryFilter}
                    overrideText='Search'
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    hideButton={true}
                    autoSearch={true}
                    autoSearchDelay={1}
                />
            </div>

            {isFocused && searchInput !== '' && (
                <div className="search-results">
                    {searchResults.map((vtuber) => (
                        <div key={vtuber.name}>
                            <h2>{vtuber.name}</h2>
                            <p>Category: {getCategoryName(vtuber)}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

const getCategoryName = (vtuber: IVTuber): string | undefined => {
    for (const category of Categories) {
        if (category.list?.includes(vtuber)) {
            return category.name
        }
    }
    return undefined
}
