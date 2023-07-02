'use client'

import '@/scss/home.scss'

import React, { useState } from 'react'
import VTubers from '@/data/vtubers'

import { Header, Search, VTuber } from '@/common'

export default function Home() {
  const [filteredVTubers, setFilteredVTubers] = useState(VTubers)

  const queryFilter = (query: string) => {

    const filtered = VTubers.filter((vtuber) =>
      vtuber.username.toLowerCase().includes(query.toLowerCase())
    )

    setFilteredVTubers(filtered)
  }

  return (
    <div>
      <Header />
      <Search queryFilter={queryFilter} />

      <main className="list">
        {filteredVTubers.map((vtuber) => (
          <VTuber key={vtuber.username} {...vtuber} />
        ))}
      </main>
    </div>
  )
}
