import '../scss/home.scss'

import VTubers from '../data/vtubers'
import { VTuber } from '@/common/VTuber'


export default function Home(): JSX.Element {
  return (
    <div>
      <h1 className="title">Virtual Doggirls</h1>

      <main className="list">
        {VTubers.map((vtuber) => (
          <VTuber key={vtuber.username} {...vtuber}/>
        ))}
      </main>
    </div>
  )
}
