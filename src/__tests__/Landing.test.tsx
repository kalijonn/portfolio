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
  expect(container).toMatchSnapshot()
})
