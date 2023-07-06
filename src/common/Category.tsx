'use client'

import React, { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { IVTuber } from '@/data/categories/types'

import { VTuber, Header } from '@/common'

interface IProps {
  content: IVTuber[]
}

export default function CategoryPage({ content }: IProps) {
  const [filteredContent, setFilteredContent] = useState(content)

  const queryFilter = (query: string) => {
    const filtered = content.filter((vtuber) =>
      vtuber.name.toLowerCase().includes(query.toLowerCase())
    )

    setFilteredContent(filtered)
  }

  return (
    <div>
      <Header queryFilter={queryFilter} />
      <main className="list">
        {filteredContent.length === 0 ? (
          <h2>Nope, there is nothing to show!</h2>
        ) : (
          filteredContent.map((vtuber) => (
            <AnimatePresence key={vtuber.username} mode="wait">
              <motion.div
                initial="initialState"
                animate="animateState"
                exit="exitState"
                variants={{
                  initialState: {
                    opacity: 0,
                    translateY: -25,
                  },
                  animateState: {
                    opacity: 1,
                    translateY: 0,
                  },
                  exitState: {
                    opacity: 0,
                    translateY: 25,
                  },
                }}
                transition={{
                  duration: 0.1,
                }}
              >
                <VTuber key={vtuber.username} {...vtuber} />
              </motion.div>
            </AnimatePresence>
          ))
        )}
      </main>
    </div>
  )
}
