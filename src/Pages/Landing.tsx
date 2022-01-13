import React from 'react'
import {useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
import kalijonnImage from './kalijonn.png'

export default function Landing() {
  const navigate = useNavigate()
  return (
    <motion.div className="flex md:flex-row flex-col-reverse h-1/2">
      <div className="flex flex-col md:font-bodoni font-serif md:w-1/2 justify-center z-10">
        <motion.h1
          className="font-bold md:text-5xl text-4xl my-10 md:leading-none leading-relaxed p-1"
          animate={{x: 0, y: 0, opacity: [0, 0, 0, 0, 1]}}
          initial={{x: '100vw', y: 0, opacity: 0}}
          transition={{default: {duration: 1}}}
          exit={{x: '100vw', y: 0, opacity: [1, 0, 0, 0, 0]}}
        >
          <motion.span
            animate={{
              color: 'rgba(255,255,255,0)',
            }}
            initial={{color: 'rgba(255,255,255,1)'}}
            transition={{default: {duration: 1.5}, delay: 1}}
            exit={{background: 'black'}}
            className="bg-clip-text bg-cyan-500 md:inline block md:mb-0 mb-4 md:text-5xl text-7xl"
          >
            Hi! I'm Kali.
          </motion.span>{' '}
          <motion.span
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{default: {duration: 1.5}, delay: 1}}
          >
            I'm passionate about all things{' '}
            <motion.span
              animate={{
                color: 'rgba(255,255,255,0)',
              }}
              initial={{color: 'rgba(255,255,255,1)'}}
              transition={{default: {duration: 1.5}, delay: 1}}
              exit={{background: 'black'}}
              className="bg-clip-text bg-red-500"
            >
              Typescript.
            </motion.span>
          </motion.span>
        </motion.h1>
        <motion.p
          className="font-sans"
          animate={{x: 0, y: 0, opacity: [0, 0, 0, 0, 1]}}
          initial={{x: '100vw', y: 0, opacity: 0}}
          transition={{default: {duration: 1}}}
          exit={{x: '100vw', y: 0, opacity: [1, 0, 0, 0, 0]}}
        >
          And maybe Javascript.
        </motion.p>
        <motion.div
          animate={{x: 0, y: 0, opacity: [0, 0, 0, 0, 1]}}
          initial={{x: '100vw', y: 0, opacity: 0}}
          transition={{default: {duration: 1}}}
          exit={{x: '100vw', y: 0, opacity: [1, 0, 0, 0, 0]}}
        >
          <button
            className="py-2 px-3 my-5 mr-5 text-lg  bg-cyan-500 text-white font-semibold rounded-md shadow-lg shadow-cyan-500/50 focus:outline-none font-sans"
            onClick={() => {
              navigate('/contact')
            }}
          >
            Contact Me!
          </button>
          <button className="py-2 px-3 my-5 text-lg  font-semibold rounded-md font-sans underline">
            Learn More
          </button>
        </motion.div>
      </div>
      <div className="hidden md:block">
        <motion.img
          src={kalijonnImage}
          alt="Kali's headshot"
          className="object-cover rounded-lg overflow-hidden h-1/6 w-1/6 border-0 md:w-full md:h-full mx-auto max-w-full"
          animate={{x: 0, opacity: [0, 0, 0, 0, 1]}}
          initial={{x: '-100vw', y: 0, opacity: 0}}
          transition={{default: {duration: 1}}}
          exit={{x: '-100vw', y: 0, opacity: [1, 0, 0, 0, 0]}}
        />
      </div>
    </motion.div>
  )
}
