import React from 'react'

interface IProps {
  name: string
}

export function UserPage({ name }: IProps) {
  return <h1>{name}</h1>
}
