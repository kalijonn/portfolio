import React from 'react'
import {render} from '@testing-library/react'
import {axe} from 'jest-axe'
import Landing from 'Pages/Landing'
import {MemoryRouter} from 'react-router-dom'

test('landing no violations', async () => {
  const {container} = render(
    <MemoryRouter>
      <Landing />
    </MemoryRouter>,
  )
  const results = await axe(container)
  expect(results).toHaveNoViolations()
  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="flex md:flex-row flex-col-reverse h-1/2"
      >
        <div
          class="flex flex-col md:font-bodoni font-serif md:w-1/2 justify-center z-10"
        >
          <h1
            class="font-bold md:text-5xl text-4xl my-10 md:leading-none leading-relaxed p-1"
            style="opacity: 0; transform: translateX(99.94444vw) translateY(0px) translateZ(0);"
          >
            <span
              class="bg-clip-text bg-cyan-500 md:inline block md:mb-0 mb-4 md:text-5xl text-7xl"
              style="color: rgb(255, 255, 255);"
            >
              Hi! I'm Kali.
            </span>
             
            <span
              style="opacity: 0;"
            >
              I'm passionate about all things
               
              <span
                class="bg-clip-text bg-red-500"
                style="color: rgb(255, 255, 255);"
              >
                Typescript.
              </span>
            </span>
          </h1>
          <p
            class="font-sans"
            style="opacity: 0; transform: translateX(99.94444vw) translateY(0px) translateZ(0);"
          >
            And maybe Javascript.
          </p>
          <div
            style="opacity: 0; transform: translateX(99.94444vw) translateY(0px) translateZ(0);"
          >
            <button
              class="py-2 px-3 my-5 mr-5 text-lg  bg-cyan-500 text-white font-semibold rounded-md shadow-lg shadow-cyan-500/50 focus:outline-none font-sans"
            >
              Contact Me!
            </button>
            <button
              class="py-2 px-3 my-5 text-lg  font-semibold rounded-md font-sans underline"
            >
              Learn More
            </button>
          </div>
        </div>
        <div
          class="hidden md:block"
        >
          <img
            alt="Kali's headshot"
            class="object-cover rounded-lg overflow-hidden h-1/6 w-1/6 border-0 md:w-full md:h-full mx-auto max-w-full"
            src=""
            style="opacity: 0; transform: translateX(-99.94444vw) translateY(0px) translateZ(0);"
          />
        </div>
      </div>
    </div>
  `)
})
