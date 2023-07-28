'use client'

import '@/scss/components/common/dropdown.scss'

import React, { useState, useEffect, useRef } from 'react'

import { motion } from 'framer-motion'

import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IProps {
  children: React.ReactNode
  text: string
  hasIcon?: boolean
  distance?: number
}

export const Dropdown = ({
  children,
  text,
  hasIcon = true,
  distance = 45,
}: IProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div ref={dropdownRef} className="dropdown-wrapper">
      <div
        className={`dropdown-button fontPrimary ${open && 'active'}`}
        onClick={() => setOpen(!open)}
      >
        {text}
        {hasIcon && (
          <FontAwesomeIcon icon={open ? faAngleUp : faAngleDown} width={10} />
        )}
      </div>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            translateY: 25,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          className="dropdown-content"
          style={{ top: distance }}
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}
