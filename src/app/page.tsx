// 'use client'

import Link from "next/link";

// import '@/scss/vtubers.scss'

// import { AnimatePresence, motion } from 'framer-motion'

// import React, { useState } from 'react'
// import { Doggirls } from '@/data/categories/doggirls'

// import { Header, Search, VTuber } from '@/common'

// export default function Home() {
//   const [filteredVTubers, setFilteredVTubers] = useState(Doggirls)

//   const queryFilter = (query: string) => {
//     const filtered = Doggirls.filter((vtuber) =>
//       vtuber.name.toLowerCase().includes(query.toLowerCase())
//     )

//     setFilteredVTubers(filtered)
//   }

//   return (
//     <div>
//       <Header queryFilter={queryFilter} />
//       <main className="list">
//         {filteredVTubers.map((vtuber) => (
//           <AnimatePresence key={vtuber.username} mode="wait">
//             <motion.div
//               initial="initialState"
//               animate="animateState"
//               exit="exitState"
//               variants={{
//                 initialState: {
//                   opacity: 0,
//                   translateY: -25,
//                 },
//                 animateState: {
//                   opacity: 1,
//                   translateY: 0,
//                 },
//                 exitState: {
//                   opacity: 0,
//                   translateY: 25,
//                 },
//               }}
//               transition={{
//                 duration: 0.1,
//               }}
//             >
//               <VTuber key={vtuber.username} {...vtuber} />
//             </motion.div>
//           </AnimatePresence>
//         ))}
//       </main>
//     </div>
//   )
// }

export default function Home() { 
    return (
      <div>
       <h2>use <Link href="/c/doggirls">/c/doggirls</Link></h2>
       <p>or if ur experimental hehe use <Link href="/c/test">/c/test</Link></p>
      </div>
    )
  }