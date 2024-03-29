import '@/scss/vtubers.scss'

import React from 'react'

import { Categories } from '@/data/Categories'
import { CategoryPage } from '@/components'

interface IProps {
  params: {
    slug: string[]
  }
}

async function getCategoryFromParams(params: IProps['params']) {
  const slug = params?.slug?.join('/')
  const category = Categories.find((category) => category.type === slug)

  return category || null
}

export const runtime = 'edge'

export async function generateStaticParams(): Promise<IProps['params'][]> {
  return Categories.map((category) => ({
    slug: category.type.split('/'),
  }))
}

export default async function Page({ params }: IProps) {
  const category = await getCategoryFromParams(params)

  if (!category) {
    return <h2>not found</h2>
  }

  return (
    <main>
      {category.list ? (
        <CategoryPage key={category.type} content={category.list} />
      ) : null}
    </main>
  )
}
