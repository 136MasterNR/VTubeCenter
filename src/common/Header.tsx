"use client"

import { useEffect, useState } from 'react';

interface HeaderProps {
  directory?: any
}

function getPath() {
  const [Dir, setDir] = useState('');

  useEffect(() => {
    let newDir: any = window.location.pathname.split('/').pop();
    newDir ? (setDir(newDir)) : (setDir("Home"));
  }, []);

  return Dir;
}

export const Header = (props: HeaderProps) => {
  const {
    directory=getPath()
  } = props

  return (
    <div>
      <header>
        <h1 className="title">{directory}</h1>
      </header>
    </div>
  )
}
