import '@/scss/credits.scss'

import Image from 'next/image'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Credits() {
  return (
    <div className="credits">
      <div className="title">Head Developers</div>
      <div className="people">
        <div className="individual">
          <Image
            src={`https://pbs.twimg.com/profile_images/1500603557929705473/4_WIzwDO_400x400.jpg`}
            alt={`136MasterNR`}
            loading="lazy"
            draggable={false}
            width={128}
            height={128}
          ></Image>
          <div className="about">
            <div className="name">136MasterNR</div>
            <div className="txt">
              Head Concept Designer
              <br />
              Head Back-end Developer
              <br />
              Lead Front-end Developer
              <br />
              <div className="social">
                <Link href={'https://twitter.com/136MasterNR'}>
                  <FontAwesomeIcon icon={faTwitter} width={28} height={19} />
                </Link>
                <Link href={'https://github.com/136MasterNR'}>
                  <FontAwesomeIcon icon={faGithub} width={28} height={19} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="individual">
          <Image
            src={`https://cdn.discordapp.com/avatars/1120045713867423835/ce3594326bebd6ca2afde9a871e2219e.webp`}
            alt={`Naibuu`}
            loading="lazy"
            draggable={false}
            width={128}
            height={128}
          ></Image>
          <div className="about">
            <div className="name">Naibuu</div>
            <div className="txt">
              Head UX & UI Designer
              <br />
              Lead Feature Programmer
              <br />
              Support Front-end Developer
              <br />
              <div className="social">
                <Link href={'https://twitter.com/naibuuhawkwer'}>
                  <FontAwesomeIcon icon={faTwitter} width={28} height={19} />
                </Link>
                <Link href={'https://github.com/Naibuu'}>
                  <FontAwesomeIcon icon={faGithub} width={28} height={19} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
