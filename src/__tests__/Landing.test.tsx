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
})

test('landing to have correct text', () => {
  const {getByRole} = render(
    <MemoryRouter>
      <Landing />
    </MemoryRouter>,
  )
  expect(getByRole('heading')).toHaveTextContent(
    "Hi! I'm Kali. I'm passionate about all things Typescript.",
  )
})
