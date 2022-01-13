import React from 'react'
import {motion} from 'framer-motion'

export default function Contact() {
  return (
    <motion.h1
      aria-label="heading"
      className="flex h-1/2 overflow-hidden"
      animate={{x: 0, y: '0', opacity: 1}}
      initial={{x: 0, y: '100vh', opacity: 0}}
      transition={{
        x: {type: 'spring', stiffness: 100},
        default: {duration: 0.5},
      }}
      exit={{x: 0, y: '100vh', opacity: 0}}
    >
      Contact information coming soon.
    </motion.h1>
  )
}
