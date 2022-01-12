import React from 'react'
import {useNavigate} from 'react-router-dom'
import kalijonnImage from './kalijonn.png'

export default function Landing() {
  const navigate = useNavigate()
  return (
    <div className="flex h-1/2">
      <div className="font-bodoni w-1/2 flex flex-col justify-center">
        <h1 className="font-bold text-5xl my-10 leading-none">
          <span className="text-cyan-500">Hi! I'm Kali.</span> I'm passionate
          about all things Typescript.
        </h1>
        <p className="font-sans">And maybe Javascript.</p>
        <div>
          <button
            className="py-2 px-3 my-5 mr-5 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-cyan-500/50 focus:outline-none font-sans"
            onClick={() => {
              navigate('/contact')
            }}
          >
            Contact Me!
          </button>
          <button className="py-2 px-3 my-5 text-sm font-semibold rounded-md font-sans underline">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img
          src={kalijonnImage}
          alt="Kali's headshot"
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  )
}
