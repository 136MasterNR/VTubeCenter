'use client'

import '@/scss/components/header.scss'

import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

import { Search } from './Filter/Search'

interface IProps {
  queryFilter: (query: string) => void
  directory?: any
  children?: React.ReactNode
}

function getPath() {
  const [Dir, setDir] = useState('')

  useEffect(() => {
    let newDir: any = window.location.pathname.split('/').pop()
    newDir ? setDir(newDir) : setDir('doggirls')
  }, [])

  return Dir
}

export const Header = (props: IProps) => {
  const { directory = getPath(), queryFilter } = props

  const Container = styled.header`
    position: relative;

    &::before {
      background: linear-gradient(180deg, rgba(16, 16, 16, 0) 59.38%, var(--dark) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), url('/img/header/${directory}/inugami_korone.webp'), lightgray 50%;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
    }
  `;

  return (
    <div>
      <Container>
        <div className="header-content">
          <div className="searchbar-content">
            <div className="searchbar">
              <Search queryFilter={queryFilter} category={directory} />
              <div className="hashtags">#{directory}</div>
            </div>
              <div className="searchbar-foreground" style={{
                background: `linear-gradient(180deg, transparent 75%, rgb(23, 23, 25) 100%), url("/img/model/${directory}/inugami_korone.webp") top / cover`,
              }} />
          </div>
        </div>
      </Container>
    </div>
  )
}
