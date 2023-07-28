'use client'

import '@/scss/components/filter/globalsearch.scss'

import React, { useState, useEffect, useRef } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { Categories, Global } from '@/data/Categories/index'

import { IVTuber } from '@/data/Categories/Types'

import { Search } from './Search'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const GlobalSearch: React.FC = () => {
  const [searchInput, setSearchInput] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const searchResultsRef = useRef<HTMLDivElement>(null)

  const handleQueryFilter = (query: string) => {
    setSearchInput(query.toLowerCase())
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target as Node)
      ) {
        setSearchInput('') // Clear search input when clicked outside
      }
    }

    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const getCategoryType = (vtuber: IVTuber): string | undefined => {
    for (const category of Categories) {
      if (category.list?.includes(vtuber)) {
        return category.type
      }
    }
    return undefined
  }

  return (
    <div className="global-search">
      <div className="search-input">
        <FontAwesomeIcon icon={faMagnifyingGlass} width={12} />
        <Search
          queryFilter={handleQueryFilter}
          overrideText="Search"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          hideButton={true}
        />
      </div>

      {searchInput !== '' && (
        <div className="search-results" ref={searchResultsRef}>
          {searchResults.map((vtuber) => (
            <Link key={vtuber.name} href={'/u/' + vtuber.username}>
              <div className="vtuber-card-row">
                <Image
                  src={`/img/avatar/${getCategoryType(vtuber)}/${
                    vtuber.username
                  }.webp`}
                  alt={vtuber.name}
                  loading="lazy"
                  draggable={false}
                  width={65}
                  height={65}
                />
                <div className="vtuber-row-info">
                  <h2>{vtuber.name}</h2>
                  <p>#{getCategoryType(vtuber)}</p>
                </div>
                <div
                  className="vtuber-card-bg"
                  style={{
                    backgroundImage: `url(/img/header/${getCategoryType(
                      vtuber
                    )}/${vtuber.username}.webp)`,
                    backgroundSize: 'cover',
                  }}
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
