import '@/scss/vtubers.scss'
import React from 'react'

import { Global } from '@/data/Categories'

import { UserPage } from '@/components'

interface IProps {
  params: {
    slug: string[]
  }
}

async function getUserFromParams(params: IProps['params']) {
  const slug = params?.slug?.join('/')
  const user = Global.list?.find((vtuber) => vtuber.username === slug)

  return user || null
}

export const runtime = 'edge';

export async function generateStaticParams(): Promise<IProps['params'][]> {
  return (Global.list || []).map((vtuber) => ({
    slug: [vtuber.username],
  }))
}

export default async function Page({ params }: IProps) {
  const user = await getUserFromParams(params)

  if (!user) {
    return <h2>not found</h2>
  }

  return (
    <main>
      <UserPage key={user.username} info={user} />
    </main>
  )
}
