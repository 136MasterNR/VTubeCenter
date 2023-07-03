'use client'

import '@/scss/vtubers.scss'

import { AnimatePresence, motion } from 'framer-motion'

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
          <AnimatePresence mode="wait">
            <motion.div
              key={vtuber.username}
              initial="initialState"
              animate="animateState"
              exit="exitState"
              variants={{
                initialState: {
                  opacity: 0,
                  translateY: -20,
                },
                animateState: {
                  opacity: 1,
                  translateY: 0,
                },
                exitState: {
                  opacity: 0,
                  translateY: 20,
                },
              }}
              transition={{
                duration: 0.15,
              }}
            >
              <VTuber key={vtuber.username} {...vtuber} />
            </motion.div>
          </AnimatePresence>
        ))}
      </main>
    </div>
  )
}