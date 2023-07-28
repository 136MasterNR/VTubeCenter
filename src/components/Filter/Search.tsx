'use client'

import React, { useState, KeyboardEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface Props {
  queryFilter: (query: string) => void
  category?: string
  onFocus?: () => void
  onBlur?: () => void
  hideButton?: boolean
  overrideText?: string
}

export function Search({
  category,
  queryFilter,
  onFocus,
  onBlur,
  hideButton = false,
  overrideText,
}: Props) {
  const [query, setQuery] = useState('')

  const handleSearch = () => {
    queryFilter(query)
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'Enter':
        handleSearch()
        break
      default:
        break
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
  }

  const handleInputFocus = () => {
    if (onFocus) {
      onFocus()
    }
  }

  const handleInputBlur = () => {
    if (onBlur) {
      onBlur()
    }
  }

  const placeholderText = overrideText ? overrideText : `Search in #${category}`

  return (
    <div>
      <input
        type="text"
        placeholder={placeholderText}
        className="inner-searchbar"
        maxLength={24}
        autoFocus={true}
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {!hideButton && (
        <button aria-label="Search" onClick={handleSearch}>
          <FontAwesomeIcon icon={faSearch} width={22} height={22} />
        </button>
      )}
    </div>
  )
}
