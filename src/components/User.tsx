
'use client'

import '@/scss/user.scss'

import React, { useState } from 'react'
import Image from 'next/image'

import Link from 'next/link'

interface IProps {
  info: any
}

export function UserPage({ info }: IProps) {
  const [profileSrc, setProfileSrc] = useState(`/img/model/doggirls/${info.username}.webp`);

  return  (
    <>
    <div className='profile'>
      <div className='name'>
        {info.name}
      </div>
      <div className='description'>{info.description}</div>
      <img src={profileSrc} alt={info.name} onError={() => setProfileSrc('/img/model/doggirls/unknown.webp')} />
    </div>
    </>
  )
}
