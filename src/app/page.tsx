import '../scss/home.scss'

import VTubers from '../data/vtubers'
import { VTuber } from '@/common/VTuber'
import { Header } from '@/common/Header'


export default function Home(): JSX.Element {
  return (
    <div>
      <Header></Header>
      <main className="list">
        {VTubers.map((vtuber) => (
          <VTuber key={vtuber.username} {...vtuber}/>
        ))}
      </main>
    </div>
  )
}
