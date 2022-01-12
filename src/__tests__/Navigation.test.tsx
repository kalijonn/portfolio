import React from 'react'
import Navigation from 'Components/Navigation'
import {render} from '@testing-library/react'
import {MemoryRouter} from 'react-router-dom'

test('has logo, home and contact as link items', async () => {
  const {getAllByRole} = render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>,
  )
  expect(getAllByRole('listitem').length).toBe(4)
})
