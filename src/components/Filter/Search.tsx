'use client'

import React, { useState, useEffect, KeyboardEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface Props {
    queryFilter: (query: string) => void
    category?: string
    onFocus?: () => void
    onBlur?: () => void
    hideButton?: boolean
    autoSearch?: boolean
    autoSearchDelay?: number
    overrideText?: string
}

export function Search({
    category,
    queryFilter,
    onFocus,
    onBlur,
    hideButton = false,
    autoSearch = false,
    autoSearchDelay = 5,
    overrideText,
}: Props) {
    const [query, setQuery] = useState('')
    const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(
        null
    )

    useEffect(() => {
        return () => {
            if (searchTimeout) {
                clearTimeout(searchTimeout)
            }
        }
    }, [searchTimeout])

    const handleSearch = () => {
        queryFilter(query)
    }

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (autoSearch) {
            handleSearch()
        } else {
            switch (e.key) {
                case 'Enter':
                    handleSearch()
                    break
                default:
                    break
            }
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
    
        if (autoSearchDelay > 0) {
            if (searchTimeout) {
                clearTimeout(searchTimeout);
            }
    
            setSearchTimeout(
                setTimeout(() => {
                    handleSearch();
                }, autoSearchDelay)
            );
        }
    };

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
                    <FontAwesomeIcon icon={faSearch} width={20} height={20} />
                </button>
            )}
        </div>
    )
}
