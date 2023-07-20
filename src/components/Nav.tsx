import '@/scss/components/nav.scss'

import React from 'react'

import Image from 'next/image'

import { Dropdown, GlobalSearch } from '@/components'

import { NavLinks } from '@/data/Nav'

export const Nav = () => {
  return (
    <nav id="top-nav">
      <div className="nav-content">
        <div className="nav-left">
          <Image src="/favicon.ico" alt="logo" width={30} height={30} />
        </div>
        <div className="nav-right">
          <Dropdown text="Categories">Doggirls , Catgirls</Dropdown>
          {NavLinks.map(({ text, remote }) => (
            <a href={remote}>{text}</a>
          ))}
          <GlobalSearch />
        </div>
      </div>
    </nav>
  )
}
