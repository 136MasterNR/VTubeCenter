'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link'

interface Props {
  icon: IconProp
  remote: string
  size?: number
}

export const Icon = ({ icon, remote, size }: Props) => {
  return (
    <Link draggable={false} href={remote} className="icon-link" target="_blank">
      <FontAwesomeIcon style={{ width: size, height: size }} icon={icon} />
    </Link>
  )
}