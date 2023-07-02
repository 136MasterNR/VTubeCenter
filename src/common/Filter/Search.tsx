import React, { useState, ChangeEvent } from 'react';

interface Props {
  queryFilter: (query: string) => void;
}

export function Search({ queryFilter }: Props) {
  const [query, setQuery] = useState('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    setQuery(inputValue);
    
    queryFilter(inputValue);
  };

  return (
    <input
      type="text"
      placeholder="Search"
      className="inner-searchbar"
      onChange={handleSearch}
    />
  );
}
