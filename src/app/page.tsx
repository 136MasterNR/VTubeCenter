import '@/scss/page.scss'

import Link from 'next/link'

export default function Home() {
  return (
    <div className='home'>
      <div className='first-content'>
        <div className='upper'>
          <p>Explore the world of</p>
          <p>VTubers</p>
          <div className='explore'>
            <Link href='/c/doggirls'>
              <div className='btn'>
                <p>Explore</p>
              </div>
            </Link>
          </div>
        </div>
        <div className='showcase'></div>
        <svg width="589" height="785" viewBox="0 0 589 785" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M313.77 58.4608C89.277 -129.575 11.5868 183.403 0.80342 363.397C107.242 1010.89 549.388 731.46 578.054 685.91C606.72 640.359 594.387 293.506 313.77 58.4608Z" fill="white"/>
        </svg>
      </div>
    </div>
  )
}
