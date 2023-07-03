'use client'

import '../scss/header.scss'

import React, { useEffect, useState } from 'react'
import { Search } from './Filter/Search'

interface IProps {
  queryFilter: (query: string) => void
  directory?: any
  children?: React.ReactNode,
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

  return (
    <div>
      <header>
        <div className="header-content">
          <div className="header-branding">
            <img src="/favicon.ico" width={36} height={36} />
            <p>/ {directory}</p>
          </div>
          <div className="searchbar-content">
            <Search queryFilter={queryFilter} category={directory}/>
            <div className='hashtags'>
              #{directory}
            </div>
            <div className="searchbar-foreground"></div>
          </div>
        </div>
      </header>
    </div>
  )
}
