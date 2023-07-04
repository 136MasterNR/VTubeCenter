'use client'

import React, { useState, KeyboardEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface Props {
  queryFilter: (query: string) => void
  category?: string
}

export function Search({ category, queryFilter }: Props) {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    queryFilter(query)
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        handleSearch();
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder={'Search in #' + category}
        className="inner-searchbar"
        maxLength={24}
        autoFocus={true}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button aria-label="Search" onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} width={20} height={20} />
      </button>
    </div>
  )
}
