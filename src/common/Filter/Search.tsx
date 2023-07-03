'use client'

import React, { useState, ChangeEvent } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch,
} from '@fortawesome/free-solid-svg-icons'

interface Props {
  queryFilter: (query: string) => void
}

export function Search({ queryFilter }: Props) {
  const [query, setQuery] = useState('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    setQuery(inputValue);

    queryFilter(inputValue);
  };

  return (
    <>
      <input
        type="text"
        placeholder={`Search in #doggirls`}
        className="inner-searchbar"
        maxLength={24}
        autoFocus={true}
        onChange={handleSearch}
      />
      <button>
        <FontAwesomeIcon icon={faSearch} width={20} height={20} />
      </button>
    </>
  );
}
