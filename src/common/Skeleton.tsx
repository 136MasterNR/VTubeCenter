import '@/scss/components/skeleton.scss'

import React from 'react'

interface IProps {
  height: number
  width: number
}

export const Skeleton = ({ height, width }: IProps) => {
  return <div id="skeleton" style={{ height: height, width: width }}></div>
}
