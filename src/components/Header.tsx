'use client'

import '@/scss/components/header.scss'

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Search } from './Filter/Search'

import { Categories } from '@/data/Categories/index'

interface IProps {
  queryFilter: (query: string) => void
  directory?: any
  dir?: any
  children?: React.ReactNode
}

function getCategory(directory: string, item: string) {
  for (const category of Categories) {
    if (directory === category.type) {
      if (item == 'name') {
        return category.name
      }
      if (item == 'type') {
        return category.type
      }
      if (item == 'featured') {
        return category.featured
      }
      if (item == 'colorScheme') {
        return category.colorScheme
      }
    }
  }
}

function getPath() {
  if (typeof window !== 'undefined') {
    let newDir = window.location.pathname.split('/').pop()
    return newDir ? newDir : 'doggirls'
  } else {
    // Return a default value when running on the server-side
    return 'doggirls'
  }
}

interface ContainerProps {
  $colorScheme?: any
  $background?: string
}

const Container = styled.header<ContainerProps>`
  position: relative;

  &::after {
    background: rgba(${(props) => props.$colorScheme}, 0.85);
  }

  &::before {
    background: linear-gradient(
        180deg,
        rgba(16, 16, 16, 0) 59.38%,
        var(--dark) 100%
      ),
      linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%),
      url(${(props) => props.$background}), lightgray 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

  div.searchbar-content .searchbar button {
    background-color: rgb(${(props) => props.$colorScheme});
  }
`

export const Header = (props: IProps) => {
  const { queryFilter } = props

  const [directory, setDirectory] = useState(getPath())
  const [categoryName, setCategoryName] = useState(
    getCategory(directory, 'name')
  )
  const [categoryType, setCategoryType] = useState(
    getCategory(directory, 'type')
  )
  const [colorScheme, setColorScheme] = useState(
    getCategory(directory, 'colorScheme')
  )
  const [categoryFeatured, setCategoryFeatured] = useState(
    getCategory(directory, 'featured')
  )

  const headerBackground = `/img/header/${categoryType}/${categoryFeatured}.webp`

  useEffect(() => {
    setDirectory(getPath())
  }, [])

  useEffect(() => {
    setCategoryName(getCategory(getPath(), 'name'))
  }, [])

  useEffect(() => {
    setCategoryType(getCategory(getPath(), 'type'))
  }, [])

  useEffect(() => {
    setCategoryFeatured(getCategory(getPath(), 'featured'))
  }, [])

  useEffect(() => {
    setColorScheme(getCategory(getPath(), 'colorScheme'))
  }, [])

  return (
    <div>
      <Container $colorScheme={colorScheme} $background={headerBackground}>
        <div className="header-content">
          <div className="searchbar-content">
            <div className="searchbar">
              <Search queryFilter={queryFilter} category={directory} />
              <div className="hashtags">#{directory}</div>
            </div>
            <div
              className="searchbar-foreground"
              style={{
                background: `linear-gradient(180deg, transparent 75%, rgb(23, 23, 25) 100%), url("/img/model/${categoryType}/${categoryFeatured}.webp") top / cover`,
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}
