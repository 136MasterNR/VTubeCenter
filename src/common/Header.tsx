"use client"

import '../scss/header.scss'

import React, { useEffect, useState } from 'react';

interface HeaderProps {
  directory?: any,
  children?: React.ReactNode
}

function getPath() {
  const [Dir, setDir] = useState('');

  useEffect(() => {
    let newDir: any = window.location.pathname.split('/').pop();
    newDir ? (setDir(newDir)) : (setDir("doggirls"));
  }, []);

  return Dir;
}

export const Header = (props: HeaderProps) => {
  const {
    directory = getPath()
  } = props

  return (
    <div>
      <header>
        <div className="title">
          <img src="/favicon.ico" width={36} height={36}/>
          <p>/ {directory}</p>
        </div>
        {props.children}
      </header>
    </div>
  )
}
